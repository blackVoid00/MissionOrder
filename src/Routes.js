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
import Test from "./components/Test";
import ListeBC from "./components/ListeBC";
import DetailsBc from "./components/DetailsBc";
import CompteUsers from "./components/CompteUsers";
import ListeMs from "./components/ListeMs";
import DetailsMs from "./components/DetailsMs";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import DetailsCU from "./components/DetailsCU";
import ListeUser from "./components/ListeUser";
import Home2 from "./components/Home2"
const Routing = () => {
    return (
        <Routes>
            <Route exact path="/" element={<ProtectedRoute></ProtectedRoute>}>
                    <Route  path="/testing" element={<Layout><Test></Test></Layout>}></Route>
                    <Route  path="/compteuser" element={<Layout><CompteUsers></CompteUsers></Layout>}></Route>
                    <Route  path="/cuswipe/:id" element={<Layout><DetailsCU></DetailsCU></Layout>}></Route>
                    <Route  path="/app" element={<Layout><Home2></Home2></Layout>}></Route>
                    <Route  path="/home" element={<Home></Home>}></Route>
                    <Route  path="/filter" element={<Layout><FilterByRole></FilterByRole></Layout>}></Route>
                    <Route  path="/userlist" element={<Layout><ListeUser></ListeUser></Layout>}></Route>
                    <Route  path="/creerMs" element={<Layout><CreerMS></CreerMS></Layout>}></Route>
                    <Route  path="/creerBs" element={<Layout><CreerBs></CreerBs></Layout>}></Route>
                    <Route path="/bcaisselist" element={<Layout><ListeBC></ListeBC></Layout>}></Route>
                    <Route  path="/missionlist" element={<Layout><ListeMs></ListeMs></Layout>}></Route>
                    <Route path="/mission" element={<Layout><Mission></Mission></Layout>}></Route>
                    <Route  path="/user" element={<Layout><User></User></Layout>}></Route>
                    <Route  path="/userdetail/:id" element={<Layout><DetailUser></DetailUser></Layout>}></Route>
                    <Route  path="/userupdate/:id" element={<Layout><UserUpdate></UserUpdate></Layout>}></Route>
                    <Route path="/detailbc/:id" element={<Layout><DetailsBc></DetailsBc></Layout>}></Route>
                    <Route path="/detailms/:id" element={<Layout><DetailsMs></DetailsMs></Layout>}></Route>
            </Route>
            <Route exact path="/" element={<PublicRoute></PublicRoute>}>
                      <Route  path="login" element={<Login />}></Route>
            </Route>
        </Routes>
        
 
    );
};

export default Routing;