import styled from "styled-components";

export const Button = styled.button`
  height: 48px;
  border-radius: 8px;
  padding: 0 32px;

  &.secundaryButton {
    background-color: var(--background--invert-400);
    border: solid 2px #018762;
    color: #018762;
    transition: 0.1s ease-in;
  }

  &.secundaryButton:hover {
    cursor: pointer;
    background-color: #b2dfd0;
  }
`;
