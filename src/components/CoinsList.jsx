import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CoinItem from "./CoinItem";
import CoinsListHeader from "./CoinsListHeader";
import { paginate } from "../utils/paginate";
import { PaginationButton, PaginationPrevNextButton } from "./Buttons";
import { PaginationBtnsContainer } from "./Containers";

const CoinsList = () => {
  const { filteredCoins } = useSelector((state) => state.main);
  const { isLoading } = useSelector((state) => state.main);
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    let newCoins = paginate(filteredCoins);
    setCoins(newCoins[page]);
  }, [filteredCoins, page]);
  let arrayOfPages = paginate(filteredCoins);

  const handlePage = (index) => {
    setPage(index);
  };

  const prevPage = () => {
    setPage((prevState) => {
      let prevPage = prevState - 1;
      if (prevPage < 0) {
        prevPage = arrayOfPages.length - 1;
      }
      return prevPage;
    });
  };

  const nextPage = () => {
    setPage((prevState) => {
      let nextPage = prevState + 1;
      if (nextPage > arrayOfPages.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  if (filteredCoins.length < 1 && !isLoading) {
    return (
      <StyledContainer>
        <h5>No Coins With Entered Value Found!</h5>
      </StyledContainer>
    );
  }
  return (
    <>
      <StyledCoinsList>
        <CoinsListHeader />
        {/* {filteredCoins.map((coin, index) => {
        return <CoinItem coin={coin} key={index} />;
      })} */}
        {coins.length > 0 &&
          coins.map((coin, index) => {
            return <CoinItem coin={coin} key={index} />;
          })}
      </StyledCoinsList>
      <PaginationBtnsContainer>
        <PaginationPrevNextButton onClick={prevPage}>
          Prev
        </PaginationPrevNextButton>
        {arrayOfPages.map((item, index) => {
          return (
            <PaginationButton
              index={index}
              page={page}
              onClick={() => handlePage(index)}
              key={index}
            >
              {index + 1}
            </PaginationButton>
          );
        })}
        <PaginationPrevNextButton onClick={nextPage}>
          Next
        </PaginationPrevNextButton>
      </PaginationBtnsContainer>
    </>
  );
};

const StyledCoinsList = styled.div`
  margin: 2rem auto;
  @media screen and (max-width: 767px) {
    margin-top: 2rem;
    overflow-x: scroll;
  }
`;

const StyledContainer = styled.div`
  margin: 2rem auto;
  text-align: center;
  display: grid;
  place-items: center;
  height: calc(100vh - 23.8rem);

  h5 {
    align-self: baseline;
  }
`;

export default CoinsList;
