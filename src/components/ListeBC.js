import React ,{useState,useEffect} from 'react'
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {ButtonM, Div1, InputM, LabelM,Select ,LabelR,Label1,Label2} from './StyleMsC';
import moment from 'moment';
import {AiOutlineFileAdd,AiFillEye,AiOutlineFilter} from "react-icons/ai"
import {TbDiscount,TbDiscOff}  from "react-icons/tb"
import { IconContext } from 'react-icons/lib';
const ListeBC = () => { 
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
        {dataField:"dateCreation",text:"Date Creation",formatter : (row,cellContent)=>{
          return moment(cellContent.dateCreation).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
        }},
        {dataField:"idBonCaisse",text:"Numero ", sort: true},
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
       <div  style={{display:"flex",width:"auto"}}>
       <div style={{display:"inline-block" , width:"450px",backgroundColor:"white",boxShadow: "0 6px 10px 0 rgba(0, 0, 0 , .1)"}}>
          <div style={{backgroundColor:"#1c539b"}}><p style={{opacity:"0"}}>hey</p></div>
          
          <Div1>
           <LabelM l w>Du</LabelM>
           <InputM b type="date"></InputM>
          </Div1>
          <Div1>
           <LabelM l w>Au</LabelM>
           <InputM b type="date"></InputM>
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
          </Div1>
          <Div1>
           <LabelM l w>Mois</LabelM>
           <Select>
            <option>Janvier</option>
            <option>Frévier</option>
            <option>Mars</option>
            <option>Avril</option>
            <option>Mai</option>
            <option>Juin</option>
            <option>Juillet</option>
            <option>Aout</option>
            <option>Septembre</option>
            <option>Octobre</option>
            <option>Novembre</option>
            <option>Décembre</option>
           </Select>
          </Div1>
          <br></br> v
          <div style={{display:"flex"}}>
            <LabelR w>Statut</LabelR>
             <div style={{display:"flex"}}>
             <div style={{display:"flex"}}>
              <Label1> Soldé</Label1>
              <input type="checkbox" name="checkbox" onChange={(e)=>setCheckBox(e.target.checked)} onClick={CheckOneTime}></input>
              </div>
              &nbsp;
              <div style={{display:"flex"}}>
              <Label2 >Non Soldé</Label2>
              <input type="checkbox" name="checkbox" onChange={(e)=>setCheckBox(e.target.checked)} onClick={CheckOneTime} ></input>
              </div>
             </div>
          </div>
          <div style={{marginLeft:"300px",marginTop:"30px",marginBottom:"50px"}}>
          <ButtonM>Filter &nbsp;<IconContext.Provider value={{ color: '#b71c1c',size:"35px" }}><AiOutlineFilter></AiOutlineFilter></IconContext.Provider></ButtonM>
          </div>
        
          
          
        </div>
        <div style={{display:"inline-block",marginLeft: '100px',width:"900px"}}>
        <ButtonM large onClick={()=>navigate('/creerBs')}><IconContext.Provider value={{ color: '#1c539b',size:"35px" }}><AiOutlineFileAdd/></IconContext.Provider>&nbsp; Ajouter</ButtonM>
        <br></br> <br></br> <br></br>
        <BootStrapTable      
        keyField='idBonCaisse'
        data={bc}
        columns={columns}
        pagination={paginationFactory()}  
        headerClasses="header-class"
        rowClasses="row-class"
        ></BootStrapTable>
        </div>
       
       </div>
       
     
        
    </div>
  )
}

export default ListeBC