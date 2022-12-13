import React from 'react'
import styles from "styled-components";
import "./modal.css";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import moment from 'moment';
import {AiOutlineMinus} from "react-icons/ai"
import {IconContext} from "react-icons/lib"
const Div=styles.div`
width: auto;
display:flex;
`
const Button=styles.button`
position: relative;
border-width: 0px;
border-style: solid;
font-weight:bold !important;
margin-top:50px;
margin-left:10px;
margin-right:10px;
margin-bottom:50px;
background-color:#B0C4DE ;
height:30px;
width:${props=>props.l ? "50px" : "100px"};
text-align:center !important;
cursor:pointer;
&:focus{
outline: none  !important;
}
`
const First=styles.div`
width:450px;
height:auto;
margin-left:20px;
margin-top:5%;
padding:20px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`
const Div1 =styles.div`
margin-bottom:10px;
display:flex;
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
display:inline-block;
width: 160px;
font-weight:bold !important;
font-size:15px !important;
color:black;
`
const P =styles.input`
justify-content:center;
margin-left:20px;
height:40px;
width:200px;
text-align: left !important;
border: 10px solid transparent  !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
font-weight:bold !important;
color:black !important;
font-size:16px;
background:#F0F0F0;
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
      {dataField:"idDepense",text:"N°Operation",footer:"Total"},
      {dataField:"dateCreation",footer:"",text:"Date ",formatter:
       (row,cellContent)=>{
        return moment(cellContent.datec).format("YYYY-MM-DDThh:mm:ss").split("T")[0]
       }
    },
    {dataField:"typeDepense",text:"Type Dépense",footer:""},
    {dataField:"montantDepense",text:"Montant", footer: columnData => columnData.reduce((acc, item) => acc + item, 0)},
    
  ]
  var dateD=moment(details.dateD).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
  var dateR=moment(details.dateR).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
  return (
   <Div>
   <First>
   <Div1 >
    <Title>N° Mission </Title>
    <P value={details.numeroMission}></P>
   </Div1>
   <Div1 >
    <Title>Nom </Title>
    <P value={details.nomUser}></P>
   </Div1>
   <Div1 >
    <Title>Prénom </Title>
    <P value={details.prenomUser}></P>
   </Div1>
   <Div1 >
    <Title>Nature Mission </Title>
    <P value={details.nature}></P>
   </Div1>
   <Div1 >
    <Title>Date Départ  </Title>
    <P value={dateD}></P>
   </Div1>
   <Div1 >
    <Title>Heure Départ </Title>
    <P value={details.heureDepart}></P>
   </Div1>
   <Div1 >
    <Title>Date Retour  </Title>
    <P value={dateR} ></P>
   </Div1>
   <Div1 >
    <Title>Heure Retour </Title>
    <P value={details.heureRetour}></P>
   </Div1>
   <Div1 >
    <Title>Lieu </Title>
    <P value={details.lieu}></P>
   </Div1>
   <Div1 >
    <Title>Vehicule </Title>
    <P value={details.vehicule}></P>
   </Div1>
   <Div1 >
    <Title>Accompagné par  </Title>
    <P value={details.accompagne}></P>
   </Div1>
   <div style={{display:"flex"}}>
    <Button>Modifier</Button>
    <Button>Valider</Button>
    <Button>Non Valider</Button>
   </div>
   </First>
    <Second>
    <H1>Depenses effectuées sur la Mission N° {id} :</H1>
    <br></br>
    <BootStrapTable      
     keyField='idSBc'
     data={data}
     columns={columns}
     pagination={paginationFactory({
      sizePerPageList: [ {
        text: '5', value: 5
      }, {
        text: '10', value: 10
      }, {
        text: '20', value: 20
      },
      {
        text: '50', value: 50
      },
      {
        text: 'All', value: data.length
      } ], 
   
      withFirstAndLast: false,
      alwaysShowAllBtns: true, 
      hideSizePerPage:true,
      prePageText: 'Prev', 
      nextPageText: 'Next',
    
      
     
    })} 
     headerClasses="header-class"
     rowClasses="row-class" 
     ></BootStrapTable>
    </Second>
    
  </Div>
  )
}

export default DetailsMs