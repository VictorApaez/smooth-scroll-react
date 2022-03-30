import React from "react";
import { NavMenu } from "../Header";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarBtnRoute,
} from "./Sidebar";

function Sidebar() {
  return (
    <>
      <SidebarContainer>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="discover">Discover</SidebarLink>
          <SidebarLink to="services">Services</SidebarLink>
          <SidebarLink to="signup">Sign Up</SidebarLink>
          <SidebarBtnRoute to="/signin">Sign In</SidebarBtnRoute>
        </SidebarMenu>
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
