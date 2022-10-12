import React, { useState } from 'react'
import styles from "styled-components"
import { SousMission } from './SousMission'

const Main=styles.div`
display:flex;
justify-content:center;
`
const H1=styles.h1`
color:black;
font-weight:bold !important;
font-size:30px !important;
margin-left:30%;
`
const MainDiv=styles.div`
display:inline-block;
justify-content:center;
border:2px solid black;
margin-right:10px;
margin-top:1%;
width:100vh;
background-color:#1c539b;
`
const MainDiv2 = styles.div`
display:inline-block;
background-color:#1c539b;
border:2px solid black;
margin-left:5%;
margin-top:5%;
width:60vh;
height:700px;
`
const Div1 =styles.div`
margin-top:5%;
display:flex;
justify-content:space-between;
`
const SousDiv1=styles.div`
display:grid;
margin-left:20px
`
const SousDiv2=styles.div`
display:grid;
margin-right:50px;
`
const Div2 =styles.div`  
margin-top:50px;
display:flex;
justify-content:space-between;
height:50vh;
`
const Div3 =styles.div`  
margin-top:5%;
display:flex;
justify-content:space-between;
height:50vh;
`

const Input=styles.input`
margin-bottom:10px;
margin-top:10px;
height:30px;
width:150px;
text-align: left !important;
border: 10px solid transparent  !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
`
const Description=styles.div`

margin-top:50px;
`
const InputD=styles.input`
margin-top:10px;
height:60px;
width:250px;
text-align: left !important;
border: 10px solid transparent  !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
`
const InputFILE=styles.input`
margin-top:10px;
`
const Label=styles.label`
display: inline-block;
width: 160px;
font-weight:bold !important;
`
const LabelFile=styles.label`
margin-left:10px;
margin-top:10px;
font-weight:bold !important;
`
const Div=styles.div`
display:flex;
`
const Button=styles.button`
position: relative;
border-width: 0px;
border-style: solid;
background-color:#B0C4DE ;
font-weight:bold !important;
cursor: pointer;
font-weight:bold ;
box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.25);
width:140px;
height:30px;
margin-left:61%;

`
const Final=styles.div`
margin-top:50px;

`
const MissionComponent = () => {
    const [isDisabled,setDisabled]=useState(true)
    const [c,setClicked]=useState(false)
    
    const [users,setUsers]=useState([{
        name:"Ahmed",
        age:"20",
        Role:"user"
     },{
       name:"Wiam",
       age:"40",
       Role:"admin"
     },{
       name:"Asma",
       age:"30",
       Role:"editor"
     }
    
    ] )
    const [role,setRole]=useState(0)
    const AddOther=()=>{
        setClicked(!c)
      
    }
  return (
        <>
        <select name="roles" onChange={(e)=>{setRole(e.target.value)}}>
            <option value="0">user</option>
            <option value="1">admin</option>
            <option value="2">editor</option>
        </select>
      
        <Main>
        <MainDiv>
            <Div1>
            <SousDiv1> 
              <Div>
              <Label>Nom:</Label> 
               <Input type="text" disabled={isDisabled}></Input>
              </Div>
              <Div>
              <Label>Prénom :</Label>
               <Input type="text" disabled={isDisabled}></Input>
              </Div>
              <Div>
              <Label>Date de création :</Label>
               <Input type="text" disabled={isDisabled}></Input>
              </Div>
            </SousDiv1>
            <SousDiv2>
                <Div>
                <Label>Matricule :</Label>
                <Input  type="text" disabled={isDisabled}></Input>
                </Div>
                <Div>
                <Label>Numéro de mission :</Label>
                <Input type="text" disabled={isDisabled}></Input>
                </Div>
                <Div>
                <Label>Bon de Caisse :</Label>
                <Input type="text" disabled={isDisabled}></Input>
                </Div>
            </SousDiv2>
              
            </Div1>
            <Div2>
         
         <SousDiv1>

                      <Div>
                       <Label>Projet :</Label>
                       <Input type="text" placeholder='entrer le projet'></Input>
                      </Div>
                      
                      <Div>
                       <Label>  Date de départ :</Label>
                       <Input type="date" ></Input>
                      </Div>
                      <Div>
                       <Label>  Heure de départ :</Label>
                       <Input type="time"></Input>
                      </Div>
                      <Div>
                       <Label> Durée Intervention :</Label>
                       <Input type="text" disabled></Input>
                      </Div>
                      <Div>
                       <Label>Véhicule utilisé :</Label>
                       <Input type="text" placeholder='entrer le véhicule utilisé'></Input>
                      </Div>
                      <Div>
                       <Label> Accompagné par :</Label>
                       <Input type="text"></Input>
                      </Div>
                       </SousDiv1>
                       <SousDiv2>
                           
                       <Div>
                       <Label> Date de retour :</Label>
                       <Input type="date"></Input>
                      </Div>
                      <Div>
                       <Label> Heure de retour :</Label>
                       <Input type="time"></Input>
                      </Div> 
                      <Div>
                       <Label> lieu :</Label>
                       <Input type="text" placeholder='entrer le lieu' ></Input>
                      </Div> 
                        
                           <Div>
                               <Label> Dépot de document</Label>
                               <Input type="checkbox"></Input> 
                           </Div>
                           <Div>
                               <Label>Récup de document</Label>
                               <Input type="checkbox"></Input> 
                           </Div>
                           <Div>
                               <Label> Dépannage</Label>
                               <Input type="checkbox"></Input> 
                           </Div>
                          <Div>
                          <Label>Fiche Intervention</Label>
                         <InputFILE type="file"  ></InputFILE>
                          </Div>
                          <Div>
                           <Button onClick={AddOther}>Autre Mission</Button>
                          </Div>
            </SousDiv2>
               </Div2>
          {c ?<SousMission name={"Valider"} ></SousMission> : null}
        
        </MainDiv>
        <MainDiv2>
            <Div3>
            <SousDiv1>
         <Div>
           <Label> Gasoil :</Label>
            <Input type="text" placeholder='frais gazoil' ></Input>
            <LabelFile>P.J</LabelFile>&nbsp; &nbsp; &nbsp; &nbsp;
             <InputFILE type="file" accept="image/png, image/jpg, image/gif, image/jpeg" ></InputFILE>
        </Div> 
        <Div>
           <Label> Parking :</Label>
            <Input type="text" placeholder='frais parking'></Input>
            <LabelFile>P.J</LabelFile>&nbsp; &nbsp; &nbsp; &nbsp;
             <InputFILE type="file" accept="image/png, image/jpg, image/gif, image/jpeg" ></InputFILE>
        </Div> 
        <Div>
           <Label> Hotel :</Label>
            <Input type="text" placeholder='frais hotel'></Input>
            <LabelFile>P.J</LabelFile>&nbsp; &nbsp; &nbsp; &nbsp;
             <InputFILE type="file" accept="image/png, image/jpg, image/gif, image/jpeg" ></InputFILE>
        </Div> 
        <Div>
           <Label> Repas :</Label>
            <Input type="text" placeholder='frais repas'></Input>
            <LabelFile>P.J</LabelFile>&nbsp; &nbsp; &nbsp; &nbsp;
             <InputFILE type="file" accept="image/png, image/jpg, image/gif, image/jpeg" ></InputFILE>
        </Div>
        <Div>
           <Label> Taxi :</Label>
            <Input type="text" placeholder='frais taxi'></Input>
            <LabelFile>P.J</LabelFile>&nbsp; &nbsp; &nbsp; &nbsp;
             <InputFILE type="file" accept="image/png, image/jpg, image/gif, image/jpeg" ></InputFILE>
        </Div>
        <Div>
           <Label> Ach/tech :</Label>
            <Input type="text" placeholder='frais achat tech' ></Input>
            <LabelFile>P.J</LabelFile>&nbsp; &nbsp; &nbsp; &nbsp;
             <InputFILE type="file" accept="image/png, image/jpg, image/gif, image/jpeg" ></InputFILE>
        </Div>  
        <Div>
           <Label> divers :</Label>
            <Input type="text" placeholder='autre'></Input>
            <LabelFile>P.J</LabelFile> &nbsp; &nbsp; &nbsp; &nbsp;
            <InputFILE type="file" accept="image/png, image/jpg, image/gif, image/jpeg" ></InputFILE>
        </Div>
        <Description>
            <Label>Description :</Label>
            <InputD  type="text" size="200"></InputD>
        </Description>
        <Final>
        <Div>
        <Label> Total</Label>    
        <Input type="text" disabled></Input>
        </Div>
        <Div> <Button>Soumettre</Button>  </Div>
        </Final>
         </SousDiv1>
         
            </Div3>
        </MainDiv2>
        </Main>
        </>
  )
}

export default MissionComponent