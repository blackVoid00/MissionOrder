import React ,{useState,useEffect} from 'react'
import axios from 'axios'

const CompteUsers = () => {
    const [users,setUsers]=useState([])
    const url="https://localhost:7111/api/Utilisateurs"
    useEffect(() => {

        axios.get(url).then((response) => {

       setUsers(response.data)

        });
   })
     
  return (
    <div>
        <select>
            {users.map((user) =>{
                return(
                <option>{user.nom} {user.prenom}</option>
            )})}
        </select>
    </div>
  )
}

export default CompteUsers