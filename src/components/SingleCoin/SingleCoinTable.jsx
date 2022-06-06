import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { formatPrice } from "../../utils/utils";
import { StyledCoinTableParagraph } from "../Paragraphs";

const SingleCoinTable = () => {
  const { singleCoin } = useSelector((state) => state.main);

  const {
    market_data: {
      price_change_percentage_24h: oneDayChange,
      price_change_percentage_7d: sevenDayChange,
      price_change_percentage_14d: fourteenDayChange,
      price_change_percentage_30d: oneMonthChange,
      price_change_percentage_1y: oneYearChange,
    },
  } = singleCoin;
  const tableHeadings = ["24h", "7d", "14d", "30d", "1y"];
  const contents = [
    oneDayChange,
    sevenDayChange,
    fourteenDayChange,
    oneMonthChange,
    oneYearChange,
  ];
  return (
    <StyledSingleCoinTable>
      <h5>Price Change History</h5>
      <div className='table-heading'>
        {tableHeadings.map((tableHeading, index) => {
          return (
            <StyledCoinTableParagraph key={index} heading>
              {tableHeading}
            </StyledCoinTableParagraph>
          );
        })}
      </div>
      <div className='table-content'>
        {contents.map((content, index) => {
          return (
            <StyledCoinTableParagraph tableContent value={content} key={index}>
              {formatPrice(content, 0, 2)} %
            </StyledCoinTableParagraph>
          );
        })}
      </div>
    </StyledSingleCoinTable>
  );
};

const StyledSingleCoinTable = styled.section`
  text-align: center;
  padding: 4rem 0;
  h5 {
    margin-bottom: 1.5rem;
    color: var(--clr-grey-2);
  }
  .table-heading,
  .table-content {
    display: grid;
    width: 80%;
    grid-template-columns: repeat(5, 1fr);
    gap: 0 0.5rem;
    place-items: center;
    margin: 0.5rem auto;
  }
  @media screen and (max-width: 1024px) {
    padding: 3rem 0 1rem 0;
  }

  @media screen and (max-width: 767px) {
    padding: 2rem 0;

    .table-heading,
    .table-content {
      width: 95%;

      p {
        font-size: 0.7rem;
      }
    }
  }
`;

export default SingleCoinTable;
