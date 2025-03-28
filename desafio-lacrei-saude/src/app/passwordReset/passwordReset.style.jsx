import styled from "styled-components";

export const PasswordResetContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 32px;

  h2 {
    text-align: left;
    font-weight: bold;
    font-size: var(--Headline-sm-high200);
    padding-bottom: 16px;
    width: 100%;
  }

  .inputField {
    width: 100%;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;
