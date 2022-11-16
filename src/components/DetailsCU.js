import React ,{useState,useEffect} from 'react'
import 'swiper/css';
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import './modal.css'
import { useParams } from 'react-router-dom';

const DetailsCU = () => {
 
    const {id}=useParams();
   
    const [CreditDebit,setCreditDebit]=useState([])
    const [Depense,setTotalDepense]=useState([])


    useEffect(() => {
      axios.get(`https://localhost:7111/api/GetDebitCreditTotal/${id}`).then((response) => {
        setCreditDebit(response.data)
       });
       axios.get(`https://localhost:7111/api/GetDepenseTotal/${id}`).then((response) => {
        setTotalDepense(response.data)
       });
       
   })
   const T= CreditDebit.map( c => {
    const matched = Depense.find(d => c.idBc === d.idBc)
               return {...c,...matched,solde:Number(c.sommeCredit)-(Number(matched?.sommeDepense) + Number(c.sommeDebit))}
   
  }
)
   
  return (
    <div className='MainDiv'>
        <Table striped>
          <tbody>
         <tr>
          <th>N° Bon caisse</th>
          <th>Crédit Total</th>
          <th>Total Rendu</th>
          <th>Total Dépense</th>
          <th>Solde</th>
        </tr>
    {T.map((d)=>
          <tr key={d.idBc}>
          <td>{d.idBc}</td>
          <td>{d.sommeCredit}</td>
          <td>{d.sommeDebit}</td>
          <td>{d.sommeDepense}</td>
          <td>{d.solde}</td>
          </tr>
 )}</tbody>
 
 </Table> 
 </div>
  
  );
};
export default DetailsCU;