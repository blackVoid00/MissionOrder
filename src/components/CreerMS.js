import React from 'react'
import styles from 'styled-components'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';

const MainDiv = styles.div`
display:flex;
width:100%;
height:100%;
margin-left:10%;
margin-top:10%;
box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
background-color:#1c539b;
`

const H1 = styles.h1`
font-size:30px !important;
color:white;
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
`
const Button=styles.button`
border-width: 0px;
border-style: solid;
background-color:#B0C4DE ;
font-weight:bold !important;
font-weight:bold ;
box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.25);
width:140px;
height:30px;
margin-left:219px;
margin-top:50px;
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
  const [value,setOptionUser]=useState()
  const getUsers=async( )=> { 
    await axios.get(url).then((response) => {
     setUsers(response.data)
    })
  }
  useEffect(()=> {
    getUsers()
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
        <Label>Date Création</Label>
        <Input l type="date"></Input>
      </DivInput>
        <DivInput>
        <Label>Bénéficiaire</Label>
        <select className='Select-Ms'  onChange={(e)=>setOptionUser(e.target.value)}>
        {users.map((user)=><option value={user.infoId}>{user.infoNom} {user.infoPrenom}</option>)}
        </select>
      </DivInput>
      <DivInput>
        <Label>N° Bon Caisse</Label>
        <select className='Select-Ms'>
        {bcNumbersList.map((bc)=><option value={bc.idBonCaisse}>{bc.idBonCaisse}</option>)}
        </select>
      </DivInput>
      <DivInput>
        <Label>Projet</Label>
        <Input placeholder='entrer objet mission'></Input>
      </DivInput>
      <DivInput>
        <Label>Date de début</Label>
        <Input l type="date"></Input>
      </DivInput>
      <DivInput>
        <Label>Date de fin</Label>
        <Input l type="date"></Input>
      </DivInput>
      <br></br> 
       
    
      <DivInput>
      <Button>Créer</Button> 
      </DivInput>
    
        </SousDiv1>
   
    </MainDiv>
    </>
  )
}

export default CreerMS