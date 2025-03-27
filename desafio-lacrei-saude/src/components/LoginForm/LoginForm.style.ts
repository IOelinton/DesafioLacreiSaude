import styled from "styled-components";

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin: auto;

  h2 {
    color: #2d2d2d;
    font-size: 32px;
    font-weight: bold;
    padding-bottom: 8px;

    span {
      color: #007756;
      font-size: 32px;
      font-weight: bold;
      font-style: oblique;
    }
  }

  h3 {
    color: #2d2d2d;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 32px;
  }

  a {
    color: #007756;
    font-size: 20px;
    font-weight: 500;
    font-weight: bold;
    text-decoration: #007756;
    padding-top: 14px;

    &:hover {
      color: #007756;
      cursor: pointer;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;

  justify-content: space-around;

  .buttons {
    justify-content: space-between;
    display: flex;
    flex-direction: row-reverse;

    button {
      font-size: 16px;
      margin-top: 16px;
    }
  }

  @media (min-width: 360px) and (max-width: 720px) {
    .buttons {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  label {
    font-weight: bold;
    font-size: 16px;
    color: #2d2d2d;
  }

  input {
    border: solid 2px #d9d9d9;
    width: 404px;
    border-radius: 10px;
    margin-top: 7px;
    font-weight: bold;
    padding: 16px;
    font-size: 14px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  input::placeholder {
    color: rgb(173, 172, 172);
  }

  /* Smartphones*/
  @media (min-width: 360px) and (max-width: 720px) {
    input {
      width: 300px;
    }
  }
`;
