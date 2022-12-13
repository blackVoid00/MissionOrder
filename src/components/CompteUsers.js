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
import debiteur from '../assets/Debiteur.png'

const Main=styles.div`
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; 
background-color:white;
margin-top: 200px;
display:flex;
width:auto;
margin-bottom:20px;
border:2px solid black;

`
const Button=styles.button`
border-width: 0px;
border-style: solid;
font-weight:bold !important;
background-color:#1c539b;
height:30px;
width:100px;
text-align:center !important;
cursor:pointer;
font-size:13px;
color:white !important;
&:focus{
outline: none  !important;
}
margin-bottom:40px;
margin-top:10px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; 
margin-left:5px;
`
const P=styles.p`
text-align:center;
padding-top:20px;
padding-left:60px;
margin-right:50px;
color:#1c539b !important;
text-align: left !important;
font-weight:bold;
font-size:15px;
`
const Card= styles.div`
display:inline-block;
margin-top:100px;
border:2px solid black;
`
const CardImage= styles.div`
display:inline-block;
margin-top:20px;
margin-bottom:20px;
border:2px solid black;
`
const Image= styles.img`
width:120px;
height:120px;
margin-top:30px;

`



const CompteUsers = () => {
    const [users,setUsers]=useState([])
    const url="https://localhost:7111/api/Utilisateurs"
    
    useEffect(() => {
    axios.get(url).then((response) => {
    setUsers(response.data)

        });
   })
   
  const navigate = useNavigate();
   
 
  return (
    <>
  <Main>
    <CardImage>
    <div>
    <img style={{marginTop: '50px'}} src={debiteur}></img>
  </div>
    </CardImage>
  <Swiper   modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={3}
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
                  <Button  onClick={()=>navigate(`/cuswipe/${user.infoId}`)} >Consulter &nbsp; </Button>
                  </Card>
                </SwiperSlide >
               
            )})} 
        </Swiper>
            
      
  </Main>
     
      
    </>
  )
}

export default CompteUsers