import React from 'react'
import styled from "styled-components"
import mission from '../assets/mission.png'

const DivHome=styled.div`
    margin-top:150px;
    margin-left:400px;
   
`
const Home2 = () => {
    const identifant=localStorage.getItem('loginId');
  return (
    <DivHome>
        {/* <h1 style={{fontSize:"45px",color:"black",fontWeight:"bold"}}>Bienvenue</h1> */}
        <img style={{maxWidth:"100%"}} src={mission}></img>
    </DivHome>
  )
}

export default Home2