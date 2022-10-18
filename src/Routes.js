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
import BonCaisse from "./components/BonCaisse";
import CreerMS from "./components/CreerMS";
import CreerBs from "./components/CreerBs";
import TableUser from "./components/TableUser";
import MuiTableTest from "./components/MuiTableTest";
const Routing = () => {
    return (
        <Routes>
           
            <Route exact path="/app" element={<Layout></Layout>}></Route>
            <Route exact path="/home" element={<Home></Home>}></Route>
            {/* <Route exact path="/boncaisse" element={<Layout><BonCaisse></BonCaisse></Layout>}></Route> */}
            <Route exact path="/boncaisse" element={<Layout><MuiTableTest></MuiTableTest></Layout>}></Route>
            <Route exact path="/creerMs" element={<Layout><CreerMS></CreerMS></Layout>}></Route>
            <Route exact path="/creerBs" element={<Layout><CreerBs></CreerBs></Layout>}></Route>
            <Route exact path="/tableuser" element={<Layout><TableUser></TableUser></Layout>}></Route>
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