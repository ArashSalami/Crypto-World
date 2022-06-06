import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { formatPrice } from "../utils/utils";
import ProgressBar from "./TrustScoreBar";

const ExchangeItem = ({
  image,
  name,
  trust_score: score,
  trust_score_rank: rank,
  url,
  year_established: year,
  trade_volume_24h_btc: volume,
}) => {
  const { coins } = useSelector((state) => state.main);
  let btcPrice = coins.find((coins) => coins.id === "bitcoin").current_price;

  return (
    <a href={url} rel='noreferrer' target='_blank'>
      <StyledExchnageItem>
        <p>{rank}</p>
        <div className='name-container'>
          <div className='img-container'>
            <img src={image} alt={name} />
            <p>{name}</p>
          </div>
          {year && (
            <p className='year'>
              Since <span>{year}</span>
            </p>
          )}
        </div>
        <div className='trust-score-container'>
          <div className='trust-score'>
            <p>{score}</p>
            <ProgressBar completed={score} />
          </div>
        </div>

        <p>${formatPrice(volume * btcPrice, 0, 2)}</p>
      </StyledExchnageItem>
    </a>
  );
};

const StyledExchnageItem = styled.article`
  margin: 1rem auto;
  padding: 0.5rem 2rem;
  display: grid;
  grid-template-columns: 0.4fr 1.5fr 1.2fr 1.5fr;
  place-items: center;

  background: var(--clr-grey-8);
  align-items: center;
  border-radius: 8px;
  transition: all 0.1s linear;
  box-shadow: var(--light-shadow);
  &:hover {
    transform: scale(1.02);
  }
  .name-container {
    justify-self: start;
  }
  .trust-score-container {
    width: 40%;
  }
  .trust-score {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  p {
    color: var(--clr-grey-2);
    font-weight: 600;
    font-size: 0.9rem;
  }
  .year {
    display: flex;
    justify-content: flex-start;
    font-size: 0.7rem;
    margin-top: 0.3rem;
    gap: 0.2rem;
  }

  .img-container {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
    }
    p {
      color: var(--clr-primary-3);
    }
  }
  @media screen and (max-width: 1024px) {
    padding: 0.5rem 0.75rem;

    p {
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 767px) {
    .trust-score {
      flex-direction: column;
      gap: 0.2rem;
    }
    p {
      font-size: 0.7rem;
    }
    .img-container {
      img {
        width: 20px;
        height: 20px;
      }
    }
    .year {
      font-size: 0.5rem;
      justify-content: center;
    }
  }
`;

export default ExchangeItem;
