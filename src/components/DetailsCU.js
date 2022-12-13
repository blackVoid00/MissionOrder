import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import { useParams } from 'react-router-dom';
import moment from 'moment'
import {AiOutlineCheck,AiOutlineFilter} from 'react-icons/ai'
import {GiReceiveMoney,GiPayMoney} from 'react-icons/gi'
import { IconContext } from 'react-icons/lib';

import styles from "styled-components"



const Div1 =styles.div`
display:inline-block !important;
padding:5px 5px 5px 5px;
margin-top:10px;
`

const InputDate=styles.input`
margin-bottom:10px;
margin-top:10px;
margin-right:10px;
height:35px !important;
width:120px;
background:#F0F0F0;
font: inherit;
border: 0;
outline: 0;
&:focus{
outline: none  !important;
}
text-align:left !important;
font-weight:bold !important;
color:black !important;
font-size:16px;
`
const LabelM=styles.label`
display: inline-block;
width: 50px;
font-weight:bold !important;
color:#1c539b;

`




const DetailsCU = () => {
    const {id}=useParams();
   
    const [CreditDebit,setCreditDebit]=useState([])
    const [Depense,setTotalDepense]=useState([])
    var curr = new Date();
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substring(0,10);
    const [du,setDateDu]=useState(date)  
    const [au,setDateAu]=useState(date)

    const filterDateDuAu=()=>{
      axios.get(`https://localhost:7111/api/GetDuAuDebitCreditTotalOfUser/${id}/${du}/${au}`).then((response) => {
        setCreditDebit(response.data)
      });
      axios.get(`https://localhost:7111/api/GetDuAuTotalDepenseOfUser/${id}/${du}/${au}`).then((response) => {
        setTotalDepense(response.data)
      });
    
} 
   
   const T= CreditDebit.map( c => {
    const matched = Depense.find(d => c.idBc === d.idBc)
               return {...c,...matched,solde:Number((c.sommeCredit)==null?0:c.sommeCredit)-(Number(matched?.sommeDepense) + Number((c.sommeDebit)==null?0:c.sommeDebit))}
   
  }
)

const columns=[
  {dataField:"dateCreation",text:"Date Creation",footer:'Total',formatter : (row,cellContent)=>{
    return moment(cellContent.dateCreation).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
  }},
    {dataField:"idBc",text:"N° Bon caisse",footer:""},
    {dataField:"sommeCredit",text:"Total Crédit",formatter: (cellContent ,row) => {
      if ( row.sommeCredit==null) {
        return (
         <span>0</span>
        )
      }if ( row.sommeCredit!=null){  
      return(
        <span>{row.sommeCredit}</span>
      )  }   
  }, footer: columnData => columnData.reduce((acc, item) => acc + item, 0)},
    {dataField:"sommeDebit",text:"Total Rendu",formatter: (cellContent ,row) => {
      if ( row.sommeDebit==null || isNaN(row.sommeDebit)) {
        return (
         <span>0</span>
        )
      }if ( row.sommeDebit!=null){  
      return(
        <span>{row.sommeDebit}</span>
      )  }   
  }, footer: columnData => columnData.reduce((acc, item) => acc + item, 0)},
    {dataField:"sommeDepense",text:"Total Dépenses", formatter: (cellContent ,row) => {
      if ( row.sommeDepense==null || isNaN(row.sommeDepense)) {
        return (
         <span>0</span>
        )
      }if ( row.sommeDepense!=null){  
      return(
        <span>{row.sommeDepense}</span>
      )  }   
  },footer: columnData => columnData.reduce((acc, item) => acc + item, 0)},
    {dataField:"solde",text:"Solde",formatter: (cellContent ,row) => {
      if ( isNaN(row.solde)) {
        return (
         <span>0</span>
        )
      }if ( row.solde!=null){  
      return(
        <span>{row.solde}</span>
      )  }   
  }, footer: columnData => columnData.reduce((acc, item) => acc + (item==null || isNaN(item))?0:item, 0)},
    {dataField:"solde",text:"Statut",footer:"",formatter: (cellContent ,row) => {
      if ( row.solde < 0) {
        return (
           <IconContext.Provider value={{ color: '#b71c1c',size:"30px" }}> 
          <GiPayMoney/>
           </IconContext.Provider>
        )
      }if(row.solde >0){
        return (
           <IconContext.Provider value={{ color: 'green',size:"30px" }}> 
           <GiReceiveMoney/>
           </IconContext.Provider>
        )
      }if(row.solde==0 || isNaN(row.solde)){
        return(
          <IconContext.Provider value={{ color: 'green',size:"30px" }}> 
          <AiOutlineCheck/>
          </IconContext.Provider>
         
        ) 
      }
        
  }}
]
  return (

<div style={{display:"flex",backgroundColor:"white",boxShadow: "0 6px 10px 0 rgba(0, 0, 0 , .1)", marginTop:"100px"}}>
  {/* <div>
    <img style={{marginTop: '100px'}} src={debiteur}></img>
  </div> */}
<div style={{display:"inline-block",marginLeft:'100px'}}>
<div style={{display:"inline-block",marginTop:"50px" ,height:"150px",width:"460px"}}>
         
          <div style={{display:"flex",marginLeft: '10px'}}>
          <Div1>
           <LabelM>Du</LabelM>
           <InputDate b type="date" defaultValue={date} onChange={(e)=>setDateDu(e.target.value)}></InputDate>
          </Div1>
          <Div1>
           <LabelM>Au</LabelM>
           <InputDate b type="date" defaultValue={date} onChange={(e)=>setDateAu(e.target.value)} ></InputDate>
          </Div1>
          <div  style={{marginTop:"30px",marginLeft:'20px'}}>
          <IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}><AiOutlineFilter onClick={filterDateDuAu}></AiOutlineFilter></IconContext.Provider>
          </div>
          </div>
       
          <div style={{marginLeft:"50px",marginTop:"30px",marginBottom:"50px"}}>

          </div>
        
          
           
        </div>
<div style={{marginTop: '50px',marginRight:"50px",marginBottom:"150px"}}>
        <BootStrapTable      
        keyField='idBc'
        data={T}
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
            text: 'All', value: T.length
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
    </div> 
  
</div>
  
</div>
  );
};
export default DetailsCU;