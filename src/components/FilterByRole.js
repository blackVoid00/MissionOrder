import axios from 'axios';
import React, { useState } from 'react'
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

 
  const Filter=()=>{
    axios.get(`https://localhost:7140/api/FilterUser/${role}`).then((response) => {
     setUsers(response.data);
    })
    setShow(true)
  }
  console.log(users)
  return (
   <div style={{marginLeft: '500px', marginTop: '100px'}}>
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
  {show ?  <Table striped bordered hover responsive="sm">
    <tr>
          <th>Nom</th>
          <th>Prenom</th>
          {/* <th>Code</th> */}
        </tr>
    {users.map((u)=>
          <tr>
          <td>{u.infoNom} </td>
          <td> {u.infoPrenom} </td>
          {/* <td ><select>
            <option>{u.infoCin}</option>
            </select></td> */}
          </tr>
 )}  </Table> : null}
  
  </div>
  )
}

export default FilterByRole


