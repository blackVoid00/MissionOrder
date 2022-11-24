import React from 'react'
import styled from "styled-components"
import {Bar,Pie,Line} from 'react-chartjs-2';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Chart  from 'chart.js/auto';



//styled components
const DivHome=styled.div`
    margin-top:150px;
    margin-left:100px;
    display:flex;
`
const DivChart=styled.div`
   width:500px;
   height:500px;
   
`
//Home component
const Home2 = () => {
  //The api's url
  const url="https://localhost:7111/api/Missions"

  //declare a new state variable which will call missions, this variable will get an array of json objects (missions)
  const [missions,setMissions]=useState([])
 //declare a new state variable which will call chartData, this variable will contain a json object defining the sub properties of the chart's data property
  const [chartData,setChartData] =useState({
    labels:[],
    datasets: [
      {
        label: '',
        backgroundColor: [],
        data:[] ,
        hoverOffset: 0
      },
    ],
  
})
// defining a "useEffect" hook that will call two functions when the app is running (updating the Dom automatically)
  useEffect(()=>{
    getData()
    getChart()
   })
//this function get the data from the api's url
const getData=() => {
  axios.get(url).then((response) =>{
    setMissions(response.data) 
  })}
//this function initialize the chart's data property with the api's data
const getChart=()=>{
 let config={
      labels:missions.map((s)=>s.idMission),
      datasets: [
        {
          label: 'Total Dépenses pour Missions',
          backgroundColor: ["#b71c1c", "#1c539b"],
          data:missions.map((s)=>s.totalMission) ,
          hoverOffset: 5,
          barPercentage: 0.1,
        },
      ],
    
  };
  setChartData(config)
}
  const options = {
    title: {
      display: true,
      text: "Chart Title"
    },
    scales: {
      y:{
        title:{
        text:"Total Dépenses",
        display:true},
        grid: {
          display: false
        }
      },
      
      x:{
        title:{
          text:"Numéro Mission",
          display:true
        },
        grid: {
          display: false
        }
       
      },
      
    }
  }; 
 
  return (
    <DivHome>
        {/* <h1 style={{fontSize:"45px",color:"black",fontWeight:"bold"}}>Bienvenue</h1> */}
      
        <DivChart>
        <Bar data={chartData} options={options}></Bar>
        </DivChart>
        
    </DivHome>
  )
}

export default Home2