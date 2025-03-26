import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin: 0 auto;
  width: 100%;
  padding: 32px 0;

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
  }

  .logoFooter:hover {
    cursor: pointer;
  }

  .socias {
    display: flex;
    justify-content: end;
    width: 30%;
    margin-top: 16px;
    a {
      margin-right: 16px;
    }
  }
`;
