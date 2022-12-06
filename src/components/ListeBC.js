import React ,{useState,useEffect} from 'react'
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {ButtonM, Div1, InputDate, InputM , LabelM,Select ,LabelR,Label1,Label2} from './StyleMsC';
import moment from 'moment';
import {AiOutlineFileAdd,AiFillEye,AiOutlineFilter} from "react-icons/ai"
import {TbDiscount}  from "react-icons/tb"
import {FaBalanceScale}  from "react-icons/fa"
import { IconContext } from 'react-icons/lib';
import {BiExport} from 'react-icons/bi';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import styles from "styled-components"

const H1=styles.h1`
color:black;
font-weight:bold !important;
font-size:30px !important;

`
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
      
    const url="https://localhost:7111/api/GetBoncaisses"
    const url2="https://localhost:7111/api/GetDepenseOfEachBc"
    const [bc,setBc]=useState([])
    const [Depense,setDepense]=useState([])
    useEffect(()=>{
        axios.get(url).then((response) => {
            setBc(response.data);
         });
         axios.get(urlUser).then((response) => {

          setUsers(response.data)
 
           });
           axios.get(url2).then((response)=>{
            setDepense(response.data)
           })
       
    },[])
    console.log(Depense)
    const T= bc.map(c => {
      const matched = Depense.find(d => c.idBonCaisse === d.idBc)
                 return {...c,...matched,
                          solde:Number(c.créditTotal)-(Number((matched?.sommeDepense)==null?0:matched?.sommeDepense) + Number(c.soldeTotal))}
     
    })
    const [du,setDateDu]=useState("")  
    const [au,setDateAu]=useState("")  
    const[givenDate,setGivenDate] =useState("")
    const [givenUserId,setGivenUserId] = useState()
    const [givenLibelle,setGivenLibelle] = useState("")
    const [givenStatus,setGivenStatus]= useState()
  const filterDateDuAu=()=>{
         axios.get(`https://localhost:7111/api/GetBcOfThisDateInterval/${du}/${au}`).then((response) => {
           setBc(response.data)
         })
  }
  const filterDate=()=>{
    axios.get(`https://localhost:7111/api/GetBcOfaGivenDate/${givenDate}`).then((response) => {
      setBc(response.data)
    })
}
const filterUser=()=>{
  axios.get(`https://localhost:7111/api/GetBcOfaGivenUser/${givenUserId}`).then((response) => {
    setBc(response.data)
  })
}
const filterLibelle=()=>{
  axios.get(`https://localhost:7111/api/GetBcOfaGivenOperation/${givenLibelle}`).then((response) => {
    setBc(response.data)
  })
}
const filterStatus=()=>{
  axios.get(`https://localhost:7111/api/GetBcOfaGivenStatus/${givenStatus}`).then((response) => {
    setBc(response.data)
  })
}
const filterAll=()=>{
  axios.get(`https://localhost:7111/api/GetAllFilter/${givenDate}/${givenUserId}/${givenLibelle}/${givenStatus}`).then((response) => {
    setBc(response.data)
  })
}
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
        
        {dataField:"soldeTotal",text:"Total Débit", footer: columnData => columnData.reduce((acc, item) => acc + item, 0)
     
    },{dataField:"créditTotal",text:"Total Crédit ", footer: columnData => columnData.reduce((acc, item) => acc + item, 0),
  
      },{dataField:"sommeDepense",text:"Total Dépense ", footer: columnData => columnData.reduce((acc, item) => acc + (item==null?0:item), 0),
        },
        {dataField:"solde",text:"Solde ", footer: columnData => columnData.reduce((acc, item) => acc +item, 0),
      },
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
    <div style={{marginLeft: '0px',marginTop: '100px'}}>
      <div style={{marginTop:"0px",marginBottom:"50px"}}><H1>Tableau Des Bons De Caisse</H1></div>
       <div  style={{display:"flex",width:"auto"}}>
       
       <div style={{display:"inline-block" , width:"460px",backgroundColor:"white",boxShadow: "0 6px 10px 0 rgba(0, 0, 0 , .1)"}}>
          <div style={{backgroundColor:"#1c539b"}}><p style={{opacity:"0"}}>hey</p></div>
          <div style={{display:"flex",marginLeft: '10px'}}>
          <Div1>
           <LabelM l w>Du</LabelM>
           <InputDate b type="date" onChange={(e)=>setDateDu(e.target.value)}></InputDate>
          </Div1>
          <Div1>
           <LabelM l w>Au</LabelM>
           <InputDate b type="date" onChange={(e)=>setDateAu(e.target.value)} ></InputDate>
          </Div1>
          <div  style={{marginTop:"50px",marginRight:'50px'}}>
          <IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter onClick={filterDateDuAu}></AiOutlineFilter></IconContext.Provider>
          </div>
          </div>
          <Div1>
           <LabelM l w>Date</LabelM>
           <InputM b type="date" onChange={(e)=>setGivenDate(e.target.value)}></InputM>&nbsp;
          <IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter onClick={filterDate}></AiOutlineFilter></IconContext.Provider>
   
          </Div1>
          <Div1>
           <LabelM l w>Bénéficiaire</LabelM>
           <Select onChange={(e)=>setGivenUserId(e.target.value)}>
           {users.map((user) => {return(
                    <>
                    <option value={user.infoId}>{user.infoNom} &nbsp;{user.infoPrenom}</option>
                    </>
               )})}
           </Select>
           <ButtonM><IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter onClick={filterUser}></AiOutlineFilter></IconContext.Provider></ButtonM>
          </Div1>
          <Div1>
           <LabelM l w>Opération</LabelM>
           <Select onChange={(e)=>setGivenLibelle(e.target.value)}>
           <option value="1">Réglement Facture</option>
           <option value="2">Frais OM </option>
           <option value="3">Frais femme ménage</option>
           <option value="4">Avance Sur salaire</option>
           <option value="5">Achats</option>
           </Select>
           <ButtonM><IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter onClick={filterLibelle}></AiOutlineFilter></IconContext.Provider></ButtonM>
          </Div1>
        
          <br></br>  <br></br> 
          <div style={{display:"flex"}}>
            <LabelR w>Statut</LabelR>
             <div style={{display:"flex"}}>
             <div style={{display:"flex"}}>
              <Label1> Soldé</Label1>
              <input type="checkbox" name="checkbox" onChange={(e)=>{setCheckBox(e.target.checked)
              setGivenStatus(e.target.value)
              }} onClick={CheckOneTime} value="1"></input>
              </div>
              &nbsp;&nbsp;
              <div style={{display:"flex"}}>
              <Label2 >Non Soldé</Label2>
              <input type="checkbox" name="checkbox" onChange={(e)=>{setCheckBox(e.target.checked)
              setGivenStatus(e.target.value)}} onClick={CheckOneTime} value="0" ></input>&nbsp;&nbsp;&nbsp;
              <IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter onClick={filterStatus}></AiOutlineFilter></IconContext.Provider>
              </div>
              
             </div>
             
          </div>
          <div style={{marginLeft:"50px",marginTop:"30px",marginBottom:"50px"}}>
          <ButtonM>Filter All &nbsp;<IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter onClick={filterAll}></AiOutlineFilter></IconContext.Provider></ButtonM>
          </div>
        
          
           
        </div>
        <div style={{display:"inline-block",marginLeft: '50px',width:"auto"}}>
       
        <div>
              
  <ToolkitProvider
    keyField='idBonCaisse'
    data={T}
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
        text: 'All', value: T.length
      } ], 
   
      withFirstAndLast: false,
      alwaysShowAllBtns: true,  
      prePageText: 'Prev', 
      nextPageText: 'Next',
      hideSizePerPage:true
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