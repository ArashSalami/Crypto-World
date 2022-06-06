import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { formatPrice } from "../../utils/utils";
import { colors } from "../../utils/colors";

const SingleCoinMain = () => {
  const { singleCoin } = useSelector((state) => state.main);
  const {
    name,
    image: { small: img },
    symbol,
    market_cap_rank: rank,
    market_data: {
      current_price: { usd: currentPrice },
      price_change_percentage_24h: oneDayChange,
    },
  } = singleCoin;
  return (
    <StyledSingleCoinMain change={oneDayChange} className='content-main'>
      <p className='rank'>Rank #{rank}</p>
      <div className='img-container'>
        <img className='img' src={img} alt={name} />
        <p className='name'>{name}</p>
        <p className='symbol'>({symbol.toUpperCase()})</p>
      </div>
      <div className='price'>
        <h3 className='price-current'>${formatPrice(currentPrice, 0, 11)}</h3>
        <p className='price-day-change'>{formatPrice(oneDayChange, 0, 2)}%</p>
      </div>
    </StyledSingleCoinMain>
  );
};

const StyledSingleCoinMain = styled.div`
  width: 75%;
  .rank {
    font-weight: 600;
    font-size: 0.8rem;
    background: var(--clr-gunmetal);
    display: inline-block;
    color: var(--clr-grey-9);
    border-radius: 8px;
    padding: 0.1rem 0.75rem;
  }
  .img-container {
    display: flex;
    margin: 1rem 0;
    align-items: center;
    gap: 0.5rem;
    .img {
      width: 40px;
    }
  }
  .price {
    display: flex;
    gap: 1rem;
    align-items: center;

    .price-day-change {
      font-weight: bold;
      color: ${(props) =>
        props.change > 0
          ? colors.increased
          : props.change < 0
          ? colors.decreased
          : colors.default2};
    }
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 2rem;
  }
`;
export default SingleCoinMain;
