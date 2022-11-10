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

const  PublicRoute=() =>{

  const auth=useAuth()

  return auth?<Navigate to="/home"/>: <Outlet/>
}

export default PublicRoute;