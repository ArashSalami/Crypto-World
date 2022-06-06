import styled, { css } from "styled-components/macro";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openSidebar } from "../store/features/mainSlice";

export const NavToggleBtn = () => {
  const dispatch = useDispatch();
  return (
    <StyledNavToggleBtn
      onClick={() => {
        dispatch(openSidebar());
      }}
    >
      <FaBars className='toggle-icon' />
    </StyledNavToggleBtn>
  );
};
const StyledNavToggleBtn = styled.button.attrs((props) => {
  return { type: props.type || "button" };
})`
  background: transparent;
  cursor: pointer;
  border: none;
  display: none;
  .toggle-icon {
    color: var(--clr-grey-9);
    font-size: 1.5rem;
  }
  @media screen and (max-width: 767px) {
    display: block;
    justify-self: flex-end;
  }
`;

export const CoinsListHeaderButton = ({
  className,
  name,
  onClick,
  children,
  type,
}) => {
  return (
    <StyledCoinsListHeaderButton
      onClick={onClick}
      className={className}
      type={type || "button"}
      name={name}
    >
      {children}
    </StyledCoinsListHeaderButton>
  );
};
const StyledCoinsListHeaderButton = styled.button`
  background: transparent;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: var(--clr-grey-9);
  font-weight: 600;
  font-size: 0.85rem;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 0.1rem;
  border: none;
  cursor: pointer;
  transition: var(--transition);
  &:hover {
    background: var(--clr-grey-2);
  }

  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
    padding: 0.5rem 0.5rem;
  }
  @media screen and (max-width: 767px) {
    font-size: 0.7rem;
  }
`;

export const PaginationButton = ({ children, onClick, index, page }) => {
  return (
    <StyledPaginationButton
      page={page}
      index={index}
      onClick={onClick}
      type='button'
    >
      {children}
    </StyledPaginationButton>
  );
};

const StyledPaginationButton = styled.button`
  padding: 0.25rem 0.5rem;
  background: var(--clr-grey-8);
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  &:hover {
    background: var(--clr-grey-4);
    color: var(--clr-grey-9);
  }
  ${(props) =>
    props.index === props.page &&
    css`
      background: var(--clr-grey-2);
      color: var(--clr-grey-9);
    `};
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 678px) {
    font-size: 0.6rem;
  }
`;

export const PaginationPrevNextButton = ({ children, onClick }) => {
  return (
    <StyledPaginationPrevNextButton onClick={onClick} type='button'>
      {children}
    </StyledPaginationPrevNextButton>
  );
};

const StyledPaginationPrevNextButton = styled.button`
  background: transparent;
  border: none;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: var(--spacing);
  border-radius: 4px;

  &:hover {
    background: var(--clr-grey-4);
    color: var(--clr-grey-9);
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 678px) {
    font-size: 0.6rem;
  }
`;
