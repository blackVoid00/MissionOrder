import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'
import { useState } from 'react';
// const useAuth=()=>{
//   const user=localStorage.getItem('loginId')
//   const role=localStorage.getItem('role')
//   if(user && role){
//     return true
//   } else {
//     return false
//   }
// }

const  ProtectedRoute=() =>{

  const [admin, setAdmin] =useState(localStorage.getItem("role")==="2"?true:null);

  return admin? <Outlet /> : <Navigate to="/unauthorized" />;
}

export default ProtectedRoute;