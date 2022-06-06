import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const ExchangeListHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  const toggleSticky = () => {
    if (window.scrollY > 400) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleSticky);
    return () => {
      window.removeEventListener("scroll", toggleSticky);
    };
  }, []);
  return (
    <StyledExchnageHeader isSticky={isSticky}>
      <p>#</p>
      <p className='name'> Name</p>
      <p>Trust Score</p>
      <p>24h Volume</p>
    </StyledExchnageHeader>
  );
};

const StyledExchnageHeader = styled.article`
  margin: 1rem auto;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 0.4fr 1.5fr 1.2fr 1.5fr;
  background: var(--clr-grey-4);
  place-items: center;

  ${(props) =>
    props.isSticky &&
    css`
      background: hsl(209, 34%, 30%, 0.7);
      position: fixed;
      z-index: 3;
      top: 0;
      margin: 0;
      width: 85vw;
      max-width: var(--max-width);
      backdrop-filter: blur(5px);
      color: var(--clr-grey-9);
    `};
  align-items: center;
  border-radius: 8px;
  transition: all 0.1s linear;
  box-shadow: var(--light-shadow);
  .name {
    justify-self: start;
  }
  p {
    color: var(--clr-grey-2);
    font-weight: 600;
    color: var(--clr-grey-9);

    font-size: 0.9rem;
  }
  @media screen and (max-width: 1024px) {
    position: static;
  }
  @media screen and (max-width: 767px) {
    padding: 0.5rem 0.75rem;
    position: static;

    p {
      font-size: 0.7rem;
    }
  }
`;
export default ExchangeListHeader;
