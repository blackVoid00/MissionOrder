import axios from 'axios';
import React, { useState } from 'react'
import { InputM, MainDiv,ButtonM, H1  } from './StyleMsC';
import Table from 'react-bootstrap/Table';
import styles from 'styled-components'

const Input=styles.input`
border: 1px solid black;
`
const BonCaisse = () => {
  const [role,setRole] =useState(0);
  const [show,setShow] = useState(false);
  const [users,setUsers]=useState([]);

 
  const Filter=()=>{
    axios.get(`https://localhost:7048/api/FilterUser/${role}`).then((response) => {
     setUsers(response.data);
    })
    setShow(true)
  }
  console.log(users)
  return (
   <div style={{marginLeft: '500px'}}>
   <br></br><br></br><br></br>
   <H1>Filter by Role</H1>
   <br></br><br></br><br></br>
  <Input type="number" onChange={(e)=>setRole(e.target.value)}></Input>
  <ButtonM onClick={Filter}>Filter</ButtonM>
  <br></br><br></br><br></br>
  {show ?  <Table striped bordered hover responsive="sm">
    <tr>
          <th>Nom</th>
          <th>Prenom</th>
        </tr>
    {users.map((u)=>
          <tr>
          <td>{u.infoNom} </td>
          <td> {u.infoPrenom} </td>
          </tr>
 )}  </Table> : null}
  
  </div>
  )
}

export default BonCaisse


// import React , {useState,useEffect} from 'react'
// import styles from 'styled-components'
// import { makeStyles } from "@mui/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Input from "@mui/material/Input";
// import Paper from "@mui/material/Paper";
// import IconButton from "@mui/material/IconButton";
// import EditIcon from "@mui/icons-material/EditOutlined";
// import DoneIcon from "@mui/icons-material/DoneAllTwoTone";
// import RevertIcon from "@mui/icons-material/NotInterestedOutlined";
// import axios from "axios";

// const MainDiv = styles.div`
// display:inline-block;
// border:2px solid black;
// margin-left:5%;
// margin-top:5%;
// width:100vh;
// height:700px;
// `

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     overflowX: "auto"
//   },
//   selectTableCell: {
//     width: 20
//   },
//   tableCell: {
//     width: 30,
//     height: 10
//   },
//   input: {
//     width: 130,
//     height: 40
//   }
// }));



// const CustomTableCell = ({ row, name, onChange }) => {
//   const classes = useStyles();
//   const { isEditMode } = row;
//   return (
//     <TableCell align="left" className={classes.tableCell}>
//       {isEditMode ? (
//         <Input
//           value={row[name]}
//           name={name}
//           onChange={e => onChange(e, row)}
//           className={classes.input}
//         />
//       ) : (
//         row[name]
//       )}
//     </TableCell>
//   );
// };

// const BonCaisse=()=> {
//   const [rows, setRows] = useState([
//   ]);
  
//   const url="https://localhost:7048/api/Utilisateurs";
//   useEffect(()=>{
//     axios.get(url).then((response) => {
//         setRows(response.data);
//      });
// },[])

//   const [previous, setPrevious] = useState({});
//   const classes = useStyles();

//   const onToggleEditMode = idUser => {
//     setRows(state => {
//       return rows.map(row => {
//         if (row.idUser === idUser) {
//           return { ...row, isEditMode: !row.isEditMode };
//         }
//         return row;
//       });
//     });
//   };

//   const onChange = (e, row) => {
//     if (!previous[row.idUser]) {
//       setPrevious(state => ({ ...state, [row.idUser]: row }));
//     }
//     const value = e.target.value;
//     const name = e.target.name;
//     const { idUser} = row;
//     const newRows = rows.map(row => {
//       if (row.idUser === idUser) {
//         return { ...row, [name]: value };
//       }
//       return row;
//     });
//     setRows(newRows);
//   };

//   const onRevert = idUser => {
//     const newRows = rows.map(row => {
//       if (row.idUser === idUser) {
//         return previous[idUser] ? {...previous[idUser],isEditMode:!row.isEditMode} : { ...row,isEditMode:!row.isEditMode};
//       }
//       return row;
//     });
//     setRows(newRows);
//     setPrevious(state => {
//       delete state[idUser];
//       return state;
//     });
   
//   };

//   return (
//     <MainDiv>
//     <Paper className={classes.root}>
//       <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
//         <TableHead>
//           <TableRow>
//             <TableCell align="left">Nom</TableCell>
//             <TableCell align="left">Prenom</TableCell>
//             <TableCell align="left">Matricule</TableCell>
//             <TableCell align="left" >Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <TableRow key={row.idUser}>
//               <CustomTableCell {...{ row, name: "nom", onChange }} />
//               <CustomTableCell {...{ row, name: "prenom", onChange }} />
//               <CustomTableCell {...{ row, name: "matricule", onChange }} />
//               <TableCell className={classes.selectTableCell}>
//                 {row.isEditMode ? (
//                   <>
//                     <IconButton
//                       aria-label="done"
//                       onClick={() => onToggleEditMode(row.idUser)}
//                     >
//                       <DoneIcon />
//                     </IconButton>
//                     <IconButton
//                       aria-label="revert"
//                       onClick={() => onRevert(row.idUser)}
//                     >
//                       <RevertIcon />
//                     </IconButton>
//                   </>
//                 ) : (
//                   <IconButton
//                     aria-label="delete"
//                     onClick={() => onToggleEditMode(row.idUser)}
//                   >
//                     <EditIcon />
//                   </IconButton>
//                 )}
//               </TableCell>
             
           
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   </MainDiv>
//   );
// }
// export default BonCaisse