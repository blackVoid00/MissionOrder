import React, { useEffect, useState } from 'react'
import styles from 'styled-components'
import logo from '../asset/logo.jpg'
import {useNavigate} from "react-router-dom"
const  H1= styles.h1`
color:#318CE7;
width:40%;
margin-left:45%;
text-align:left;
margin-top:70px;
margin-bottom:5px;
font-size:24px;
`
const Container =styles.div`
width:90%;
height:80%;
background: #FFFFFF;
position:absolute;
`
const SecondContainer=styles.div`
display:inline-block;
width:50%;
height:90%;
left:35%;
bottom:15%;
position: relative;
background-color:#318CE7;
box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.15);
`
const Label=styles.label`
font-size: 17px;
color:white;
margin-left:14%;

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
margin-top:5%;
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
left:40%;
`
const Image=styles.img`
width:9%;
margin-top:0%;
margin-left:0%;
margin-right:0%;
margin-bottom:0%;
`
const Register = () => {
    const [password,setPassword] =useState("");
    const [email,setEmail] =useState("");
    const [loginstatus , setLoginstatus]=useState(false);
    const [last,setLast] =useState("");
    const [first,setFirst] =useState("");
    let navigate=useNavigate();
    const LoginApp=()=>{
        navigate('/login')
    }
   const RegisterApp=()=>{
    setLoginstatus(true)       
   }
  return (
    <>
    <H1>Veuillez créer un compte</H1>
    <Image src={logo}></Image>
    <Container>
        <SecondContainer>
        <Label>Nom: &nbsp; &nbsp; &nbsp; </Label>
        <Input type="text" placeholder="enter your firstname" onChange={(e)=>{setFirst(e.target.value)}}></Input> <br></br><br></br>
        <Label>Prénom: &nbsp; &nbsp; </Label>
        <Input type="text" placeholder="enter your lastname" onChange={(e)=>{setLast(e.target.value)}}></Input> <br></br><br></br>
        <Label>Identifiant: </Label>
        <Input type="text" placeholder="enter your email" onChange={(e)=>{setEmail(e.target.value)}}></Input> <br></br><br></br>
        <Label>Password: &nbsp; </Label>
        <Input type="password" placeholder="enter your password"  onChange={(e)=>{setPassword(e.target.value)}}></Input><br></br><br></br><br></br>
        <Button onClick={RegisterApp}>Register</Button> <Button onClick={LoginApp}>Connect</Button>  
        {loginstatus && (<H1>Compte créer</H1>)}
        </SecondContainer>
    </Container>
     
    </>
  )
}

export default Register