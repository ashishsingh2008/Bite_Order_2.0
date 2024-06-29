import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.div`
  border-radius: 10px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: min-content;
  padding: 16px 26px;
  box-shadow: 1px 20px 35px 0px ${({ theme }) => theme.primary + 40};
  border: 1px solid ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    padding: 8px 12px;
  }

  ${({ type, theme }) =>
    type === "secondary"
      ? `
  background: ${theme.secondary};
border: 1px solid ${theme.secondary};
  `
      : `
  background: ${theme.primary};
`}

  ${({ isDisabled }) =>
    isDisabled &&
    `
  opacity: 0.8;
  cursor: not-allowed;
  `}

  ${({ isLoading }) =>
    isLoading &&
    `
    opacity: 0.8;
    cursor: not-allowed;
  `}

  ${({ flex }) =>
    flex &&
    `
    flex: 1;
  `}

  ${({ small }) =>
    small &&
    `
    padding: 10px 28px;
  `}

  ${({ outlined, theme }) =>
    outlined &&
    `
    background: transparent;
    color: ${theme.primary};
    box-shadow: none;
  `}

  ${({ full }) =>
    full &&
    `
    width: 100%;
  `}
`;

const CustomButton = ({
  text,
  isLoading,
  isDisabled,
  rightIcon,
  leftIcon,
  type,
  onClick,
  flex,
  small,
  outlined,
  full,
}) => {
  return (
    <Button
      onClick={() => !isDisabled && !isLoading && onClick && onClick()}
      isDisabled={isDisabled}
      type={type}
      isLoading={isLoading}
      flex={flex}
      small={small}
      outlined={outlined}
      full={full}
    >
      {isLoading && (
        <CircularProgress
          style={{ width: "18px", height: "18px", color: "inherit" }}
        />
      )}
      {leftIcon}
      {text}
      {isLoading && <> . . .</>}
      {rightIcon}
    </Button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  rightIcon: PropTypes.node,
  leftIcon: PropTypes.node,
  type: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func,
  flex: PropTypes.bool,
  small: PropTypes.bool,
  outlined: PropTypes.bool,
  full: PropTypes.bool,
};

export default CustomButton;
