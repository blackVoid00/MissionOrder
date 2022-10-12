import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login";
import Mission from "./components/Mission";
import User from "./components/User";
import UserList from "./components/UserList";
import DetailUser from "./components/DetailUser"
import UserUpdate from "./components/UserUpdate";
import Home from "./components/Home";
const Routing = () => {
    return (
        <Routes>
           
            <Route exact path="/app" element={<Layout></Layout>}></Route>
            <Route exact path="/home" element={<Home></Home>}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/mission" element={<Layout><Mission></Mission></Layout>}></Route>
            <Route exact path="/user" element={<Layout><User></User></Layout>}></Route>
            <Route exact path="/userlist" element={<Layout><UserList></UserList></Layout>}></Route>
            <Route exact path="/userdetail/:id" element={<Layout><DetailUser></DetailUser></Layout>}></Route>
            <Route exact path="/userupdate/:id" element={<Layout><UserUpdate></UserUpdate></Layout>}></Route>
        </Routes>
        
 
    );
};

export default Routing;