import React, { useEffect, useState } from 'react'
import styles from 'styled-components'
import logo from '../assets/logo.png'
import {useNavigate} from 'react-router-dom'
import axios from "axios"
const  H1= styles.h1`
color:black;
width:40%;
margin-left:42%;
text-align:left;
margin-top:80px;
margin-bottom:5px;
font-size:24px;
`
const  H2= styles.h2`
color:red;
width:40%;
margin-left:30%;
text-align:left;
margin-top:80px;
margin-bottom:5px;
font-size:24px;
`
const Container =styles.div`
width:90%;
height:60%;
position:absolute;
`
const SecondContainer=styles.div`
display:inline-block;
width:40%;
height:90%;
left:35%;
bottom:10%;
position: relative;
background-color:#1c539b;
box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.15);
`
const Label=styles.label`
font-size: 17px;
color:white;
margin-left:15%;

`
const Input =styles.input`

text-align: left !important;
box-shadow: rgba(0, 0, 0, 0.1) 0 5px 40px, rgba(0, 0, 0, 0.1) 0 5px 10px  !important;
border: 10px solid transparent  !important;
border-radius:2px  !important;
margin-left:26%;
&:focus{
    outline: none  !important;
}
margin-top:15%;
`
const Button=styles.button`
position: relative;
border-width: 0px;
border-style: solid;
text-color:black;
background-color:white;
cursor: pointer;
font-size:13px !important;
font-weight:bold !important;
box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.25);
width:140px;
height:30px;
left:70%;
top:10%;
`
const Image=styles.img`
width:9%;
margin-top:0%;
margin-left:0%;
margin-right:0%;
margin-bottom:0%;
`
const Login = () => {
    const url="https://localhost:7111/api/Login"


    const [identifiant,setIdentifiant]=useState("");
    const [password,setPassword] =useState("");
    const [loginstatus , setLoginstatus]=useState(false);

    let navigate=useNavigate()
    
   const LoginApp=()=>{
    axios.post(url,{
        identifiant: identifiant,
        pwd: password,
    }).then((response)=>{
        if(response.status==200){
            localStorage.setItem("loginId", identifiant);
            navigate("/home")
        } 
    });
      
    
  
    // if(email=="nouhaila" && password=="nouha"){
    //      //setLoginstatus(true)
    //      navigate("/app")
    // }else{
    //     setLoginstatus(true)
    // }
   }
  return (
    <>
    <H1>Veuillez vous identifiez</H1>
    <Image src={logo}></Image>
    <Container>
        <SecondContainer>
        <Label>Identifiant: &nbsp; </Label>
        <Input type="text" placeholder="enter your email" onChange={(e)=>{setIdentifiant(e.target.value)}}></Input> <br></br><br></br><br></br>
        <Label>Password: &nbsp; </Label>
        <Input type="password" placeholder="enter your password"  onChange={(e)=>{setPassword(e.target.value)}}></Input><br></br><br></br><br></br>
        <Button onClick={LoginApp}>Connect</Button>  
        {loginstatus && (<H2>Incorrect information</H2>)}
        </SecondContainer>
    </Container>
    
    </>
  )
}

export default Login