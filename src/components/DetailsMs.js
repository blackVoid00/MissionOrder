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
import { useForm } from "react-hook-form";
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
margin-top:10px;
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
    const [details,setDetails]=useState({})
    const [idDep,setIdDepense]=useState()
    const { register,setValue,getValues} = useForm();
   const [dateC,setDac]=useState("")
   const [bc,setBc]=useState("")
   const [numMission,setNumMission]=useState("")
   const [nom,setNom]=useState("")
   const [prenom,setPrenom]=useState("")
   const [nature,setNature]=useState("")
   const [objet,setObjet]=useState("")
   const [dateDepart,setDateD]=useState("")
   const [dateRetour,setDateR]=useState("")
   const [heureDebut,setHeureD]=useState("")
   const [heureFin,setHeureF]=useState("")
   const [lieu,setLieu]=useState("")
   const [vehicule,setVehicule]=useState("")
   const [acc,setAcc]=useState("")
   const [desc,setDesc]=useState("")
   const [dureeIntervention,setDuree]=useState("")
   
   
   
   
   
   useEffect(()=>{
    axios.get(`https://localhost:7111/api/GetAllPerformedOperationsOfaGivenMission/${id}`).then((response) => {
      setData(response.data)
  })
    const fields=[
  "idMission",
  "numeroMission",
  "idSbonCaisse",
  "dateCreation",
  "totalMission",
  "idUser",
  "etatMission",
  "valideResponsable",
  "valideRh",
  "objetMission",
  "dateD",
  "dateR",
  "dureeIntervention",
  "lieu",
  "nature",
  "vehicule",
  "accompagne",
  "heureDepart",
  "heureRetour",
  "description",
  "nomUser",
  "prenomUser"]
            axios.get(`https://localhost:7111/api/Missions/${id}`).then((response)=>{
                fields.forEach(field=>setValue(field,response.data[field])) 
                setDetails(response.data) 
            })
        
   },[])
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = (e) => {
     setShow(true)
     setIdDepense(e)
   };
   const [showM, setShowM] = useState(false);
   const handleCloseM = () => setShowM(false);
   const handleShowM= (e) => {
     setShowM(true)
    
   };
   const [showModifier, setShowModifier] = useState(false);
   const handleCloseModifier = () => setShowModifier(false);
   const handleShowModifier= (e) => {
     setShowModifier(true)
    
   };
   const [showMV, setShowMV] = useState(false);
   const handleCloseMV = () => setShowMV(false);
   const handleShowMV= (e) => {
     setShowMV(true)
    
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
    const modifierMission=()=>{
      axios.put(`https://localhost:7111/api/Missions/${id}`,{
      idMission: id,
      numeroMission:getValues("numeroMission"),
      idBonCaisse:getValues("idSbonCaisse"),
      dateCreation:getValues("dateCreation"),
      dateDebut:getValues("dateD"),
      dateFin:getValues("dateR"),
      idUser:getValues("idUser"),
      objetMission:getValues("objetMission"),
      totalMission: getValues("totalMission"),
      etatMission:getValues("etatMission"),
      valideParSuperviseur: getValues("valideResponsable"),
      valideParAdministrateur:getValues("valideRh"),
      dureeIntervention:getValues("dureeIntervention"),
      lieu:getValues("lieu"),
      nature: getValues("nature"),
      vehicule:getValues("vehicule") ,
      accompagnePar: getValues("accompagne"),
      heureDebut: getValues("heureDebut"),
      heureFin: getValues("heureFin"),
      description:getValues("description")
      }).then((response) => {})
      setShowModifier(false)
 }
    const invalidateMission=()=>{
      axios.put(`https://localhost:7111/api/Missions/${id}`,{
      idMission: id,
      numeroMission:getValues("numeroMission"),
      idBonCaisse:getValues("idSbonCaisse"),
      dateCreation:getValues("dateCreation"),
      dateDebut:getValues("dateD"),
      dateFin:getValues("dateF"),
      idUser:getValues("idUser"),
      objetMission:getValues("objetMission"),
      totalMission: getValues("totalMission"),
      etatMission:"O",
      valideParSuperviseur: "N",
      valideParAdministrateur:"N",
      dureeIntervention:getValues("dureeIntervention"),
      lieu:getValues("lieu"),
      nature: getValues("nature"),
      vehicule:getValues("vehicule") ,
      accompagnePar: getValues("accompagne"),
      heureDebut: getValues("heureDebut"),
      heureFin: getValues("heureFin"),
      description:getValues("description")
      }).then((response) => {})
      setShowMV(false)
 }
    const validateMission=()=>{
      axios.put(`https://localhost:7111/api/Missions/${id}`,{
      idMission: id,
      numeroMission:getValues("numeroMission"),
      idBonCaisse:getValues("idSbonCaisse"),
      dateCreation:getValues("dateCreation"),
      dateDebut:getValues("dateD"),
      dateFin:getValues("dateF"),
      idUser:getValues("idUser"),
      objetMission:getValues("objetMission"),
      totalMission: getValues("totalMission"),
      etatMission:"F",
      valideParSuperviseur: "O",
      valideParAdministrateur:"O",
      dureeIntervention:getValues("dureeIntervention"),
      lieu:getValues("lieu"),
      nature: getValues("nature"),
      vehicule:getValues("vehicule") ,
      accompagnePar: getValues("accompagne"),
      heureDebut: getValues("heureDebut"),
      heureFin: getValues("heureFin"),
      description:getValues("description")
      }).then((response) => {})
      setShowM(false)
 }
 
    const columns=[
      {dataField:"idDepense",text:"N°Operation",footer:"Total"},
      {dataField:"dateCreation",footer:"",text:"Date ",formatter:
       (row,cellContent)=>{
        return moment(cellContent.datec).format("YYYY-MM-DDThh:mm:ss").split("T")[0]
       }
    },
    {dataField:"typeDepense",text:"Type Dépense",footer:""},
    {dataField:"montantDepense",text:"Montant", footer: columnData => columnData.reduce((acc, item) => acc + item, 0)},
    {datafield:"Details",text:"PJ", csvExport: false,footer:"",formatter: ButtonCell}
  ]
  var dateD=moment(details.dateD).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
  var dateR=moment(details.dateR).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
  return (
   <Div>
   <First>
   <Div1 >
    <Title>Date Création  </Title>
    <P {...register('dateCreation')} onChange={(e)=>setDac(e.target.value)}></P>
   </Div1>
 
   <Div1 >
    <Title>Nom </Title>
    <P {...register('nomUser')} disabled onChange={(e)=>setNom(e.target.value)}></P>
   </Div1>
   <Div1 >
    <Title>Prénom </Title>
    <P {...register('prenomUser')} disabled onChange={(e)=>setPrenom(e.target.value)}></P>
   </Div1>
   <Div1 >
    <Title>Nature Mission </Title>
    <P {...register('nature')} onChange={(e)=>setNature(e.target.value)}></P>
   </Div1>
   <Div1 >
    <Title>Objet Mission </Title>
    <P {...register('objetMission')} onChange={(e)=>setObjet(e.target.value)}></P>
   </Div1>
   <Div1 >
    <Title>Date Départ  </Title>
    <P {...register('dateD')} onChange={(e)=>setDateD(e.target.value)}></P>
   </Div1>
  
   <Div1 >
    <Title>Heure Départ </Title>
    <P type="time" {...register('heureDepart')} onChange={(e)=>setHeureD(e.target.value)}></P>
   </Div1>
   <Div1 >
    <Title>Date Retour  </Title>
    <P  {...register('dateR')} onChange={(e)=>setDateR(e.target.value)}></P>
   </Div1>
   <Div1 >
    <Title>Heure Retour </Title>
    <P type="time"{...register('heureRetour')} onChange={(e)=>setHeureF(e.target.value)}></P>
   </Div1>
   <Div1 >
    <Title>Lieu </Title>
    <P {...register('lieu')} onChange={(e)=>setLieu(e.target.value)}></P>
   </Div1>
   <Div1 >
    <Title>Vehicule </Title>
    <P {...register('vehicule')} onChange={(e)=>setVehicule(e.target.value)}></P>
   </Div1>
   <Div1 >
    <Title>Accompagné par  </Title>
    <P {...register('accompagne')} onChange={(e)=>setAcc(e.target.value)}></P>
   </Div1>
   <Div1 >
    <Title>Description  </Title>
    <P {...register('description')} onChange={(e)=>setDesc(e.target.value)}></P>
   </Div1>
   <Div1 >
    <Title>Durée Intervention  </Title>
    <P {...register('dureeIntervention')} onChange={(e)=>setDuree(e.target.value)}></P>
   </Div1>
   <div style={{display:"flex"}}>
    <Button onClick={handleShowModifier}>Modifier</Button>
    <Button onClick={handleShowM}>Valider</Button>
    <Button onClick={handleShowMV}>Non Valider</Button>
   </div>
   </First>
   <Modal
        aria-labelledby="contained-modal-title-vcenter"
        className="special_modal"
        show={showModifier}
        onHide={handleCloseModifier}
        backdrop="static"
        keyboard={false}
        style={{color: "black"}}>
         
         <Modal.Header closeButton variant="white">
                  <Modal.Title  style={{color: "black",fontWeight: "bold"}}>Dépense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p>Etes vous sur de vouloir modifier cette mission ?</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="success" onClick={modifierMission}>Valider</Button>
                 
                </Modal.Footer>
         
         </Modal>
   <Modal
        aria-labelledby="contained-modal-title-vcenter"
        className="special_modal"
        show={showMV}
        onHide={handleCloseMV}
        backdrop="static"
        keyboard={false}
        style={{color: "black"}}>
         
         <Modal.Header closeButton variant="white">
                  <Modal.Title  style={{color: "black",fontWeight: "bold"}}>Dépense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p>Etes vous sur de vouloir invalider cette mission ?</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="success" onClick={invalidateMission}>Valider</Button>
                 
                </Modal.Footer>
         
         </Modal>
         
   <Modal
        aria-labelledby="contained-modal-title-vcenter"
        className="special_modal"
        show={showM}
        onHide={handleCloseM}
        backdrop="static"
        keyboard={false}
        style={{color: "black"}}>
         
         <Modal.Header closeButton variant="white">
                  <Modal.Title  style={{color: "black",fontWeight: "bold"}}>Dépense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p>Etes vous sur de vouloir valider cette mission ?</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="success" onClick={validateMission}>Valider</Button>
                 
                </Modal.Footer>
         
         </Modal>
         
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
              
                <p>Êtes-vous sûr de vouloir télécharger ce fichier ?</p>
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