import React, { useState,useEffect  } from 'react'
import Modal from 'react-bootstrap/Modal';
import {MainM, MainDiv,MainDiv2,InputMT,Select,Div1,SousDiv1,SousDiv2,Div2,Div3,InputM,InputD,LabelM,Final,Button} from "./StyleMsC"
import {AiOutlineCloudUpload} from "react-icons/ai"
import { IconContext } from "react-icons";
import axios from "axios";
import "./modal.css"
import { useParams } from 'react-router-dom';


const MissionComponent = () => {
  const {id}=useParams()
  const url = "https://localhost:7111/api/Utilisateurs"
  const [data,setData] = useState([])
  const [divers,setDivers] = useState(0)
  const [total,setTotal] = useState(0)
  const [ha,setHa]=useState("")
  const [hd,setHd]=useState("")
  const [projet,setProjet]=useState("")
  const [dated,setDd]=useState("")
  const [vehicule,setVehicule]=useState("")
  const [acc,setAcc]=useState("")
  const [dater,setDr]=useState("")
  const [lieu,setLieu]=useState("")
  const [nature,setNature]=useState("")
  const [desc,setD]=useState("")
  const [duree,setDuration]=useState(0)
  const [fileName,setFileName]=useState("")
  var curr = new Date();
     curr.setDate(curr.getDate());
     var datedepense = curr.toISOString().substring(0,10);
     const [datedep,setDep]=useState(datedepense)
     const [montant,setMontant]=useState(0)
     const [file,setFile]=useState()

    const saveFile=(e) =>{
      setFile(e.target.files[0])
      setFileName(e.target.files[0].name)
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
  var sommeF=0
  // useEffect(()=>{
  //     getUsers()
  //     // setTotal(()=>parseInt(gasoil)+ parseInt(parking)+ parseInt(repas)+ parseInt(ach)+parseInt(taxi)+parseInt(hotel)+parseInt(divers))
      
  //     // setTotal2(()=>parseInt(gasoil2)+ parseInt(parking2)+ parseInt(repas2)+ parseInt(ach2)+parseInt(taxi2)+parseInt(hotel2)+parseInt(divers2))  
  // })
  const setFinalTotal=()=>{
    let initialVal=0
    tab.push(total) 
    let tab2=tab.reduce((c,p)=>c+p,initialVal)
    setTotal(0)
    console.log(tab)
    console.log(tab2)   
  }
 
  var storage=localStorage.setItem("total",total)
  const uploadFile=()=>{
    const input = document.getElementById('file-input');
    if (input) {
       input.click();
    }
    }
  
   
    const createmS=()=>{
      axios.put("https://localhost:7111/api/Missions",{
      
      }).then((response)=>{
            alert("user inserted successfully")
    })
    }
  
    const [show, setShow] = useState(false);
   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
        <>
        <MainM>
        <MainDiv>
          
            <Div2>
         
         <SousDiv1>

                      
                      <Div1>
                       <LabelM>  Date de Début :</LabelM>
                       <InputM type="date" onChange={(e)=>setDd(e.target.value)}></InputM>
                      </Div1>
                      <Div1>
                       <LabelM>  Heure de Début :</LabelM>
                       <InputM type="time" onChange={(e)=>setHd(e.target.value)}></InputM>
                      </Div1>
                      <Div1>
                      <LabelM> Durée Intervention :</LabelM>
                       <InputM type="text" disabled value={duree} onChange={(e)=>setDuration(e.target.value)}></InputM>
                      </Div1>
                      <Div1>
                      <LabelM >Véhicule utilisé :</LabelM>
                       <Select onChange={(e)=>setVehicule(e.target.value)}>
                               <option>Veuillez selectionner un choix</option>
                               <option>Dacia Lodgy 12130-H-6</option>
                               <option>Renault Kango 46709-D-8 </option>
                               <option>Renault Express WW075167 </option>
                               <option>Autre</option>
                               <option>Rien</option>
                              </Select>
                      </Div1>
                      {/* <Div1>
                      <LabelM > Accompagné par :</LabelM>
                       <Select  onChange={(e)=>setAcc(e.target.value)}>
                               {data.map((user)=><option>{user.infoNom} {user.infoPrenom}</option>)}
                               <option>Personne</option>
                              </Select>
                      </Div1> */}
                   </SousDiv1>
                   <SousDiv2>
                           
                       <Div1>
                       <LabelM >Date de Fin :</LabelM>
                       <InputM type="date" onChange={(e)=>setDr(e.target.value)}></InputM>
                      </Div1>
                      <Div1>
                      <LabelM > Heure de retour :</LabelM>
                       <InputM type="time"  onChange={(e)=>setHa(e.target.value)}></InputM>
                      </Div1> 
                      <Div1>
                      <LabelM> lieu :</LabelM>
                       <InputM type="text" placeholder='entrer le lieu...' onChange={(e)=>setLieu(e.target.value)} ></InputM>
                      </Div1> 
                        
                           <Div1>
                           <LabelM >Nature Mission</LabelM>
                              <Select className='Select-Ms' onChange={(e)=>setNature(e.target.value)}>
                                <option value="">Dépot de document</option>
                                <option value="">Récup de document</option>
                                <option value="">Dépannage</option>
                                <option value="">Autre</option>
                              </Select>
                              <input id="file-input" type="file" style={{display :"none"}} ></input>
                          <IconContext.Provider value={{ color: 'black', size: '30px'}}>
                          <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                          </IconContext.Provider>
                           </Div1>
                           <Div1>
                         
                           <LabelM>Description :</LabelM>
                          <InputD  type="text" placeholder='entrer les details...' onChange={(e)=>setD(e.target.value)}></InputD>
                 
                           </Div1>
                          <Div1>
                         
                          </Div1>
            </SousDiv2>
           
               </Div2>
       
        
        </MainDiv>
        <MainDiv2>
            <Div3>
            <SousDiv1>
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
                              <input  type="file" name="image" accept="image/*" multiple={false} onChange={(e)=>saveFile(e)}></input>
                <IconContext.Provider value={{ color: 'black', size: '30px'}}>
               
                </IconContext.Provider>
          <LabelM>Montant Dépense</LabelM>                    
         <InputM type="text" placeholder='entrer un montant' onChange={(e)=>setMontant(e.target.value)}></InputM>    
        <button onClick={sendDepense}>Send Data</button>
       
        </Div1>
       
       
       
       
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