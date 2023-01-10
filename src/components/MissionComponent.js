import React, { useState,useEffect  } from 'react'
import Modal from 'react-bootstrap/Modal';
import {MainM, MainDiv,MainDiv2,InputMT,Select,Div1,SousDiv1,SousDiv2,Div2,Div3,InputM,InputD,LabelM,Final,Button, ButtonM, H1} from "./StyleMsC"
import {AiOutlineCloudUpload} from "react-icons/ai"
import { IconContext } from "react-icons";
import axios from "axios";
import "./modal.css"
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import {TbCurrencyDirham} from 'react-icons/tb'
const MissionComponent = () => {
  const {id}=useParams()
  const [mission,setMission]=useState({})
  const url = "https://localhost:7111/api/Utilisateurs"
  const [data,setData] = useState([])
  const [ha,setHa]=useState("")
  const [hd,setHd]=useState("")
  const [dated,setDd]=useState("")
  const [vehicule,setVehicule]=useState("")
  const [acc,setAcc]=useState("")
  const [dater,setDr]=useState("")
  const [lieu,setLieu]=useState("")
  const [nature,setNature]=useState("")
  const [desc,setD]=useState("")
  const [duree,setDuration]=useState(0)
  const { register,setValue,getValues} = useForm();
  var curr = new Date();
     curr.setDate(curr.getDate());
     var datedepense = curr.toISOString().substring(0,10);
     const [datedep,setDep]=useState(datedepense)
     const [montant,setMontant]=useState(0)
     const [file,setFile]=useState()

    const saveFile=(e) =>{
      setFile(e.target.files[0])
      
  }
 let formData=new FormData();
const urlDepense="https://localhost:7111/api/Depenses"
  formData.append("file",file)
     const sendDepense =()=>{
      axios.post(urlDepense,formData,{
        params:{
        Montant:montant,
        TypeDepense:nature,
        DateCreation:datedep,
        id:id
        
      }}).then((response)=>{});
      setShow(false)
    }
   const [tab,setTab] = useState([])
  const getUsers=async( )=> { 
    await axios.get(url).then((response) => {
     setData(response.data)
    })
  }
  console.log(file)
  const duration=()=>{
    var difference =(ha-hd) / 1000;
    difference /= (60 * 60);
    return Math.abs(Math.round(difference));
  }
 
  const getMission=()=>{
    axios.get(`https://localhost:7111/api/Ms/${id}`).then((response)=>{
       setMission(response.data)
    })
   }
 const updateMission=()=>{
  axios.put(`https://localhost:7111/api/Ms/${id}`,{idMission: id,
  numeroMission:getValues("numeroMission"),
  idBonCaisse:getValues("idBonCaisse"),
  dateCreation:getValues("dateCreation"),
  dateDebut:getValues("dateDebut"),
  dateFin:getValues("dateFin"),
  idUser:getValues("idUser"),
  objetMission:getValues("objetMission"),
  totalMission: 0,
  etatMission:"O",
  valideParSuperviseur: "N",
  valideParAdministrateur:"N",
  dureeIntervention:0,
  lieu:getValues("lieu"),
  nature: getValues("nature"),
  vehicule:getValues("vehicule") ,
  accompagnePar: getValues("accompagnePar"),
  heureDebut: getValues("heureDebut"),
  heureFin: getValues("heureFin"),
  description:getValues("description")

  }).then((response)=>{
    
  })
  setShowU(false)
 }
 useEffect(()=>{
  getUsers()
  const fields=[
  "numeroMission",
  "idBonCaisse",
  "dateCreation",
  "totalMission",
  "idUser",
  "etatMission",
  "valideParSuperviseur",
  "valideParAdministrateur",
  "objetMission",
  "dateDebut",
  "dateFin",
  "dureeIntervention",
  "lieu",
  "nature",
  "vehicule",
  "accompagnePar",
  "heureDebut",
  "heureFin",
  "description"]
        axios.get(`https://localhost:7111/api/Ms/${id}`).then((response)=>{
            fields.forEach(field=>setValue(field,response.data[field])) 
             setMission(response.data) 
        })
    
  // setTotal(()=>parseInt(gasoil)+ parseInt(parking)+ parseInt(repas)+ parseInt(ach)+parseInt(taxi)+parseInt(hotel)+parseInt(divers))
  
  // setTotal2(()=>parseInt(gasoil2)+ parseInt(parking2)+ parseInt(repas2)+ parseInt(ach2)+parseInt(taxi2)+parseInt(hotel2)+parseInt(divers2))  
},[])

  // var storage=localStorage.setItem("total",total)
  const uploadFile=()=>{
    const input = document.getElementById('file-input');
    if (input) {
       input.click();
    }
    }
  console.log(mission)
   
  
  
    const [show, setShow] = useState(false);
   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [showU, setShowU] = useState(false);
   
    const handleCloseU = () => setShowU(false);
    const handleShowU = () => setShowU(true);
  return (
        <>
        <MainM>
        <MainDiv>
          
            <Div2>
         
         <SousDiv1>

     
                      <Div1>
                       <LabelM>  Date de Début :</LabelM>
                       <InputM type="text" {...register('dateDebut')} onChange={(e)=>setDd(e.target.value)} disabled></InputM>
                      </Div1>
                      <Div1>
                       <LabelM>  Heure de Début :</LabelM>
                       <InputM type="time" {...register('heureDebut')} onChange={(e)=>setHd(e.target.value)}></InputM>
                      </Div1>
                      <Div1>
                      <LabelM> Durée Intervention :</LabelM>
                       <InputM type="text" {...register('dureeIntervention')} disabled  onChange={(e)=>setDuration(e.target.value)}></InputM>
                      </Div1>
                      <Div1>
                      <LabelM >Véhicule utilisé :</LabelM>
                       <Select {...register('vehicule')}  onChange={(e)=>setVehicule(e.target.value)}>
                               <option>Veuillez selectionner un choix</option>
                               <option>Dacia Lodgy 12130-H-6</option>
                               <option>Renault Kango 46709-D-8 </option>
                               <option>Renault Express WW075167 </option>
                               <option>Autre</option>
                               <option>Rien</option>
                              </Select>
                      </Div1>
                      <Div1>
                      <LabelM > Accompagné par :</LabelM>
                       <Select {...register('accompagnePar')} onChange={(e)=>setAcc(e.target.value)}>
                       <option>Veuillez selectionner une personne</option>
                               {data.map((user)=><option>{user.infoNom} {user.infoPrenom}</option>)}
                               <option value="Personne">Personne</option>
                              </Select>
                      </Div1>
                   </SousDiv1>
                   <SousDiv2>
                           
                       <Div1>
                       <LabelM >Date de Fin :</LabelM>
                       <InputM disabled {...register('dateFin')} onChange={(e)=>setDr(e.target.value)}></InputM>
                      </Div1>
                      <Div1>
                      <LabelM > Heure de retour :</LabelM>
                       <InputM {...register('heureFin')} type="time"  onChange={(e)=>setHa(e.target.value)}></InputM>
                      </Div1> 
                      <Div1>
                      <LabelM> lieu :</LabelM>
                       <InputM type="text" {...register('lieu')} placeholder='entrer le lieu...' onChange={(e)=>setLieu(e.target.value)} ></InputM>
                      </Div1> 
                        
                           <Div1>
                           <LabelM >Nature Mission</LabelM>
                              <Select {...register('nature')} className='Select-Ms' onChange={(e)=>setNature(e.target.value)}>
                              <option>Veuillez selectionner un choix</option>
                                <option>Dépot de document</option>
                                <option>Récup de document</option>
                                <option>Dépannage</option>
                                <option>Autre</option>
                              </Select>
                              <input id="file-input" type="file" style={{display :"none"}} ></input>
                          <IconContext.Provider value={{ color: 'black', size: '30px'}}>
                          <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                          </IconContext.Provider>
                           </Div1>
                           <Div1>
                         
                           <LabelM>Description :</LabelM>
                          <InputD {...register('description')} type="text" placeholder='entrer les details...' onChange={(e)=>setD(e.target.value)}></InputD>
                 
                           </Div1>
                          <Div1>
                         <Button onClick={handleShowU}>Envoyer</Button>
                          </Div1>
            </SousDiv2>
           
               </Div2>
       
        
        </MainDiv>
        <MainDiv2>
            <Div3>
            <SousDiv1>
              <Div1><H1>Mes Dépenses</H1></Div1>
        <Div1>
          <LabelM>Date Dépense</LabelM>
          <InputM type="date" defaultValue={datedepense}  onChange={(e)=>setDep(e.target.value)}></InputM>
          <LabelM>Type Dépense</LabelM>
          <Select className='Select-Ms' onChange={(e)=>setNature(e.target.value)}>
            <option>veuillez selectionner un choix</option>
                                <option value="Hotel">Hotel</option>
                                <option value="Gasoil">Gasoil</option>
                                <option value="Taxi">Taxi</option>
                                <option value="Repas">Repas</option>
                                <option value="Parking">Parking</option>
                                <option value="Divers">Divers</option>
                                <option value="Achats Tech">Achats technique</option>
                              </Select>
                            
                              <LabelM>Piéce jointe</LabelM>
                              <input  type="file" name="image" accept="image/*"  multiple={false} onChange={(e)=>saveFile(e)}></input>
          <LabelM>Montant Dépense</LabelM>                    
         <InputM type="text" placeholder='entrer un montant' onChange={(e)=>setMontant(e.target.value)}></InputM>&nbsp;&nbsp;&nbsp;&nbsp;
         <IconContext.Provider value={{ color: 'black', size: '26px'}}>
         <TbCurrencyDirham></TbCurrencyDirham>
                          </IconContext.Provider>
        </Div1>
        <Button onClick={handleShow}>Send Data</Button>
       
       
        <Modal
        aria-labelledby="contained-modal-title-vcenter"
        className="special_modal"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{color: "black"}}>
         
         <Modal.Header closeButton variant="white">
                  <Modal.Title  style={{color: "black",fontWeight: "bold"}}>Dépense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p>Etes vous sur de vouloir soumettre cette dépense ?</p>
                <ul>
                  <li>Type dépense :{nature}</li>
                  <li>Montant :{montant}</li>
                </ul>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="success" onClick={sendDepense}>Valider</Button>
                 
                </Modal.Footer>
         
         </Modal>
         <Modal
        aria-labelledby="contained-modal-title-vcenter"
        className="special_modal"
        show={showU}
        onHide={handleCloseU}
        backdrop="static"
        keyboard={false}
        style={{color: "black"}}>
         
         <Modal.Header closeButton variant="white">
                  <Modal.Title  style={{color: "black",fontWeight: "bold"}}>Details Mission</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p>Etes vous sur de vouloir soumettre cette Mission ?</p>
              
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="success" onClick={updateMission}>Valider</Button>
                 
                </Modal.Footer>
         
         </Modal>
       
         </SousDiv1>
         
            </Div3>
            <Div3>
           
            </Div3>
             
        </MainDiv2>
        </MainM>
        </>
  )
}

export default MissionComponent