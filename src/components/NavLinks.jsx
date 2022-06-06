import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../store/features/mainSlice";

const NavLinks = ({ className }) => {
  return (
    <nav className={className}>
      <ul>
        <li>
          <NavLink className='nav-link' to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-link' to='/exchanges'>
            Exchanges
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export const HeaderNavLinks = () => {
  return <StyledHeaderNavLinks />;
};
const StyledHeaderNavLinks = styled(NavLinks)`
  ul {
    display: flex;
    gap: 3rem;
    justify-content: center;
    li {
      transition: var(--transition);
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  .nav-link {
    color: var(--clr-grey-9);
    transition: var(--transition);
    font-weight: 500;

    &:hover {
      color: var(--clr-grey-6);
    }
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const StyledFooterNavLinks = styled(NavLinks)`
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .nav-link {
    color: var(--clr-grey-9);
    transition: var(--transition);

    &:hover {
      color: var(--clr-primary-8);
    }
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
const AsideNavLinks = ({ className }) => {
  const dispatch = useDispatch();
  return (
    <nav className={className}>
      <ul>
        <li>
          <NavLink
            onClick={() => {
              dispatch(closeSidebar());
            }}
            className='nav-link'
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              dispatch(closeSidebar());
            }}
            to='/exchanges'
            className='nav-link'
          >
            Exchanges
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export const StyledAsideNavLinks = styled(AsideNavLinks)`
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.2rem;
  }
  .nav-link {
    color: var(--clr-grey-9);
    transition: var(--transition);

    &:hover {
      color: var(--clr-primary-8);
    }
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 0;
    display: flex;
    justify-content: flex-start;
    ul {
      li {
        transition: var(--transition);
        &:hover {
          padding-left: 10px;
        }
      }
    }
  }
`;
