import React from 'react'
import styles from "styled-components";
import "./modal.css";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
const Div=styles.div`
margin-top:220px;
margin-left:54px;
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
        axios.get(`https://localhost:7111/api/GetAllPerformedOperationsOfaGivenMission/${id}`).then((response) => {
            setData(response.data)
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
    <H1>Depenses effectuées sur la Mission N° {id}</H1>
    <BootStrapTable      
     keyField='idSBc'
     data={data}
     columns={columns}
     pagination={paginationFactory()}  
     ></BootStrapTable>
  </Div>
  )
}

export default DetailsMs