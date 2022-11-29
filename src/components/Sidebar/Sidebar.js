import React, { useState } from 'react';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

import  logo from "../../assets/logo.png";
import  icon from "../../assets/iconUser.png";
import { useNavigate } from 'react-router-dom';


const Header = styled.div`
img {
    width:auto;
    height:100px;
    margin-left:45px;
   margin-top:30px;
}
cursor: pointer;   
`;
const SidebarNav = styled.nav`
 background:white;
 box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  width: 200px;
  height: 100vh;
  display: inline-block;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
  margin-top:70px;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const navigate=useNavigate()
// const showSidebar=()=>{
//     setSidebar(!sidebar);
// }
  return (
    <>
 
           
      <IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}>
       
        <SidebarNav sidebar={sidebar}>
        <Header><img  src={logo}  /></Header>
          <SidebarWrap>
       
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
           
          </SidebarWrap>
         
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
