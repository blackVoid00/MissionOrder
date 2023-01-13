import React, { useEffect, useState } from 'react'
import styles from 'styled-components'
import logo from '../assets/ordre.png'
import {useNavigate} from 'react-router-dom'
import axios from "axios"
import { IconContext } from 'react-icons'
import {AiFillLock,AiOutlineMail} from 'react-icons/ai'

const  H1= styles.h1`
color:black;
font-weight:bolder;
text-align:left;
font-size:34px;
margin-top:50px;
margin-left:0px;
`


const Container =styles.div`
width:900px;
height:500px;
background-color:white;
display:flex;
justify-content:space-between;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; 
margin-left:450px;
margin-top:200px;
`
const Container1=styles.div`
display:inline-block;
width:40%;

`
const Container2=styles.div`
width:50%;
margin-left:150px !important;
margin-top:50px !important;
`
const Div=styles.div`
display:inline-block;

`
const Input =styles.input`
text-align: left !important;
border:none  !important;
border-bottom:2px solid #D9D9D9 !important;
margin-left:10px;
&:focus{
    outline: none  !important;
}
margin-top:40px;

`
const Button=styles.button`
border-width: 0px;
color:white;
background-color:#1c539b;
cursor: pointer;
font-size:16px !important;
font-weight:bold !important;
width:100px;
height:30px;
margin-top:50px;
margin-left:10px;
`
const Image=styles.img`
width:400px;
hight:400px;

`
const Login = () => {
    const url="https://localhost:7111/api/Login"

    const [identifiant,setIdentifiant]=useState("");
    const [password,setPassword] =useState("");
    const [loginstatus , setLoginstatus]=useState(false);
    const [role,setRole] = useState("")
    let navigate=useNavigate()
    const url2=`https://localhost:7111/api/Login/${identifiant}`
   const LoginApp=()=>{
    axios.get(url2).then((response)=>{
        setRole(response.data['infoRole'])
        localStorage.setItem("role", response.data['infoRole']);
        localStorage.setItem("nom", response.data['infoNom']);
        localStorage.setItem("prenom", response.data['infoPrenom']);
        localStorage.setItem("id", JSON.stringify(response.data['infoId']));
        console.log(response.data['infoId'])
    });

    axios.post(url,{
        identifiant: identifiant,
        pwd: password,
    }).then((response)=>{
        if(response.status==200){
            localStorage.setItem("loginId", identifiant);
            if(role=="0"){
                navigate('/homeuser')
            }
            if(role=="1"){
                navigate('/homeadmin')
            }
            if(role=="2"){
                navigate('/homeadmin')
            }
        } 
    });
      
 

   }
  return (
 
    <Container>
    <Container1>
        <Image src={logo}></Image>
    </Container1>
    <Container2>
        <H1>Log In</H1>
        <Div>
          <div><IconContext.Provider value={{size:'15px',color:'black'}}><AiOutlineMail/></IconContext.Provider><Input type="text" placeholder='entrer votre email' onChange={(e)=>{setIdentifiant(e.target.value)}}></Input></div>
         <div><IconContext.Provider value={{size:'15px',color:'black'}}><AiFillLock/></IconContext.Provider><Input type="password" placeholder='entrer votre mot de passe' onChange={(e)=>{setPassword(e.target.value)}}></Input></div> 
         <Button onClick={LoginApp}>Valider</Button> 
        </Div>
        {loginstatus && (<h2>Incorrect information</h2>)}
    </Container2>
    </Container>

  )
}

export default Login