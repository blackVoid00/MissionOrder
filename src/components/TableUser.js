import React ,{useState,useEffect} from 'react'
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import {Modal , Button } from 'react-bootstrap'

import axios from 'axios'
const TableUser = () => {

    const url="https://localhost:7048/api/Utilisateurs";
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
                  <Modal.Title  style={{color: "black"}}>Utilisateur : {modalInfo.nom}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Cin :  {modalInfo.cin}</p>
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
        {dataField:"idUser",text:"Id User"},
        {dataField:"matricule",text:"Matricule User"},
        {dataField:"nom",text:"Nom User" },
        {dataField:"prenom",text:"Prenom User"},
        {dataField:"dateDebutContrat",text:"Debut Contrat User"},
        {dataField:"dateFinContrat",text:"Debut Contrat User"},
        {dataField:"mail",text:"Mail User"},
        {dataField:"identifiant",text:"Identfiant User"},
        {dataField:"numeroTel",text:"Numéro Tel"}
    ]
  return (
    <div style={{marginLeft: '100px',marginTop: '100px'}}>
        <h1 style={{color:"black",marginLeft: '350px',marginBottom:"50px",fontSize: '40px',fontWeight:"bold"}}>Liste des Utilisateurs</h1>
        <BootStrapTable
        keyField='idUser'
        data={users}
        columns={columns}
        pagination={paginationFactory()} 
        rowEvents={rowEvents}
        ></BootStrapTable>
        {show ? <ModalContenu></ModalContenu> : null}
        
    </div>
  )
}

export default TableUser