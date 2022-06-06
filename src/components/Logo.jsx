import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import LogoImage from "../images/cryptocurrency.png";

const Logo = ({ className }) => {
  return (
    <Link to='/'>
      <div className={className}>
        <img className='logo-image' src={LogoImage} alt='Crypto World' />
        <h3 className='site-title'>crypto world</h3>
      </div>
    </Link>
  );
};

export const HeaderLogoStyled = styled(Logo)`
  display: flex;
  gap: 0.7rem;
  align-items: center;

  .site-title {
    color: var(--clr-grey-9);
    font-size: 1.5rem;
  }
  .logo-image {
    width: 60px;
  }
  @media screen and (max-width: 767px) {
    .logo-image {
      width: 30px;
    }
    .site-title {
      font-size: 0.8rem;
    }
  }
`;

export const FooterLogoStyled = styled(Logo)`
  display: flex;
  gap: 0.7rem;
  align-items: center;

  .site-title {
    color: var(--clr-grey-9);
    font-size: 1.5rem;
  }
  .logo-image {
    width: 60px;
  }
  @media screen and (max-width: 767px) {
    .logo-image {
      width: 30px;
    }
    .site-title {
      font-size: 0.8rem;
    }
  }
`;

export const SidebarLogoStyled = styled(Logo)`
  display: flex;
  gap: 1rem;
  align-items: center;

  .site-title {
    color: var(--clr-grey-9);
    font-size: 1.5rem;
  }
  .logo-image {
    width: 60px;
  }
  @media screen and (max-width: 767px) {
    .site-title {
      color: var(--clr-grey-9);
      font-size: 1.2rem;
    }
  }
`;
