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
    const [CreditDebit,setCreditDebit]=useState([])
    const [Depense,setTotalDepense]=useState([])
    const T= CreditDebit.map( c => {
      const matched = Depense.find(d => c.idBc === d.idBc)
        return {...c,...matched,solde:Number(c.sommeCredit)-(Number(matched?.sommeDepense) + Number(c.sommeDebit))}
     
    }
  )

    const [show,setShow] = useState(false)
    const [p,setP]=useState(0)
    const url="https://localhost:7111/api/Utilisateurs"
    useEffect(() => {
    axios.get(url).then((response) => {
    setUsers(response.data)

        });
   })
    const Filter =() => {
           axios.get(`https://localhost:7111/api/GetDebitCreditTotal/${p}`).then((response) => {
            setCreditDebit(response.data)
           });
           axios.get(`https://localhost:7111/api/GetDepenseTotal/${p}`).then((response) => {
            setTotalDepense(response.data)
           });
           setShow(true)
    } 
   
  return (
    <Div>
        
        <Select onChange={(e)=>setP(e.target.value)}>
            {users.map((user) =>{
                return(
                <option key={user.idUser} value={user.idUser}>{user.nom} {user.prenom}</option>
            )})}
        </Select>
        <Button style={{}} onClick={Filter}>Filter</Button>
        {show?
        <Table bordered hover size="xl">
          <tbody>
         <tr>
          <th>N° Bon caisse</th>
          <th>Crédit Total</th>
          <th>Total Rendu</th>
          <th>Total Dépense</th>
          <th>Solde</th>
        </tr>
    {T.map((d)=>
          <tr key={d.idBc}>
          <td>{d.idBc}</td>
          <td>{d.sommeCredit}</td>
          <td>{d.sommeDebit}</td>
          <td>{d.sommeDepense}</td>
          <td>{d.solde}</td>
          </tr>
 )}</tbody></Table>: <h1>Rien</h1>}
    </Div>
  )
}

export default CompteUsers