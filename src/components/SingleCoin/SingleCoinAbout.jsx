import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const SingleCoinAbout = () => {
  const { singleCoin } = useSelector((state) => state.main);

  const {
    description: { en: desc },
    links: { homepage },
  } = singleCoin;
  return (
    <StyledSingleCoinAbout>
      <h3>About</h3>
      <p className='desc' dangerouslySetInnerHTML={{ __html: `${desc}` }}></p>
      <p className='site-address'>
        <a href={homepage[0]} target='_blank' rel='noreferrer'>
          {homepage[0]}
        </a>
      </p>
    </StyledSingleCoinAbout>
  );
};

const StyledSingleCoinAbout = styled.section`
  width: 90%;
  margin: 1rem auto;
  text-align: justify;

  h3 {
    margin-bottom: 1.5rem;
    color: var(--clr-grey-2);
  }
  .desc {
    font-size: 0.95rem;
    line-height: 1.7;
  }
  .site-address {
    text-align: center;
    width: fit-content;
    place-items: center;
    margin: 2rem auto;
    background: var(--clr-primary-5);
    font-size: 0.9rem;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 12px;
    border: 1px solid transparent;
    transition: var(--transition);
    box-shadow: var(--light-shadow);
    &:hover {
      background: var(--clr-grey-2);
      a {
      }
    }
    a {
      color: var(--clr-grey-9);
    }
  }
  @media screen and (max-width: 767px) {
    width: auto;
    margin: 0rem 0.3rem;

    .desc {
      font-size: 0.8rem;
    }
  }
`;

export default SingleCoinAbout;
