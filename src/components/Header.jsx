import React from "react";
import styled from "styled-components/macro";
import { HeaderNavLinks } from "./NavLinks";
import { NavToggleBtn } from "./Buttons";
import { HeaderContainer } from "./Containers";
import { HeaderLogoStyled } from "./Logo";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <HeaderLogoStyled />
        <NavToggleBtn />
        <HeaderNavLinks className='nav-links' />
      </HeaderContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 6rem;
  display: flex;
  align-items: center;
  background: var(--clr-gunmetal);

  .nav-links {
    justify-self: start;
  }
  @media screen and (max-width: 767px) {
    .header-container {
      grid-template-columns: 2fr 1fr;
      justify-content: space-between;
    }
  }
`;

export default Header;
