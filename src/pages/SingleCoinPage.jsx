import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleCoin } from "../store/features/mainSlice";
import styled from "styled-components";
import { Container } from "../components/Containers";
import Loading from "../components/Loading";
import SingleCoinMain from "../components/SingleCoin/SingleCoinMain";
import SingleCoinInfo from "../components/SingleCoin/SingleCoinInfo";
import SingleCoinTable from "../components/SingleCoin/SingleCoinTable";
import SingleCoinAbout from "../components/SingleCoin/SingleCoinAbout";

const SingleCoinPage = () => {
  const { isLoading } = useSelector((state) => state.main);
  const { coinId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleCoin(coinId));
  }, [dispatch, coinId]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <StyledCoins>
      <Container>
        <StyledCoinWrapper>
          <StyledContentWrapper>
            <SingleCoinMain />
            <SingleCoinInfo />
          </StyledContentWrapper>
          <SingleCoinTable />
          <SingleCoinAbout />
        </StyledCoinWrapper>
      </Container>
    </StyledCoins>
  );
};

const StyledCoins = styled.main`
  padding: 4rem 0;
  @media screen and (max-width: 767px) {
  }
`;

const StyledContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  place-items: center;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
const StyledCoinWrapper = styled.section``;

export default SingleCoinPage;
