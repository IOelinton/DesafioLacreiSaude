import React from "react";

import { Buttons } from "@/components";

import {
  FormContainer,
  LoginFormContainer,
  InputField,
} from "./LoginForm.style";

const LoginForm = () => {
  return (
    <LoginFormContainer>
      <FormContainer>
        <h2>Bem-vindo ao Lacrei</h2>
        <InputField>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Insira seu email"
            required
          />
        </InputField>
        <InputField>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Insira sua senha"
            required
          />
        </InputField>
        <div className="buttons">
          <Buttons type="submit" variant="primary">
            Entrar
          </Buttons>
          <Buttons type="submit" variant="secondary">
            Criar conta
          </Buttons>
        </div>
        <a href="/resetSenha"> Esqueceu a senha?</a>
      </FormContainer>
    </LoginFormContainer>
  );
};

export default LoginForm;
