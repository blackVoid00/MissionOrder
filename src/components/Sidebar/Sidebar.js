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
        margin-top:25px;
    }
    cursor: pointer;   
`;
const SidebarNav = styled.nav`
 background: #1c539b;
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
 
           
      <IconContext.Provider value={{ color: 'white',size:"20px" }}>
       
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
          <Logo>
         <img src={logo} alt="logo" />
        </Logo>
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
