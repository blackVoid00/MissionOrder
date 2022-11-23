import React from 'react'
import styled from "styled-components"
import mission from '../assets/mission.png'
import {Bar} from 'react-chartjs-2';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const DivHome=styled.div`
    margin-top:150px;
    margin-left:400px;
   
`
const Home2 = () => {
  const url="https://localhost:7111/api/Missions"
  const [missions,setMissions]=useState([])
  useEffect(()=>{
    axios.get(url).then((response) =>{
      setMissions(response.data)

    })
  })
    const identifant=localStorage.getItem('loginId');
    const [missionStats,setMissionStats] =useState({
       labels:missions.map((m)=>m.dateCreation),
       datasets:[{
        label:"Missions par Nature",
        data:missions.map((m)=>m.dureeIntervention)
       }]
      })
  return (
    <DivHome>
        {/* <h1 style={{fontSize:"45px",color:"black",fontWeight:"bold"}}>Bienvenue</h1> */}
        <img style={{maxWidth:"100%"}} src={mission}></img>
        <Bar data={missionStats}></Bar>
    </DivHome>
  )
}

export default Home2