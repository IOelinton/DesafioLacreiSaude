import styled from "styled-components";

export const Working = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  min-height: 50vh;
  text-align: start;

  .error {
    font-weight: bold;
    color: var(--text-warning-400);
    font-size: var(--Headline-Xl);
    padding-bottom: 32px;
    background-color: #f5f5f5;
  }

  p {
    font-size: 18px;
    background-color: #f5f5f5;
  }

  .linkRedirect {
    background-color: #f5f5f5;
    color: #007756;
    font-size: 20px;
    font-weight: 500;
    font-weight: bold;
    text-decoration: #007756;

    padding-top: 32px;

    &.hover {
      color: #007756;
      cursor: pointer;
    }
  }
`;
