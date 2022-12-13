import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import styles from "styled-components"
import { useForm } from "react-hook-form";
import { Modal } from 'react-bootstrap';
import { ButtonM } from './StyleMsC'
const MainDiv=styles.div`
display:flex;
width:900px;
height:800px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
margin-left:18%;
margin-top:2%;
`
const Div1 =styles.div`
margin-top:5%;
display:inline-block;

`
const Div2 =styles.div`  
margin-top:5%;
display:inline-block;

`
const Div=styles.div`
display:inline-block !important;
padding:5px 5px 5px 5px;
margin-top:10px;
`
const DivB=styles.div`
display:flex;
`

const Label=styles.label`
display: inline-block;
width: 160px;
font-weight:bold !important;
color:black;
margin-left:30px;
`
const Input=styles.input`
margin-bottom:10px;
margin-top:10px;
margin-right:10px;
text-align:center;
justify-content:center;
height:40px;
width:200px;
text-align: left !important;
border: 10px solid transparent  !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
font-weight:bold !important;
color:black !important;
font-size:16px;
background:#F0F0F0;
`
const Select=styles.select`
padding: 0 1em 0 0;
margin: 0;
height:30px;
width:200px;
text-align: left !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
border: none;
background:#F0F0F0;
font-weight:bold !important;
color:black !important;
font-size:16px;
`
const Option=styles.option`
 text-align:center;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  &:hover{ background-color: rgba(0, 0, 0, 0.1);
  }
`
const Button=styles.button`
position: relative;
border-width: 0px;
border-style: solid;
background-color:#B0C4DE;
font-weight:bold !important;
cursor: pointer;
font-weight:bold ;
width:140px;
height:30px;
margin-left:5px;
margin-right:5px;
margin-top:${props=>props.m?"0px":"220px"};
margin-bottom:${props=>props.b?"0px":"30px"};
`
const User = () => {
    const {id}=useParams()
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
      setShow(true)
     
    };
    const isAddmode=!id;
    const [nom,setNom]=useState("")
    const [prenom,setPrenom]=useState("")
    const [matricule,setMat]=useState("")
    const [mail,setEmail]=useState("")
    const [pwd,setPwd]=useState("")
    const [role,setRole]=useState()
    const [identifiant,setId]=useState("")
    const [idService,setService]=useState()
    const [cin,setCin]=useState("")
    const [numeroTel,setTel]=useState("")
    const [dateDebutContrat,setDateD]=useState("")
    const [dateFinContrat,setDateF]=useState("")
    const [status,setStatus]=useState()
   const { register,setValue,getValues} = useForm();
 const postUser=()=>{
    isAddmode?
    axios.post("https://localhost:7111/api/Utilisateurs",{
        nom:nom,
        prenom:prenom,
        matricule:matricule,
        mail: mail,
        pwd: pwd,
        role:role ,
        identifiant:identifiant,
        idService:idService,
        cin:cin,
        numeroTel:numeroTel,
        dateDebutContrat:dateDebutContrat,
        dateFinContrat:dateFinContrat,
        status:status
      }).then((response)=>{
        alert("user inserted successfully");
    }).catch((error) => {
        console.log(error.response);
    }):axios.put(`https://localhost:7111/api/Utilisateurs/${id}`,{
        idUser:id,
        nom:getValues("infoNom"),
        prenom:getValues("infoPrenom"),
        matricule:getValues("infoMatricule"),
        mail:getValues("infoMail"),
        pwd: getValues("infoPwd"),
        role:getValues("infoRole") ,
        identifiant:getValues("infoIdentifiant"),
        idService:getValues("infoNumService"),
        cin:getValues("infoCin"),
        numeroTel:getValues("infoNumeroTel"),
        dateDebutContrat:getValues("infoDateDebutContrat"),
        dateFinContrat:getValues("infoDateFinContrat"),
        status:getValues("infoStatus")
      }).then((response)=>{
            alert("user updated successfully")
    }).catch((error) => {
        console.log(error.response);
    })
    console.log(getValues("infoCin"))
 }

 const deleteUser=()=>{
    axios.delete(`https://localhost:7111/api/Utilisateurs/${id}`).then((response)=>{
       navigate("/userlist")
    })

 }
 const [users,setUsers]=useState({})
 
 useEffect(()=>{
    if(!isAddmode){
        const fields=["infoId",
        "infoNom",
        "infoPrenom",
        "infoCin",
        "infoNumeroTel",
        "infoMatricule",
        "infoMail",
        "infoPwd",
        "infoRole",
        "infoIdentifiant",
        "infoDateDebutContrat",
        "infoDateFinContrat",
        "infoStatus",
        "infoNumService"]
        axios.get(`https://localhost:7111/api/Utilisateurs/${id}`).then((response)=>{
           
            fields.forEach(field=>setValue(field,response.data[field])) 
             setUsers(response.data) 
        })
    }
 },[])
 
 return (
   
        <MainDiv>
        
        <Div1>
      
            <Div>
                <Label> Matricule </Label>
                <Input type="text" {...register('infoMatricule')} onChange={(e)=>setMat(e.target.value)} placeholder='entrer le matricule' ></Input>
            </Div>
            <Div>
                <Label> Nom </Label>
                <Input type="text" {...register('infoNom')} onChange={(e)=>setNom(e.target.value)} placeholder='entrer le nom'></Input>
            </Div>
            <Div>
                <Label> Prénom </Label>
                <Input type="text" {...register('infoPrenom')} onChange={(e)=>setPrenom(e.target.value)} placeholder='entrer le prénom'></Input>
            </Div>
            <Div>
                <Label> Adresse mail </Label>
                <Input type="text"  {...register('infoMail')} onChange={(e)=>setEmail(e.target.value)} placeholder='entrer le mail'></Input>
            </Div>
            <Div>
                <Label> Identifiant </Label>
                <Input type="text" {...register('infoIdentifiant')}  onChange={(e)=>setId(e.target.value)} placeholder='entrer un identifiant'></Input>
            </Div>
            <Div>
                <Label> Mot de passe </Label>
                <Input type="text" {...register('infoPwd')}  onChange={(e)=>setPwd(e.target.value)} placeholder='entrer le mdp'></Input>
            </Div>
            <Div>
                <Label> CIN </Label>
                <Input type="text" {...register('infoCin')} onChange={(e)=>setCin(e.target.value)} placeholder='entrer code cin'></Input>
            </Div>
            <Div>
                <Label> Numéro de tel </Label>
                <Input type="text" {...register('infoNumeroTel')}  onChange={(e)=>setTel(e.target.value)} placeholder='entrer numéro de tel'></Input>
            </Div>
            </Div1>

            <br></br><br></br>
            <Div2>
            <Div>
                <Label>Service </Label>
                <Select {...register('infoNumService')}  onChange={(e)=>setService(e.target.value)}>
                    <Option value='1'>Département ingénierie informatique</Option>
                    <Option value='2'> Département technique</Option>
                    <Option value='3'>Département Administratif</Option>
                    <Option value='5'> Département commercial</Option>
                </Select>
            </Div>
            <br></br><br></br>
           
            
            <Div>
                <Label> Role </Label>
                <Select {...register('infoRole')} onChange={(e)=>setRole(e.target.value)}>
                    <Option value="0">utilisateur</Option>
                    <Option value="1">Superviseur</Option>
                    <Option value="2">Administrateur</Option>
                </Select>
            </Div>
            <br></br><br></br>
            <Div>
           
                <Label> Date Début contrat</Label>
                <Input type={isAddmode?"date":"text"}  {...register('infoDateDebutContrat')}  onChange={(e)=>setDateD(e.target.value)} ></Input>
            </Div>
            <Div>
                <Label> Date Fin contrat</Label>
                <Input {...register('infoDateFinContrat')} type={isAddmode?"date":"text"}  onChange={(e)=>setDateF(e.target.value)} ></Input>
            </Div>
            <Div>
                <Label>Statut</Label>
                <Select  {...register('infoStatus')} onChange={(e)=>setStatus(e.target.value)} >
                    <Option value="0">Autorisé</Option>
                    <Option value="1">Interdit</Option>
                </Select>
            </Div>
            <DivB>
                {isAddmode?  <> <Button onClick={postUser}>Ajouter</Button>
                <Button disabled >Supprimer</Button>
                <Button disabled>Modifier</Button></>: <> <Button disabled >Ajouter</Button>
                <Button onClick={handleShow} >Supprimer</Button>
                <Button onClick={postUser}>Modifier</Button></>}
               
               
            </DivB>
                
                </Div2>
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
              
                <p>Êtes-vous sûr de vouloir supprimer cet utilisateur {getValues("infoPrenom")} &nbsp; {getValues("infoNom")} ?</p>
               
                </Modal.Body>
                <Modal.Footer>
                  <Button m b onClick={deleteUser} >Oui</Button>
                  <Button m b onClick={handleClose} >Non</Button>
                </Modal.Footer>
         
         </Modal>
        </MainDiv>
    
  )
}

export default User