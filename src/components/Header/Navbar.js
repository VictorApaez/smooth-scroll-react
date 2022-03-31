import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./index";

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">LOGO</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLink to="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#">Discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#">Sign Up</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
}

export default Navbar;
