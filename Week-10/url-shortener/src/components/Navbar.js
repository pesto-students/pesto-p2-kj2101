import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  box-sizing: border-box;
  height: 5vh;
  background: white;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  padding: 10px;
`;

const NavbarLogo = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  color: black;
`;

const NavbarItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const NavbarItem = styled.span`
  font-size: 1rem;
  color: black;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarLogo>Shortly</NavbarLogo>

      <NavbarItemContainer>
        <NavbarItem>Features</NavbarItem>
        <NavbarItem>Pricing</NavbarItem>
        <NavbarItem> Resources</NavbarItem>
      </NavbarItemContainer>

      <NavbarItemContainer>
        <NavbarItem>Login</NavbarItem>
        <NavbarItem>SignUp</NavbarItem>
      </NavbarItemContainer>
    </NavbarContainer>
  );
}
