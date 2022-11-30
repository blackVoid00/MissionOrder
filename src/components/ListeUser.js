import React ,{useState,useEffect} from 'react'
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import moment from 'moment'
import {AiOutlineUserAdd,AiFillEye,AiOutlineFilter} from "react-icons/ai"
import {MdDoNotDisturbOn,MdCheckCircle} from "react-icons/md"
import "./tableStyle.css"
import { IconContext } from 'react-icons'
import {BiExport} from 'react-icons/bi';
import {ButtonM, Div1, InputDate, InputM , LabelM,Select ,LabelR,Label1,Label2} from './StyleMsC';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import styles from "styled-components"

const H1=styles.h1`
color:black;
font-weight:bold !important;
font-size:30px !important;
margin-top:120px;`



const ListeUser = () => {
  const [checkBox,setCheckBox]=useState(false)
  const CheckOneTime=(element)=>{
    var tab = document.getElementsByName("checkbox");
    for(let i=0;i<tab.length;i++){
      tab[i].checked=false;
    }
    element.target.checked=true;
  }
  const { ExportCSVButton } = CSVExport;
    const navigate = useNavigate()
    const ButtonCell=(cell, row, rowIndex, formatExtraData)=>{
        return (
           <IconContext.Provider value={{ color: '#1c539b',size:"20px"}}><AiFillEye  onClick={()=>navigate(`/editUser/${row.infoId}`)  }/></IconContext.Provider>
        )
        
        }
    const url="https://localhost:7111/api/Utilisateurs/"
    const [user,setUser]=useState([])
    useEffect(()=>{
        axios.get(url).then((response) => {
            setUser(response.data);
         });
       
    },[])
    const columns=[
        {dataField:"infoNom",text:"Utilisateur"},
        {dataField:"infoMatricule",text:"Matricule"},
        {dataField:"infoMail",text:"Email"},
        {dataField:"infoIdentifiant",text:"Identifiant"},
        {dataField:"infoCin",text:"Cin"},
        {dataField:"infoLibelle",text:"Service"},
        {dataField:"infoNumeroTel",text:"N° Tél"},
        {dataField:"infoDateDebutContrat",text:"Début Contrat",formatter : (row,cellContent)=>{
          return moment(cellContent.dateDebutContrat).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
        }},
        {dataField:"infoDateFinContrat",text:"Fin Contrat",formatter : (row,cellContent)=>{
          return moment(cellContent.dateFinContrat).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
        }},
        {dataField:"infoRole",text:"Role", formatter: (cellContent ,row) => {
          if ( row.infoRole =="0") {
            return (
              <span >
                Utilisateur
              </span>
            )
          }   if ( row.infoRole =="1") {
            return (
              <span >
               Superviseur
              </span>
            )
          }
          if ( row.infoRole =="2") {
            return (
              <span>
               Administrateur
              </span>
            )
          }    
           
      },},
        {dataField:"infoStatus",text:"Statut",formatter: (cellContent ,row) => {
            if ( row.infoStatus == "1") {
              return (
               <IconContext.Provider value={{color:"#b71c1c",size:"20px"}}><MdDoNotDisturbOn /></IconContext.Provider>
              
              )
            }   
            return(
              <IconContext.Provider value={{color:"green",size:"20px"}}><MdCheckCircle/></IconContext.Provider>
            )    
        },},
        {datafield:"Actions",text:"Consulter",  csvExport: false,formatter: ButtonCell}
    ]
  return (
    <div style={{marginTop: '20px'}}>
    <div  style={{display:"inline-block",width:"auto"}}>
    <div style={{display:"flex"}}>
      <H1>Tableau Des Utilisateurs</H1>
         <div style={{display:"inline-block",height:"300px" ,marginLeft:"260px", width:"820px",backgroundColor:"white",boxShadow: "0 6px 10px 0 rgba(0, 0, 0 , .1)"}}>
            <div style={{backgroundColor:"#1c539b"}}><p style={{opacity:"0"}}>hey</p></div>
            <Div1>
             <LabelM l w>Matricule</LabelM>
             <Select>
             {user.map((user) => {return(
                      <>
                      <option value={user.infoMatricule}>{user.infoMatricule}</option>
                      </>
                 )})}
             </Select>
             <ButtonM><IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter></AiOutlineFilter></IconContext.Provider></ButtonM>
            </Div1>
            <Div1>
             <LabelM l w>Utilisateur</LabelM>
             <Select>
             {user.map((user) => {return(
                      <>
                      <option value={user.infoId}>{user.infoNom}</option>
                      </>
                 )})}
             </Select>
             <ButtonM><IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter></AiOutlineFilter></IconContext.Provider></ButtonM>
            </Div1>
           
            <Div1>
             <LabelM l w>Service</LabelM>
             <Select>
             
                      <>
                      <option value='1'>Département ingénierie informatique</option>
                      <option value='2'> Département technique</option>
                      <option value='3'>Département Administratif</option>
                      <option value='5'> Département commercial</option>
                      </>
             
             </Select>
             <ButtonM><IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter></AiOutlineFilter></IconContext.Provider></ButtonM>
            </Div1>
            <br></br>  <br></br> 
            <div style={{display:"flex"}}>
              <LabelR w>Statut</LabelR>
               <div style={{display:"flex"}}>
               <div style={{display:"flex"}}>
                <Label1>Interdit</Label1>&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="checkbox" name="checkbox" onChange={(e)=>setCheckBox(e.target.checked)} onClick={CheckOneTime}></input>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div style={{display:"flex"}}>
                <Label2 >Autorisé</Label2>
                <input type="checkbox" name="checkbox" onChange={(e)=>setCheckBox(e.target.checked)} onClick={CheckOneTime} ></input>&nbsp;&nbsp;&nbsp;
                <IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter></AiOutlineFilter></IconContext.Provider>
                </div>
                
               </div>
               
            </div>
            <div style={{marginLeft:"700px",marginTop:"0px",marginBottom:"50px"}}>
            <ButtonM>Filter All &nbsp;<IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter></AiOutlineFilter></IconContext.Provider></ButtonM>
            </div>
             </div>
            </div>
         
      <div style={{marginTop: '30px'}}>
       
          {/* <h1 style={{color:"black",marginLeft: '350px',marginBottom:"50px",fontSize: '40px',fontWeight:"bold"}}>Liste des bons de caisse</h1> */}
          
          <ToolkitProvider
      keyField='idMission'
      data={user}
      columns={columns}
     
    exportCSV
  >
    {
      props => (
        <>
       
           <div style={{display: 'flex',justifyContent:"space-between"}}>
           <ButtonM large onClick={()=>navigate('/creerMs')}><IconContext.Provider value={{ color: '#1c539b',size:"35px" }}><AiOutlineUserAdd/></IconContext.Provider>&nbsp; Ajouter</ButtonM>
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
          text: 'All', value: user.length
        } ], 
     
        withFirstAndLast: false,
        alwaysShowAllBtns: true, 
        hideSizePerPage:true,
        prePageText: 'Prev', 
        nextPageText: 'Next',
     
       
        
       
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
  )
}


export default ListeUser