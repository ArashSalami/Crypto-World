import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SingleCoinInfoItem from "./SingleCoinInfoItem";

const SingleCoinInfo = () => {
  const { singleCoin } = useSelector((state) => state.main);
  const {
    market_data: {
      ath: { usd: ath },
      atl: { usd: atl },
      high_24h: { usd: high24 },
      low_24h: { usd: low24 },
      market_cap: { usd: marketCap },

      circulating_supply,
    },
  } = singleCoin;
  const coinInfo = [
    { label: "Market Cap: ", value: marketCap },
    { label: "Circulating Supply:", value: circulating_supply },
    { label: "24h High: ", value: high24, min: 0, max: 11 },
    { label: "24h Low: ", value: low24, min: 0, max: 11 },
    { label: "All Time High: ", value: ath, min: 0, max: 11 },
    { label: "All Time Low: ", value: atl, min: 0, max: 11 },
  ];

  return (
    <StyledSingleCoinInfo>
      {coinInfo.map((item, index) => {
        return (
          <SingleCoinInfoItem
            data={{ ...item }}
            key={index}
          ></SingleCoinInfoItem>
        );
      })}
    </StyledSingleCoinInfo>
  );
};

const StyledSingleCoinInfo = styled.div`
  width: 70%;
  background: var(--clr-grey-8);
  padding: 1rem;
  box-shadow: var(--light-shadow);
  border-radius: 8px;
  backdrop-filter: blur(100px);

  .content-info-item-title {
    font-weight: 400;
    color: var(--clr-grey-4);
  }
  .content-info-item-amount {
    font-weight: bold;
    color: var(--clr-grey-2);
  }
  @media screen and (max-width: 767px) {
    width: 85%;
  }
`;

export default SingleCoinInfo;
