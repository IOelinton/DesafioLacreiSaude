import styled from "styled-components";

export const Button = styled.button`
  height: 48px;
  border-radius: 10px;
  padding: 0 32px;
  font-weight: bold;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  &.primaryButton {
    background-color: #018762;
    color: #ffffff;
    transition: 0.1s ease-in;
  }
  &.primaryButton:hover {
    background-color: #007756;
    cursor: pointer;
  }

  &.secondaryButton {
    background-color: var(--background-invert-400);
    border: solid 2px #018762;
    color: #018762;
    transition: 0.1s ease-in;
  }

  &.secondaryButton:hover {
    cursor: pointer;
    background-color: #b2dfd0;
  }
`;
