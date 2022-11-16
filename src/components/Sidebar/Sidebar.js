import React, { useState } from 'react';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

import  logo from "../../assets/logo.png";

 const Logo = styled.div`
    img {
        width:auto;
        height:100px;
        margin-left:45px;
        
    }
    cursor: pointer;   
`;
const SidebarNav = styled.nav`
 background:white;
 box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

 
// const showSidebar=()=>{
//     setSidebar(!sidebar);
// }
  return (
    <>
 
           
      <IconContext.Provider value={{ color: ' #b71c1c',size:"20px" }}>
       
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
          <Logo> <img className='img' src={logo} alt="logo" /></Logo>
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
