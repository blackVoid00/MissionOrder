import React from 'react'
import { useState } from 'react';
import {Navigate, Outlet} from 'react-router-dom'

const  ProtectedUserRoute = () => {
   
    const [user, setUser] =useState(localStorage.getItem("role")==="0"?true:null);

    return user ? <Outlet /> : <Navigate to="/unauthorized" />;
}
export default ProtectedUserRoute