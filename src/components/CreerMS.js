import React from 'react'
import styles from 'styled-components'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import mspic from "../assets/msPic.png"
import { Modal } from 'react-bootstrap';

const MainDiv = styles.div`
display:flex;
width:auto;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
margin-top:100px;
margin-left:150px; 
`
const Select=styles.select`
margin-right:50px;
margin-bottom:10px;
margin-top:10px;
height:40px;
width:200px;
text-align: left !important;
border: 10px solid transparent  !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
background:#F0F0F0;
font-weight:bold !important;
color:black !important;
font-size:16px;
`
const H1 = styles.h1`
font-size:30px !important;
color:black;
margin-left:0px;
margin-right:50px;
margin-bottom:50px;
font-weight:bold;
`
const SousDiv1=styles.div`
display:inline-block;
margin-left:50px;
margin-top:40px;
`
const DivInput=styles.div`
margin-bottom:10px;
`

const Label=styles.label`
display:inline-block;
width: 160px;
font-weight:bold !important;
color:black;
`


const Input=styles.input`
margin-right:50px;
margin-bottom:10px;
margin-top:10px;
height:${props=>props.l? "40px":"35px"};
width:200px;
text-align: left !important;
border: 10px solid transparent  !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
background:#F0F0F0;
font-weight:bold !important;
color:black !important;
font-size:16px;
`
const Button=styles.button`
border-width: 0px;
border-style: solid;
background-color:#B0C4DE ;
font-weight:bold !important;
font-weight:bold ;
width:140px;
height:30px;
margin-left:219px;
margin-bottom:30px;
text-align:center !important;
cursor:pointer;
&:focus{
outline: none  !important;
}
`
const ButtonM=styles.button`
border-width: 0px;
border-style: solid;
background-color:#B0C4DE ;
font-weight:bold !important;
font-weight:bold ;
width:140px;
height:30px;
margin-left:109px;
margin-bottom:30px;
text-align:center !important;
cursor:pointer;
&:focus{
outline: none  !important;
}
`

const CreerMS = () => {
  const url = "https://localhost:7111/api/Utilisateurs"
  const [users,setUsers] =useState([])
  const [bcNumbersList,setBcList]=useState([])
  const [val,setOptionUser]=useState(0)
  // const [dateCreation,setDateCreation]=useState(date)
  const [numBc,setNumBc]=useState(0)
  const [projet,setProjet]=useState("")
  const [dateDebut,setDateDebut]=useState("")
  const [dateFin,setDateFin]=useState("")
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
      setShow(true)
     
    };
  var curr = new Date();
  curr.setDate(curr.getDate());
  var date = curr.toISOString().substring(0,10);
  let day=curr.getDate();
  let month=curr.getMonth()+1;
  let year=curr.getFullYear();
  var all=day+"/ "+ month+" /" + year
  const sendData=()=>{
     axios.post("https://localhost:7111/api/Missions",{
      idBonCaisse: Number(numBc),
      numeroMission:"test",
      dateCreation: date,
      totalMission: 0,
      idUser: Number(val),
      etatMission: "O",
      valideParSuperviseur: "N",
      valideParAdministrateur: "N",
      objetMission: projet,
      dateDebut: dateDebut,
      dateFin: dateFin
     }).then((response) => {
      console.log(response.status);
     })
     setShow(false)
  }
  console.log(val)
  console.log(bcNumbersList)
  const getListBc=(v) => {
    axios.get(`https://localhost:7111/api/GetAllBcOfAGivenUser/${v}`).then((response) => {
      setBcList(()=>response.data)
 })
  }
  const changeValue=(e)=>{
   getListBc(e.target.value)
   setOptionUser(e.target.value) 
  }
  useEffect(()=> {
   axios.get(url).then((response) => {
     setUsers(response.data)
    })
  
  })
  return (
    <>
    <MainDiv>
    
        <SousDiv1>
        <H1> Formulaire d'ajout Mission : {all}</H1>
        
        {/* <DivInput>
        <Label>Date Création</Label>
        <Input l type="date" defaultValue={date} onChange={(e)=>setDateCreation(e.target.value)}></Input>
      </DivInput> */}
        <DivInput>
        <Label>Bénéficiaire</Label>
        <Select  onChange={changeValue}>
        <option>Veuillez selectionner un choix</option>
        {users.map((user)=><option value={user.infoId}>{user.infoNom} {user.infoPrenom}</option>)}
        </Select>
      </DivInput>
      <DivInput>
        <Label>N° Bon Caisse</Label>
        <Select  onChange={(e)=>setNumBc(e.target.value)}>
          <option>veuillez selectionner un choix</option>
        {bcNumbersList.map((bc)=><option value={bc.idBonCaisse}>{bc.idBonCaisse}</option>)}
        </Select>
      </DivInput>
      <DivInput>
        <Label>Projet</Label>
        <Input placeholder='entrer objet mission' onChange={(e)=>setProjet(e.target.value)}></Input>
      </DivInput>
      <DivInput>
        <Label>Date de début</Label>
        <Input l type="date" onChange={(e)=>setDateDebut(e.target.value)}></Input>
      </DivInput>
      <DivInput>
        <Label>Date de fin</Label>
        <Input l type="date" onChange={(e)=>setDateFin(e.target.value)}></Input>
      </DivInput>
      <br></br> 
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
              
                <p>Êtes-vous sûr de vouloir ajouter une nouvelle mission ?</p>
               
                </Modal.Body>
                <Modal.Footer>
                  <div style={{display:"flex"}}>
                  <ButtonM onClick={sendData} >Oui</ButtonM>
                  <ButtonM  onClick={handleClose} >Non</ButtonM>
                  </div>
                  
                </Modal.Footer>
         
         </Modal>
    
      
      <Button onClick={handleShow}>Créer</Button> 
      
     
        </SousDiv1>
        <div style={{marginTop:'80px'}}>
          <img src={mspic}></img>
     </div>
    </MainDiv>
    </>
  )
}

export default CreerMS