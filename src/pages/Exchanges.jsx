import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../components/Containers";
import ExchangeList from "../components/ExchangeList";
import { getExchanges, getCoins } from "../store/features/mainSlice";
import Loading from "../components/Loading";

const Exchanges = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.main);

  useEffect(() => {
    dispatch(getCoins());
    dispatch(getExchanges());
    setLoading(false);
  }, [dispatch]);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getExchanges());
    }, 30000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  return (
    <>
      {loading && isLoading ? (
        <Loading />
      ) : (
        <Container>
          <ExchangeList />
        </Container>
      )}
    </>
  );
};

export default Exchanges;
