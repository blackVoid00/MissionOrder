import React ,{useEffect, useState} from 'react'
import axios from "axios"
import styles from "styled-components"
import { useNavigate } from 'react-router-dom'
import './Table.css'
const MainDiv = styles.div`
display:inline-block;
background-color:#1c539b;
border:2px solid black;
margin-left:5%;
margin-top:5%;
width:100vh;
height:700px;
`
const UserList = () => {
const navigate=useNavigate()
const [val,setValue]=useState("")

const url="https://localhost:7048/api/Utilisateurs";

    const [users,setUsers]=useState([])

    useEffect(()=>{
      axios.get(url).then((response) => {
          setUsers(response.data);
       });
  },[])

   const deleteItem = (ID) => {
          axios.delete(`https://localhost:7048/api/Utilisateurs/${ID}`).then((response) => {
            });
          setUsers(users.filter((user) => {return user.idUser !== ID}));
      };

const detailItem=(ID)=>{
     navigate(`/userdetail/${ID}`)
}
const updateItem=(ID)=>{
  navigate(`/userupdate/${ID}`)
}

      return(
         
        <MainDiv>
          <input type="text" placeholder='type a name' onChange={(e)=>setValue(e.target.value)}></input><br></br><br></br><br></br>
            <table>
            <caption></caption>
         <tr>
             <th scope="col">Id</th>
             <th scope="col">Nom</th>
             <th scope="col">Prénom</th>
             <th scope="col">Date Début Contrat</th>
             <th scope="col">Date Fin Contrat</th>
             <th scope="col">Status</th>
             <th scope="col">Actions</th>
         </tr>
 {users.filter((user)=>user.nom.toLowerCase().includes(val)).map((data) => (
        
         <tr>
             <td>{data.idUser}</td>
             <td>{data.nom}</td>
             <td>{data.prenom}</td>
             <td>{data.dateDebutContrat}</td>
             <td>{data.dateFinContrat}</td>
             <td>{data.status.toString()}</td>
             <td> <button onClick={() => deleteItem(data.idUser)}>Delete</button> &nbsp;&nbsp;
             <button onClick={()=>detailItem(data.idUser)}>Details</button>&nbsp;&nbsp;
             <button onClick={()=>updateItem(data.idUser)}>Update</button>
             </td>
         </tr>
    
        ))}
        </table>
        </MainDiv>

         )






  // const url="https://localhost:7048/api/Utilisateurs";
  //   const [users,setUsers]=useState([])
  //   const [delId,setDelId]=useState("")
  //   useEffect(()=>{
  //       axios.get(url).then((response) => {
  //           setUsers(response.data);
          
  //         });
  //   },[])
  // const deleteItem = (ID) => {
  //     axios.delete(`https://localhost:7048/api/Utilisateurs/${ID}`).then((response) => {
  //       });
  //     setUsers(users.filter((user) => {return user.idUser !== ID}));
  // };
  // console.log(delId)
  // return (
  //   <MainDiv>
  //     <ul>
  //       {users.map((data) => (
  //         <li>
  //           {data.idUser}&nbsp; &nbsp; &nbsp;
  //           {data.nom}
  //           &nbsp; &nbsp; &nbsp; &nbsp; 
  //           <button
  //             id={data.idUser}
  //             onClick={() => deleteItem(data.idUser)}
  //           >
  //             Delete
  //           </button>
  //         </li>
  //       ))}
  //       </ul>
  //   </MainDiv>
  // );

  //   const url="https://localhost:7048/api/Utilisateurs";
  //   const [users,setUsers]=useState([])
  //   // const [val,setValue]=useState("")
  //   const [idDel,setDelId]=useState("")
  //   const [hide,sethide]=useState(false)
  //   // useEffect(()=>{
       
  //   // },[])
  //   const getAllUsers=()=>{
  //     axios.get(url).then((response) => {
  //       setUsers(response.data);
  //       sethide(!hide)
  //     });
  //   }
    
  //  const Delete = (idofoption) => {
  //   axios.delete(`https://localhost:7048/api/Utilisateurs/${idofoption}`).then((response) => {});
  //   setUsers(users.filter((u) => u.idUser !== idofoption));
  //   // window.location.reload(false);
  //  }
  //   console.log(idDel)
  // return (
  //   <>
   
  //   <MainDiv>
  //    {/* <input type="text" onChange={(e)=>setValue(e.target.value)}></input><br></br><br></br> */}
  //    <button onClick={getAllUsers}>Get/Hide users</button>
  //    <ul>
  //    {hide ? <>
  //     {users.map(((user)=>(
  //    <><li key={user.idUser}>
  //     {user.nom}</li>
  //     <br></br></>)))}</>
     
  //     : null }
  //     </ul>
      
  //     {/* <input type="text" onChange={(e)=>setDelVal(e.target.value)}></input> */}
  //     <select onChange={(e)=>setDelId(e.target[e.target.selectedIndex].id )}>
  //     {users.map(((user)=>(<><option id={user.idUser}>{user.nom}</option></>)))}
  //     </select>
  //     <button onClick={()=>Delete(idDel)}>Delete this user</button>
  //   </MainDiv>
    
  //   </>
  // )
}

export default UserList