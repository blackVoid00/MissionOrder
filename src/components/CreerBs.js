import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import styles from 'styled-components'
import bcpic from "../assets/bcPic2.png"
import {Modal} from 'react-bootstrap'
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
const ButtonM=styles.button`
border-width: 0px;
border-style: solid;
background-color:#B0C4DE ;
font-weight:bold !important;
font-weight:bold ;
width:140px;
height:30px;
margin-left:180px;
margin-bottom:30px;
text-align:center !important;
cursor:pointer;
&:focus{
outline: none  !important;
}
`

const CreerBs = () => {
     const url="https://localhost:7111/api/Utilisateurs"
     const url2="https://localhost:7111/api/PostBoncaisse"
     var curr = new Date();
     curr.setDate(curr.getDate());
     var date = curr.toISOString().substring(0,10);
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => {
       setShow(true)
      
     };
     const [users,setUsers]=useState([])
     const [dateC,setDateC]=useState(date)
     const [value,setOptionUser]=useState("") 
     const [credit,setCredit]=useState(0)
     const createBc=()=>{
            axios.post(url2,{
               dateCreation: dateC,
               idUser: value,
               libelle: "2",
               creditTotal: credit,
               debitTotal: 0,
               etatBonCaisse: 0
            }).then((response)=>{
               alert("bc created successfully")
            })
     }
     useEffect(() => {

          axios.get(url).then((response) => {

         setUsers(response.data)

          });
     })
       
  return (
   <MainDiv>
     
    <Div2>
    
      <div>
      <div><H1>Formulaire de création de Bon de Caisse</H1></div>
      <DivInput>
            <Label>Date Creation </Label>
             <Input type="date" defaultValue={date} onChange={(e)=>setDateC(e.target.value)}></Input>
        </DivInput>
       
        <DivInput>
            <Label>Bénéficiaire </Label>
             <Select onChange={(e)=>setOptionUser(e.target.value)}>
             <option>Veuillez selectionner un choix</option>
               {users.map((user) => {return(
                    <>
                    <option value={user.infoId}>{user.infoNom} &nbsp;{user.infoPrenom}</option>
                    </>
               )})}
             </Select>
        </DivInput>
        <DivInput>
            <Label> Opération</Label>

                < Input value="Frais ordre Mission" disabled></Input>
        </DivInput>
        <DivInput>
            <Label>Crédit </Label>
             <Input type="text" onChange={(e)=>setCredit(e.target.value)} placeholder="entrer le montant à créditer"></Input>
        </DivInput>
       <Div>
       </Div>
       <Button onClick={handleShow}>Créer</Button>
      </div>
      <div>
          <img src={bcpic}></img>
     </div>
     <Modal
        aria-labelledby="contained-modal-title-vcenter"
        className="special_modal"
      
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{color: "black"}}>
         
         <Modal.Header closeButton variant="white">
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
              
                <p>Êtes-vous sûr de vouloir créer un nouveau bon de caisse ?</p>
               
                </Modal.Body>
                <Modal.Footer>
                  <div style={{display:"flex"}}>
                  <ButtonM onClick={createBc} >Oui</ButtonM>
                  <ButtonM  onClick={handleClose} >Non</ButtonM>
                  </div>
                  
                </Modal.Footer>
         
         </Modal>
    
    </Div2>
   </MainDiv>
  )
}

export default CreerBs 