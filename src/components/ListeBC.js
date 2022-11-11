import React ,{useState,useEffect} from 'react'
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {ButtonM } from './StyleMsC';
import moment from 'moment';
const ListeBC = () => {
    const navigate = useNavigate()
    const ButtonCell=(cell, row, rowIndex, formatExtraData)=>{
        return (
            <button  onClick={()=>navigate(`/detailbc/${row.idBonCaisse}`)  }>Details</button>
        )
        
        }
    const url="https://localhost:7111/api/Boncaisses"
    const [bc,setBc]=useState([])
    useEffect(()=>{
        axios.get(url).then((response) => {
            setBc(response.data);
         });
       
    },[])
    const columns=[
        {dataField:"idBonCaisse",text:"Numero "},
        {dataField:"dateCreation",text:"Date Creation",formatter : (row,cellContent)=>{
          return moment(cellContent.dateCreation).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
        }},
        {dataField:"libellé",text:"Libellé"},
        {dataField:"créditTotal",text:"Crédit Total"},
        {dataField:"soldeTotal",text:" Solde"},
        {dataField:"etat",text:"Etat", formatter: (cellContent ,row) => {
            if ( row.etat==0) {
              return (
                <span style={{color:"red",fontWeight:"bold"}}>
                  non soldé
                </span>
              )
            }   
            return(
              <span style={{color:"green",fontWeight:"bold"}}>
               soldé </span>
            )    
        },},
        {datafield:"Details",text:"Details", formatter: ButtonCell}
    ]
  return (
    <div style={{marginLeft: '100px',marginTop: '100px'}}>
      <ButtonM large >Créer Bon de caisse</ButtonM>
      <br></br>  <br></br>  <br></br>
        {/* <h1 style={{color:"black",marginLeft: '350px',marginBottom:"50px",fontSize: '40px',fontWeight:"bold"}}>Liste des bons de caisse</h1> */}
        <BootStrapTable      
        keyField='idBonCaisse'
        data={bc}
        columns={columns}
        pagination={paginationFactory()}  
        ></BootStrapTable>
      
        
    </div>
  )
}

export default ListeBC