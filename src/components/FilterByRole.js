import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { InputM, MainDiv,ButtonM, H1  } from './StyleMsC';
import Table from 'react-bootstrap/Table';
import styles from 'styled-components'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator'
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
    axios.get(`https://localhost:7111/api/GetUtilisateursByRole/${role}`).then((response) => {
      setFilterUser(response.data);
    })
    setShow(true)
  }
  const columns=[
    {dataField: 'infoNom',text:'Nom'},
    {dataField: 'infoPrenom',text:'Prenom'},
  ]
  console.log(users)
  return (
   <div style={{marginLeft: '10px', marginTop: '100px'}}>
   
   <H1>Filter by Role</H1>
   <br></br><br></br><br></br>
   <select  onChange={(e)=>setRole(e.target.value)}>
    <option value="0">admin</option>
    <option value="1">utilisateur</option>
   </select>&nbsp;&nbsp;&nbsp;
  {/* <Input type="number" onChange={(e)=>setRole(e.target.value)}></Input> */}
  <ButtonM onClick={Filter}>Filter</ButtonM>
  <br></br><br></br><br></br>
  {show ? 
<BootstrapTable
keyField='idUser'
columns={columns}
data={filterUser}
pagination={paginationFactory()}
></BootstrapTable>
 : null }
  
                 
  </div>
  )
}

export default FilterByRole


