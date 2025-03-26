import styled from "styled-components";

export const Button = styled.button`
  height: 48px;
  border-radius: 10px;
  padding: 0 32px;
  font-weight: bold;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  /* Estilos primary Button */

  &.primaryButton {
    background-color: #018762;
    color: #ffffff;
    transition: 0.1s ease-in;
  }
  &.primaryButton:hover {
    background-color: #007756;
    cursor: pointer;
  }
  &.primaryButton:disabled {
    background-color: #c4c4c4;
    color: #fff;
    cursor: not-allowed;
  }

  &.primaryButton:disabled:hover {
    background-color: #c4c4c4;
    color: #fff;
    cursor: not-allowed;
  }

  /* Estilos Secondary Button */

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
