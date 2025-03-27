import styled from "styled-components";

export const CreateAcountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
  padding: 32px;

  h2 {
    text-align: left;
    font-weight: bold;
    padding-bottom: 8px;
    font-size: var(--Headline-sm-high200);

    span{
      font-size: 24px;
      color: var(--background-accent-500);
      font-weight: 150%;
    }
  }

  p {
    padding-bottom: 32px ;
    font-size: var(--Text-base);
  }

  .inputField {
    width: 100%;
  }

  .passwordValidations {
    padding-bottom: 32px;
    width: 100%;

    h3{
        font-weight: bold;
        color: #333333;
        padding-bottom : 8px;
    }

    ul {
        padding-left: 32px;
    }

    ul li {
        color: #918e8e;
    }
  }

  .confirmArea {
    display: flex;
    flex-direction: column;

    span{
        font-weight: bold;
        color: #333333;
    }
  }

  .requirements {
    li {
      margin: 5px 0;

      &.valid {
        color: var(--background-accent-400);
      }

      &.invalid{
        color: #963d1d;
      }
    }
}

.buttons {
    width: 100%;
    padding-top: 32px;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
}


  @media (min-width: 360px) and (max-width: 720px) {


    .buttons {
      display: flex;
      flex-direction: column;
      align-items: center;

      button{
        width: 100%;
        margin-bottom: 16px;
      }
    }
  }
`