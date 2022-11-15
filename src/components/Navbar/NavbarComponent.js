import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from "styled-components"
import * as AiIcons from "react-icons/ai"
import * as RiIcons from "react-icons/ri"
import "./styleNav.css"
import { FaCashRegister ,FaCarSide} from 'react-icons/fa';
const DivNav=styled.div`

`
const NavbarComponent=()=>{
  return (
    <>
    <DivNav>
    <Navbar className="nav" variant="dark">
        
          <Navbar.Brand href="#"></Navbar.Brand>
          {/* <h4 className='Brand'><FaCashRegister/> &nbsp; RIFL MISSION &nbsp;<FaCarSide/></h4>  */}
          <Nav className="navish">
            <Nav.Link href="#"><h4><RiIcons.RiAdminLine/>&nbsp; Admin</h4> </Nav.Link>
            <Nav.Link href="#"><h4><AiIcons.AiFillSetting/>&nbsp; Setting</h4></Nav.Link>
            <Nav.Link href="#"><h4><AiIcons.AiOutlineLogout/> &nbsp; Logout</h4></Nav.Link>
          </Nav>
        
      </Navbar>
    </DivNav>
  
    </>
  );
}

export default NavbarComponent;