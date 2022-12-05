import React from 'react'
import { useParams } from "react-router-dom";
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import styles from 'styled-components'
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
margin-top:100px;
`
const Div2 = styles.div`
margin-left: 0px;
display:inline-block;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
justify-content:space-between;
margin-top:0px;
padding-left:20px;
`
const H1 = styles.h1`
font-size:20px !important;
color:black;
font-weight:bold;
margin-bottom: 15px !important;
text-align:center !important;
`
const Title = styles.h1`
font-size:20px !important;
color:black;
font-weight:bold;
margin-bottom: 55px !important;
margin-top:20px;
text-align:center !important;
`
const Div=styles.div`
display:flex !important;
margin-left:100px;
margin-bottom:0px;
`
const Div1=styles.div`
display:inline-block;
margin-left:300px;
margin-top:50px;
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
background:#F0F0F0;
font-weight:bold !important;
color:black !important;
font-size:16px;
`
const SelectM=styles.select`
margin-left:50px;
margin-bottom:10px;
margin-top:10px;
height:30px;
width:200px;
text-align: left !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
border: none;
background:#F0F0F0;
font-weight:bold !important;
color:black !important;
font-size:16px;
`
const DivInput=styles.div`
margin-bottom:10px;
margin-top:30px;
`

const Label=styles.label`
display:inline-block;
width: 160px;
font-weight:bold !important;
color:black;
`


const Input=styles.input`
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
font-weight:bold !important;
color:black !important;
font-size:16px;
background:#F0F0F0;
` 
const InputM=styles.input`
margin-left:50px;
margin-bottom:10px;
margin-top:10px;
height:35px;
width:200px;
text-align: left !important;
border: none;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
color:black !important;
background:#F0F0F0;
font-weight:bold !important;
color:black !important;
font-size:16px;
`
const Button=styles.button`
border-width: 0px;
border-style: solid;
font-weight:bold !important;
margin-top:50px;
margin-right:10px;
margin-bottom:50px;
background-color:#B0C4DE ;
height:30px;
width:110px;
text-align:center !important;
cursor:pointer;
&:focus{
outline: none  !important;
}
`

const DetailsBc = () => {

    const {id} = useParams()
    
    const url1=`https://localhost:7111/api/GetBoncaisse2/${id}`
    const url2=`https://localhost:7111/api/SBC/${id}`
    const url3=`https://localhost:7111/api/GetAllPerformedOperations/${id}`
    const [bc,setBc]=useState([])
    const [sbc,setSbc]=useState([])
    const [sbc2,setSbc2]=useState([])
    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);
    const [boncaisseEncourant,setBcEnCourant]=useState()
    const handleCloseA = () => setShowA(false);
    const handleShowA = (id) => {
      setShowA(true)
      setBcEnCourant(id)
    };
    const handleCloseB = () => setShowB(false);
    const handleShowB = (id) => {
      setShowB(true)
      setBcEnCourant(id)
    
    };
    useEffect(()=>{
      axios.get(url1).then((response) => {setBc(response.data)});
      axios.get(url2).then((response)=>  {setSbc(response.data)})
      axios.get(url3).then((response)=>  {setSbc2(response.data)})
   })
  
   var date=moment(bc.dateCreationBc).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
   var time =moment(bc.dateCreationBc).format('YYYY-MM-DDThh:mm:ss').split('T')[1]

    const [users,setUsers]=useState([])
    const [dateSortieCaisse,setDateSortieCaisse]=useState()
    const [dateEntreeCaisse,setDateEntreeCaisse]=useState()
    const [libelleSortieCaisse,setLibelleSortie]=useState("")
    const [libelleEntreeCaisse,setLibelleEntree]=useState("")
    const [creditSortie,setCreditSortie]=useState()
    const [debitEntree,setDebitEntree]=useState()
    const [value,setOptionUser]=useState("")
   

    const columns=[
    
      {dataField:"dateDepense",text:"Date Dépenses",footer:"Total",formatter : (row,cellContent)=>{
        return moment(cellContent.dateDepense).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
      }},
      {dataField:"libelleOp",text:"Projet",footer: ""},
      {dataField:"idMs",text:"N° Mission",footer:""},
      {dataField:"depense",text:"Dépenses",footer: columnData => columnData.reduce((acc, item) => acc + item, 0)},
   ,
  ]
  const columns2=[
    // {dataField:"idSbc",text:"N° Operation"},
   
    {dataField:"dateCreationSbc",text:"Date opération",footer:"Total",formatter : (row,cellContent)=>{
      return moment(cellContent.dateCreationSbc).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
    }},
    {dataField:"type",text:"Libellé",footer:""},
    {dataField:"debit",text:"Débit", footer: columnData => columnData.reduce((acc, item) => acc + item, 0)},
    {dataField:"credit",text:"Crédit",footer:columnData => columnData.reduce((acc, item) => acc + item, 0)}
   
]
console.log(boncaisseEncourant)
 const Encaissement=()=>{
         axios.post('https://localhost:7111/api/SBC',{
          idBonCaisse: boncaisseEncourant,
          credit: 0,
          dateCreation: dateEntreeCaisse,
          debit: debitEntree,
          type:libelleEntreeCaisse
         }).then((response)=>{
          alert("sbc encaissement created successfully")
         })
 }
 const Decaissement=()=>{
  axios.post('https://localhost:7111/api/SBC',{
    idBonCaisse: boncaisseEncourant,
    credit: creditSortie,
    dateCreation: dateSortieCaisse,
    debit: 0,
    type:libelleSortieCaisse
  }).then((response)=>{
   alert("sbc decaissement created successfully")
  })

 }
  return (
    <MainContainer>
   <MainDiv>
    <Div2>
      <Title>Détails du Bon de Caisse {bc.idBonCaisse}</Title>
     <div>
        
        <DivInput>
            <Label>Date Creation </Label>
             <Input type="text" disabled value={date}></Input>
        </DivInput>
        <DivInput>
            <Label>Opération </Label>
             {bc.libellé =="1" ? <> <Input type="text" disabled value='Réglement Facture'></Input></> : null}
             {bc.libellé =="2" ? <> <Input type="text" disabled value='Frais OM'></Input></> : null}
             {bc.libellé =="3" ? <> <Input type="text" disabled value='Frais Femme Ménage'></Input></> : null}
             {bc.libellé =="4" ? <> <Input type="text" disabled value='Avance sur Salaire'></Input></> : null}
             {bc.libellé =="5" ? <> <Input type="text" disabled value='Achat'></Input></> : null}
        </DivInput>
       
        <DivInput>
            <Label>Bénéficiaire </Label>
            <Input type="text" disabled value={bc.beneficiaire}></Input>
        </DivInput>
        <DivInput>
            <Label>Missions </Label>
            <Select>
              {sbc.map((s)=>{return( <><option>{s.idMs}</option></>)})}
            </Select>
        </DivInput>
        
       <Div>
       <Button onClick={()=>handleShowA(bc.idBonCaisse)}>Décaissement</Button>
       <Button onClick={()=>handleShowB(bc.idBonCaisse)}>Encaissement</Button>
       <Button >Modifier</Button>
       <Button l onClick={()=>{alert("")}}><IconContext.Provider value={{ color: 'black', size: '20px'}}>
       <FaBalanceScale onClick={()=>{alert("solder")}}></FaBalanceScale>
      </IconContext.Provider></Button>
       
       </Div>
       </div>
       {/* {showC ? <div>
        <label>Crédit</label>
        <input type='text'></input></div> : null} */}
        <Modal
        aria-labelledby="contained-modal-title-vcenter"
        className="special_modal"
        show={showA}
        onHide={handleCloseA}
        backdrop="static"
        keyboard={false}
        style={{color: "black"}}>
         
         <Modal.Header closeButton variant="white">
                  <Modal.Title  style={{color: "black",fontWeight: "bold"}}>Sortie de Caisse</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <DivInput>
                      <Label>Date Creation</Label>
                      <InputM type="date" onChange={(e)=>setDateSortieCaisse(e.target.value)}/>
                    </DivInput>
                    <DivInput>
                      <Label>Crédit</Label>
                      <InputM type="text"placeholder='entrer le crédit' onChange={(e)=>setCreditSortie(e.target.value)}/>
                    </DivInput>
                      <DivInput>
                      <Label> Libellé Décaissements :</Label>
                        <SelectM onChange={(e)=>setLibelleSortie(e.target.value)}>
                        <option>Avance sur salaire</option>
                        <option>Réglement Facture</option>
                        <option>Achat Administratif</option>
                        <option>Achat Technique</option>
                        <option>Faris de Femme Menage</option>
                        <option>Autres Achats</option>
                        <option>Frais envoie de courriers</option>
                        <option>Frais OM</option>
                        </SelectM>
                      </DivInput>
                      {/* <DivInput>
                      <Label>Désignation</Label>
                    <InputM type="text" placeholder='entrer une désignation'/> 
                    </DivInput> */}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="success" onClick={Decaissement} >Valider</Button>
                 
                </Modal.Footer>
         
         </Modal>
         <Modal
        aria-labelledby="contained-modal-title-vcenter"
        className="special_modal"
        show={showB}
        onHide={handleCloseB}
        backdrop="static"
        keyboard={false}
        style={{color: "black"}}>
         
         <Modal.Header closeButton variant="white">
                  <Modal.Title  style={{color: "black",fontWeight: "bold"}}>Entrée de Caisse</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <DivInput>
                      <Label>Date Creation</Label>
                      <InputM type="date" onChange={(e)=>setDateEntreeCaisse(e.target.value)}/>
                    </DivInput>
                    <DivInput>
                      <Label>Débit</Label>
                      <InputM type="text"placeholder='entrer le débit' onChange={(e)=>setDebitEntree(e.target.value)}/> 
                    </DivInput>
                      <DivInput>
                      <Label> Libellé Encaissements :</Label>
                        <SelectM onChange={(e)=>{setLibelleEntree(e.target.value)}}>
                        <option>Remboursement d'une Avance sur salaire</option>
                        <option>Remboursement reçu/BC non dépensé</option>
                        <option>Argent restant d'une mission</option>
                        
                        </SelectM>
                      </DivInput>
                      {/* <DivInput>
                      <Label>Désignation</Label>
                    <InputM type="text" placeholder='entrer une désignation'/> 
                    </DivInput> */}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="success" onClick={Encaissement}>Valider</Button>
                 
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
    <H1>Tableau Débit/Crédit</H1>
    <BootStrapTable      
     keyField='idSBonCaisse'
     data={sbc2}
     columns={columns2}
     pagination={paginationFactory({
      sizePerPageList: [ {
        text: '5', value: 5
      }, {
        text: '10', value: 10
      }, {
        text: '20', value: 20
      },
      {
        text: '50', value: 50
      },
      {
        text: 'All', value: sbc2.length
      } ], 
   
      withFirstAndLast: false,
      alwaysShowAllBtns: true, 
      hideSizePerPage:true,
      prePageText: 'Prev', 
      nextPageText: 'Next',
     
      
     
    })}
     headerClasses="header-class"
     rowClasses="row-class"  
     ></BootStrapTable>
     <br></br> <br></br> <br></br>
     <H1>Tableau dépenses</H1>
     <BootStrapTable      
     keyField='idSBc'
     data={sbc}
     columns={columns}
     pagination={paginationFactory({
      sizePerPageList: [ {
        text: '5', value: 5
      }, {
        text: '10', value: 10
      }, {
        text: '20', value: 20
      },
      {
        text: '50', value: 50
      },
      {
        text: 'All', value: sbc.length
      } ], 
   
      withFirstAndLast: false,
      alwaysShowAllBtns: true, 
      hideSizePerPage:true,
      prePageText: 'Prev', 
      nextPageText: 'Next',
      
      
     
    })}  
     headerClasses="header-class"
     rowClasses="row-class"
     ></BootStrapTable>
 
    
  </Div1>
     </MainContainer>
  )
}

export default DetailsBc