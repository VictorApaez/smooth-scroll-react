import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const SidebarContainer = styled.div`
  background-color: black;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;
`;
export const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
export const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  color: white;
`;
export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SidebarLink = styled.div`
  align-self: flex-start;
  margin-bottom: 30px;
  color: white;
  font-size: 2rem;
  transition: 0.3s ease-in-out;
  &:hover {
    color: blue;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;
export const SidebarBtnRoute = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  background-color: white;
  border-radius: 40px;
  font-size: 2rem;
  height: 3.2rem;
  width: 200px;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: blue;
    color: white;
    transition: 0.3s ease-in-out;
  }
`;
