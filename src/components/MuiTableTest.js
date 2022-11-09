import React , {useState,useEffect} from 'react'
import styles from 'styled-components'
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/DoneAllTwoTone";
import RevertIcon from "@mui/icons-material/NotInterestedOutlined";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
const MainDiv = styles.div`
display:inline-block;
margin-left:5%;
margin-top:5%;

`

const useStyles = makeStyles( ({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  selectTableCell: {
    width: 20
  },
  tableCell: {
    width: 30,
    height: 10
  },
  input: {
    width: "auto",
    height:"auto"
  }
}));



const CustomTableCell = ({ row, name, onChange }) => {
  const classes = useStyles();
  const { isEditMode } = row;
  return (
    <TableCell align="left" className={classes.tableCell}>
      {isEditMode ? (
        <Input
          value={row[name]}
          name={name}
          onChange={e => onChange(e, row)}
          className={classes.input}
        />
      ) : (
        row[name]
      )}
    </TableCell>
  );
};

const  MuiTableTest=()=> {
  const [query,setQuery]=useState("")
  const [rows, setRows] = useState([
  ]);
  const updateUser=async ({ idUser,nom, prenom,matricule, mail , pwd, role ,identifiant, idService,cin, numeroTel, dateDebutContrat,dateFinContrat, status})=>{
    try {

      await axios.put("https://localhost:7111/api/Utilisateurs/"+idUser,{
        idUser:idUser,
        nom:  nom,
        prenom: prenom,
        matricule: matricule,
        mail: mail,
        pwd: pwd,
        role:role ,
        identifiant: identifiant,
        idService: idService,
        cin:  cin,
        numeroTel: numeroTel,
        dateDebutContrat: dateDebutContrat,
        dateFinContrat:dateFinContrat,
        status:status
    }).then((response) => {
    alert("user updated")
    })
    }catch (e) {

    }
  
    }
  const navigate=useNavigate()
  const url="https://localhost:7111/api/Utilisateurs";
  useEffect(()=>{
    axios.get(url).then((response) => {
        setRows(response.data);
     });
},[])

const onToggleDeleteMode = idUser => {
    axios.delete(`https://localhost:7111/api/Utilisateurs/${idUser}`).then((response) => {
      });
    setRows(rows.filter((r) => {return r.idUser !== idUser}));
};

const onToggleDetailsMode = idUser => {
    navigate(`/userdetail/${idUser}`)
}

  const [previous, setPrevious] = useState({});
  const classes = useStyles();

  const onToggleDoneMode = idUser => {
    setRows(()=> {
      return rows.map(row => {
        if (row.idUser === idUser) {
          updateUser(row)
          return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
  };
const onToggleEditMode = idUser => {
  const newUser=rows.map((row)=>{
    if (row.idUser === idUser) {
      return { ...row, isEditMode: !row.isEditMode };
    }
    return row;
  });
  setRows(newUser)
}
  const onChange = (e, row) => {
    if (!previous[row.idUser]) {
      setPrevious(state => ({ ...state, [row.idUser]: row }));
    }
    const value = e.target.value;
    const name = e.target.name;
    const { idUser} = row;
    const newRows = rows.map(row => {
      if (row.idUser === idUser) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

  const onRevert = idUser => {
    const newRows = rows.map(row => {
      if (row.idUser === idUser) {
        return previous[idUser] ? {...previous[idUser],isEditMode:!row.isEditMode} : { ...row,isEditMode:!row.isEditMode};
      }
      return row;
    });
    setRows(newRows);
    setPrevious(state => {
      delete state[idUser];
      return state;
    });
   
  };

  return (
    <MainDiv>
       <input onChange={(e)=>setQuery(e.target.value)} placeholder="filter by name" style={{ border: "2px solid black !important"}}></input>
       <br></br> <br></br> <br></br>
    <Paper className={classes.root}>
      <Table size="small" >
        <TableHead>
          <TableRow>
            <TableCell align="left">Nom</TableCell>
            <TableCell align="left">Prenom</TableCell>
            <TableCell align="left">Matricule</TableCell>
            <TableCell align="left">Mail</TableCell>
            <TableCell align="left">Password</TableCell>
            <TableCell align="left">Role</TableCell>
            <TableCell align="left">Identifiant</TableCell>
            <TableCell align="left">Service</TableCell>
            <TableCell align="left">Cin</TableCell>
            <TableCell align="left">Numero Tél</TableCell>
            <TableCell align="left">Date Fin Contrat</TableCell>
            <TableCell align="left">Date Début Contrat</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left" >Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.filter((row)=>row.nom.toLowerCase().includes(query)).map(row => (
            <TableRow key={row.idUser}>
              <CustomTableCell {...{ row, name: "nom", onChange }} />
              <CustomTableCell {...{ row, name: "prenom", onChange }} />
              <CustomTableCell {...{ row, name: "matricule", onChange }} />
              <CustomTableCell {...{ row, name: "mail", onChange }} />
              <CustomTableCell {...{ row, name: "pwd", onChange }} />
              <CustomTableCell {...{ row, name: "role", onChange }} />
              <CustomTableCell {...{ row, name: "identifiant", onChange }} />
              <CustomTableCell {...{ row, name: "idService", onChange }} />
              <CustomTableCell {...{ row, name: "cin", onChange }} />
              <CustomTableCell {...{ row, name: "numeroTel", onChange }} />
              <CustomTableCell {...{ row, name: "dateDebutContrat", onChange }} />
              <CustomTableCell {...{ row, name: "dateFinContrat", onChange }} />
              <CustomTableCell {...{ row, name: "status", onChange }} />
              <TableCell className={classes.selectTableCell}>
                {row.isEditMode ? (
                  <>
                    <IconButton
                      aria-label="done"
                      onClick={() => onToggleDoneMode(row.idUser)}
                    >
                      <DoneIcon />
                    </IconButton>
                    <IconButton
                      aria-label="revert"
                      onClick={() => onRevert(row.idUser)}
                    >
                      <RevertIcon />
                    </IconButton>
                  </>
                ) : (
                    <div style={{display: 'flex'}}>
                  <IconButton
                    aria-label="edit"
                    onClick={() => onToggleEditMode(row.idUser)}
                  >
                    <EditIcon />
                  </IconButton>
                   <IconButton
                   aria-label="delete"
                   onClick={() => onToggleDeleteMode(row.idUser)}
                >
                    <DeleteIcon />
                 </IconButton> 
                  <IconButton
                   aria-label="details"
                   onClick={() => onToggleDetailsMode(row.idUser)}
                >
              <FormatListBulletedIcon />
                 </IconButton> 
                 
                 </div>
                )}
              </TableCell>
             
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper> 
  </MainDiv>
  );
}
export default MuiTableTest