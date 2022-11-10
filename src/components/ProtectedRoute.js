import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'

const useAuth=()=>{
  const user=localStorage.getItem('loginId')
  if(user){
    return true
  } else {
    return false
  }
}

const  ProtectedRoute=() =>{

  const auth=useAuth()

  return auth ? <Outlet/>: <Navigate to="/login"/>
}

export default ProtectedRoute;