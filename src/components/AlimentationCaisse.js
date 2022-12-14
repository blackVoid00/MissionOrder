import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import styles from 'styled-components'
import caissepic from "../assets/caisse.png"

const MainDiv = styles.div`
display:flex;
width:auto;
margin-top:100px;
margin-left:150px;
`
const Div2 = styles.div`
display:flex;
width:100%;
height:100%;
padding-left:60px;
padding-right:40px;
padding-top:20px;
justify-content:space-between;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; 
`
const H1 = styles.h1`
font-size:30px !important;
font-weight:bold;
color:black;
margin-bottom:80px;
margin-top:20px;
`
const Div=styles.div`
display:flex;
margin-left:70px;

`
const Select=styles.select`
margin-right:10px;
margin-left:20px;
margin-bottom:10px;
margin-top:10px;
height:40px;
width:200px;
text-align: left !important;
border: 10px solid transparent  !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
background:#F0F0F0;
font-weight:bold !important;
color:black !important;
font-size:16px;
`
const DivInput=styles.div`
margin-bottom:10px;
margin-top:20px;
`

const Label=styles.label`
display:inline-block;
width: 120px;
font-weight:bold !important;
color:black;

`


const Input=styles.input`
margin-left:20px;
margin-bottom:10px;
margin-top:10px;
height:40px;
width:200px;
background:#F0F0F0;
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
const Button=styles.button`
position: relative;
border-width: 0px;
border-style: solid;
background-color:#B0C4DE ;
font-weight:bold !important;
font-weight:bold ;
width:140px;
height:30px;
margin-left:190px;
margin-top:50px;
margin-bottom:50px;
text-align:center !important;
cursor:pointer;
&:focus{
outline: none  !important;
}
`

const AlimentationCaisse = () => {
     const url2="https://localhost:7111/api/PostBoncaisse"
     var curr = new Date();
     curr.setDate(curr.getDate());
     var date = curr.toISOString().substring(0,10);
     const [dateC,setDateC]=useState(date)
     const [libelle,setOptionLibelle]=useState("")
     const [credit,setCredit]=useState(0)
     const [debit,setDebit]=useState(0)
     const [showDebit,setShowDebit]=useState(false)
     const [showCredit,setShowCredit]=useState(false)
     const createBc=()=>{
            axios.post(url2,{
               dateCreation: dateC,
               idUser: 61,
               libelle: libelle,
               creditTotal: credit,
               debitTotal: debit,
               etatBonCaisse: 1
            }).then((response)=>{
               alert("bc created successfully")
            })
     }
     useEffect(()=>{
        if(libelle==6){
            setShowDebit(true)
            setShowCredit(false)
        }else{
            setShowDebit(false)
            setShowCredit(true)
    }
        
     })
  return (
   <MainDiv>
     
    <Div2>
    
      <div>
      <div><H1>Menu Caisse</H1></div>
      <DivInput>
            <Label>Date Creation </Label>
             <Input type="date" defaultValue={date} onChange={(e)=>setDateC(e.target.value)}></Input>
        </DivInput>
       
        <DivInput>
            <Label>Bénéficiaire</Label>
             <Input value="STE RIFL" disabled></Input>
        </DivInput>
        <DivInput>
            <Label> Opération</Label>
             <Select onChange={(e)=>setOptionLibelle(e.target.value)}>
               <option>Veuillez selectionner un choix</option>
                <option value="1">Règlement Facture</option>
                <option value="6">Alimentation de Caisse</option>
                <option value="3">Frais femme ménage</option>
                <option value="4">Avance Sur salaire</option>
                <option value="5">Achats</option>
             </Select>
        </DivInput>
        {showCredit &&  <DivInput>
            <Label>Crédit</Label>
             <Input type="text" onChange={(e)=>setCredit(e.target.value)} placeholder="entrer une somme"></Input>
        </DivInput>}
        {showDebit && <DivInput>
            <Label>Débit</Label>
             <Input type="text" onChange={(e)=>setDebit(e.target.value)} placeholder="entrer une somme"></Input>
        </DivInput>}
        
       <Div>
       </Div>
       <Button onClick={createBc}>Créer</Button>
      </div>
      <div style={{marginLeft:"80px",marginTop:"50px"}}>
          <img src={caissepic}></img>
     </div>
    </Div2>
   </MainDiv>
  )
}

export default AlimentationCaisse