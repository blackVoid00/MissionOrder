import React, { useState } from "react";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SSidebar,
    SLogo,
    SSidebarButton,
} from "./styles";

import  logo from "../../assets/logo.jpg";

import {
 
    AiOutlineLeft,
   
} from "react-icons/ai";

import { BsPeople } from "react-icons/bs";

import { useLocation } from "react-router-dom";
import {IconContext} from 'react-icons'
const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();



    return (
        <SSidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <AiOutlineLeft />
                </SSidebarButton>
            </>
            <SLogo>
                <img src={logo} alt="logo" />
            </SLogo>
          
            <SDivider />
            <IconContext.Provider value={{ color: 'white', size: '30px' }}>
            {linksArray.map(({ icon, label, path }) => (
                <SLinkContainer key={label} isActive={pathname === path}>
                    <SLink to={path} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                              
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}
            </IconContext.Provider>
    
            
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "test1",
        icon: <BsPeople />,
        path: "/user",
       
    },
    {
        label: "test2",
        icon:  <BsPeople />,
        path: "/userlist",
      
    },
    {
        label: "test3",
        icon:  <BsPeople />,
        path: "/",
       
    },
    {
        label: "test4",
        icon:  <BsPeople />,
        path: "/",
       
    },
    {
        label: "test5",
        icon:  <BsPeople />,
        path: "/mission",
       
    },
 
  
];



export default Sidebar;