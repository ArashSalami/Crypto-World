import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/utils";
import { colors } from "../utils/colors";

const CoinItem = ({ coin }) => {
  const {
    name,
    id,
    current_price,
    market_cap,
    price_change_percentage_24h,
    symbol,
    image,
    market_cap_rank,
    circulating_supply,
  } = coin;

  return (
    <Link to={`/coins/${id}`}>
      <StyledCoinsList priceChange={price_change_percentage_24h}>
        <p className='coin-rank'>{market_cap_rank}</p>
        <div className='container'>
          <img className='coin-image' src={image} alt={name} />
          <p className='coin-name'>{name}</p>
          <p className='coin-symbol'>{symbol.toUpperCase()}</p>
        </div>
        <p className='coin-price'>${formatPrice(current_price, 0, 11)}</p>
        <p className='coin-price-change'>
          {formatPrice(price_change_percentage_24h, 0, 2)}%
        </p>
        <p className='coin-market-cap'>${formatPrice(market_cap)}</p>
        <p className='coin-circulating-supply'>
          {formatPrice(circulating_supply, 0)}
        </p>
      </StyledCoinsList>
    </Link>
  );
};

const StyledCoinsList = styled.article`
  margin: 1rem 0;
  padding: 0.5rem 2rem;
  display: grid;
  place-items: center;

  grid-template-columns: 0.7fr 2.75fr 1.2fr 1fr 2fr 1.5fr;
  background: var(--clr-grey-8);
  align-items: center;
  border-radius: 8px;
  transition: all 0.1s linear;
  box-shadow: var(--light-shadow);
  &:hover {
    transform: scale(1.02);
  }
  .container {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    justify-self: flex-start;
  }
  .coin-image {
    width: 30px;
    height: 30px;
  }
  p {
    color: var(--clr-grey-5);
    font-weight: 600;
    font-size: 0.9rem;
  }
  .coin-name,
  .coin-price,
  .coin-market-cap,
  .coin-circulating-supply {
    color: var(--clr-grey-2);
  }
  .coin-price-change {
    color: ${(props) =>
      props.priceChange > 0
        ? colors.increased
        : props.priceChange < 0
        ? colors.decreased
        : colors.default2};
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 0.5fr 3.5fr 1.6fr 1fr 2.2fr 2.2fr;
    p {
      font-size: 0.8rem;
    }
    padding: 0.5rem 1rem;
    .coin-image {
      width: 25px;
      height: 25px;
    }
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 0.5fr 2.3fr 1.6fr 1fr 2.2fr 2.2fr;
    padding: 0.5rem 0.5rem;
    margin-right: 0;
    min-width: 767px;
    padding: 0.5rem 0.5rem;
    .coin-image {
      width: 20px;
      height: 20px;
    }
    /* .coin-circulating-supply,
    .coin-market-cap {
      display: none;
    } */
    p {
      font-size: 0.7rem;
    }
  }
`;

export default CoinItem;
