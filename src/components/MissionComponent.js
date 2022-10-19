import React, { useState,useEffect  } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {MainM, MainDiv,MainDiv2,Wrapper,Div1,SousDiv1,SousDiv2,Div2,Div3,InputM,Description,InputMFILE,InputD,Div1M,Div2M,LabelM,LabelMFile,DivM,ButtonM,Final,InputModal,LabelModal} from "./StyleMsC"
import {AiOutlineCloudUpload} from "react-icons/ai"
import { IconContext } from "react-icons";
import axios from "axios";
const MissionComponent = () => {
  const url = "https://localhost:7048/api/Utilisateurs"
  const [data,setData] = useState([])

  const getUsers=async( )=> { 
    await axios.get(url).then((response) => {
     setData(response.data)
    })
  }
  useEffect(()=>{
      getUsers()
   
  })
 
    const [isDisabled,setDisabled]=useState(true)
    const [c,setClicked]=useState(false)
    
    const [users,setUsers]=useState([{
        name:"Ahmed",
        age:"20",
        Role:"user"
     },{
       name:"Wiam",
       age:"40",
       Role:"admin"
     },{
       name:"Asma",
       age:"30",
       Role:"editor"
     }
    
    ] )
    const [role,setRole]=useState(0)
    // const AddOther=()=>{
    //     setClicked(!c)
      
    // }
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
                       <InputM type="text" placeholder='entrer le projet'></InputM>
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
                       <InputM type="text" disabled></InputM>
                      </DivM>
                      <DivM>
                       <LabelM>Véhicule utilisé :</LabelM>
                       <InputM type="text" placeholder='entrer le véhicule utilisé'></InputM>
                      </DivM>
                      <DivM>
                       <LabelM> Accompagné par :</LabelM>
                       <InputM type="text"></InputM>
                      
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
                       <InputM type="text" placeholder='entrer le lieu' ></InputM>
                      </DivM> 
                        
                           <DivM>
                               <LabelM> Dépot de document</LabelM>
                               <InputM type="checkbox"></InputM> 
                           </DivM>
                           <DivM>
                               <LabelM>Récup de document</LabelM>
                               <InputM type="checkbox"></InputM> 
                           </DivM>
                           <DivM>
                               <LabelM> Dépannage</LabelM>
                               <InputM type="checkbox"></InputM> 
                           </DivM>
                          <DivM>
                          <LabelM>Fiche Intervention</LabelM>
                          <Wrapper>
                           <InputMFILE  type="file" ></InputMFILE>
                          </Wrapper>
                          &nbsp; &nbsp; &nbsp; &nbsp;
          <IconContext.Provider value={{ color: 'white', size: '30px'}}>
           
            <AiOutlineCloudUpload></AiOutlineCloudUpload>
  
       
            </IconContext.Provider>
                          </DivM>
                          <DivM>
                           <ButtonM onClick={handleShow}>Autre Mission</ButtonM>
                          </DivM>
            </SousDiv2>
            <Modal
                size="xl"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                style={{color: "black"}}>
                <Modal.Header closeButton>
                  <Modal.Title  style={{color: "black"}}>Sous Mission</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <MainM>
                    <Div1M> 
                    <DivM>
                    <LabelModal>Projet :</LabelModal>
                     <InputModal type="text" placeholder='entrer le projet'></InputModal>
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
                     <InputModal type="text" disabled placeholder='durée'></InputModal>
                  </DivM>
                  <DivM>
                    <LabelModal>Véhicule utilisé</LabelModal>
                     <InputModal type="text" placeholder='entrer le véhicule'></InputModal>
                  </DivM>
                  <DivM>
                    <LabelModal>Accompagné par :</LabelModal>
                     <InputModal type="text" placeholder='entrer le nom complet '></InputModal>
        
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
                     <InputModal type="text" placeholder='entrer le lieu'></InputModal>
                  </DivM>
                  <DivM>
                      <LabelM> Dépot de document</LabelM>
                      <InputM type="checkbox"></InputM> 
                  </DivM>
                  <DivM>
                      <LabelM> Récup de document</LabelM>
                      <InputM type="checkbox"></InputM> 
                  </DivM>
                  <DivM>
                      <LabelM> Dépannage</LabelM>
                      <InputM type="checkbox"></InputM> 
                  </DivM>
                  <DivM>
                          <LabelM>Fiche Intervention</LabelM>
                          <Wrapper>
                          <InputMFILE  type="file"  ></InputMFILE>
                          </Wrapper>
                          &nbsp; &nbsp; &nbsp; &nbsp;
          <IconContext.Provider value={{ color: '#1c539b', size: '30px'}}>
           
            <AiOutlineCloudUpload></AiOutlineCloudUpload>
  
       
            </IconContext.Provider>

                          </DivM>
                       
                  </Div2M>
                  
                  </MainM>
                </Modal.Body>
                <Modal.Footer>
                  
                  <Button variant="success" >Soumettre</Button>
                 
                </Modal.Footer>
            </Modal>
               </Div2>
          {/* {c ?<SousMission name={"Valider"} ></SousMission> : null} */}
        
        </MainDiv>
        <MainDiv2>
            <Div3>
            <SousDiv1>
         <DivM>
           <LabelM> Gasoil :</LabelM>
            <InputM type="text" placeholder='frais gazoil' ></InputM>
            <LabelMFile>P.J</LabelMFile>&nbsp; &nbsp; &nbsp; &nbsp;
            <Wrapper>
            <InputMFILE  type="file"  ></InputMFILE>
          </Wrapper>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <IconContext.Provider value={{ color: 'white', size: '30px'}}>
            <AiOutlineCloudUpload></AiOutlineCloudUpload>   
            </IconContext.Provider>

        </DivM> 
        <DivM>
           <LabelM> Parking :</LabelM>
            <InputM type="text" placeholder='frais parking'></InputM>
            <LabelMFile>P.J</LabelMFile>&nbsp; &nbsp; &nbsp; &nbsp;
            <Wrapper>
            <InputMFILE  type="file"  ></InputMFILE>
          </Wrapper>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <IconContext.Provider value={{ color: 'white', size: '30px'}}>
           
            <AiOutlineCloudUpload></AiOutlineCloudUpload>
  
       
            </IconContext.Provider>

        </DivM> 
        <DivM>
           <LabelM> Hotel :</LabelM>
            <InputM type="text" placeholder='frais hotel'></InputM>
            <LabelMFile>P.J</LabelMFile>&nbsp; &nbsp; &nbsp; &nbsp;
          <Wrapper>
            <InputMFILE  type="file"  ></InputMFILE>
          </Wrapper>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <IconContext.Provider value={{ color: 'white', size: '30px'}}>
           
            <AiOutlineCloudUpload></AiOutlineCloudUpload>
  
       
            </IconContext.Provider>
           
        </DivM> 
        <DivM>
           <LabelM> Repas :</LabelM>
            <InputM type="text" placeholder='frais repas'></InputM>
            <LabelMFile>P.J</LabelMFile>&nbsp; &nbsp; &nbsp; &nbsp;
            <Wrapper>
            <InputMFILE  type="file"  ></InputMFILE>
          </Wrapper>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <IconContext.Provider value={{ color: 'white', size: '30px'}}>
           
            <AiOutlineCloudUpload></AiOutlineCloudUpload>
  
       
            </IconContext.Provider>

        </DivM>
        <DivM>
           <LabelM> Taxi :</LabelM>
            <InputM type="text" placeholder='frais taxi'></InputM>
            <LabelMFile>P.J</LabelMFile>&nbsp; &nbsp; &nbsp; &nbsp;
            <Wrapper>
            <InputMFILE  type="file"  ></InputMFILE>
          </Wrapper>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <IconContext.Provider value={{ color: 'white', size: '30px'}}>
           
            <AiOutlineCloudUpload></AiOutlineCloudUpload>
  
       
            </IconContext.Provider>

        </DivM>
        <DivM>
           <LabelM> Ach/tech :</LabelM>
            <InputM type="text" placeholder='frais achat tech' ></InputM>
            <LabelMFile>P.J</LabelMFile>&nbsp; &nbsp; &nbsp; &nbsp;
            <Wrapper>
            <InputMFILE  type="file"  ></InputMFILE>
          </Wrapper>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <IconContext.Provider value={{ color: 'white', size: '30px'}}>
           
            <AiOutlineCloudUpload></AiOutlineCloudUpload>
  
       
            </IconContext.Provider>
        </DivM>  
        <DivM>
           <LabelM> divers :</LabelM>
            <InputM type="text" placeholder='autre'></InputM>
            <LabelMFile>P.J</LabelMFile> &nbsp; &nbsp; &nbsp; &nbsp;
            <Wrapper>
            <InputMFILE  type="file"  ></InputMFILE>
          </Wrapper>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <IconContext.Provider value={{ color: 'white', size: '30px'}}>
           
            <AiOutlineCloudUpload></AiOutlineCloudUpload>
  
       
            </IconContext.Provider>

        </DivM>
        <Description>
            <LabelM>Description :</LabelM>
            <InputD  type="text" size="50"></InputD>
        </Description>
        <Final>
        <DivM>
        <LabelM> Total</LabelM>    
        <InputM  type="text" disabled></InputM>
        </DivM>
        <DivM> <ButtonM>Soumettre</ButtonM>  </DivM>
        </Final>
         </SousDiv1>
         
            </Div3>
            <Div3>
            <table style={{height:"100px",width:"200px", backgroundColor:"black",marginBottom:"100px", borderCollapse: "collapse"}}>
                <tr>
                  <th style={{paddingTop: "12px",paddingBottom: "12px",textAlign: "left" ,backgroundColor: "#04AA6D", color: "white"}}>Numero</th>
                  <th style={{paddingTop: "12px",paddingBottom: "12px",textAlign: "left" ,backgroundColor: "#04AA6D", color: "white"}}>Crédit</th>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #ddd",padding: "8px"}}>{data[0].idUser}</td>
                  <td style={{ border: "1px solid #ddd",padding: "8px"}}>{data[0].identifiant}</td>
                </tr>
              </table>
            
            </Div3>
             
        </MainDiv2>
        </MainM>
        </>
  )
}

export default MissionComponent