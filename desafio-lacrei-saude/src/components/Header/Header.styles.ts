import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 16px;
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

    &:hover {
      cursor: pointer;
    }

    & .logoSigla {
      margin-right: 15px;
    }
  }

  @media (min-width: 360px) and (max-width: 720px) {
    padding: 16px 0;
    justify-content: space-around;
  }
`;
