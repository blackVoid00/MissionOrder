import React ,{useState,useEffect} from 'react'
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {ButtonM, Div1, InputDate, InputM , LabelM,Select ,LabelR,Label1,Label2} from './StyleMsC';
import moment from 'moment';
import {AiOutlineFileAdd,AiFillEye,AiOutlineFilter} from "react-icons/ai"
import {TbDiscount,TbDiscOff}  from "react-icons/tb"
import {MdMoneyOffCsred}  from "react-icons/md"
import {FaBalanceScale}  from "react-icons/fa"
import { IconContext } from 'react-icons/lib';
import {BiExport} from 'react-icons/bi';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
const ListeBC = () => { 
  const { ExportCSVButton } = CSVExport;
  const urlUser="https://localhost:7111/api/Utilisateurs"
  const [users,setUsers]=useState([])
    const navigate = useNavigate()
    const [checkBox,setCheckBox]=useState(false)
    const ButtonCell=(cell, row, rowIndex, formatExtraData)=>{
        return (
            
            <IconContext.Provider value={{ color: '#1c539b',size:"20px" }}><AiFillEye   onClick={()=>navigate(`/detailbc/${row.idBonCaisse}`)  }/></IconContext.Provider>
        )
        
        }
      const CheckOneTime=(element)=>{
          var tab = document.getElementsByName("checkbox");
          for(let i=0;i<tab.length;i++){
            tab[i].checked=false;
          }
          element.target.checked=true;
        }
    const url="https://localhost:7111/api/Boncaisses"
    const [bc,setBc]=useState([])
    useEffect(()=>{
        axios.get(url).then((response) => {
            setBc(response.data);
         });
         axios.get(urlUser).then((response) => {

          setUsers(response.data)
 
           });
       
    },[])
    const columns=[
        {dataField:"dateCreation",text:"Date Création",footer:"Total",formatter : (row,cellContent)=>{
          return moment(cellContent.dateCreation).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
        }, sort: true},
        {dataField:"idBonCaisse",text:"N° Bc ",footer:"", sort: true },
        {dataField:"beneficiaire",footer:"",text:"Bénéficiaire"},
       
        {dataField:"libellé",text:"Type Opération",footer:"" ,formatter: (cellContent ,row) => {
          if ( row.libellé==1) {
            return (
              <span>Réglement Facture</span>
            )
          }   
          if ( row.libellé==2) {
            return (
              <span>Frais OM</span>
            )
          }  if ( row.libellé==3) {
            return (
              <span>Frais femme ménage</span>
            )
          }  if ( row.libellé==4) {
            return (
              <span>Avance Sur salaire</span>
            )
          }  if ( row.libellé==5) {
            return (
              <span>Achats</span>
            )
          }    
      }},
        
        {dataField:"soldeTotal",text:"Total Débit", footer: columnData => columnData.reduce((acc, item) => acc + item, 0),formatter: (cellContent ,row) => {
          if ( row.soldeTotal==0) {
            return (
              <IconContext.Provider value={{color:"#b71c1c",size:"20px"}}>
              <MdMoneyOffCsred/>
              </IconContext.Provider>
            )
          }   
          return(
           <span>{row.soldeTotal}</span>
          )    
      }},{dataField:"créditTotal",text:"Total Crédit ", footer: columnData => columnData.reduce((acc, item) => acc + item, 0),formatter: (cellContent ,row) => {
        if ( row.créditTotal==0) {
          return (
            <IconContext.Provider value={{color:"#b71c1c",size:"20px"}}>
            <MdMoneyOffCsred/>
            </IconContext.Provider>
          )
        }   
        return(
         <span>{row.créditTotal}</span>
        )    
    }},
       
        {dataField:"etat",text:"Statut",footer:"", formatter: (cellContent ,row) => {
            if ( row.etat==0) {
              return (
                <IconContext.Provider value={{color:"#b71c1c",size:"20px"}}>
                <TbDiscount/>
                </IconContext.Provider>
              )
            }if ( row.etat==1){  
            return(
              <IconContext.Provider value={{color:"green",size:"20px"}}>
              <FaBalanceScale/></IconContext.Provider>
            )  }   
        },},
        {datafield:"Details",text:"Actions", csvExport: false,footer:"", formatter: ButtonCell}
    ]
  return (
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
          <Div1>
           <LabelM l w>Opération</LabelM>
           <Select>
           <option>Réglement Facture</option>
           <option>Frais OM </option>
           <option>Frais femme ménage</option>
           <option>Avance Sur salaire</option>
           <option>Achats</option>
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
          <div style={{marginLeft:"50px",marginTop:"30px",marginBottom:"50px"}}>
          <ButtonM>Filter All &nbsp;<IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter></AiOutlineFilter></IconContext.Provider></ButtonM>
          </div>
        
          
           
        </div>
        <div style={{display:"inline-block",marginLeft: '100px',width:"900px"}}>
       
        <div>
              
  <ToolkitProvider
    keyField='idBonCaisse'
    data={bc}
    columns={columns}
   
  exportCSV
>
  {
    props => (
      <>
     
         <div style={{display: 'flex',justifyContent:"space-between"}}>
         <ButtonM large onClick={()=>navigate('/creerBs')}><IconContext.Provider value={{ color: '#1c539b',size:"35px" }}><AiOutlineFileAdd/></IconContext.Provider>&nbsp; Ajouter</ButtonM>
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
        text: 'All', value: bc.length
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
       
     
        
    </div>
  )
}

export default ListeBC