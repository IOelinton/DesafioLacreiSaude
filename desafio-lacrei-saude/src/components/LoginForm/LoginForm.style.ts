import styled from "styled-components";

export const LoginFormContainer = styled.form`
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
    padding-bottom: 32px;
  }

  a {
    color: #007756;
    font-size: 20px;
    font-weight: 500;
    font-weight: bold;
    text-decoration: #007756;
    padding-top: 14px;
  }

  a:hover {
    color: #007756;
    cursor: pointer;
  }
`;

export const FormContainer = styled.form`
  padding: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;

  justify-content: space-around;

  .buttons {
    justify-content: space-between;

    display: flex;
    flex-direction: row-reverse;
  }

  .buttons button {
    font-weight: bold;
    font-size: 16px;
    width: 192px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
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
`;
