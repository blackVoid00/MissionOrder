import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import styles from "styled-components";
import { Pagination } from "swiper";
import "./modal.css";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import { Div1, LabelM } from './StyleMsC';
const Divv=styles.div`
margin-top:220px;
margin-left:424px;
width:500px;
height:500px;
color:white !important;
`
const DivSwiper=styles.div`
display:inline-block;
color:black !important;
`
const H1=styles.h1`
color:black;
font-weight:bold !important;
font-size:20px !important;
width:100% !important;
`
const DetailsMs = () => {
    
    const {id}=useParams()
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get(`https://localhost:7111/api/GetSubMissionsOfaGivenMission/${id}`).then((response) => {
            setData(response.data)
        })
    })
  return (
   <Divv>
    <H1>Depenses effectuées sur la Mission N° {id}</H1>
  
  </Divv>
  )
}

export default DetailsMs