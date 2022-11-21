import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color:white;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top:30px;
  list-style: none;
  text-decoration: none;
  font-size: 15px;
  &:hover {
    background:#B0C4DE;
    cursor: pointer;
  }
  font-weight: bold;
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  font-weight: bold;
`;

const DropdownLink = styled(Link)`
  height: 50px;
  padding-left: 40px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color:white;
  font-size: 14px;
   font-weight: bold;
  &:hover {
    background:#B0C4DE;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
