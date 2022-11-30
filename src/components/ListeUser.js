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
// import DeleteIcon from "@mui/icons-material/Delete";
// import DoneIcon from "@mui/icons-material/DoneAllTwoTone";
// import RevertIcon from "@mui/icons-material/NotInterestedOutlined";
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// import TablePagination from '@mui/material/TablePagination';
// import axios from "axios";
// import { useNavigate } from 'react-router-dom'
// const MainDiv = styles.div`
// display:inline-block;
// margin-left:5%;
// margin-top:5%;

// `

// const useStyles = makeStyles( ({
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
//     width: "auto",
//     height:"auto"
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

// const  MuiTableTest=()=> {
//   const [query,setQuery]=useState("")
//   const [rows, setRows] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

 
//   const updateUser=async ({ idUser,nom, prenom,matricule, mail , pwd, role ,identifiant, idService,cin, numeroTel, dateDebutContrat,dateFinContrat, status})=>{
//     try {

//       await axios.put("https://localhost:7111/api/Utilisateurs/"+idUser,{
//         idUser:idUser,
//         nom:  nom,
//         prenom: prenom,
//         matricule: matricule,
//         mail: mail,
//         pwd: pwd,
//         role:role ,
//         identifiant: identifiant,
//         idService: idService,
//         cin:  cin,
//         numeroTel: numeroTel,
//         dateDebutContrat: dateDebutContrat,
//         dateFinContrat:dateFinContrat,
//         status:status
//     }).then((response) => {
//     alert("user updated")
//     })
//     }catch (e) {

//     }
  
//     }
//   const navigate=useNavigate()
//   const url="https://localhost:7111/api/Utilisateurs";
//   useEffect(()=>{
//     axios.get(url).then((response) => {
//         setRows(response.data);
//      });
// },[])

// const onToggleDeleteMode = idUser => {
//     axios.delete(`https://localhost:7111/api/Utilisateurs/${idUser}`).then((response) => {
//       });
//     setRows(rows.filter((r) => {return r.idUser !== idUser}));
// };

// const onToggleDetailsMode = idUser => {
//     navigate(`/userdetail/${idUser}`)
// }

//   const [previous, setPrevious] = useState({});
//   const classes = useStyles();

//   const onToggleDoneMode = idUser => {
//     setRows(()=> {
//       return rows.map(row => {
//         if (row.idUser === idUser) {
//           updateUser(row)
//           return { ...row, isEditMode: !row.isEditMode };
//         }
//         return row;
//       });
//     });
//   };
// const onToggleEditMode = idUser => {
//   const newUser=rows.map((row)=>{
//     if (row.idUser === idUser) {
//       return { ...row, isEditMode: !row.isEditMode };
//     }
//     return row;
//   });
//   setRows(newUser)
// }
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
//        <input onChange={(e)=>setQuery(e.target.value)} placeholder="filter by name" style={{ border: "2px solid black !important"}}></input>
//        <br></br> <br></br> <br></br>
//     <Paper className={classes.root}>
//       <Table size="small" >
//         <TableHead>
//           <TableRow>
//             <TableCell align="left">Nom</TableCell>
//             <TableCell align="left">Prenom</TableCell>
//             <TableCell align="left">Matricule</TableCell>
//             <TableCell align="left">Mail</TableCell>
//             <TableCell align="left">Password</TableCell>
//             <TableCell align="left">Role</TableCell>
//             <TableCell align="left">Identifiant</TableCell>
//             <TableCell align="left">Service</TableCell>
//             <TableCell align="left">Cin</TableCell>
//             <TableCell align="left">Numero Tél</TableCell>
//             <TableCell align="left">Date Fin Contrat</TableCell>
//             <TableCell align="left">Date Début Contrat</TableCell>
//             <TableCell align="left">Status</TableCell>
//             <TableCell align="left" >Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.filter((row)=>row.nom.toLowerCase().includes(query)).map(row => (
//             <TableRow key={row.idUser}>
//               <CustomTableCell {...{ row, name: "nom", onChange }} />
//               <CustomTableCell {...{ row, name: "prenom", onChange }} />
//               <CustomTableCell {...{ row, name: "matricule", onChange }} />
//               <CustomTableCell {...{ row, name: "mail", onChange }} />
//               <CustomTableCell {...{ row, name: "pwd", onChange }} />
//               <CustomTableCell {...{ row, name: "role", onChange }} />
//               <CustomTableCell {...{ row, name: "identifiant", onChange }} />
//               <CustomTableCell {...{ row, name: "idService", onChange }} />
//               <CustomTableCell {...{ row, name: "cin", onChange }} />
//               <CustomTableCell {...{ row, name: "numeroTel", onChange }} />
//               <CustomTableCell {...{ row, name: "dateDebutContrat", onChange }} />
//               <CustomTableCell {...{ row, name: "dateFinContrat", onChange }} />
//               <CustomTableCell {...{ row, name: "status", onChange }} />
//               <TableCell className={classes.selectTableCell}>
//                 {row.isEditMode ? (
//                   <>
//                     <IconButton
//                       aria-label="done"
//                       onClick={() => onToggleDoneMode(row.idUser)}
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
//                     <div style={{display: 'flex'}}>
//                   <IconButton
//                     aria-label="edit"
//                     onClick={() => onToggleEditMode(row.idUser)}
//                   >
//                     <EditIcon />
//                   </IconButton>
//                    <IconButton
//                    aria-label="delete"
//                    onClick={() => onToggleDeleteMode(row.idUser)}
//                 >
//                     <DeleteIcon />
//                  </IconButton> 
//                   <IconButton
//                    aria-label="details"
//                    onClick={() => onToggleDetailsMode(row.idUser)}
//                 >
//               <FormatListBulletedIcon />
//                  </IconButton> 
                 
