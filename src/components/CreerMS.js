import React from 'react'
import styles from 'styled-components'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import mspic from "../assets/msPic.png"
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

const CreerMS = () => {
  const url = "https://localhost:7111/api/Utilisateurs"
  const [users,setUsers] =useState([])
  const [bcNumbersList,setBcList]=useState([])
  const [value,setOptionUser]=useState(0)
  const [dateCreation,setDateCreation]=useState()
  const [numBc,setNumBc]=useState(0)
  const [projet,setProjet]=useState("")
  const [dateDebut,setDateDebut]=useState( )
  const [dateFin,setDateFin]=useState()
  const [numMission,setNumeroMission]=useState("")
  const sendData=()=>{
     axios.post("https://localhost:7111/api/Missions",{
      numeroMission: numMission,
      idBonCaisse: numBc,
      dateCreation: dateCreation,
      totalMission: 0,
      idUser: value,
      etatMission: "F",
      valideResponsable: "N",
      valideRh: "N",
      objetMission: projet,
      dateDepart: dateDebut,
      dateRetour: dateFin,
      dureeIntervention: 0
     }).then((response) => {
      alert("mission created successfully")
     })
  }
  useEffect(()=> {
   axios.get(url).then((response) => {
     setUsers(response.data)
    })
    axios.get(`https://localhost:7111/api/GetAllBcOfAGivenUser/${value}`).then((response) => {
               setBcList(response.data)
              
          })
  })
  return (
    <>
    <MainDiv>
    
        <SousDiv1>
        <H1>Formulaire Création Mission</H1>
        <DivInput>
        <Label>N° Mission</Label>
        <Input placeholder='format NN001' onChange={(e)=>setNumeroMission(e.target.value)}></Input>
      </DivInput>
        <DivInput>
        <Label>Date Création</Label>
        <Input l type="date" onChange={(e)=>setDateCreation(e.target.value)}></Input>
      </DivInput>
        <DivInput>
        <Label>Bénéficiaire</Label>
        <Select   onChange={(e)=>setOptionUser(e.target.value)}>
        {users.map((user)=><option value={user.infoId}>{user.infoNom} {user.infoPrenom}</option>)}
        </Select>
      </DivInput>
      <DivInput>
        <Label>N° Bon Caisse</Label>
        <Select  onChange={(e)=>setNumBc(e.target.value)}>
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
       
    
      
      <Button onClick={sendData}>Créer</Button> 
      
     
        </SousDiv1>
        <div style={{marginTop:'80px'}}>
          <img src={mspic}></img>
     </div>
    </MainDiv>
    </>
  )
}

export default CreerMS