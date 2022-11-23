
import React from 'react'
import styled from "styled-components"
import mission from '../assets/mission.png'
import {Bar,Pie,Line} from 'react-chartjs-2';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {Chart as ChartJS} from 'chart.js/auto';
const DivHome=styled.div`
    margin-top:150px;
    margin-left:100px;
    display:flex;
`
const DivChart=styled.div`
   width:500px;
   height:500px;
   margin-left:100px;
`
const Home2 = () => {
  const url="https://localhost:7111/api/SBC"

  const [sbc,setSBc]=useState([])
  useEffect(()=>{
    getData()
    getChart()
   },[])
  const [chartData,setChartData] =useState({
    labels:sbc.map((s)=>s.type),
    datasets: [
      {
        label: 'sous bons de caisse',
        backgroundColor: ["#ed64a6", "#4c51bf"],
        data:sbc.map((s)=>s.credit) ,
        hoverOffset: 5
      },
    ],
  
})
const getData=() => {
  axios.get(url).then((response) =>{
    setSBc(response.data) 
  })}

const getChart=()=>{
  getData()
 let config={
      labels:sbc.map((s)=>s.type),
      datasets: [
        {
          label: 'sous bons de caisse',
          backgroundColor: ["#ffaaa5", "#1c539b","#fcf8f3","#ffd3b6","#698474"],
          data:sbc.map((s)=>s.credit) ,
          hoverOffset: 5,
          barPercentage: 0.1,
        },
      ],
    
  };
  setChartData(config)
}
  useEffect(()=>{
   getChart()
  },[])
  const options = {
    title: {
      display: true,
      text: "Chart Title"
    },
    scales: {
      y:{
        title:{
        text:"Crédit alloués",
        display:true}
      },
      x:{
        title:{
          text:"Type operation",
          display:true
        },
       
      }
    }
  }; 
  console.log(sbc)
    const identifant=localStorage.getItem('loginId');
    
  return (
    <DivHome>
        {/* <h1 style={{fontSize:"45px",color:"black",fontWeight:"bold"}}>Bienvenue</h1> */}
        <img style={{maxWidth:"100%"}} src={mission}></img>
        <DivChart>
        <Line data={chartData} options={options}></Line>
        </DivChart>
        
    </DivHome>
  )
}

export default Home2