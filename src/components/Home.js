import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "styled-components"
import mission from '../assets/mission.png'
const MainDiv = styles.div`
max-width:100%;
display:flex;
`
const Container1 = styles.div`

margin-left:200px;
margin-top:300px;
`
const Container2 = styles.div`
margin-left:200px;
margin-top:150px;
`
const Div=styles.div`
display:flex;
margin-left:250px;
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
background-color:transparent	 ;

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
  const role=localStorage.getItem('role')
  if(role=="0"){
    navigate('/listmsUser')
  }
  if(role=="1"){
    navigate('/app')
  }
  if(role=="2"){
    navigate('/app')
  }
}
  return (
    <MainDiv>
        <Container1>
        <H1>Welcome to your Dashboard</H1> 
        <Div>
        <Button onClick={GoCaisse}>Consulter</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Div>
        </Container1>
        <Container2>
            <Image src={mission}></Image>
        </Container2>
         
    </MainDiv>
  )
}

export default Home