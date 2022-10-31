import React from 'react'
import { useParams } from "react-router-dom";
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import styles from 'styled-components'
import {GrFormAdd} from 'react-icons/gr'
import {AiOutlineMinusCircle} from 'react-icons/ai'
import {IconContext} from 'react-icons'
const MainDiv = styles.div`
display:flex;

margin-left:10px;
margin-top:10%;
`
const Div2 = styles.div`
margin-left: 90px;
display:inline-block;
border:2px solid black;
width:100%;
height:100%;
background-color:#1c539b;
justify-content:space-between;
`
const H1 = styles.h1`
font-size:44px !important;
color:black;
margin-left:90px;
margin-top:50px;
`
const Div=styles.div`
display:flex;
margin-left:70px;
`
const Select=styles.select`
margin-right:50px;
margin-bottom:10px;
margin-top:10px;
height:40px;
width:200px;
text-align: left !important;
border: 10px solid transparent  !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
`
const DivInput=styles.div`
display:flex;
margin-top: 20px;
margin-left: 50px;
`

const Label=styles.label`
display: inline-block;
width: 160px;
font-weight:bold !important;
`


const Input=styles.input`
margin-right:50px;
margin-bottom:10px;
margin-top:10px;
height:35px;
width:150px;
text-align: left !important;
border: 10px solid transparent  !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
`
const Button=styles.button`
position: relative;
border-width: 0px;
border-style: solid;
background-color:#B0C4DE ;
font-weight:bold !important;
font-weight:bold ;
box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.25);
width:140px;
height:30px;
margin-left:40px;
margin-top:50px;
margin-bottom:50px;
text-align:center !important;
cursor:pointer;
&:focus{
outline: none  !important;
}
`

const DetailsBc = () => {
    const url1="https://localhost:7111/api/Boncaisses"
    const {id} = useParams()
    const  [sbc,setSbc]=useState([])
     const url2=`https://localhost:7111/api/SBC/${id}`
   const [bc,setBc]=useState([])
     useEffect(()=>{
    
        axios.get(url1).then((response) => {

            setBc(response.data)
    
             });
             axios.get(url2)
           .then((response)=>{setSbc(response.data);})
     })
     const columns=[
        {dataField:"idSbc",text:"N° Operation"},
        {dataField:"idMs",text:"N° Mission"},
        {dataField:"libelleOp",text:"Désignation"},
        {dataField:"dateCreation",text:"Date Création"},
        {dataField:"creditSbc",text:"Credit"},
    ]
   
    const [users,setUsers]=useState([])
    const [dateC,setDateC]=useState("")
    const [dateE,setDateE]=useState("")
    const [value,setOptionUser]=useState("")
    const [libelle,setOptionLibelle]=useState("")

    const creatBc=()=>{

    }

      

  return (
   <MainDiv>
    
    <Div2>
        <DivInput>
            <Label>Date Creation :</Label>
             <Input type="text" disabled ></Input>
        </DivInput>
        <DivInput>
            <Label>Date expiration :</Label>
             <Input type="text" disabled></Input>
        </DivInput>
        <DivInput>
            <Label>Bénéficiaire :</Label>
            <Input type="text" disabled></Input>
        </DivInput>
        <DivInput>
            <Label>Libellé :</Label>
             <Input type="text" disabled></Input>
        </DivInput>
       <Div>
       <Button onClick={()=>{alert("")}}>Ajouter</Button>
       <Button onClick={()=>{alert("")}}>Retirer</Button>
      {/* <div><Button onClick={()=>{alert("")}}>Ajouter</Button><IconContext.Provider value={{ color: 'white', size: '25px'}}>
      <GrFormAdd ></GrFormAdd>
      </IconContext.Provider></div>
      <div><Button onClick={()=>{alert("")}}>Retirer</Button><IconContext.Provider value={{ color: 'black', size: '25px'}}>
      <AiOutlineMinusCircle ></AiOutlineMinusCircle>
      </IconContext.Provider></div> */}
       </Div>
    </Div2>
    <div style={{marginLeft: '150px',marginTop: '100px'}}>
        <h1 style={{color:"black",fontWeight:"bold",fontSize:"20px" ,marginBottom:"50px"}}>Operations effectuées sur le bon caisse N° {id}</h1>
        <BootStrapTable      
        keyField='idSBc'
        data={sbc}
        columns={columns}
        pagination={paginationFactory()}  
        ></BootStrapTable>
    </div>
   </MainDiv>
   
  )
}

export default DetailsBc