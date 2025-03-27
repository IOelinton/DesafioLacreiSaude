import styled from "styled-components";

export const MainContent = styled.main`
  display: flex;
  width: 80%;
  margin: auto;
  min-height: 100vh;
  justify-content: space-between;
  flex-direction: column;

  /* Smartphones*/
  @media (max-width: 428px) {
    width: 100%;
  }

  /* Tablets */
  @media (max-width: 834px) {
    width: 100%;
  }
`;
