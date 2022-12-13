import React, { useState,useEffect  } from 'react'
import Modal from 'react-bootstrap/Modal';
import {MainM, MainDiv,MainDiv2,InputMT,Select,Div1,SousDiv1,SousDiv2,Div2,Div3,InputM,InputD,LabelM,Final,Button} from "./StyleMsC"
import {AiOutlineCloudUpload} from "react-icons/ai"
import { IconContext } from "react-icons";
import axios from "axios";
import "./modal.css"


const MissionComponent = () => {
  const url = "https://localhost:7111/api/Utilisateurs"
  const [data,setData] = useState([])
  const [gasoil,setGazoil]=useState(0)
  const [parking,setParking] = useState(0)
  const [hotel,setHotel] = useState(0)
  const [repas,setRepas] = useState(0)
  const [taxi,setTaxi] = useState(0)
  const [ach,setAch] = useState(0)
  const [divers,setDivers] = useState(0)
  // const [gasoil2,setGazoil2]=useState(0)
  // const [parking2,setParking2] = useState(0)
  // const [hotel2,setHotel2] = useState(0)
  // const [repas2,setRepas2] = useState(0)
  // const [taxi2,setTaxi2] = useState(0)
  // const [ach2,setAch2] = useState(0)
  // const [divers2,setDivers2] = useState(0)
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
  // const [total2,setTotal2] = useState(0)
   const [tab,setTab] = useState([])
  const getUsers=async( )=> { 
    await axios.get(url).then((response) => {
     setData(response.data)
    })
  }
  const duration=()=>{
    var difference =(ha-hd) / 1000;
    difference /= (60 * 60);
    return Math.abs(Math.round(difference));
  }
  var sommeF=0
  useEffect(()=>{
      getUsers()
      setTotal(()=>parseInt(gasoil)+ parseInt(parking)+ parseInt(repas)+ parseInt(ach)+parseInt(taxi)+parseInt(hotel)+parseInt(divers))
      
      // setTotal2(()=>parseInt(gasoil2)+ parseInt(parking2)+ parseInt(repas2)+ parseInt(ach2)+parseInt(taxi2)+parseInt(hotel2)+parseInt(divers2))  
  })
  const setFinalTotal=()=>{
    let initialVal=0
    tab.push(total) 
    let tab2=tab.reduce((c,p)=>c+p,initialVal)
    setTotal(0)
    console.log(tab)
    console.log(tab2)   
  }
  // const setFinalTotal2=()=>{
  //   tab.push(total2) 
  //   console.log(tab)   
  // }
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
    // const [isDisabled,setDisabled]=useState(true)
    // const [c,setClicked]=useState(false)
    
    // const [users,setUsers]=useState([{
    //     name:"Ahmed",
    //     age:"20",
    //     Role:"user"
    //  },{
    //    name:"Wiam",
    //    age:"40",
    //    Role:"admin"
    //  },{
    //    name:"Asma",
    //    age:"30",
    //    Role:"editor"
    //  }
    
    // ] )
    // const [role,setRole]=useState(0)
    // // const AddOther=()=>{
    // //     setClicked(!c)
      
    // // }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
        <>
        {/* <select name="roles" onChange={(e)=>{setRole(e.target.value)}}>
            <option value="0">user</option>
            <option value="1">admin</option>
            <option value="2">editor</option>
        </select>
       */}
        <MainM>
        <MainDiv>
            {/* <Div1>
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
              
            </Div1> */}
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
                               <option>Dacia Lodgy </option>
                               <option>Renault Kango  </option>
                               <option>Renault Express </option>
                               <option>Autre</option>
                              </Select>
                      </Div1>
                      <Div1>
                      <LabelM > Accompagné par :</LabelM>
                       <Select  onChange={(e)=>setAcc(e.target.value)}>
                               {data.map((user)=><option>{user.infoNom} {user.infoPrenom}</option>)}
                               <option>Personne</option>
                              </Select>
                      </Div1>
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
                              <input id="file-input" type="file" style={{display :"none"}}></input>
                          <IconContext.Provider value={{ color: 'black', size: '30px'}}>
                          <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                          </IconContext.Provider>
                           </Div1>
                           <Div1>
                         
                           <LabelM>Description :</LabelM>
                          <InputD  type="text" placeholder='entrer les details...' onChange={(e)=>setD(e.target.value)}></InputD>
                 
                           </Div1>
                          {/* <Div1>
                          <LabelM w>Fiche Intervention</LabelM>
                          <input id="file-input" type="file" style={{display :"none"}}></input>
                          <IconContext.Provider value={{ color: 'black', size: '30px'}}>
                          <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                          </IconContext.Provider>

                          </Div1> */}
                          <Div1>
                           {/* <ButtonM onClick={handleShow}>Autre Mission</ButtonM> */}
                          </Div1>
            </SousDiv2>
           
               </Div2>
          {/* {c ?<SousMission name={"Valider"} ></SousMission> : null}  */}
        
        </MainDiv>
        <MainDiv2>
            <Div3>
            <SousDiv1>
        <Div1>
          <LabelM>Type Dépense</LabelM>
          <Select className='Select-Ms' onChange={(e)=>setNature(e.target.value)}>
            <option>veuillez selectionner un choix</option>
                                <option value="">Hotel</option>
                                <option value="">Gasoil</option>
                                <option value="">Taxi</option>
                                <option value="">Repas</option>
                                <option value="">Parking</option>
                                <option value="">Divers</option>
                                <option value="">Achats technique</option>
                              </Select>
                              <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'black', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>
          <LabelM>Montant Dépense</LabelM>                    
         <InputM type="text" placeholder='entrer un montant'></InputM>    
         <LabelM> Total</LabelM>  
         <InputM type="text" disabled value={total}></InputM>                   
        </Div1>
        <Final>
         <Button left top bottom onClick={setFinalTotal}>Soumettre</Button>  
       
        </Final>
         </SousDiv1>
         
            </Div3>
            <Div3>
            {/* <table style={{height:"100px",width:"200px", backgroundColor:"black",marginBottom:"100px", borderCollapse: "collapse"}}>
                <tr>
                  <th style={{paddingTop: "12px",paddingBottom: "12px",textAlign: "left" ,backgroundColor: "#04AA6D", color: "white"}}>Numero</th>
                  <th style={{paddingTop: "12px",paddingBottom: "12px",textAlign: "left" ,backgroundColor: "#04AA6D", color: "white"}}>Crédit</th>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #ddd",padding: "8px"}}>{data[0].idUser}</td>
                  <td style={{ border: "1px solid #ddd",padding: "8px"}}>{data[0].identifiant}</td>
                </tr>
              </table>
             */}
            </Div3>
             
        </MainDiv2>
        </MainM>
        </>
  )
}

export default MissionComponent