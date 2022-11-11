import React from 'react'
import styles from "styled-components";
import "./modal.css";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import { Div1, InputM, LabelM } from './StyleMsC';
import moment from 'moment';
const Div=styles.div`
width: 100%;
display:flex;
`
const First=styles.div`
background-color:#1c539b;
width:350px;
height:auto;
margin-left:2%;
margin-top:5%;
padding:20px;
justify-content:align-center;
`
const Second=styles.div`
display:inline-block;
color:black !important;
margin-left:5%;
margin-top:5%;
width:900px;
`
const H1=styles.h1`
color:black;
font-weight:bold !important;
font-size:20px !important;
width:100% !important;
`
const Title=styles.p`
text-align:left;
font-weight:bold !important;
font-size:15px !important;
`
const P =styles.p`
text-align:left;
margin-left:20px;
`

const DetailsMs = () => {
    
    const {id}=useParams()
    const [data,setData]=useState([])
    const [details,setDetails]=useState([])
    useEffect(()=>{
        axios.get(`https://localhost:7111/api/GetAllPerformedOperationsOfaGivenMission/${id}`).then((response) => {
            setData(response.data)
        })
    })
   useEffect(()=>{
    axios.get(`https://localhost:7111/api/Missions/${id}`).then((response) => {
      setDetails(response.data)
    })
   })
    const columns=[
      {dataField:"idSousMission",text:"Operation"},
      {dataField:"datec",text:"Date ",formatter:
       (row,cellContent)=>{
        return moment(cellContent.datec).format("YYYY-MM-DDThh:mm:ss").split("T")[0]
       }
    },
      {dataField:"gasoil",text:"Gasoil"},
      {dataField:"taxi",text:"Taxi"},
      {dataField:"repas",text:"Repas"},
      {dataField:"hotel",text:"Hotel"},
      {dataField:"parking",text:"Parking"},
      {dataField:"divers",text:"Divers"},
      {dataField:"achTech",text:"Achat/Tech"},
      {dataField:"totalSm",text:"Frais"},
    
  ]
  var dateD=moment(details.dateD).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
  var dateR=moment(details.dateR).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
  return (
   <Div>
   <First>
   <Div1 >
    <Title>N° Mission :</Title>
    <P>{details.numeroMission}</P>
   </Div1>
   <Div1 >
    <Title>Nom :</Title>
    <P> {details.nomUser} </P>
   </Div1>
   <Div1 >
    <Title>Prénom :</Title>
    <P>{details.prenomUser} </P>
   </Div1>
   <Div1 >
    <Title>Nature Mission :</Title>
    <P>{details.nature}</P>
   </Div1>
   <Div1 >
    <Title>Date Départ  :</Title>
    <P>{
    dateD} </P>
   </Div1>
   <Div1 >
    <Title>Heure Départ :</Title>
    <P>{details.heureDepart}</P>
   </Div1>
   <Div1 >
    <Title>Date Retour : </Title>
    <P> {dateR} </P>
   </Div1>
   <Div1 >
    <Title>Heure Retour :</Title>
    <P> {details.heureRetour} </P>
   </Div1>
   <Div1 >
    <Title>Lieu :</Title>
    <P>{details.lieu}</P>
   </Div1>
   <Div1 >
    <Title>Vehicule :</Title>
    <P>{details.vehicule} </P>
   </Div1>
   <Div1 >
    <Title>Accompagné par : </Title>
    <P> {details.accompagne}</P>
   </Div1>

   </First>
    <Second>
    <H1>Depenses effectuées sur la Mission N° {id} :</H1>
    <br></br>
    <BootStrapTable      
     keyField='idSBc'
     data={data}
     columns={columns}
     pagination={paginationFactory()} 
     condensed 
     ></BootStrapTable>
    </Second>
    
  </Div>
  )
}

export default DetailsMs