import React ,{useState,useEffect} from 'react'
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import {Modal , Button } from 'react-bootstrap'

import axios from 'axios'
const TableUser = () => {

    const url="https://localhost:7140/api/Boncaisses";
    const [users,setUsers] =useState([])
    const [modalInfo ,setModalInfo] =useState([])
    const [showModal,setShowModal]=useState(false)
    const [show,setShow] =useState(false)
    const handleShow=()=>setShow(true)
    const handleClose=()=>setShow(false)
    const rowEvents={
        onClick:(e,row)=>{
          setModalInfo(row)
          toggle()
        }
    }
    const toggle=()=>{
        setShowModal(handleShow)
    }
    const ModalContenu=()=>{
        return (
            <Modal
            size="sm"
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            style={{color: "black"}}>
                 <Modal.Header closeButton>
                  <Modal.Title  style={{color: "black"}}>Utilisateur </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>mission</p>
                </Modal.Body>
                <Modal.Footer>
                  
                
                 
                </Modal.Footer>
            </Modal>
          
        )
    }
    useEffect(()=>{
        axios.get(url).then((response) => {
            setUsers(response.data);
         });
    },[])

    const columns=[
        {dataField:"dateMs",text:"Date Mission"},
        {dataField:"libelleBc",text:"Désignation"},
        {dataField:"prenomB",text:"Prénom Bénéficiaire"},
        {dataField:"nomB",text:"Nom Bénéficiaire"},
        {dataField: "totalMs",text:"Débit"},
        {dataField:"creditBc",text:"Crédit"},
        {dataField:"soldeBc",text:"Solde",
        formatter: (cellContent,row) => {
          if ( row.soldeBc< 0) {
            return (
              <span style={{color:"red",fontWeight:"bold"}}>
                {row.soldeBc}
              </span>
            )
          }   
          return(
            <span style={{color:"green",fontWeight:"bold"}}>
              {row.soldeBc} </span>
          )    
      },},
        {dataField: "idBc",text:"Numero Bon Caisse"},
        {dataField: "numMs",text:"Numéro Mission" },
        {dataField:"libelleMs",text:"Objet Mission"},
    ]
    const defaultSorted = [{
      dataField: 'dateMs',
      order: 'desc'
    }];
    
  return (
    <div style={{marginLeft: '100px',marginTop: '100px'}}>
        <h1 style={{color:"black",marginLeft: '350px',marginBottom:"50px",fontSize: '40px',fontWeight:"bold"}}>Caisse Du Mois Octobre 2022</h1>
        <BootStrapTable      
        keyField='idUser'
        data={users}
        columns={columns}
        pagination={paginationFactory()} 
        rowEvents={rowEvents}
        defaultSorted={ defaultSorted } 
        ></BootStrapTable>
        {show ? <ModalContenu></ModalContenu> : null}
        
    </div>
  )
}

export default TableUser