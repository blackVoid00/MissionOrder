import React ,{useState,useEffect} from 'react'
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {ButtonM } from './StyleMsC';
import moment from 'moment'
import {AiOutlineFileAdd,AiFillEye,AiFillCheckCircle,AiOutlineFileDone} from "react-icons/ai"
import { IconContext } from 'react-icons/lib';
import {BiLoaderCircle} from 'react-icons/bi';
import {MdRemoveDone} from 'react-icons/md';
import {ImCancelCircle} from 'react-icons/im';
const ListeMs = () => {
    const navigate = useNavigate()
    const ButtonCell=(cell, row, rowIndex, formatExtraData)=>{
        return (
            <IconContext.Provider value={{ color: '#1c539b',size:"20px" }}><AiFillEye  onClick={()=>navigate(`/detailms/${row.idMission}`)  }/></IconContext.Provider>
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
        {dataField:"valideResponsable",text:"ValiderResp", formatter: (cellContent ,row) => {
          if ( row.valideResponsable =="N") {
            return (
              <IconContext.Provider value={{color:"#b71c1c",size:"20px"}}>
             <MdRemoveDone/>
              </IconContext.Provider>
            )
          }   
          return(
            <IconContext.Provider value={{color:"green",size:"20px"}}>
             <AiFillCheckCircle/>
              </IconContext.Provider>
          )    
      }},
        {dataField:"valideRh",text:"ValiderAdmin", formatter: (cellContent ,row) => {
          if ( row.valideRh=="N") {
            return (
              <IconContext.Provider value={{color:"#b71c1c",size:"20px"}}>
             <MdRemoveDone/>
              </IconContext.Provider>
            )
          }   
          return(
            <IconContext.Provider value={{color:"green",size:"20px"}}>
             <AiFillCheckCircle/>
              </IconContext.Provider>
          )    
      }},
        {dataField:"etatMission",text:"Statut", formatter: (cellContent ,row) => {
            if ( row.etatMission =="O") {
              return (
                <IconContext.Provider value={{color:"#b71c1c",size:"20px"}}>
               <BiLoaderCircle/>
                </IconContext.Provider>
              )
            }   
            return(
              <IconContext.Provider value={{color:"green",size:"20px"}}>
               <AiOutlineFileDone/>
                </IconContext.Provider>
            )    
        }},
        {datafield:"Actions",text:"Consulter", formatter: ButtonCell}
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