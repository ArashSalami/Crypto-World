import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { updateSort } from "../store/features/mainSlice";
import Arrow from "./CoinsListHeaderArrow";
import { CoinsListHeaderButton } from "./Buttons";

const CoinsListHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  const [values, setValue] = useState({
    rank: false,
    name: true,
    price: false,
    priceChange: false,
    marketCap: true,
    circSupply: false,
  });
  const dispatch = useDispatch();

  const toggleSticky = () => {
    if (window.scrollY > 400) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleSticky);
    return () => {
      window.removeEventListener("scroll", toggleSticky);
    };
  }, []);

  const clickHandler = (e) => {
    let value = e.currentTarget.name;

    setValue((prevState, valueName) => {
      valueName = value;
      return { ...prevState, valueName: !prevState.valueName };
    });
    dispatch(
      updateSort({
        name: e.currentTarget.name,
        value: values.valueName || false,
      })
    );
  };

  return (
    <StyledCoinsListHeader isSticky={isSticky}>
      <CoinsListHeaderButton onClick={(e) => clickHandler(e)} name='rank'>
        #{<Arrow btnName={"rank"} />}
      </CoinsListHeaderButton>

      <CoinsListHeaderButton
        onClick={(e) => clickHandler(e)}
        name='name'
        className='name'
      >
        Name{<Arrow btnName={"name"} />}
      </CoinsListHeaderButton>
      <CoinsListHeaderButton onClick={(e) => clickHandler(e)} name='price'>
        Price{<Arrow btnName={"price"} />}
      </CoinsListHeaderButton>
      <CoinsListHeaderButton
        onClick={(e) => clickHandler(e)}
        name='priceChange'
      >
        24h%{<Arrow btnName={"priceChange"} />}
      </CoinsListHeaderButton>
      <CoinsListHeaderButton onClick={(e) => clickHandler(e)} name='marketCap'>
        Market Cap{<Arrow btnName={"marketCap"} />}
      </CoinsListHeaderButton>
      <CoinsListHeaderButton onClick={(e) => clickHandler(e)} name='circSupply'>
        Circulating Supply{<Arrow btnName={"circSupply"} />}
      </CoinsListHeaderButton>
    </StyledCoinsListHeader>
  );
};
const StyledCoinsListHeader = styled.div`
  margin: 1rem auto;
  padding: 1rem 2rem;
  place-items: center;

  display: grid;
  grid-template-columns: 0.7fr 2.75fr 1.2fr 1fr 2fr 1.5fr;
  background: var(--clr-grey-4);
  border-radius: 8px;
  box-shadow: var(--dark-shadow);
  ${(props) =>
    props.isSticky &&
    css`
      background: hsl(209, 34%, 30%, 0.7);
      position: fixed;
      z-index: 3;
      top: 0;
      margin: 0;
      width: 85vw;
      max-width: var(--max-width);
      backdrop-filter: blur(5px);
      color: var(--clr-grey-9);
    `};

  .name {
    justify-self: flex-start;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 0.5fr 3.5fr 1.6fr 1fr 2.2fr 2.2fr;
    font-size: 0.8rem;
    padding: 1rem 1rem;
    position: static;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 0.5fr 2.3fr 1.6fr 1fr 2.2fr 2.2fr;
    /* gap: 1rem; */
    min-width: 767px;
    padding: 0.5rem 0.5rem;
    position: static;
  }
`;
export default CoinsListHeader;
