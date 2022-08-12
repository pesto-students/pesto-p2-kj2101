import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1px;
  min-height: 10vh;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 15px;
`;

const FooterItem = styled.div`
  margin: 0 0 2px;
  &:first-child {
    font-weight: bold;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterItem>Features</FooterItem>
        <FooterItem>Link Shortening</FooterItem>
        <FooterItem>Branded Link</FooterItem>
        <FooterItem>Analytics</FooterItem>
      </FooterWrapper>

      <FooterWrapper>
        <FooterItem>Resources</FooterItem>
        <FooterItem>Blog</FooterItem>
        <FooterItem>Developer</FooterItem>
        <FooterItem>Support</FooterItem>
      </FooterWrapper>

      <FooterWrapper>
        <FooterItem>Comapny</FooterItem>
        <FooterItem>About</FooterItem>
        <FooterItem>Our Team</FooterItem>
        <FooterItem>Contacts</FooterItem>
        <FooterItem>Careers</FooterItem>
      </FooterWrapper>
    </FooterContainer>
  );
}
