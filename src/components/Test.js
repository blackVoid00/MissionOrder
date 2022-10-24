import React ,{useEffect,useState} from 'react'
import styles from 'styled-components'
import {AiOutlineCloudUpload} from "react-icons/ai"
import { IconContext } from "react-icons";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory,{Type} from 'react-bootstrap-table2-editor';
import axios from "axios"

const Main=styles.div`
display: flex;
margin-left:100px !important;
`
const DivP=styles.div`
display: flex;
background-color:#1c539b;
margin-top:5px;

`
const DivP1=styles.div`
display: inline-block;
margin-left:5%;
margin-bottom:10%;
height:100%;
width:100%;
color:white;
`
const DivP12=styles.div`
display: inline-block;
margin-bottom:10px;
background-color:red;
width:150px;
height:50px;
`
const DivP2=styles.div`
margin-left:120px;
margin-bottom:10px;

`
const DivTitle1=styles.div`
margin-left:20%;
margin-top:5%;
margin-bottom:2%;
`
const LabelT=styles.label`
width: 100px !important;
font-weight:bold !important;
color:white;
`
const InputT=styles.input`
margin-top:5px !important;  !important;
width:200px  !important;
text-align: left !important;
border: 1px solid transparent  !important;
&:focus{
outline: none  !important;
}

`


const ContainerP=styles.div`
display: flex;
`
const DivIn=styles.div`
margin-top:5%;
`

const Label=styles.label`
width: 160px !important;
font-weight:bold !important;
color:white;
margin-top:5%;
margin-bottom:5%;
`
const LabelF=styles.label`
width:50px;
font-weight:bold !important;
color:white;
margin-top:5%;
margin-bottom:5%;
`
const Input=styles.input`
margin-top:5px !important;  !important;
width:200px  !important;
text-align: left !important;
border: 1px solid transparent  !important;
&:focus{
outline: none  !important;
}
`
const InputF=styles.input`
margin-top:10px !important;
margin-left:50px !important;
width:100px  !important;
text-align: left !important;
border: 1px solid transparent  !important;
&:focus{
outline: none  !important;
}
`
const InputD=styles.input`
width:200px  !important;
height:60px;
text-align: left !important;
border: 1px solid transparent  !important;
&:focus{
outline: none  !important;
}
`
const DivForm=styles.div`
display:inline-block !important;
`
const DivForm2=styles.div`
display:inline-block !important;
margin-top:15px;
margin-left:62px !important;
`
const DivForm3=styles.div`
display:inline-block !important;
margin-left:50px;
margin-top:-30px !important;
width:100% !important;
`
const DivForm4=styles.div`
display:inline-block !important;

`
const Select=styles.select`
margin-top:5px !important;  !important;
width:200px  !important;
text-align: left !important;
border: 1px solid transparent  !important;
&:focus{
outline: none  !important;
}
`
const Option=styles.option`
`

const HeaderT=styles.h1`
font-size:20px;
font-weight:bold;
margin-top: 60px !important;
margin-left: 50px !important;
margin-bottom: 10px !important;
`
const DivB=styles.div`
margin-top:50px !important;

`
const Test = () => {
    const url="https://localhost:7140/api/Boncaisses";
    const [users,setUsers] =useState([])

    useEffect(()=>{
        axios.get(url).then((response) => {
            setUsers(response.data);
         });
       
    },[])

    const onAfterSaveCell=(value, name)=>{
    

        alert("user saved successfully")
  
         }
    const uploadFile=()=>{
    const input = document.getElementById('file-input');
    if (input) {
       input.click();
    }
    }
    const columns=[
        
        {dataField:"idBc",text:"Id BonCaisse"},
        {dataField:"creditBc",text:"Crédit"},
       ]
  return (
    <Main>
    <DivP>
    <DivP1>
           <DivTitle1>
             
               <LabelT>Projet</LabelT>
               <InputT type="text" placeholder="Entrer le projet"></InputT>
              
           </DivTitle1>
           <ContainerP>
           <DivForm>
            <DivIn>
                <Label>Date Départ</Label>
                <Input type="date"></Input>
           </DivIn>
            <DivIn>
                <Label>Date Retour</Label>
                <Input type="date"></Input>
            </DivIn>
            <DivIn>
                <Label>Lieu</Label>
                <Input type="text" placeholder="Entrer le lieu "></Input>
            </DivIn>
            <DivIn>
                <Label>Accompagné par :</Label>
                <Select>
                    <Option value="option1">option1</Option>
                </Select>
            </DivIn>
            <DivIn>
                <Label>Véhicule utilisé:</Label>
                <Select>
                    <Option value="option1">option1</Option>
                </Select>
            </DivIn>
            <DivIn>
                <Label>Nature Mission:</Label>
                <Select>
                    <Option value="option1">option1</Option>
                </Select>
            </DivIn>
            <DivIn>
                <Label>Description:</Label>
                <InputD type="text" ></InputD>
            </DivIn>
            
           </DivForm>
           <DivForm2>
           
                <DivIn>
                <Label>Heure Départ</Label>
                <Input type="time"></Input>
                </DivIn>
                <DivIn>
                <Label>Heure Retour</Label>
                <Input type="time"></Input>
                </DivIn>
                <DivIn>
                <Label>Durée Intervention:</Label>
                <Input type="text" disabled></Input>
                </DivIn>
            
                 <DivForm3>
                 <HeaderT>Frais Mission</HeaderT> 
                 <DivForm4>
                 <DivIn>
                <LabelF>Gazoil</LabelF>
                <InputF type="text" placeholder='dh'></InputF>
                <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'white', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>
                </DivIn>
                <DivIn>
                <LabelF>Hotel</LabelF>
                <InputF type="text"  placeholder='dh'></InputF>
                <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'white', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>
                </DivIn>
                <DivIn>
                <LabelF>Taxi</LabelF>
                <InputF type="text"  placeholder='dh'></InputF>
                <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'white', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>
                </DivIn>
                <DivIn>
                <LabelF>Repas</LabelF>
                <InputF type="text"  placeholder='dh'></InputF>
                <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'white', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>
                </DivIn>
                <DivIn>
                <LabelF>Ach/Tech</LabelF>
                <InputF type="text"  placeholder='dh'></InputF>
                <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'white', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>
               
                </DivIn>
                <DivIn>
                <LabelF>Divers</LabelF>
                <InputF type="text"  placeholder='dh'></InputF>
                <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'white', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>
                </DivIn>
                <DivIn>
                <LabelF>Total</LabelF>
                <Input disabled type="text"  placeholder='dh'></Input>
                </DivIn>
                <DivB>
                <button>Soumettre</button>  <button>Ajouter sous mission</button> <button>Valider</button>
                </DivB>
                </DivForm4> 
                 </DivForm3>
               
            </DivForm2>
            </ContainerP>
      
    </DivP1>
    <DivP12>
   </DivP12>
  </DivP>
   <DivP2>
   <BootstrapTable keyField='idUser'
        data={users}
        columns={columns}
         cellEdit={ cellEditFactory({ 
          mode: 'click' , 
          afterSaveCell: onAfterSaveCell}) }
       ></BootstrapTable>
   </DivP2>
   </Main>
  )
}

export default Test