import React ,{useState,useEffect} from 'react'
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import moment from 'moment'
import {AiOutlineFileAdd,AiFillEye,AiFillCheckCircle,AiOutlineFileDone,AiOutlineFilter} from "react-icons/ai"
import {ButtonM, Div1, InputDate, InputM , LabelM,Select ,LabelR,Label1,Label2} from './StyleMsC';
import { IconContext } from 'react-icons/lib';
import {BiLoaderCircle} from 'react-icons/bi';
import {MdRemoveDone} from 'react-icons/md';
import {ImCancelCircle} from 'react-icons/im';
const ListeMs = () => {
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
         {dataField:"idMission",text:"N° Mission",footer:""},
         {dataField:"idSbonCaisse",text:"N° Bon caisse",footer:""},
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
        {datafield:"Actions",text:"Consulter",footer:"", formatter: ButtonCell}
    ]
  return (
  <>
  <div style={{marginLeft: '50px',marginTop: '100px'}}>
  <div  style={{display:"flex",width:"auto"}}>
     
       <div style={{display:"inline-block" , width:"460px",backgroundColor:"white",boxShadow: "0 6px 10px 0 rgba(0, 0, 0 , .1)"}}>
          <div style={{backgroundColor:"#1c539b"}}><p style={{opacity:"0"}}>hey</p></div>
          <div style={{display:"flex",marginLeft: '10px'}}>
          <Div1>
           <LabelM l w>Du</LabelM>
           <InputDate b type="date"></InputDate>
          </Div1>
          <Div1>
           <LabelM l w>Au</LabelM>
           <InputDate b type="date"></InputDate>
          </Div1>
          <div  style={{marginTop:"50px",marginRight:'50px'}}>
          <IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter></AiOutlineFilter></IconContext.Provider>
          </div>
          </div>
          <Div1>
           <LabelM l w>Date</LabelM>
           <InputM b type="date"></InputM>&nbsp;
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
              <Label1> Soldé</Label1>
              <input type="checkbox" name="checkbox" onChange={(e)=>setCheckBox(e.target.checked)} onClick={CheckOneTime}></input>
              </div>
              &nbsp;&nbsp;
              <div style={{display:"flex"}}>
              <Label2 >Non Soldé</Label2>
              <input type="checkbox" name="checkbox" onChange={(e)=>setCheckBox(e.target.checked)} onClick={CheckOneTime} ></input>&nbsp;&nbsp;&nbsp;
              <IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter></AiOutlineFilter></IconContext.Provider>
              </div>
              
             </div>
             
          </div>
          <div style={{marginLeft:"300px",marginTop:"30px",marginBottom:"50px"}}>
          <ButtonM>Filter All &nbsp;<IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter></AiOutlineFilter></IconContext.Provider></ButtonM>
          </div>
           </div>
       
    <div style={{marginLeft: '50px',marginTop: '30px'}}>
      <ButtonM large onClick={()=>navigate('/creerMs')}><IconContext.Provider value={{ color: '#1c539b',size:"35px" }}><AiOutlineFileAdd/></IconContext.Provider>&nbsp; Ajouter</ButtonM>
      <br></br>  <br></br>  <br></br>
        {/* <h1 style={{color:"black",marginLeft: '350px',marginBottom:"50px",fontSize: '40px',fontWeight:"bold"}}>Liste des bons de caisse</h1> */}
        <BootStrapTable      
        keyField='idMission'
        data={ms}
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
        rowClasses="row-class" 
        ></BootStrapTable> 
       </div>
       </div> 
    </div>
    </>
  )
}


export default ListeMs