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
import { Div1, H1, InputM, LabelM } from './StyleMsC';
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
    <H1>Liste des Sous Mission de la Mission N° {id}</H1>
    <Swiper
        slidesPerView={1}
        spaceBetween={50}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((d)=>(
        <DivSwiper key={d.idSousMission}> 
        
       <SwiperSlide>
       <Div1 inline>
            <LabelM l color="true" >Numero sous Mission:</LabelM>
            <p>{d.idSousMission}</p> 
       </Div1>
        <Div1 inline>
            <LabelM l color="true">Projet :</LabelM>
            <p> {d.projet}</p> 
         </Div1>
         <Div1 inline>
            <LabelM l color>Date Départ :</LabelM>
            <p> {d.dateDepart}</p> 
         </Div1>
         <Div1 inline>
            <LabelM l color>Date Retour :</LabelM>
            <p> {d.dateRetour}</p> 
         </Div1>
         <Div1 inline>
            <LabelM l color>Durée Intervention :</LabelM>
            <p> {d.dureeIntervention}</p> 
         </Div1>
         <Div1 inline>
            <LabelM l color>Lieu :</LabelM>
            <p> {d.lieu}</p> 
         </Div1>
         <Div1 inline>
            <LabelM l color>Nature Intervention :</LabelM>
            <p> {d.nature}</p> 
         </Div1>
            </SwiperSlide></DivSwiper>))}
     
      </Swiper>
  </Divv>
  )
}

export default DetailsMs