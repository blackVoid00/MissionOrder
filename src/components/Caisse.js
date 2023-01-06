import React ,{useState,useEffect} from 'react'
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import moment from 'moment'
import {AiOutlineFilter} from "react-icons/ai"
import {AiFillFolderAdd} from "react-icons/ai"
import {Div1, InputDate,LabelM,Select} from './StyleMsC';
import { IconContext } from 'react-icons/lib';
import {BiExport} from 'react-icons/bi';
import {FaBalanceScale}  from "react-icons/fa"
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import styles from "styled-components"

const H1=styles.h1`
color:black;
font-weight:bold !important;
font-size:30px !important;
margin-top:120px;
`
export const Input=styles.input`

margin-bottom:10px;
margin-top:10px;
height:40px;
width:200px;
background:white;
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
const ButtonCell=(cell, row, rowIndex, formatExtraData)=>{
  return (
      
      <IconContext.Provider value={{ color: '#1c539b',size:"30px" }}><AiFillFolderAdd /></IconContext.Provider>
  )
  
  }
const Caisse = () => {
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
    const [Depense,setDepense]=useState([])
    const [caisse,setCaisse]=useState([])
    const url2="https://localhost:7111/api/GetDepenseOfEachBc"

    const url="https://localhost:7111/api/GetMenuCaisse"
   
    useEffect(()=>{
         axios.get(urlUser).then((response) => {
          setUsers(response.data)
           });
           axios.get(url).then((response) => {
            setCaisse(response.data)
             });
             axios.get(url2).then((response)=>{
                setDepense(response.data)
               })
    },[])
    const T= caisse.map(c => {
        const matched = Depense.find(d => c.idBonCaisse === d.idBc)
                   return {...c,...matched,
                            solde:Number(c.creditTotal)-(Number((matched?.sommeDepense)==null?0:matched?.sommeDepense) + Number(c.debitTotal))}
       
      })
    var curr = new Date();
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substring(0,10);
    let year = curr.getFullYear()
    const monthNames = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre" ,"décembre"];
    let all =monthNames[curr.getMonth()]+"-"+year
    const [du,setDateDu]=useState(date)  
    const [au,setDateAu]=useState(date)  
    const [givenUserId,setGivenUserId] = useState()
    const [givenOperation,setGivenOperation]= useState()
    
    const onChangeOperation=(e)=>{
      
      setGivenOperation(e.target.value)
      
    }
    const OnChangeBeneficiaire=(e)=>{
      setGivenUserId(e.target.value)
      
    }

    const columns=[
        {dataField:"dateCreation",text:"Date Création",footer:"Total",formatter : (row,cellContent)=>{
            return moment(cellContent.dateCreation).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
          }, sort: true},
          {dataField:"idBonCaisse",text:"N° BC ",footer:"", sort: true },
          {dataField:"beneficiaire",footer:"",text:"Bénéficiaire"},
         
          {dataField:"libelle",text:"Type Opération",footer:"" ,formatter: (cellContent ,row) => {
            
            if ( row.libelle==2) {
              return (
                <span>Frais ordre Mission</span>
              )
            }  if ( row.libelle==1) {
                return (
                  <span>Réglement Facture</span>
                )
              }  if ( row.libelle==3) {
                return (
                  <span>Frais Femme Ménage</span>
                )
              }  if ( row.libelle==4) {
                return (
                  <span>Avance sur salaire</span>
                )
              }  if ( row.libelle==5) {
                return (
                  <span>Achats</span>
                )
              } 
              if ( row.libelle==6) {
                return (
                  <span>Alimentation Caisse</span>
                )
              }  
              if ( row.libelle==7) {
                return (
                  <span>Autres frais</span>
                )
              }  
        }},
       
          {dataField:"debitTotal",text:"Débit", footer: columnData => columnData.reduce((acc, item) => acc + item, 0)
       
      },{dataField:"creditTotal",text:"Crédit ", footer: columnData => columnData.reduce((acc, item) => acc + item, 0),
    
        },{dataField:"sommeDepense",text:"Cumul Dépenses ",formatter: (cellContent ,row) => {
          if ( row.sommeDepense==null) {
            return (
             <span>0</span>
            )
          }if ( row.sommeDepense!=null){  
          return(
            <span>{row.sommeDepense}</span>
          )  }   
      }, footer: columnData => columnData.reduce((acc, item) => acc + (item==null?0:item), 0),
          },
          {dataField:"solde",text:"Solde ", footer: columnData => columnData.reduce((acc, item) => acc +item, 0),
        },
          {dataField:"etat",text:"Statut",footer:"", formatter: (cellContent ,row) => {
              if ( row.etat==1){  
              return(
                <IconContext.Provider value={{color:"green",size:"20px"}}>
                <FaBalanceScale/></IconContext.Provider>
              )  }   
          },},
          {datafield:"Details",text:"PJ", csvExport: false,footer:"",formatter: ButtonCell}
    ]
  return (
  <>
  <div style={{marginTop: '50px'}}>
  <div  style={{display:"inline-block",width:"auto"}}>
  <div style={{display:"flex"}}>
    <H1>Caisse du mois {all}</H1>
       <div style={{display:"flex" ,marginLeft:"260px",marginRight:"150px", width:"auto",backgroundColor:"white",boxShadow: "0 6px 10px 0 rgba(0, 0, 0 , .1)"}}>
          <div style={{backgroundColor:"#1c539b"}}><p style={{opacity:"0"}}>hey</p></div>
          <div style={{display:"flex",marginLeft: '10px'}}>
          <Div1>
           <LabelM l w>Du</LabelM>
           <InputDate b defaultValue={date} type="date" onChange={(e)=>setDateDu(e.target.value)}></InputDate>
          </Div1>
          <Div1>
           <LabelM l w>Au</LabelM>
           <InputDate b defaultValue={date} type="date" onChange={(e)=>setDateAu(e.target.value)}></InputDate>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter></AiOutlineFilter></IconContext.Provider>
          </Div1>
         
         
        
          </div>
          <div style={{display:"inline-block",marginLeft: '10px'}}>
          <Div1>
           <LabelM l w>Bénéficiaire</LabelM>
           <Select onChange={OnChangeBeneficiaire}>
            <option>#Tous#</option>
           {users.map((user) => {return(
                    <>
                    <option value={user.infoId}>{user.infoNom} &nbsp;{user.infoPrenom}</option>
                    </>
               )})}
           </Select>
         
          </Div1>
           
          <Div1>
           <LabelM l w>Opération</LabelM>
           <Select onChange={onChangeOperation}>
            <option>#Tous#</option>
            <option value="2">Frais OM</option>
            <option value="1">Réglement Facture</option>
            <option value="3">Frais Femme Ménage</option>
            <option value="6">Alimentation Caisse</option>
            <option value="5">Achats</option>
            <option value="4">Avance sur salaire</option>
            <option value="7">Autres frais</option>
           </Select>
         
          </Div1>
          </div>
           </div>
          </div>
       
    <div style={{marginTop: '30px',marginRight:"50px"}}>

<ToolkitProvider
    keyField='idMission'
    data={T}
    columns={columns}
   exportCSV >
  {
    props => (
      <>
     
     <br></br><br></br> <br></br><br></br>   
     <div style={{display: 'flex',justifyContent:"space-between"}}>
         <div>
          <LabelM>Solde Total</LabelM>
          <Input value="200" disabled></Input>
          </div>
         <ExportCSVButton { ...props.csvProps }><IconContext.Provider value={{color:"#1c539b",size:"30px"}}><BiExport/></IconContext.Provider>&nbsp;Exporter CSV</ExportCSVButton>
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
        text: 'All', value: T.length
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


export default Caisse