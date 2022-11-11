import React ,{useState,useEffect} from 'react'
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {ButtonM } from './StyleMsC';

const ListeMs = () => {
    const navigate = useNavigate()
    const ButtonCell=(cell, row, rowIndex, formatExtraData)=>{
        return (
            <ButtonM  onClick={()=>navigate(`/detailms/${row.idMission}`)  }>Details</ButtonM>
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
        {dataField:"objetMission",text:"Libellé"},
        {dataField:"idMission",text:"Numero Mission"},
        {dataField:"idSbonCaisse",text:"Numero Bon caisse"},
        {dataField:"dateCreation",text:"Date Creation"},
        {dataField:"totalMission",text:"Total Dépenses"},
        {dataField:"etatMission",text:"Etat Mission", formatter: (cellContent ,row) => {
            if ( row.etatMission =="O") {
              return (
                <span style={{color:"red",fontWeight:"bold"}}>
               ouverte
                </span>
              )
            }   
            return(
              <span style={{color:"green",fontWeight:"bold"}}>
               cloturée </span>
            )    
        },},
        {datafield:"Actions",text:"Actions", formatter: ButtonCell}
    ]
  return (
    <div style={{marginLeft: '100px',marginTop: '100px'}}>
      <ButtonM large >Créer Mission</ButtonM>
      <br></br>  <br></br>  <br></br>
        {/* <h1 style={{color:"black",marginLeft: '350px',marginBottom:"50px",fontSize: '40px',fontWeight:"bold"}}>Liste des bons de caisse</h1> */}
        <BootStrapTable      
        keyField='idMission'
        data={ms}
        columns={columns}
        pagination={paginationFactory()}  
        ></BootStrapTable>
      
        
    </div>
  )
}


export default ListeMs