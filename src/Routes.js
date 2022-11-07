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
import FilterByRole from "./components/FilterByRole";
import CreerMS from "./components/CreerMS";
import CreerBs from "./components/CreerBs";
import TableCaisse from "./components/TableCaisse";
import MuiTableTest from "./components/MuiTableTest";
import Test from "./components/Test";
import ListeBC from "./components/ListeBC";
import DetailsBc from "./components/DetailsBc";
import CompteUsers from "./components/CompteUsers";
import ListeMs from "./components/ListeMs";
const Routing = () => {
    return (
        <Routes>
             <Route exact path="/testing" element={<Layout><Test></Test></Layout>}></Route>
             <Route exact path="/compteuser" element={<Layout><CompteUsers></CompteUsers></Layout>}></Route>
            <Route exact path="/app" element={<Layout></Layout>}></Route>
            <Route exact path="/home" element={<Home></Home>}></Route>
            <Route exact path="/filter" element={<Layout><FilterByRole></FilterByRole></Layout>}></Route>
            <Route exact path="/userlist" element={<Layout><MuiTableTest></MuiTableTest></Layout>}></Route>
            <Route exact path="/creerMs" element={<Layout><CreerMS></CreerMS></Layout>}></Route>
            <Route exact path="/creerBs" element={<Layout><CreerBs></CreerBs></Layout>}></Route>
            <Route exact path="/bcaisselist" element={<Layout><ListeBC></ListeBC></Layout>}></Route>
            <Route exact path="/missionlist" element={<Layout><ListeMs></ListeMs></Layout>}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/mission" element={<Layout><Mission></Mission></Layout>}></Route>
            <Route exact path="/user" element={<Layout><User></User></Layout>}></Route>
            {/* <Route exact path="/userlist" element={<Layout><UserList></UserList></Layout>}></Route> */}
            <Route exact path="/userdetail/:id" element={<Layout><DetailUser></DetailUser></Layout>}></Route>
            <Route exact path="/userupdate/:id" element={<Layout><UserUpdate></UserUpdate></Layout>}></Route>
            <Route exact path="/detailbc/:id" element={<Layout><DetailsBc></DetailsBc></Layout>}></Route>
        </Routes>
        
 
    );
};

export default Routing;