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
import {FaBalanceScale} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import moment from 'moment';
import { Modal } from 'react-bootstrap';
const MainContainer = styles.div`
display:flex;
`
const MainDiv = styles.div`
display:flex;
margin-left:0px;
margin-top:160px;
`
const Div2 = styles.div`
margin-left: 20px;
display:inline-block;
border:2px solid black;

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
display:flex !important;
margin-left:200px;
`
const Div1=styles.div`
display:inline-block;
margin-left:40px;
margin-top:250px;
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
const SelectM=styles.select`
margin-left:50px;
margin-bottom:10px;
margin-top:10px;
height:30px;
width:200px;
text-align: left !important;
border: 1px solid black !important;
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
height:40px;
width:300px;
text-align: left !important;
border: 10px solid transparent  !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
font-weight:bold !important;
color:black !important;
font-size:16px;
`
const InputM=styles.input`
margin-left:50px;
margin-bottom:10px;
margin-top:10px;
height:35px;
width:200px;
text-align: left !important;
border: 1px solid black !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
color:black !important;

`
const Button=styles.button`
position: relative;
border-width: 0px;
border-style: solid;
font-weight:bold !important;
margin-top:50px;
margin-left:10px;
margin-bottom:50px;
background-color:#B0C4DE ;
height:30px;
width:200px;
text-align:center !important;
cursor:pointer;
&:focus{
outline: none  !important;
}
`

const DetailsBc = () => {

    const {id} = useParams()
    
    const url1=`https://localhost:7111/api/Boncaisses/${id}`
    const url2=`https://localhost:7111/api/SBC/${id}`
    const [bc,setBc]=useState([])
    const [sbc,setSbc]=useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(()=>{
      axios.get(url1).then((response) => {setBc(response.data)});
      axios.get(url2).then((response)=>  {setSbc(response.data)})
   })
  
   var date=moment(bc.dateCreationBc).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
   var time =moment(bc.dateCreationBc).format('YYYY-MM-DDThh:mm:ss').split('T')[1]

    const [users,setUsers]=useState([])
    const [dateC,setDateC]=useState("")
    const [dateE,setDateE]=useState("")
    const [value,setOptionUser]=useState("")
    const [libelle,setOptionLibelle]=useState("")

    const columns=[
      // {dataField:"idSbc",text:"N° Operation"},
     
      {dataField:"dateSbc",text:"Date opération"},
      {dataField:"type",text:"Type  Operation"},
      {dataField:"creditSbc",text:"Crédit"},
      {dataField:"debit",text:"Débit"},
      {dataField:"dateDepense",text:"Date Dépenses"},
      {dataField:"idMs",text:"N° Mission"},
      {dataField:"libelleOp",text:"Projet Mission"},
      {dataField:"depense",text:"Dépenses"},
  ]
  // , formatter:
  //     (row,cellContent) =>{
  //       return(
  //         <>
  //         {moment(row.dateDepense).format('YYYY-MM-DDThh:mm:ss').split('T')[0] }
  //         </>
  //       )}
  return (
    <MainContainer>
   <MainDiv>
    <Div2>
         <DivInput>
            <Label>N° Bon de caisse :</Label>
             <Input type="text" disabled value={bc.idBonCaisse} ></Input>
        </DivInput>
        <DivInput>
            <Label>Date Creation :</Label>
             <Input type="text" disabled value={date}></Input>
        </DivInput>
        <DivInput>
            <Label>Heure Creation:</Label>
             <Input type="text" disabled value={time}></Input>
        </DivInput>
        <DivInput>
            <Label>Libellé :</Label>
             <Input type="text" disabled value={bc.libellé}></Input>
        </DivInput>
       
        <DivInput>
            <Label>Bénéficiaire :</Label>
            <Input type="text" disabled value={bc.beneficiaire}></Input>
        </DivInput>
        <DivInput>
            <Label>Missions :</Label>
            <Select>
              {sbc.map((s)=>{return( <><option>{s.idMs}</option></>)})}
            </Select>
        </DivInput>
        
       <Div>
       <Button onClick={handleShow}>Ajouter/Retirer</Button>
       <Button onClick={()=>{alert("")}}><IconContext.Provider value={{ color: 'black', size: '20px'}}>
       <FaBalanceScale onClick={()=>{alert("solder")}}></FaBalanceScale>
      </IconContext.Provider></Button>
       
       </Div>
       {/* {showC ? <div>
        <label>Crédit</label>
        <input type='text'></input></div> : null} */}
        <Modal
        aria-labelledby="contained-modal-title-vcenter"
        size="lg"
        className="special_modal"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{color: "black"}}>
         
         <Modal.Header closeButton variant="white">
                  <Modal.Title  style={{color: "black",fontWeight: "bold"}}>Opérations</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <DivInput>
                      <Label>Date Creation</Label>
                      <InputM type="date"/>
                    </DivInput>
                    <DivInput>
                      <Label>Crédit</Label>
                      <InputM type="text"placeholder='entrer le crédit'/>
                    </DivInput>
                    <DivInput>
                      <Label>Débit</Label>
                      <InputM type="text" placeholder='entrer le débit'/> 
                    </DivInput>
                  
                      <Label>Type Opération :</Label>
                      <DivInput>
                        <Label>Les sorties de caisse liées aux OM :</Label>
                        <SelectM>
                        <option>Déplacements </option>
                        <option>Frais de taxis</option>
                        <option>Frais d’envoi de courriers </option>
                        </SelectM>
                      </DivInput>
                      <DivInput>
                        <Label>Autres sorties de caisse : </Label>
                        <SelectM>
                        <option>Règlement de facture </option>
                        <option>Achat administratif</option>
                        <option>Achat technique </option>
                        <option>Autres Achats </option>
                        <option>Frais de femme de ménage</option>
                        <option>Avance sur salaire  </option>
                        </SelectM>
                      </DivInput>
                      <DivInput>
                        <Label>Entrées de caisse : </Label>
                        <SelectM>
                        <option>Mise à disposition BQ </option>
                        <option>Remboursement avance sur salaire</option>
                        </SelectM>
                      </DivInput>
                 
                    
                </Modal.Body>
                <Modal.Footer>
                  
                  <Button variant="success" >Soumettre</Button>
                 
                </Modal.Footer>
         
         </Modal>
       </Div2>
      {/* <div><Button onClick={()=>{alert("")}}>Ajouter</Button><IconContext.Provider value={{ color: 'white', size: '25px'}}>
      <GrFormAdd ></GrFormAdd>
      </IconContext.Provider></div>
      <div><Button onClick={()=>{alert("")}}>Retirer</Button><IconContext.Provider value={{ color: 'black', size: '25px'}}>
      <AiOutlineMinusCircle ></AiOutlineMinusCircle>
      </IconContext.Provider></div> */}
   </MainDiv>
    <Div1>
    <h1 style={{color:"black",fontWeight:"bold",fontSize:"20px" ,marginBottom:"50px"}}>Operations effectuées sur le bon caisse N° {id}:</h1>
     <BootStrapTable      
     keyField='idSBc'
     data={sbc}
     columns={columns}
     pagination={paginationFactory()}  
     ></BootStrapTable>
 
    </Div1>
  
     </MainContainer>
  )
}

export default DetailsBc