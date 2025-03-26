import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1.5rem 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 10px 9px -3px rgba(0, 0, 0, 0.1);
  color: black;

  .logo-area {
    display: flex;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 7px;
  }

  .logo-area:hover {
    cursor: pointer;
  }

  .logo-area .logoSigla {
    margin-right: 15px;
  }
`;
