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
 
    AiOutlineLeft,AiOutlineFileText,AiOutlineForm,AiOutlineUserAdd
   
} from "react-icons/ai";
import {FaMoneyCheck} from "react-icons/fa";
import {MdOutlineFilterAlt} from "react-icons/md";
import { BsReceiptCutoff} from "react-icons/bs";
import { CgUserList } from "react-icons/cg";
import {GiReceiveMoney,} from "react-icons/gi";
import {BiTargetLock} from "react-icons/bi";
import {TbListDetails} from "react-icons/tb";
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
        label: "Add User",
        icon: <AiOutlineUserAdd />,
        path: "/user",
       
    },
    {
        label: "Users List",
        icon:  <CgUserList/>,
        path: "/userlist",
      
    },
    {
        label: "Form Mission",
        icon:  <BiTargetLock />,
        path: "/creerMs",
       
    },
    {
        label: "Filter",
        icon:  <MdOutlineFilterAlt />,
        path: "/filter",
       
    },
    {
        label: "Mission Fill",
        icon:  <AiOutlineForm />,
        path: "/mission",
       
    },
    {
        label: "Form BonCaisse",
        icon:  <GiReceiveMoney />,
        path: "/creerBs",
       
    },
    {
        label: "BonCaisse List",
        icon:  <BsReceiptCutoff />,
        path: "/bcaisselist",
       
    },
    {
        label: "Mission List",
        icon:  <TbListDetails />,
        path: "/missionlist",
       
    },
    {
        label: "Compte Utilisateur",
        icon:  <FaMoneyCheck />,
        path: "/cuswipe",
       
    }
  
 
 
 
  
];



export default Sidebar;