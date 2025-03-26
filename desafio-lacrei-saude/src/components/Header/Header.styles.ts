import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1.5rem 1rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(176, 224, 211);
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
