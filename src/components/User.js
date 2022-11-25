import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import styles from "styled-components"
import { useForm } from "react-hook-form";
import {moment} from "moment"
const MainDiv=styles.div`
background-color:#1c539b;
display:flex;
width:900px;
height:800px;
box-shadow: rgba(0, 0, 0, 0.1) 0 5px 40px, rgba(0, 0, 0, 0.1) 0 5px 10px  !important;
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
color:white;
margin-left:30px;
`
const Input=styles.input`
margin-bottom:10px;
margin-top:10px;
margin-right:10px;
height:35px !important;
width: ${props=> props.inDate? "100px":"200px"};
background: #fff;
font: inherit;
box-shadow: 0 6px 10px 0 rgba(0, 0, 0 , .1);
border: 0;
outline: 0;
&:focus{
outline: none  !important;
}
text-align:center;

`
const Select=styles.select`
&:focus{
    outline:none;
}

border: none;
padding: 0 1em 0 0;
margin: 0;
width: 200px;
font-family: inherit;
font-size: inherit;
cursor: inherit;
line-height: inherit;
}
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
background-color:#B0C4DE ;
font-weight:bold !important;
cursor: pointer;
font-weight:bold ;
box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.25);
width:140px;
height:30px;
margin-left:5px;
margin-right:5px;
margin-top:220px;
margin-bottom:30px;
`
const User = () => {
    const {id}=useParams()
    const navigate = useNavigate()
   
    const isAddmode=!id;
    const [nom,setNom]=useState("")
    const [prenom,setPrenom]=useState("")
    const [matricule,setMat]=useState("")
    const [mail,setEmail]=useState("")
    const [pwd,setPwd]=useState("")
    const [role,setRole]=useState(0)
    const [identifiant,setId]=useState("")
    const [idService,setService]=useState(1)
    const [cin,setCin]=useState("")
    const [numeroTel,setTel]=useState("")
    const [dateDebutContrat,setDateD]=useState("")
    const [dateFinContrat,setDateF]=useState("")
    const [status,setStatus]=useState(0)

 const postUser=()=>{
    isAddmode?
    axios.post("https://localhost:7111/api/Utilisateurs",{
        nom:  nom,
        prenom: prenom,
        matricule: matricule,
        mail: mail,
        pwd: pwd,
        role:role ,
        identifiant: identifiant,
        idService: idService,
        cin:  cin,
        numeroTel: numeroTel,
        dateDebutContrat: dateDebutContrat,
        dateFinContrat:dateFinContrat,
        status:status
      }).then((response)=>{
        alert("user inserted successfully");
    }):axios.put(`https://localhost:7111/api/Utilisateurs/${id}`,{
        nom:  nom,
        prenom: prenom,
        matricule: matricule,
        mail: mail,
        pwd: pwd,
        role:role ,
        identifiant: identifiant,
        idService: idService,
        cin:  cin,
        numeroTel: numeroTel,
        dateDebutContrat: dateDebutContrat,
        dateFinContrat:dateFinContrat,
        status:status
      }).then((response)=>{
            alert("user inserted successfully")
    })
 }
 const deleteUser=()=>{
    axios.delete(`https://localhost:7111/api/Utilisateurs/${id}`).then((response)=>{
       navigate("/userlist")
    })

 }
 console.log(status)  
 const [users,setUsers]=useState({})
 const { register,setValue} = useForm();
 
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
 console.log(users)
 
 console.log(users)
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
                <Input type="date"  {...register('infoDateDebutContrat')}  onChange={(e)=>setDateD(e.target.value)} ></Input>
            </Div>
            <Div>
                <Label> Date Fin contrat</Label>
                <Input {...register('infoDateFinContrat')} type="date"  onChange={(e)=>setDateF(e.target.value)} ></Input>
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
                <Button onClick={deleteUser} >Supprimer</Button>
                <Button onClick={postUser}>Modifier</Button></>}
               
               
            </DivB>
                
                </Div2>
        </MainDiv>
    
  )
}

export default User