import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import styles from 'styled-components'


const MainDiv = styles.div`
display:flex;
width:100%;
margin-left:60%;
margin-top:40%;
`
const Div2 = styles.div`
margin-left: 90px;
display:inline-block;
width:100%;
height:100%;
background-color:#1c539b;
padding-left:20px;
padding-right:50px;
padding-top:20px;
justify-content:space-between;
box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
`
const H1 = styles.h1`
font-size:44px !important;
color:black;
margin-left:90px;
margin-top:50px;
`
const Div=styles.div`
display:flex;
margin-left:70px;

`
// const SousDiv1=styles.div`
// display:inline-block;
// margin-left: 10px;
// margin-top: 50px
// `

// const SousDiv2=styles.div`
// display:inline-block;
// margin-left: 50px;
// margin-top: 50px;
// `
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
`
const DivInput=styles.div`
margin-bottom:10px;
`

const Label=styles.label`
display:inline-block;
width: 120px;
font-weight:bold !important;
`


const Input=styles.input`
margin-left:20px;
margin-bottom:10px;
margin-top:10px;
height:35px;
width:150px;
text-align: left !important;
border: 10px solid transparent  !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
`
const Button=styles.button`
position: relative;
border-width: 0px;
border-style: solid;
background-color:#B0C4DE ;
font-weight:bold !important;
font-weight:bold ;
box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.25);
width:140px;
height:30px;
margin-left:40px;
margin-top:50px;
margin-bottom:50px;
text-align:center !important;
cursor:pointer;
&:focus{
outline: none  !important;
}
`

const CreerBs = () => {
     const url="https://localhost:7111/api/Utilisateurs"

     const [users,setUsers]=useState([])
     const [dateC,setDateC]=useState("")
     const [dateE,setDateE]=useState("")
     const [value,setOptionUser]=useState("")
     const [libelle,setOptionLibelle]=useState("")

     const creatBc=()=>{

     }
     useEffect(() => {

          axios.get(url).then((response) => {

         setUsers(response.data)

          });
     })
       
  return (
   <MainDiv>
    
    <Div2>
        <DivInput>
            <Label>Date Creation </Label>
             <Input type="date" onChange={(e)=>setDateC(e.target.value)}></Input>
        </DivInput>
       
        <DivInput>
            <Label>Bénéficiaire </Label>
             <Select onChange={(e)=>setOptionUser(e.target.value)}>
               {users.map((user) => {return(
                    <>
                    <option value={user.infoId}>{user.infoNom} &nbsp;{user.infoPrenom}</option>
                    </>
               )})}
             </Select>
        </DivInput>
        <DivInput>
            <Label> Opération</Label>
             <Select onChange={(e)=>setOptionLibelle(e.target.value)}>
                <option value="1">Réglement Facture</option>
                <option value="2">Frais OM </option>
                <option value="3">Frais femme ménage</option>
                <option value="4">Avance Sur salaire</option>
                <option vamue="5">Achats</option>
             </Select>
        </DivInput>
       <Div>
       </Div>
       <Button onClick={creatBc}>Créer</Button>
    </Div2>
   </MainDiv>
  )
}

export default CreerBs 