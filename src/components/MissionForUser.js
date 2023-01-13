import React ,{useState,useEffect} from 'react'
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import moment from 'moment'
import {AiOutlineFileAdd,AiFillEdit,AiOutlineFileDone,AiOutlineFilter} from "react-icons/ai"
import {ButtonM, Div1, InputDate, InputM , LabelM,Select ,LabelR,Label1,Label2} from './StyleMsC';
import { IconContext } from 'react-icons/lib';
import {BiLoaderCircle,BiExport} from 'react-icons/bi';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import styles from "styled-components"

const H1=styles.h1`
color:black;
font-weight:bold !important;
font-size:30px !important;
margin-top:120px;
`
const MissionForUser = () => {
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
    
    const ButtonCell=(cell, row, rowIndex, formatExtraData)=>{
        return (
            <IconContext.Provider value={{ color: '#1c539b',size:"20px" }}><AiFillEdit onClick={()=>navigate(`/mission/${row.idMission}`)  }/></IconContext.Provider>
        )
        
        }
     const idUser=localStorage.getItem('id');

    const url=`https://localhost:7111/api/GetMission/${idUser}`
    const [ms,setMs]=useState([])
    useEffect(()=>{
        axios.get(url).then((response) => {
            setMs(response.data);
         });
    },[])
    
    var curr = new Date();
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substring(0,10);
    let year = curr.getFullYear()
    const monthNames = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre" ,"décembre"];
    let all =monthNames[curr.getMonth()]+"-"+year
    const [du,setDateDu]=useState(date)  
    const [au,setDateAu]=useState(date)  
    const [givenUserId,setGivenUserId] = useState()
    const [givenStatus,setGivenStatus]= useState()
    const onChangeStatus=(e)=>{
      setCheckBox(e.target.checked)
      setGivenStatus(e.target.value)
      filterStatus(e.target.value) 
    }
    const OnChangeBeneficiaire=(e)=>{
      setGivenUserId(e.target.value)
      filterUser(e.target.value)
    }
    // const onChangeLibelle=(e)=>{
    //   setGivenLibelle(e.target.value)
    //    filterLibelle(e.target.value)
    // }
  const filterDateDuAu=()=>{
         axios.get(`https://localhost:7111/api/GetMissionOfaGivenDateInterval/${du}/${au}`).then((response) => {
          setMs(response.data)
         })
  }

const filterUser=(v)=>{
  axios.get(`https://localhost:7111/api/GetMissionOfaGivenUser/${v}`).then((response) => {
    setMs(response.data)
  })
}
const filterStatus=(v)=>{
  axios.get(`https://localhost:7111/api/GetMissionOfaGivenSatus/${v}`).then((response) => {
    setMs(response.data)
  })
}
const filterAll=()=>{
  axios.get(`https://localhost:7111/api/GetAllFilterMs/${du}/${au}/${givenUserId}/${givenStatus}`).then((response) => {
    setMs(response.data)
  })
}
    const columns=[
      {dataField:"idMission",text:"N° Mission"},
      {dataField:"dateD",text:"Date Début",formatter : (row,cellContent)=>{
        return moment(cellContent.dateD).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
      }},
      {dataField:"dateR",text:"Date Retour",formatter : (row,cellContent)=>{
        return moment(cellContent.dateR).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
      }},
      {dataField:"prenomUser",text:"Prenom"},
      {dataField:"nomUser",text:"Nom"},
      {dataField:"objetMission",text:"Projet"},
      {dataField:"etatMission",text:"Statut", formatter: (cellContent ,row) => {
            if ( row.etatMission =="O") {
              return (
                <IconContext.Provider value={{color:"#b71c1c",size:"20px"}}>
               <BiLoaderCircle/>
                </IconContext.Provider>
              )
            }
            if ( row.etatMission =="F"){
              return(
                <IconContext.Provider value={{color:"green",size:"20px"}}>
                 <AiOutlineFileDone/>
                  </IconContext.Provider>
              ) 
            } 
              
        }},
        {datafield:"Actions",text:"Remplir", csvExport: false, formatter: ButtonCell}
    ]
  return (
  <>
  <div style={{marginTop: '20px'}}>
  <div  style={{display:"flex",width:"auto"}}>
  <div style={{display:"inline-block"}}>
    <H1>Missions du mois {all}</H1>
  
       
          </div>
       
    <div style={{marginTop: '250px',marginLeft:"160px"}}>
     
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
         {/* <ButtonM large onClick={()=>navigate('/creerMs')}><IconContext.Provider value={{ color: '#1c539b',size:"35px" }}><AiOutlineFileAdd/></IconContext.Provider>&nbsp; Ajouter</ButtonM> */}
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
   
    </>
  )
}


export default MissionForUser
