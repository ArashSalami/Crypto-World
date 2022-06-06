import React from "react";
import styled from "styled-components/macro";
import { FooterContainer } from "./Containers";
import { FooterLogoStyled } from "./Logo";
import { StyledFooterNavLinks } from "./NavLinks";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterLogoStyled />
        <StyledFooterNavLinks />
      </FooterContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  background: var(--clr-gunmetal);
  height: 8rem;
  @media screen and (max-width: 767px) {
  }
`;
export default Footer;
