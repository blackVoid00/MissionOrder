import { Link } from "react-router-dom";
import styled from "styled-components";

import { btnReset, v } from "../../styles/variables";

export const SSidebar = styled.div`
    width: ${({ isOpen }) => (!isOpen ? `110px` : v.sidebarWidth)};
    background: #1c539b;
    height: 100vh;
    padding: ${v.lgSpacing};
    position: absolute;
    box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.25);
`;

export const SSidebarButton = styled.button`
    ${btnReset};
    position: absolute;
    top: ${v.xxlSpacing};
    right: ${({ isOpen }) => (isOpen ? `-16px` : `-20px`)};
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const SLogo = styled.div`
    width: 70px;
    margin-bottom: 20px;
    img {
        max-width: 100%;
        height: auto;
     
    }
    cursor: pointer;
    margin-top: 20px;
    
`;



export const SDivider = styled.div`
    height: 0px;
    width: 100%;
    background: ${({ theme }) => theme.bg3};
    margin: ${v.lgSpacing} 0;
`;

export const SLinkContainer = styled.div`
    background: ${({ theme, isActive }) => (!isActive ? `transparent` : theme.bg3)};
    border-radius:300px;
    margin: 10px 0;
  
`;

export const SLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkIcon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;
    svg {
        font-size: 30px;
        color:#00B2B8
    }
`;

export const SLinkLabel = styled.span`
    display: block;
    flex: 1;
    color:white;
    margin-left: ${v.smSpacing};
`;





