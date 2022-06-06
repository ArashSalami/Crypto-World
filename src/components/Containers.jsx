import React from "react";
import styled from "styled-components/macro";

export const Container = ({ className, children }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  width: 85vw;

  max-width: var(--max-width);
  margin: 0 auto;
  min-height: calc(100vh - 20rem);
  @media screen and (max-width: 1024px) {
    width: 85vw;
  }
  @media screen and (max-width: 767px) {
    width: 90vw;
  }
`;
export const BodyContainer = ({ children }) => {
  return <StyledMainBodyContainer>{children}</StyledMainBodyContainer>;
};

const StyledMainBodyContainer = styled.main`
  width: 90vw;
  margin: 0 auto;

  max-width: var(--max-width);
  min-height: calc(100vh - 16rem);
  @media screen and (max-width: 1024px) {
    width: 90vw;
  }
  @media screen and (max-width: 767px) {
    width: 92vw;
  }
`;

export const HeaderContainer = ({ children }) => {
  return <StyledHeaderContainer>{children}</StyledHeaderContainer>;
};

const StyledHeaderContainer = styled(Container)`
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  min-height: auto;

  grid-template-columns: 1.5fr 2fr;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    grid-template-columns: auto auto;
  }
`;

export const FooterContainer = ({ children }) => {
  return <StyledFooterContainer>{children}</StyledFooterContainer>;
};

const StyledFooterContainer = styled(Container)`
  width: 90vw;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  min-height: auto;
  grid-template-columns: 1.5fr 2fr;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    grid-template-columns: auto auto;
  }
`;

export const SidebarContainer = ({ children }) => {
  return <StyledSidebarContainer>{children}</StyledSidebarContainer>;
};

const StyledSidebarContainer = styled(Container)`
  width: 90vw;
  gap: 2rem;
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const PaginationBtnsContainer = ({ children }) => {
  return <StyledBtnConainer>{children}</StyledBtnConainer>;
};
const StyledBtnConainer = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin: 3rem auto;
  @media screen and (max-width: 678px) {
    gap: 0.5rem;
  }
`;
