import React from "react";
import NavbarComponent from "../Navbar/NavbarComponent";
import Sidebar from "../Sidebar/Sidebar";
import { SLayout, SMain,DivNavv } from "./styles";

const Layout = ({ children }) => {
    return (
        <DivNavv>
              <NavbarComponent/>
              <SLayout>
           
           <Sidebar />
           <SMain>{children}</SMain>
          
          
       </SLayout>
        </DivNavv>
       
    );
};

export default Layout;