import React ,{useState,useEffect} from 'react'
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {ButtonM } from './StyleMsC';
import moment from 'moment'
import {AiOutlineFileAdd,AiOutlineArrowRight} from "react-icons/ai"
import { IconContext } from 'react-icons/lib';


const ListeMs = () => {
    const navigate = useNavigate()
    const ButtonCell=(cell, row, rowIndex, formatExtraData)=>{
        return (
            <ButtonM  onClick={()=>navigate(`/detailms/${row.idMission}`)  }>consulter &nbsp; <IconContext.Provider value={{ color: '#1c539b',size:"20px" }}><AiOutlineArrowRight/></IconContext.Provider></ButtonM>
        )
        
        }
        
 

    const url="https://localhost:7111/api/Missions"
    const [ms,setMs]=useState([])
    useEffect(()=>{
        axios.get(url).then((response) => {
            setMs(response.data);
         });
       
    },[])
    const columns=[
      {dataField:"dateCreation",text:"Date Creation",formatter : (row,cellContent)=>{
        return moment(cellContent.dateCreation).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
      }},
         {dataField:"idMission",text:"N° Mission"},
         {dataField:"idSbonCaisse",text:"N° Bon caisse"},
        {dataField:"objetMission",text:"Projet"},
        {dataField:"totalMission",text:"Total Dépenses"},
        {dataField:"valideResponsable",text:"ValiderResp"},
        {dataField:"valideRh",text:"ValiderAdmin"},
        {dataField:"etatMission",text:"Etat Mission", formatter: (cellContent ,row) => {
            if ( row.etatMission =="O") {
              return (
                <span style={{color:"#b71c1c",fontWeight:"bold"}}>
               en cours...
                </span>
              )
            }   
            return(
              <span style={{color:"green",fontWeight:"bold"}}>
               cloturée </span>
            )    
        }},
        {datafield:"Actions",text:"Details", formatter: ButtonCell}
    ]
  return (
    <div style={{marginLeft: '100px',marginTop: '100px'}}>
      <ButtonM large onClick={()=>navigate('/creerMs')}><IconContext.Provider value={{ color: '#1c539b',size:"35px" }}><AiOutlineFileAdd/></IconContext.Provider>&nbsp; Ajouter</ButtonM>
      <br></br>  <br></br>  <br></br>
        {/* <h1 style={{color:"black",marginLeft: '350px',marginBottom:"50px",fontSize: '40px',fontWeight:"bold"}}>Liste des bons de caisse</h1> */}
        <BootStrapTable      
        keyField='idMission'
        data={ms}
        columns={columns}
        pagination={paginationFactory()} 
        headerClasses="header-class"
        rowClasses="row-class" 
        ></BootStrapTable> 
      
        
    </div>
  )
}


export default ListeMs