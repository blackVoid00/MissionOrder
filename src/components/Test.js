import React from 'react'
import styles from 'styled-components'
import {AiOutlineCloudUpload} from "react-icons/ai"
import { IconContext } from "react-icons";


const DivP=styles.div`
display: flex;
margin-left:5%;
background-color:#1c539b;
margin-top:5%;
`
const DivP1=styles.div`
display: inline-block;
margin-left:5%;
margin-bottom:10%;
height:100%;
width:100%;
color:white;
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

height:40px  !important;
width:200px  !important;
text-align: left !important;
border: 10px solid transparent  !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}`


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
margin-top:10px !important;
height:40px  !important;
width:200px  !important;
text-align: left !important;
border: 10px solid transparent  !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
`
const InputF=styles.input`
margin-top:10px !important;
margin-left:50px !important;
height:35px  !important;
width:70px  !important;
text-align: left !important;
border: 10px solid transparent  !important;
border-radius:2px  !important;
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
`
const DivForm3=styles.div`
display:inline-block !important;
margin-left:65px;
width:400px !important;
`
const DivForm4=styles.div`
display:inline-block !important;

`
const Select=styles.select`
height:40px  !important;
width:200px  !important;
text-align: left !important;
border: 10px solid transparent  !important;
border-radius:2px  !important;
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


const Test = () => {

    const uploadFile=()=>{
    const input = document.getElementById('file-input');
    if (input) {
       input.click();
    }
    }
  return (
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
                <InputF disabled type="text"  placeholder='dh'></InputF>
                </DivIn>
                </DivForm4>    
                 </DivForm3>
            </DivForm2>
            </ContainerP>
      
    </DivP1>
   
  </DivP>
  )
}

export default Test