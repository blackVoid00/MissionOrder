import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import styles from 'styled-components'


const MainDiv = styles.div`
display:flex;
width:100%;
margin-left:10%;
margin-top:10%;
`
const Div2 = styles.div`
margin-left: 90px;
display:inline-block;
border:2px solid black;
width:100%;
height:100%;
background-color:#1c539b;
justify-content:space-between;
`
const H1 = styles.h1`
font-size:44px !important;
color:black;
margin-left:90px;
margin-top:50px;
`
const Div=styles.div`
display:flex;
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
margin-right:50px;
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
display:flex;
margin-top: 20px;
margin-left: 50px;
`

const Label=styles.label`
display: inline-block;
width: 160px;
font-weight:bold !important;
`


const Input=styles.input`
margin-right:50px;
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
     <H1>Fomulaire Bon de caisse</H1>
    <Div2>
        <DivInput>
            <Label>Date Creation :</Label>
             <Input type="date" onChange={(e)=>setDateC(e.target.value)}></Input>
        </DivInput>
        <DivInput>
            <Label>Date expiration :</Label>
             <Input type="date" onChange={(e)=>setDateE(e)}></Input>
        </DivInput>
        <DivInput>
            <Label>Bénéficiaire :</Label>
             <Select onChange={(e)=>setOptionUser(e.target.value)}>
               {users.map((user) => {return(
                    <>
                    <option value={user.idUser}>{user.nom}</option>
                    </>
               )})}
             </Select>
        </DivInput>
        <DivInput>
            <Label>Libellé :</Label>
             <Select onChange={(e)=>setOptionLibelle(e.target.value)}>
                <option>Les sorties de caisse liées aux OM</option>
                <option>Autres sorties de caisse </option>
                <option>Entrées de caisse</option>
             </Select>
        </DivInput>
       <Div>
       <Button onClick={creatBc}>Create</Button>
      <Button onClick={()=>{alert("")}}>Ajouter</Button>
      <Button onClick={()=>{alert("")}}>Retirer</Button>
       </Div>
     
    </Div2>
   </MainDiv>
  )
}

export default CreerBs 