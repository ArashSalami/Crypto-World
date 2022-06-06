import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineToTop } from "react-icons/ai";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <Wrapper isVisible={isVisible}>
      <button
        type='button'
        onClick={scrollToTop}
        className={`${isVisible ? "visible" : "not-visible"}`}
      >
        <AiOutlineToTop className='icon' />
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2%;
  background: var(--clr-black-faded);
  padding: 0.3rem 0.5rem;
  border-radius: 12px;
  transition: var(--transition);
  display: ${(props) => (props.isVisible ? "block" : "none")};
  &:hover {
    background: var(--clr-black);
  }

  button {
    color: var(--clr-grey-9);
    background: transparent;
    font-size: 0.8rem;
    cursor: pointer;
    border: none;
  }

  .icon {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .visible {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .not-visible {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    right: 3.5%;
  }
  @media screen and (max-width: 678px) {
    right: 2%;
    .icon {
      font-size: 1rem;
      font-weight: 600;
    }
  }
`;
export default BackToTop;
