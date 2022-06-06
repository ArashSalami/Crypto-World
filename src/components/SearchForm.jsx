import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateFilter } from "../store/features/mainSlice";

const SearchForm = () => {
  const { coinName } = useSelector((state) => state.main.filters);
  const dispatch = useDispatch();
  const updateFilterHandler = (e) => {
    dispatch(updateFilter(e.target.value));
  };
  return (
    <StyledSearchForm onSubmit={(e) => e.preventDefault()}>
      <input
        type='text'
        name='coin'
        id='coin'
        placeholder='Enter Search Term'
        value={coinName}
        onChange={updateFilterHandler}
      />
    </StyledSearchForm>
  );
};

const StyledSearchForm = styled.form`
  display: grid;
  place-items: center;
  margin-top: 2rem;
  input {
    background: var(--clr-grey-9);
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    width: 40%;
    color: var(--clr-grey-4);
    box-shadow: var(--dark-shadow);
    &::placeholder {
      text-align: center;
    }
  }
  @media screen and (max-width: 767px) {
    margin-top: 2rem;

    input {
      width: 75%;
    }
  }
`;

export default SearchForm;
