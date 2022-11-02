import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import styles from 'styled-components'

const Button=styles.button`
position: relative;
border-width: 0px;
border-style: solid;
font-weight:bold !important;
margin-top:50px;
margin-left:10px;
margin-bottom:50px;
background-color:#B0C4DE ;
height:30px;
width:200px;
text-align:center !important;
cursor:pointer;
&:focus{
outline: none  !important;
}
`
const Select=styles.select`
margin-left:50px;
margin-bottom:10px;
margin-top:10px;
height:30px;
width:200px;
text-align: left !important;
border: 1px solid black !important;
border-radius:2px  !important;
&:focus{
outline: none  !important;
}
`
const Div = styles.div`
display:inline-block;
margin-left:10px;
margin-top:160px;
`



const CompteUsers = () => {
    const [users,setUsers]=useState([])
    const [details,setDetails]=useState([])
    const [show,setShow] = useState(false)
    const [p,setP]=useState(0)
    const url="https://localhost:7111/api/Utilisateurs"
    useEffect(() => {
    axios.get(url).then((response) => {
    setUsers(response.data)

        });
   })
    const Filter =() => {
           axios.get(`https://localhost:7111/api/CompteUser/${p}`).then((response) => {
            setDetails(response.data)
           });
           setShow(true)
    } 
  return (
    <Div>
        
        <Select onChange={(e)=>setP(e.target.value)}>
            {users.map((user) =>{
                return(
                <option value={user.idUser}>{user.nom} {user.prenom}</option>
            )})}
        </Select>
        <Button style={{}} onClick={Filter}>Filter</Button>
        {show ?  <Table bordered hover size="xl">
    <tr>
          <th width="200">N° Bon caisse</th>
          <th width="100">Crédit Total</th>
          <th width="100">Total Rendu</th>
          <th width="200">Total Dépense</th>
          {/* <th>Code</th> */}
        </tr>
    {details.map((d)=>
          <tr>
          <td height="40">{d.idBc}</td>
          <td>{d.sommeCredit}</td>
          <td>{d.sommeDebit}</td>
          <td>{d.sommeDepense}</td>
          </tr>
 )}  </Table>: <h1>Rien</h1>}
    </Div>
  )
}

export default CompteUsers