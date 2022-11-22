import React ,{useState,useEffect} from 'react'
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {ButtonM, Div1, InputM, LabelM } from './StyleMsC';
import moment from 'moment';
import {AiOutlineFileAdd,AiFillEye} from "react-icons/ai"
import {TbDiscount,TbDiscOff}  from "react-icons/tb"
import { IconContext } from 'react-icons/lib';
const ListeBC = () => { 
    const navigate = useNavigate()
    const ButtonCell=(cell, row, rowIndex, formatExtraData)=>{
        return (
            
            <IconContext.Provider value={{ color: '#1c539b',size:"20px" }}><AiFillEye   onClick={()=>navigate(`/detailbc/${row.idBonCaisse}`)  }/></IconContext.Provider>
        )
        
        }
    const url="https://localhost:7111/api/Boncaisses"
    const [bc,setBc]=useState([])
    useEffect(()=>{
        axios.get(url).then((response) => {
            setBc(response.data);
         });
       
    },[])
    const columns=[
        {dataField:"dateCreation",text:"Date Creation",formatter : (row,cellContent)=>{
          return moment(cellContent.dateCreation).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
        }},
        {dataField:"idBonCaisse",text:"Numero "},
        {dataField:"libellé",text:"Opération"},
        {dataField:"créditTotal",text:"Crédit Total"},
        {dataField:"soldeTotal",text:" Débit Total"},
        {dataField:"etat",text:"Statut", formatter: (cellContent ,row) => {
            if ( row.etat==0) {
              return (
                <IconContext.Provider value={{color:"#b71c1c",size:"20px"}}>
                <TbDiscOff/>
                </IconContext.Provider>
              )
            }   
            return(
              <IconContext.Provider value={{color:"green",size:"20px"}}>
              <TbDiscount/></IconContext.Provider>
            )    
        },},
        {datafield:"Details",text:"Consulter", formatter: ButtonCell}
    ]
  return (
    <div style={{marginLeft: '100px',marginTop: '100px'}}>
      <ButtonM large onClick={()=>navigate('/creerBs')}><IconContext.Provider value={{ color: '#1c539b',size:"35px" }}><AiOutlineFileAdd/></IconContext.Provider>&nbsp; Ajouter</ButtonM>
      <br></br>  <br></br>  <br></br>
        {/* <h1 style={{color:"black",marginLeft: '350px',marginBottom:"50px",fontSize: '40px',fontWeight:"bold"}}>Liste des bons de caisse</h1> */}
       <div  style={{display:"flex",width:"100%"}}>
        <div>
        <BootStrapTable      
        keyField='idBonCaisse'
        data={bc}
        columns={columns}
        pagination={paginationFactory()}  
        headerClasses="header-class"
        rowClasses="row-class"
        ></BootStrapTable>
        </div>
        <div style={{display:"inline-block" , width:"350px",marginLeft: '300px',backgroundColor:"#1c539b"}}>
          <h1 style={{color:"black"}}>Filter</h1>
          <Div1>
           <LabelM></LabelM>
           <InputM></InputM>
          </Div1>
        </div>
       </div>
       
     
        
    </div>
  )
}

export default ListeBC