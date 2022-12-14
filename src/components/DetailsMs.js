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
import {FaFileDownload} from "react-icons/fa"
import {IconContext} from "react-icons/lib"
import { ButtonM } from './StyleMsC';
import { Modal } from 'react-bootstrap';
import * as ReactBootstrap from 'react-bootstrap'
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
    const [idDep,setIdDepense]=useState()
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
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = (e) => {
     setShow(true)
     setIdDepense(e)
   };
 const downloadFile=()=>{
  axios.get(`https://localhost:7111/api/Depenses/${idDep}`).then((response)=>{
   })
   setShow(false)
 }
   const ButtonCell=(cell, row, rowIndex, formatExtraData)=>{
    return (
        
        <IconContext.Provider value={{ color: '#1c539b',size:"25px" }}><FaFileDownload onClick={()=>handleShow(row.idDepense)}/></IconContext.Provider>
    )
    
    }
    const columns=[
      {dataField:"idDepense",text:"N??Operation",footer:"Total"},
      {dataField:"dateCreation",footer:"",text:"Date ",formatter:
       (row,cellContent)=>{
        return moment(cellContent.datec).format("YYYY-MM-DDThh:mm:ss").split("T")[0]
       }
    },
    {dataField:"typeDepense",text:"Type D??pense",footer:""},
    {dataField:"montantDepense",text:"Montant", footer: columnData => columnData.reduce((acc, item) => acc + item, 0)},
    {datafield:"Details",text:"PJ", csvExport: false,footer:"",formatter: ButtonCell}
  ]
  var dateD=moment(details.dateD).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
  var dateR=moment(details.dateR).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
  return (
   <Div>
   <First>
   <Div1 >
    <Title>N?? Mission </Title>
    <P value={details.numeroMission}></P>
   </Div1>
   <Div1 >
    <Title>Nom </Title>
    <P value={details.nomUser}></P>
   </Div1>
   <Div1 >
    <Title>Pr??nom </Title>
    <P value={details.prenomUser}></P>
   </Div1>
   <Div1 >
    <Title>Nature Mission </Title>
    <P value={details.nature}></P>
   </Div1>
   <Div1 >
    <Title>Date D??part  </Title>
    <P value={dateD}></P>
   </Div1>
   <Div1 >
    <Title>Heure D??part </Title>
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
    <Title>Accompagn?? par  </Title>
    <P value={details.accompagne}></P>
   </Div1>
   <div style={{display:"flex"}}>
    <Button>Modifier</Button>
    <Button>Valider</Button>
    <Button>Non Valider</Button>
   </div>
   </First>
   <Modal
        aria-labelledby="contained-modal-title-vcenter"
        className="special_modal"
      
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{color: "black"}}>
         
         <Modal.Header closeButton variant="white">
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
              
                <p>??tes-vous s??r de vouloir t??l??charger ce fichier ?</p>
                <p>Si oui consulter "C:\Users\Public\ProjetMission"</p>
                </Modal.Body>
                <Modal.Footer>
                  <div style={{display:"flex"}}>
                  <ButtonM onClick={downloadFile} >Oui</ButtonM>
                  <ButtonM  onClick={handleClose} >Non</ButtonM>
                  </div>
                  
                </Modal.Footer>
         
         </Modal>
    
    <Second>
    <H1>Depenses effectu??es sur la Mission N?? {id} :</H1>
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