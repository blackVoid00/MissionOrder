import React from 'react'
import styles from 'styled-components'

const MainDiv = styles.div`
display:inline-block;
background-color:#1c539b;
border:2px solid black;
margin-left:5%;
margin-top:5%;
width:100vh;
height:700px;
`
const BonCaisse = () => {
  return (
    <MainDiv>
<table>
    <tr>
     <th>Nom</th>
     <th>Prenom</th>
     <th>Age</th>
     <th>Action</th>
    </tr>
    <tr>
    <td>Test</td>
     <td>TestUser</td>
     <td>25</td> 
     <td><button >Edit</button></td>
    </tr>
</table>

    </MainDiv>
  )
}

export default BonCaisse