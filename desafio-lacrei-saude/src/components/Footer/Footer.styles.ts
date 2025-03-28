import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin: 0 auto;
  width: 100%;
  padding: 16px;

  border-top: 1px solid rgb(176, 224, 211);
  display: flex;
  justify-content: space-around;
  align-items: center;

  .footer-right {
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: end;

    &:hover {
      cursor: pointer;
    }
  }

  .sociais {
    display: flex;
    justify-content: end;
    width: 30%;
    margin-top: 16px;
    a {
      margin-right: 16px;
    }
  }

  @media (min-width: 360px) and (max-width: 720px) {
    padding: 16px 0;
    justify-content: space-around;

    .logoFooter {
      width: 80%;
    }

    .footer-right {
      width: 50%;
      flex-direction: column;
    }

    .sociais {
      justify-content: space-around;
      width: 100%;
      margin-top: 16px;
      a {
        margin-right: 0px;
      }
    }
  }
`;
