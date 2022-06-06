import React from "react";
import styled from "styled-components";
import { formatPrice } from "../../utils/utils";

const SingleCoinInfoItem = ({ data: { label, value, min, max } }) => {
  return (
    <StyledSingleCoinInfoItem>
      <p className='content-info-item-title'>{label}</p>
      <p className='content-info-item-amount'>
        ${formatPrice(value, min, max)}
      </p>
    </StyledSingleCoinInfoItem>
  );
};

const StyledSingleCoinInfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-bottom: 0.25rem;
`;

export default SingleCoinInfoItem;
