import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from "styled-components"
import * as AiIcons from "react-icons/ai"
import * as RiIcons from "react-icons/ri"
import "./styleNav.css"
import { FaCashRegister ,FaCarSide} from 'react-icons/fa';
import { GiCash} from 'react-icons/gi';
import  logo from "../../assets/logo.png";
import { IconContext } from 'react-icons/lib';
import { InputM } from '../StyleMsC';
import { useEffect } from 'react';
import { useState } from 'react';
const DivNav=styled.div`

`
const NavbarComponent=()=>{
const [nom ,setNom]=useState("")

  useEffect(()=>{
      setNom(localStorage.getItem("nom"));
      
  })
  return (
    <>
    <DivNav>
    <Navbar className="nav" variant="dark">
        
          <Navbar.Brand href="#"><h4 className='Brand'><IconContext.Provider value={{color:"#b71c1c",size:"40px"}}> <FaCarSide/></IconContext.Provider>&nbsp;&nbsp;<IconContext.Provider value={{color:"#1c539b;",size:"40px"}}> <GiCash/></IconContext.Provider></h4> </Navbar.Brand>
          
        
          <Nav className="navish">
          <IconContext.Provider value={{ color: '#b71c1c',size:"20px" }}>
            <Nav.Link href="#"><h4><RiIcons.RiAdminLine/>&nbsp; {nom}</h4> </Nav.Link>
            <Nav.Link href="#"><h4><AiIcons.AiFillSetting/>&nbsp; Setting</h4></Nav.Link>
            <Nav.Link href="#"><h4><AiIcons.AiOutlineLogout/> &nbsp; Logout</h4></Nav.Link>
            </IconContext.Provider>
          
          </Nav>
        
      </Navbar>
    </DivNav>
  
    </>
  );
}

export default NavbarComponent;