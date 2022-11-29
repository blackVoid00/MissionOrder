import React ,{useState,useEffect} from 'react'
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import moment from 'moment'
import {AiOutlineFileAdd,AiFillEye,AiFillCheckCircle,AiOutlineFileDone,AiOutlineFilter} from "react-icons/ai"
import {ButtonM, Div1, InputDate, InputM , LabelM,Select ,LabelR,Label1,Label2} from './StyleMsC';
import { IconContext } from 'react-icons/lib';
import {BiLoaderCircle,BiExport} from 'react-icons/bi';
import {MdRemoveDone} from 'react-icons/md';
import {ImCancelCircle} from 'react-icons/im';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import styles from "styled-components"

const H1=styles.h1`
color:black;
font-weight:bold !important;
font-size:30px !important;
margin-top:120px;
`
const ListeMs = () => {
  const { ExportCSVButton } = CSVExport;
    const navigate = useNavigate()
    const [checkBox,setCheckBox]=useState(false)
    const CheckOneTime=(element)=>{
      var tab = document.getElementsByName("checkbox");
      for(let i=0;i<tab.length;i++){
        tab[i].checked=false;
      }
      element.target.checked=true;
    }
    const urlUser="https://localhost:7111/api/Utilisateurs"
    const [users,setUsers]=useState([])
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
         axios.get(urlUser).then((response) => {

          setUsers(response.data)
 
           });
       
    },[])
    const columns=[
      {dataField:"dateCreation",text:"Date Creation", footer:"Total",formatter : (row,cellContent)=>{
        return moment(cellContent.dateCreation).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
      }},
      {dataField:"beneficiaire",text:"Bénéficiaire",footer:""},
         {dataField:"idBonCaisse",text:"N° Bon caisse",footer:""},
        {dataField:"typeOperation",text:"Type Opération",formatter: (cellContent ,row) => {
          if ( row.typeOperation==1) {
            return (
              <span>Réglement Facture</span>
            )
          }   
          if ( row.typeOperation==2) {
            return (
              <span>Frais OM</span>
            )
          }  if ( row.typeOperation==3) {
            return (
              <span>Frais femme ménage</span>
            )
          }  if ( row.typeOperation==4) {
            return (
              <span>Avance Sur salaire</span>
            )
          }  if ( row.typeOperation==5) {
            return (
              <span>Achats</span>
            )
          }    
      },footer:""},
      {dataField:"idMission",text:"N° Mission",footer:""},
        {dataField:"objetMission",text:"Projet",footer:""},
        {dataField:"totalMission",text:"Total Dépenses", footer: columnData => columnData.reduce((acc, item) => acc + item, 0)},
        {dataField:"valideResponsable",text:"ValiderResp",footer:"", formatter: (cellContent ,row) => {
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
        {dataField:"valideRh",text:"ValiderAdmin",footer:"", formatter: (cellContent ,row) => {
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
        {dataField:"etatMission",text:"Statut",footer:"", formatter: (cellContent ,row) => {
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
        {datafield:"Actions",text:"Consulter", csvExport: false,footer:"", formatter: ButtonCell}
    ]
  return (
  <>
  <div style={{marginTop: '20px'}}>
  <div  style={{display:"inline-block",width:"auto"}}>
  <div style={{display:"flex"}}>
    <H1>Tableau Des Ordres de Missions</H1>
       <div style={{display:"inline-block",height:"auto" ,marginLeft:"260px", width:"auto",backgroundColor:"white",boxShadow: "0 6px 10px 0 rgba(0, 0, 0 , .1)"}}>
          <div style={{backgroundColor:"#1c539b"}}><p style={{opacity:"0"}}>hey</p></div>
          <div style={{display:"flex",marginLeft: '10px'}}>
          <Div1>
           <LabelM l w>Du</LabelM>
           <InputDate b type="date"></InputDate>
          </Div1>
          <Div1>
           <LabelM l w>Au</LabelM>
           <InputDate b type="date"></InputDate>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter></AiOutlineFilter></IconContext.Provider>
          </Div1>
         
         
        
          </div>
          <Div1>
           <LabelM l w>Date</LabelM>
           <InputM b type="date"></InputM>&nbsp;&nbsp;&nbsp;
          <IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter></AiOutlineFilter></IconContext.Provider>
   
          </Div1>
          <Div1>
           <LabelM l w>Bénéficiaire</LabelM>
           <Select>
           {users.map((user) => {return(
                    <>
                    <option value={user.infoId}>{user.infoNom} &nbsp;{user.infoPrenom}</option>
                    </>
               )})}
           </Select>
           <ButtonM><IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter></AiOutlineFilter></IconContext.Provider></ButtonM>
          </Div1>
         
        
          <br></br>  <br></br> 
          <div style={{display:"flex"}}>
            <LabelR w>Statut</LabelR>
             <div style={{display:"flex"}}>
             <div style={{display:"flex"}}>
              <Label1>Fermée</Label1>&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="checkbox" name="checkbox" onChange={(e)=>setCheckBox(e.target.checked)} onClick={CheckOneTime}></input>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div style={{display:"flex"}}>
              <Label2 >Ouverte</Label2>
              <input type="checkbox" name="checkbox" onChange={(e)=>setCheckBox(e.target.checked)} onClick={CheckOneTime} ></input>&nbsp;&nbsp;&nbsp;
              <IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter></AiOutlineFilter></IconContext.Provider>
              </div>
              
             </div>
             
          </div>
          <div style={{marginLeft:"700px",marginTop:"30px",marginBottom:"50px"}}>
          <ButtonM>Filter All &nbsp;<IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter></AiOutlineFilter></IconContext.Provider></ButtonM>
          </div>
           </div>
          </div>
       
    <div style={{marginTop: '30px'}}>
     
        {/* <h1 style={{color:"black",marginLeft: '350px',marginBottom:"50px",fontSize: '40px',fontWeight:"bold"}}>Liste des bons de caisse</h1> */}
        
        <ToolkitProvider
    keyField='idMission'
    data={ms}
    columns={columns}
   
  exportCSV
>
  {
    props => (
      <>
     
         <div style={{display: 'flex',justifyContent:"space-between"}}>
         <ButtonM large onClick={()=>navigate('/creerMs')}><IconContext.Provider value={{ color: '#1c539b',size:"35px" }}><AiOutlineFileAdd/></IconContext.Provider>&nbsp; Ajouter</ButtonM>
         <ExportCSVButton { ...props.csvProps }><IconContext.Provider value={{color:"#1c539b",size:"30px"}}><BiExport/></IconContext.Provider>&nbsp;Exporter csv</ExportCSVButton>
         </div>
         <br></br><br></br>
      <BootStrapTable      
    { ...props.baseProps }
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
        text: 'All', value: ms.length
      } ], 
   
      withFirstAndLast: false,
      alwaysShowAllBtns: true, 
      firstPageText: 'First', 
      prePageText: 'Prev', 
      nextPageText: 'Next',
      lastPageText: 'Last',
      nextPageTitle: 'Go to next',
      prePageTitle: 'Go to previous', 
      firstPageTitle: 'Go to first', 
      lastPageTitle: 'Go to last', 
      
     
    })} 
    headerClasses="header-class"
    rowClasses="row-class" ></BootStrapTable> 
     
  </>
     
    )
  }
</ToolkitProvider>
</div>
       </div>
       </div> 
   
    </>
  )
}


export default ListeMs