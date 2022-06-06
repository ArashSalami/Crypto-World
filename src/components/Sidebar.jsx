import React from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components/macro";
import { NavToggleBtn } from "./Buttons";
import { SidebarContainer } from "./Containers";
import { SidebarLogoStyled } from "./Logo";
import { StyledAsideNavLinks } from "./NavLinks";

const Sidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.main);
  return (
    <StyledSidebar isSidebarOpen={isSidebarOpen}>
      <SidebarContainer>
        <StyledSidebarHeader>
          <SidebarLogoStyled />
          <NavToggleBtn />
        </StyledSidebarHeader>
        <StyledAsideNavLinks />
      </SidebarContainer>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  right: 100%;
  display: none;
  z-index: 2;
  transition: var(--transition);
  background: var(--clr-grey-5);
  transform: translateX(100%);
  @media screen and (max-width: 767px) {
    display: block;
    ${({ isSidebarOpen }) =>
      isSidebarOpen === true
        ? css`
            transform: translate(0);
          `
        : css`
            transform: translate(-100%);
          `};
  }
`;

const StyledSidebarHeader = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
  }
`;

export default Sidebar;
