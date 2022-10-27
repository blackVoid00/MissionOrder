import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { InputM, MainDiv,ButtonM, H1  } from './StyleMsC';
import Table from 'react-bootstrap/Table';
import styles from 'styled-components'

const Input=styles.input`
border: 1px solid black;
`
const FilterByRole = () => {
  const [role,setRole] =useState(0);
  const [show,setShow] = useState(false);
  const [users,setUsers]=useState([]);
  const [filterUser,setFilterUser] = useState([]);
 useEffect(()=>{
     axios.get('https://localhost:7111/api/Utilisateurs').then((res)=>{
      setUsers(res.data)
     })

 })
  const Filter=()=>{
    axios.get(`https://localhost:7111/api/FilterUser/${role}`).then((response) => {
      setFilterUser(response.data);
    })
    setShow(true)
  }
  console.log(users)
  return (
   <div style={{marginLeft: '10px', marginTop: '100px'}}>
   <br></br><br></br><br></br>
   <H1>Filter by Role</H1>
   <br></br><br></br><br></br>
   <select  onChange={(e)=>setRole(e.target.value)}>
    <option value="0">admin</option>
    <option value="1">utilisateur</option>
   </select>
  {/* <Input type="number" onChange={(e)=>setRole(e.target.value)}></Input> */}
  <ButtonM onClick={Filter}>Filter</ButtonM>
  <br></br><br></br><br></br>
  {show ?  <Table bordered hover size="xl">
    <tr height="40">
          <th width="100">Nom</th>
          <th width="100">Prenom</th>
          {/* <th>Code</th> */}
        </tr>
    {filterUser.map((u)=>
          <tr>
          <td height="40">{u.infoNom} </td>
          <td> {u.infoPrenom} </td>
          {/* <td ><select>
            <option>{u.infoCin}</option>
            </select></td> */}
          </tr>
 )}  </Table> :<Table bordered hover size="xl">
 <tr height="40">
       <th width="100">Nom</th>
       <th width="100">Prenom</th>
       <th width="120">Matricule</th>
       <th width="170">Mail</th>
       <th width="100">Identifiant</th>
       <th width="120">Cin</th>
       <th width="170">Num tel</th>
       <th width="200">Date debut contrat</th>
       <th width="200">Date fin contrat</th>
       {/* <th>Code</th> */}
     </tr>
 {users.map((u)=>
       <tr>
       <td height="40">{u.nom} </td>
       <td> {u.prenom} </td>
       <td> {u.matricule} </td>
       <td> {u.mail} </td>
       <td> {u.identifiant} </td>
       <td> {u.cin} </td>
       <td> {u.numeroTel} </td>
       <td> {u.dateDebutContrat} </td>
       <td> {u.dateFinContrat} </td>
     
       {/* <td ><select>
         <option>{u.infoCin}</option>
         </select></td> */}
       </tr>
)}  </Table>  }
  
  </div>
  )
}

export default FilterByRole


