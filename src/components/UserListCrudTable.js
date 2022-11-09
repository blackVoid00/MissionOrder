import React , {useState,useEffect} from 'react'
import axios from 'axios';




const UserListCrudTable = () => {
    var columns = [
        {title: "id", field: "id", hidden: true},
        {title: "First name", field: "first_name"},
        {title: "Last name", field: "last_name"},
        {title: "email", field: "email"}
        ]
        const [data, setData] = useState([]); 
        const [iserror, setIserror] = useState(false)
        const [errorMessages, setErrorMessages] = useState([])

useEffect(() => {
            axios.get("")
              .then(res => {
                setData(res.data.data)
              })
              .catch(error=>{
                setErrorMessage(["Cannot load user data"])
                setIserror(true)
              })
          }, [])
  return (
    <div>
        <MaterialTable
  title="User list from API"
  columns={columns}
  data={data}
  icons={tableIcons}
  editable={{
    onRowUpdate: (newData, oldData) =>
      new Promise((resolve) => {
        handleRowUpdate(newData, oldData, resolve);
  }),
  onRowAdd: (newData) =>
    new Promise((resolve) => {
      handleRowAdd(newData, resolve)
    }),
  onRowDelete: (oldData) =>
    new Promise((resolve) => {
      handleRowDelete(oldData, resolve)
    }),
  }}
/>
    </div>
  )
}

export default UserListCrudTable