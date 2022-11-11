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
const Div=styles.div`
width: 100%;
display:flex;
`
const First=styles.div`
display:inline-block;
background-color:#1c539b;
width:50%;
margin-left:5%;
margin-top:5%;
`
const Second=styles.div`
display:inline-block;
color:black !important;
width:50%;
margin-left:5%;
margin-top:5%;
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
      {dataField:"idSousMission",text:"N° Operation"},
      {dataField:"datec",text:"Date Création"},
      {dataField:"gasoil",text:"Frais Gasoil"},
      {dataField:"taxi",text:"Frais Taxi"},
      {dataField:"repas",text:"Frais Repas"},
      {dataField:"hotel",text:"Frais Hotel"},
      {dataField:"parking",text:"Frais Parking"},
      {dataField:"divers",text:"Frais Divers"},
      {dataField:"achTech",text:"Frais Achat/Tech"},
      {dataField:"totalSm",text:"Total Frais"},
    
  ]
  return (
   <Div>
   <First>
   <Div1 inline>
    <LabelM>Projet Mission</LabelM>
    <InputM value={details.idMission} disabled></InputM>
   </Div1>
   </First>
    <Second>
    <H1>Depenses effectuées sur la Mission N° {id}</H1>
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