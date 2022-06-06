import React from "react";
import styled from "styled-components";

const ProgressBar = ({ completed }) => {
  return (
    <StyledContainer>
      <StyledFiller completed={completed} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 7px;
  width: 100%;
  background: var(--clr-grey-7);
  border-radius: 50px;
`;

const StyledFiller = styled.div`
  height: 100%;
  width: ${(props) => `${props.completed * 10}%`};
  background: var(--clr-green-dark);
  border-radius: inherit;
`;
export default ProgressBar;
