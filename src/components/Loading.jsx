import React from "react";
import styled, { keyframes } from "styled-components";
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loading = () => {
  return (
    <StyledSpinnerContainer>
      <StyledLoadingSpinner />
    </StyledSpinnerContainer>
  );
};
const StyledSpinnerContainer = styled.div`
  display: flex;
  height: calc(100vh - 16rem);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 5;
`;
const StyledLoadingSpinner = styled.div`
  background: var(--clr-grey-10);
  width: 12vw;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 1vw solid var(--clr-grey-9);

  border-top: 1vw solid var(--clr-gunmetal);

  animation: ${rotate} 0.8s linear infinite;
`;
export default Loading;
