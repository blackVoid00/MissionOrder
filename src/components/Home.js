import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "styled-components"
import picOrdre from '../assets/ordre.png'
const MainDiv = styles.div`
max-width:100%;
display:flex;
`
const Container1 = styles.div`
width:50%;
margin-left:200px;
margin-top:300px;
`
const Container2 = styles.div`
width:50%;
`
const Div=styles.div`
display:flex;
margin-left:150px;
margin-top:100px;
max-width:100%;
`
const H1= styles.h1`
color:black;
font-weight:bold !important;
font-size:60px !important;
`
const Button=styles.button`
position: relative;
border-width: 0px;
border-style: solid;
background-color:#B0C4DE ;
font-weight:bold !important;
font-size:25px !important;
cursor: pointer;
font-weight:bold ;
width:200px;
height:50px;
border-radius:50px;
`
const Image=styles.img`
max-width:100%;
`
const Home = () => {
  const navigate=useNavigate()

const GoCaisse=()=>{
  navigate("/app")
}
const GoMission=()=>{
     navigate("/mission")
}
  return (
    <MainDiv>
        <Container1>
        <H1>Welcome to your Dashboard</H1> 
        <Div>
        <Button onClick={GoCaisse}>Admin</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={GoMission}>User</Button>
        </Div>
        </Container1>
        <Container2>
            <Image src={picOrdre}></Image>
        </Container2>
         
    </MainDiv>
  )
}

export default Home