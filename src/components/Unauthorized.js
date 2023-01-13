import React from 'react'
import { Button, ButtonM, H1 } from './StyleMsC'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
const Unauthorized = () => {
  const navigate=useNavigate()
  const nom=localStorage.getItem('nom')
  const prenom=localStorage.getItem('prenom')
  const GoDash=()=>{
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
    <div style={{margin:"230px 430px 130px 430px"}}>
      <h1 style={{marginLeft:"380px",fontSize:"80px",color:"black"}}> 404 </h1>
      <br></br> <br></br>
      <h2 style={{color:"black"}}>Vous n'êtes pas autorisé à accéder à cette ressource {nom} {prenom}</h2>
      <br></br> <br></br>
      <div style={{marginLeft:"260px"}}>

      <Button onClick={GoDash}>Mon Dashboard</Button>
      </div>
   
      <br></br> <br></br>
     
    </div>
  )
}

export default Unauthorized