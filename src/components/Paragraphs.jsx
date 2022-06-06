import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";

const Paragraphs = ({ className, children }) => {
  return <p className={className}> {children}</p>;
};

export const StyledCoinTableParagraph = styled(Paragraphs)`
  width: 100%;
  padding: 0.2rem;
  text-align: center;
  border-radius: 8px;
  box-shadow: var(--light-shadow);
  border: none;
  background: ${(props) => (props.heading ? colors.heading : colors.content)};
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--clr-grey-9);
  color: ${(props) =>
    props.value > 0 && props.tableContent
      ? colors.increased
      : props.value < 0
      ? colors.decreased
      : colors.default2};
  color: ${(props) => props.heading && colors.default};
`;
