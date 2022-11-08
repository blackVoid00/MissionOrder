import React, { useState,useEffect  } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {MainM, MainDiv,MainDiv2,InputModalT,InputMT,Wrapper,Div1,SousDiv1,SousDiv2,Div2,Div3,InputM,Description,InputMFILE,InputD,Div1M,Div2M,LabelM,LabelMFile,DivM,ButtonM,Final,InputModal,LabelModal} from "./StyleMsC"
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
  // const [total2,setTotal2] = useState(0)
   const [tab,setTab] = useState([])
  const getUsers=async( )=> { 
    await axios.get(url).then((response) => {
     setData(response.data)
    })
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

                      <DivM>
                       <LabelM>Projet :</LabelM>
                       <InputM type="text" placeholder='entrer le projet...'></InputM>
                      </DivM>
                      
                      <DivM>
                       <LabelM>  Date de départ :</LabelM>
                       <InputM type="date" ></InputM>
                      </DivM>
                      <DivM>
                       <LabelM>  Heure de départ :</LabelM>
                       <InputM type="time"></InputM>
                      </DivM>
                      <DivM>
                       <LabelM> Durée Intervention :</LabelM>
                       <InputM type="text" disabled value='test'></InputM>
                      </DivM>
                      <DivM>
                       <LabelM>Véhicule utilisé :</LabelM>
                       <InputM type="text" placeholder='entrer le véhicule utilisé...'></InputM>
                      </DivM>
                      <DivM>
                       <LabelM> Accompagné par :</LabelM>
                       <select className='Select-Ms'>
                               {data.map((user)=><option>{user.nom} {user.prenom}</option>)}
                              </select>
                      </DivM>
                   </SousDiv1>
                       <SousDiv2>
                           
                       <DivM>
                       <LabelM> Date de retour :</LabelM>
                       <InputM type="date"></InputM>
                      </DivM>
                      <DivM>
                       <LabelM> Heure de retour :</LabelM>
                       <InputM type="time"></InputM>
                      </DivM> 
                      <DivM>
                       <LabelM> lieu :</LabelM>
                       <InputM type="text" placeholder='entrer le lieu...' ></InputM>
                      </DivM> 
                        
                           <DivM>
                             <LabelM>Nature Mission</LabelM>
                              <select className='Select-Ms'>
                                <option value="">Dépot de document</option>
                                <option value="">Récup de document</option>
                                <option value="">Dépannage</option>
                              </select>
                           </DivM>
                           <DivM>
                         
                          <LabelM>Description :</LabelM>
                          <InputD  type="text" placeholder='entrer les details...'></InputD>
                 
                           </DivM>
                          <DivM>
                          <LabelM>Fiche Intervention</LabelM>
                          <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'white', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>

                          </DivM>
                          <DivM>
                           {/* <ButtonM onClick={handleShow}>Autre Mission</ButtonM> */}
                          </DivM>
            </SousDiv2>
            {/* <Modal
                aria-labelledby="contained-modal-title-vcenter"
               size="xl"
                className="special_modal"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                style={{color: "black"}}>
                <Modal.Header closeButton variant="white">
                  <Modal.Title  style={{color: "black",fontWeight: "bold"}}>Sous Mission</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <MainM>
                    <Div1M> 
                    <DivM>
                    <LabelModal>Projet :</LabelModal>
                     <InputModal type="text" placeholder='entrer le projet...'></InputModal>
                  </DivM>
                  <DivM>
                    <LabelModal>Date de depart :</LabelModal>
                     <InputModal type="date"></InputModal>
                  </DivM>
                  <DivM>
                    <LabelModal>Heure de départ :</LabelModal>
                     <InputModal type="time"></InputModal>
                  </DivM>
                  <DivM>
                    <LabelModal>Durée Intervention :</LabelModal>
                     <InputModal type="text" disabled value='test'></InputModal>
                  </DivM>
                  <DivM>
                    <LabelModal>Véhicule utilisé</LabelModal>
                     <InputModal type="text" placeholder='entrer le véhicule...'></InputModal>
                  </DivM>
                  <DivM>
                    <LabelModal>Accompagné par :</LabelModal>
                    <select className='Select-Ms'>
                               {data.map((user)=><option>{user.nom} {user.prenom}</option>)}
                              </select>
        
                  </DivM>
                  </Div1M>

                  <Div2M>
                    <DivM>
                    <LabelModal>Date de retour:</LabelModal>
                     <InputModal type="date" ></InputModal>
                  </DivM>
                  <DivM>
                    <LabelModal>heure de retour</LabelModal>
                     <InputModal type="time" ></InputModal>
                  </DivM>
                  <DivM>
                    <LabelModal>Lieu</LabelModal>
                     <InputModal type="text" placeholder='entrer le lieu...'></InputModal>
                  </DivM>
                  <DivM>
                             <LabelM>Nature Mission</LabelM>
                              <select className='Select-Modal'>
                                <option value="">Dépot de document</option>
                                <option value="">Récup de document</option>
                                <option value="">Dépannage</option>
                              </select>
                           </DivM>
                  <DivM>
                 
                          <LabelM>Fiche Intervention</LabelM>
                          
            <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'black', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>

                          </DivM>
                       
                  </Div2M>
                
                  <SousDiv1>
         <DivM>
           <LabelM> Gasoil :</LabelM>
            <InputModal type="text" placeholder='frais gazoil...' onChange={(e)=>setGazoil2(e.target.value)}></InputModal>
          
            <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'black', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>

        </DivM> 
        <DivM>
           <LabelM> Parking :</LabelM>
            <InputModal type="text" placeholder='frais parking...' onChange={(e)=>setParking2(e.target.value)} ></InputModal>
           
            <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'black', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile} ></AiOutlineCloudUpload>
                </IconContext.Provider>

        </DivM> 
        <DivM>
           <LabelM> Hotel :</LabelM>
            <InputModal type="text" placeholder='frais hotel...' onChange={(e)=>setHotel2(e.target.value)}></InputModal>
          
           
            <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'black', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>
           
        </DivM> 
        <DivM>
           <LabelM> Repas :</LabelM>
            <InputModal type="text" placeholder='frais repas...' onChange={(e)=>setRepas2(e.target.value)}></InputModal>
         
           
            <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'black', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>

        </DivM>
        <DivM>
           <LabelM> Taxi :</LabelM>
            <InputModal type="text" placeholder='frais taxi...' onChange={(e)=>setTaxi2(e.target.value)}></InputModal>
          
            <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'black', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>

        </DivM>
        <DivM>
           <LabelM> Ach/tech :</LabelM>
            <InputModal type="text" placeholder='frais achat tech...' onChange={(e)=>setAch2(e.target.value)} ></InputModal>
          
           
            <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'black', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>
        </DivM>  
        <DivM>
           <LabelM> divers :</LabelM>
            <InputModal type="text" placeholder='autre...' onChange={(e)=>setDivers2(e.target.value)}></InputModal>
           
           
            <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'black', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>

        </DivM>
        <DivM>
        <LabelM> Total</LabelM>    
        <InputModalT  type="text" disabled></InputModalT>
        </DivM>
        <ButtonM left top bottom onClick={setFinalTotal2}>Soumettre</ButtonM>  
         </SousDiv1>
                  
                  </MainM>
                </Modal.Body>
                <Modal.Footer>
                  
                  <Button variant="success"  >Soumettre</Button>
                 
                </Modal.Footer>
            </Modal> */}
               </Div2>
          {/* {c ?<SousMission name={"Valider"} ></SousMission> : null} */}
        
        </MainDiv>
        <MainDiv2>
            <Div3>
            <SousDiv1>
         <DivM>
           <LabelM> Gasoil :</LabelM>
            <InputM type="text" placeholder='frais gazoil...' onChange={(e)=>setGazoil(e.target.value)} ></InputM>
          
            <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'white', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>

        </DivM> 
        <DivM>
           <LabelM> Parking :</LabelM>
            <InputM type="text" placeholder='frais parking...' onChange={(e)=>setParking(e.target.value)}></InputM>
           
            <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'white', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>

        </DivM> 
        <DivM>
           <LabelM> Hotel :</LabelM>
            <InputM type="text" placeholder='frais hotel...' onChange={(e)=>setHotel(e.target.value)}></InputM>
          
           
            <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'white', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>
           
        </DivM> 
        <DivM>
           <LabelM> Repas :</LabelM>
            <InputM type="text" placeholder='frais repas...' onChange={(e)=>setRepas(e.target.value)}></InputM>
         
           
            <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'white', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>

        </DivM>
        <DivM>
           <LabelM> Taxi :</LabelM>
            <InputM type="text" placeholder='frais taxi...' onChange={(e)=>setTaxi(e.target.value)}></InputM>
          
            <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'white', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>

        </DivM>
        <DivM>
           <LabelM> Ach/tech :</LabelM>
            <InputM type="text" placeholder='frais achat tech...' onChange={(e)=>setAch(e.target.value)} ></InputM>
          
           
            <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'white', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>
        </DivM>  
        <DivM>
           <LabelM> divers :</LabelM>
            <InputM type="text" placeholder='autre...' onChange={(e)=>setDivers(e.target.value)}></InputM>
           
           
            <input id="file-input" type="file" style={{display :"none"}}></input>
                <IconContext.Provider value={{ color: 'white', size: '30px'}}>
               <AiOutlineCloudUpload  style={{marginLeft:20}} onClick={uploadFile}></AiOutlineCloudUpload>
                </IconContext.Provider>

        </DivM>
        
        <Final>
        <DivM>
        <LabelM> Total</LabelM>    
        <InputMT  type="text" disabled value={total}></InputMT>
        </DivM>
         <ButtonM left top bottom onClick={setFinalTotal}>Soumettre</ButtonM>  
       
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