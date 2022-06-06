import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ExchangeItem from "./ExchangeItem";
import ExchangeListHeader from "./ExchangeListHeader";

const ExchangeList = () => {
  const { exchanges } = useSelector((state) => state.main);

  return (
    <StyledExchangeList>
      <ExchangeListHeader />
      {exchanges.map((exchange, index) => {
        return <ExchangeItem {...exchange} key={index} />;
      })}
    </StyledExchangeList>
  );
};
const StyledExchangeList = styled.div`
  margin: 4rem auto;
`;
export default ExchangeList;
