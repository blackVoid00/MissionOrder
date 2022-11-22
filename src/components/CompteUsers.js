import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import styles from 'styled-components'
import icon from '../assets/iconUser.png'
import {useNavigate} from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "./swiper.css"
import { IconContext } from 'react-icons'
import {FcSearch} from 'react-icons/fc'


const Button=styles.button`
border-width: 0px;
border-style: solid;
font-weight:bold !important;
background-color:transparent;
height:30px;
width:200px;
text-align:center !important;
cursor:pointer;
&:focus{
outline: none  !important;
}
margin-bottom:40px;

`
const P=styles.p`
text-align:center;
padding-top:50px;
padding-left:60px;
margin-right:50px;
color:#1c539b; !important;
text-align: left !important;
font-weight:bold;
font-size:20px;
`
const Card= styles.div`
display:inline-block;
margin-top:20px;
margin-bottom:20px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; 
`
const Image= styles.img`
width:150px;
height:150px;
margin-top:40px;

`



const CompteUsers = () => {
    const [users,setUsers]=useState([])
  //   const [CreditDebit,setCreditDebit]=useState([])
  //   const [Depense,setTotalDepense]=useState([])
  //   const T= CreditDebit.map( c => {
  //     const matched = Depense.find(d => c.idBc === d.idBc)
  //                return {...c,...matched,solde:Number(c.sommeCredit)-(Number(matched?.sommeDepense) + Number(c.sommeDebit))}
     
  //   }
  // )

  //   const [show,setShow] = useState(false)
  //   const [p,setP]=useState(0)
    const url="https://localhost:7111/api/Utilisateurs"
    
    useEffect(() => {
    axios.get(url).then((response) => {
    setUsers(response.data)

        });
   })
    // const Filter =() => {
    //        axios.get(`https://localhost:7111/api/GetDebitCreditTotal/${p}`).then((response) => {
    //         setCreditDebit(response.data)
    //        });
    //        axios.get(`https://localhost:7111/api/GetDepenseTotal/${p}`).then((response) => {
    //         setTotalDepense(response.data)
    //        });
    //        setShow(true)
    // } 
  const navigate = useNavigate();
   
 
  return (
    <>
        
         {/* <select onChange={(e)=>setP(e.target.value)}>
            {users.map((user)=>{
              return <option key={user.id} value={user.idUser}>{user.nom}</option>
            })}

        </select>  */}
          
        <Swiper   modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="mySwiper"> 
        {users.map((user) =>{
                return(
                  <SwiperSlide >
                  <Card>
                  <Image src={icon}></Image>
                  <P key={user.infoId}>{user.infoNom} {user.infoPrenom}</P>
                  <Button  onClick={()=>navigate(`/cuswipe/${user.infoId}`)} >Consulter &nbsp; <IconContext.Provider value={{size:"20px"}}><FcSearch onClick={()=>navigate(`/cuswipe/${user.infoId}`)}/></IconContext.Provider></Button>
                  </Card>
                </SwiperSlide >
               
            )})} 
        </Swiper>
            
      
         {/* <Button style={{}} onClick={Filter}>Filter</Button>
        {show?
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
 )}</tbody></Table>: <h1>Rien</h1>}  */}
    </>
  )
}

export default CompteUsers