import React ,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import styles from 'styled-components'
import icon from '../assets/iconUser.png'
import './modal.css'
import { useParams } from 'react-router-dom';
const Button=styles.button`
border-width: 0px;
border-style: solid;
font-weight:bold !important;
margin-right: 15px;
margin-top:50px;
margin-bottom:50px;
background-color:#B0C4DE ;
height:30px;
width:200px;
text-align:center !important;
cursor:pointer;
&:focus{
outline: none  !important;
}
`
const P=styles.p`
margin-left:15px;
color:black !important;
text-align: left !important;
`
const Card= styles.div`
display:inline-block;
margin-left:150px;
margin-top:50px;
`
const Image= styles.img`
width:150px;
height:150px;
`

const DetailsCU = () => {
    // const [users,setUsers]=useState([])
    // const url="https://localhost:7111/api/Utilisateurs"
    // useEffect(() => {
    // axios.get(url).then((response) => {
    // setUsers(response.data)
    
    //     })
    //  })
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
        <Table bordered hover size="xl">
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

  // <Swiper
    //   spaceBetween={30}
    //   slidesPerView={1}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   className=".swiper"
    // >
     
         
    //   {users.map((user) =>{
    //             return(
                  
    //              <SwiperSlide className='.swiper-slide'>
    //               <Card>
    //               <Image src={icon}></Image>
    //               <P key={user.idUser}>{user.nom} {user.prenom}</P>
    //               <Button>Check</Button>
    //               </Card>
    //               </SwiperSlide>
               
               
    //         )})}
     
   
    // </Swiper>
  );
};
export default DetailsCU;