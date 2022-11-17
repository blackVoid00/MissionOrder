import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import { useParams } from 'react-router-dom';
import moment from 'moment'
import {AiOutlineCheck} from 'react-icons/ai'
import {GiReceiveMoney,GiPayMoney} from 'react-icons/gi'
import { IconContext } from 'react-icons/lib';

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
console.log(T)
const columns=[
  {dataField:"dateCreation",text:"Date Creation",formatter : (row,cellContent)=>{
    return moment(cellContent.dateCreation).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
  }},
    {dataField:"idBc",text:"N° Bon caisse"},
    {dataField:"sommeCredit",text:"Total Crédit"},
    {dataField:"sommeDebit",text:"Total Rendu"},
    {dataField:"sommeDepense",text:"Total Dépenses"},
    {dataField:"solde",text:"Solde"},
    {dataField:"solde",text:"Etat",formatter: (cellContent ,row) => {
      if ( row.solde < 0) {
        return (
           <IconContext.Provider value={{ color: '#FF8C00',size:"20px" }}> 
          <GiPayMoney/>
           </IconContext.Provider>
        )
      }if(row.solde >0){
        return (
           <IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}> 
           <GiReceiveMoney/>
           </IconContext.Provider>
        )
      }if(row.solde==0){
        return(
          <IconContext.Provider value={{ color: 'green',size:"20px" }}> 
          <AiOutlineCheck/>
          </IconContext.Provider>
         
        ) 
      }
        
  }}
]
  return (



   <div style={{marginLeft: '100px',marginTop: '100px'}}>
        <BootStrapTable      
        keyField='idBc'
        data={T}
        columns={columns}
        pagination={paginationFactory()} 
        headerClasses="header-class"
        rowClasses="row-class" 
        ></BootStrapTable> 
    </div> 
    
//         <Table bordered hover size="xl">
//           <tbody>
//          <tr>
//           <th>N° Bon caisse</th>
//           <th>Crédit Total</th>
//           <th>Total Rendu</th>
//           <th>Total Dépense</th>
//           <th>Solde</th>
//         </tr>
//     {T.map((d)=>
//           <tr key={d.idBc}>
//           <td>{d.idBc}</td>
//           <td>{d.sommeCredit}</td>
//           <td>{d.sommeDebit}</td>
//           <td>{d.sommeDepense}</td>
//           <td>{d.solde}</td>
//           </tr>
//  )}</tbody>
 
//  </Table> 
  );
};
export default DetailsCU;