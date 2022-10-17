import React ,{useState} from 'react'
import styles from 'styled-components'
const Label=styles.label`
display: inline-block;
width: 160px;
font-weight:bold !important;
`
const Div=styles.div`
display:flex;
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
const InputFILE=styles.input`
margin-top:10px;
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
const Div2 =styles.div`  
margin-top:50px;
display:flex;
justify-content:space-between;
height:50vh;
`
const SousDiv1=styles.div`
display:grid;
margin-left:20px;
background-color:#1c539b;
`
const SousDiv2=styles.div`
display:grid;
margin-right:50px;
background-color:#1c539b;
`
export const SousMission = ({name}) => {
    const [f,setF]=useState(true)
   const Hide=()=>{
    setF(!f)
   } 
  return (
    <>

 { f ? <Div2>
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
                           <Button onClick={Hide} >{name}</Button>
                          </Div>
            </SousDiv2>

            </Div2> : null}
               </>
               
  )
}
