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
 
    AiOutlineLeft,AiOutlineFileText
   
} from "react-icons/ai";

import {MdOutlineFilterAlt} from "react-icons/md";
import { BsPeople ,BsReceiptCutoff} from "react-icons/bs";

import {TbReceipt2 } from "react-icons/tb";

import { useLocation } from "react-router-dom";
import {IconContext} from 'react-icons'
const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();



    return (
        <SSidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <IconContext.Provider value={{ color: '#1c539b', size: '20px'}}>
                         <AiOutlineLeft />
                    </IconContext.Provider>
                   
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
        icon:  <AiOutlineFileText />,
        path: "/creerMs",
       
    },
    {
        label: "test4",
        icon:  <MdOutlineFilterAlt />,
        path: "/boncaisse",
       
    },
    {
        label: "test5",
        icon:  <BsPeople />,
        path: "/mission",
       
    },
    {
        label: "test6",
        icon:  <BsPeople />,
        path: "/creerBs",
       
    },
    {
        label: "Bon caisse",
        icon:  <BsReceiptCutoff />,
        path: "/tableuser",
       
    },
 
 
  
];



export default Sidebar;