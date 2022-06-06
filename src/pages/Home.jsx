import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CoinsList from "../components/CoinsList";
import { Container } from "../components/Containers";
import Loading from "../components/Loading";
import SearchForm from "../components/SearchForm";
import { getCoins, resetFilter } from "../store/features/mainSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const {
    isLoading,
    filters: { coinName },
    sort,
  } = useSelector((state) => state.main);
  useEffect(() => {
    dispatch(getCoins());
    dispatch(resetFilter());
    setLoading(false);
  }, [dispatch, sort]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (coinName === "") {
        dispatch(getCoins());
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, coinName]);
  console.log("hellow");
  return (
    <>
      {loading && isLoading ? (
        <Loading />
      ) : (
        <Container>
          <SearchForm />
          <CoinsList />
        </Container>
      )}
    </>
  );
};

export default Home;
