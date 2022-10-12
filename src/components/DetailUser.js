import React ,{useEffect, useState}from 'react'
import { useParams } from "react-router-dom";
import styles from "styled-components"
import axios from "axios"
import iconUser from "../assets/iconUser.png"



const MainDiv = styles.div`
display:inline-block;
background-color:#1c539b;
margin-left:300px;
margin-top:5%;
padding:40px 40px 40px 40px;
width:auto;
height:auto;
`
const Div2 = styles.div`
margin-left:20%;
margin-top:5%;

`
const Image=styles.img`
width:20%; 
margin-left:35%;
`



const DetailUser = () => {
  const {id} = useParams()

  const url=`https://localhost:7048/api/Utilisateurs/${id}`;

    const [users,setUsers]=useState([])

    useEffect(()=>{
      axios.get(url).then((response) => {
          setUsers(response.data);
       });
  },[])
  console.log(users)
  return (
    <MainDiv>
    <Image src={iconUser}></Image>
     {users.map((u)=>
    <Div2>
      <h1> Detail de l'utilisateur {u.infoNom}  {u.infoPrenom} </h1><br></br><br></br><br></br>
      <h1>service : {u.infoLibelle}</h1><br></br><br></br>
      <h1> cin : {u.infoCin}</h1><br></br><br></br>
      <h1> Tel : {u.infoNumeroTel}</h1><br></br><br></br><br></br><br></br>
    
    </Div2>
    
    )}
    </MainDiv>
  )
}

export default DetailUser