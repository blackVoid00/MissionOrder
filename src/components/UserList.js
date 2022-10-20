import React ,{useEffect, useState} from 'react'
import axios from "axios"
import styles from "styled-components"
import { useNavigate } from 'react-router-dom'
//////////////////////////////////////////////////////////////
const MainDiv = styles.div`
display:inline-block;
background-color:#1c539b;
border:2px solid black;
margin-left:5%;
margin-top:5%;
width:100vh;
height:700px;
`
const Table=styles.table`
border-collapse: collapse;
border: 2px solid rgb(200, 200, 200);
letter-spacing: 1px;
font-family: sans-serif;
font-size: .8rem;
width:100%;
height: 5%;
`
const Td =styles.td`
border: 1px solid black;
padding: 10px;
text-align: center;
`

const Th =styles.th`
border: 1px solid black;
padding: 10px;`


// th[scope="col"] {
//     background-color: peru;
//     color: #fff;
// }

// th[scope="row"] {
//     background-color: #d7d9f2;
// }

const Caption =styles.caption`
padding: 10px;
caption-side: bottom;
`


////////////////////////////////////////////////////////////////////////////////////////////////////
const UserList = () => {
const navigate=useNavigate()
const [val,setValue]=useState("")

const url="https://localhost:7140/api/Utilisateurs";

    const [users,setUsers]=useState([])

    useEffect(()=>{
      axios.get(url).then((response) => {
          setUsers(response.data);
       });
  },[])

   const deleteItem = (ID) => {
          axios.delete(`https://localhost:7140/api/Utilisateurs/${ID}`).then((response) => {
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
            <Table>
            <caption></caption>
         <tr>
             <Th >Id</Th>
             <Th >Nom</Th>
             <Th >Prénom</Th>
             <Th >Date Début Contrat</Th>
             <Th >Date Fin Contrat</Th>
             <Th >Status</Th>
             <Th >Actions</Th>
         </tr>
 {users.filter((user)=>user.nom.toLowerCase().includes(val)).map((data) => (
        
         <tr>
             <Td>{data.idUser}</Td>
             <Td>{data.nom}</Td>
             <Td>{data.prenom}</Td>
             <Td>{data.dateDebutContrat}</Td>
             <Td>{data.dateFinContrat}</Td>
             <Td>{data.status.toString()}</Td>
             <Td> <button onClick={() => deleteItem(data.idUser)}>Delete</button> &nbsp;&nbsp;
             <button onClick={()=>detailItem(data.idUser)}>Details</button>&nbsp;&nbsp;
             <button onClick={()=>updateItem(data.idUser)}>Update</button>
             </Td>
         </tr>
    
        ))}
        </Table>
        </MainDiv>

         )






  // const url="https://localhost:7140/api/Utilisateurs";
  //   const [users,setUsers]=useState([])
  //   const [delId,setDelId]=useState("")
  //   useEffect(()=>{
  //       axios.get(url).then((response) => {
  //           setUsers(response.data);
          
  //         });
  //   },[])
  // const deleteItem = (ID) => {
  //     axios.delete(`https://localhost:7140/api/Utilisateurs/${ID}`).then((response) => {
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

  //   const url="https://localhost:7140/api/Utilisateurs";
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
  //   axios.delete(`https://localhost:7140/api/Utilisateurs/${idofoption}`).then((response) => {});
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