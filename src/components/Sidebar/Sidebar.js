import React, { useState } from 'react';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

import  logo from "../../assets/logo.jpg";

 const Logo = styled.div`
    width: 5%;

    img {
        width: 120px;
        height: auto;
     
    }
    cursor: pointer;

    
`;
const SidebarNav = styled.nav`
background: #1c539b;
margin-top:120px;
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

 
const showSidebar=()=>{
    setSidebar(!sidebar);
}
  return (
    <>
     <Logo>
   <img src={logo} alt="logo" />
        </Logo>
           
      <IconContext.Provider value={{ color: '#fff' }}>
       
        <SidebarNav sidebar={sidebar}>
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