//                  </div>
//                 )}
//               </TableCell>
             
           
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//     </Paper> 
//   </MainDiv>
//   );
// }
// export default MuiTableTest
import React ,{useState,useEffect} from 'react'
import BootStrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {ButtonM } from './StyleMsC';
import moment from 'moment'
import {AiOutlineUserAdd,AiFillEye} from "react-icons/ai"
import {MdDoNotDisturbOn,MdCheckCircle} from "react-icons/md"
import "./tableStyle.css"
import { IconContext } from 'react-icons'
import {BiExport} from 'react-icons/bi';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
const ListeUser = () => {
  const { ExportCSVButton } = CSVExport;
    const navigate = useNavigate()
    const ButtonCell=(cell, row, rowIndex, formatExtraData)=>{
        return (
           <IconContext.Provider value={{ color: '#1c539b',size:"20px"}}><AiFillEye  onClick={()=>navigate(`/editUser/${row.infoId}`)  }/></IconContext.Provider>
        )
        
        }
    const url="https://localhost:7111/api/Utilisateurs/"
    const [user,setUser]=useState([])
    useEffect(()=>{
        axios.get(url).then((response) => {
            setUser(response.data);
         });
       
    },[])
    const columns=[
        {dataField:"infoNom",text:"Nom"},
        {dataField:"infoPrenom",text:"Prénom"},
        {dataField:"infoMatricule",text:"Matricule"},
        {dataField:"infoMail",text:"Email"},
        {dataField:"infoIdentifiant",text:"Identifiant"},
        {dataField:"infoCin",text:"Cin"},
        {dataField:"infoLibelle",text:"Service"},
        {dataField:"infoNumeroTel",text:"N° Tél"},
        {dataField:"infoDateDebutContrat",text:"Début Contrat",formatter : (row,cellContent)=>{
          return moment(cellContent.dateDebutContrat).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
        }},
        {dataField:"infoDateFinContrat",text:"Fin Contrat",formatter : (row,cellContent)=>{
          return moment(cellContent.dateFinContrat).format('YYYY-MM-DDThh:mm:ss').split('T')[0] 
        }},
        {dataField:"infoRole",text:"Role", formatter: (cellContent ,row) => {
          if ( row.infoRole =="0") {
            return (
              <span >
                Utilisateur
              </span>
            )
          }   if ( row.infoRole =="1") {
            return (
              <span >
               Superviseur
              </span>
            )
          }
          if ( row.infoRole =="2") {
            return (
              <span>
               Administrateur
              </span>
            )
          }    
           
      },},
        {dataField:"infoStatus",text:"Statut",formatter: (cellContent ,row) => {
            if ( row.infoStatus == "1") {
              return (
               <IconContext.Provider value={{color:"#b71c1c",size:"20px"}}><MdDoNotDisturbOn /></IconContext.Provider>
              
              )
            }   
            return(
              <IconContext.Provider value={{color:"green",size:"20px"}}><MdCheckCircle/></IconContext.Provider>
            )    
        },},
        {datafield:"Actions",text:"Consulter",  csvExport: false,formatter: ButtonCell}
    ]
  return (
    <div style={{marginLeft: '100px',marginTop: '100px'}}>
      
      
        <ToolkitProvider
      keyField='idUser'
      data={user}
      columns={columns} 
   
  exportCSV
>
  {
    props => (
      <>
     
         <div style={{display: 'flex',justifyContent:"space-between"}}>
         <ButtonM onClick={()=>navigate("/addUser")  }large ><IconContext.Provider value={{color: '#1c539b',size:"35px"}}><AiOutlineUserAdd/></IconContext.Provider>Ajouter</ButtonM>
         <ExportCSVButton { ...props.csvProps }><IconContext.Provider value={{color:"#1c539b",size:"30px"}}><BiExport/></IconContext.Provider>&nbsp;Exporter csv</ExportCSVButton>
         </div>
         <br></br><br></br>
      <BootStrapTable      
    { ...props.baseProps }
    pagination={paginationFactory({
      sizePerPageList: [ {
        text: '5', value: 5
      }, {
        text: '10', value: 10
      }, {
        text: '20', value: 20
      },
      {
        text: '50', value: 50
      },
      {
        text: 'All', value: user.length
      } ], 
   
      withFirstAndLast: false,
      alwaysShowAllBtns: true, 
      prePageText: 'Prev', 
      nextPageText: 'Next',
      hideSizePerPage:true
    
      
     
    })} 
    headerClasses="header-class"
    rowClasses="row-class" ></BootStrapTable> 
     
  </>
     
    )
  }
</ToolkitProvider> 
      
        
    </div>
  )
}


export default ListeUser