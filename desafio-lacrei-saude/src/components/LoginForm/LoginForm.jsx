import React from "react";
import Link from "next/link";

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
        <h2>
          Bem-vindo ao <span>Lacrei.</span>
        </h2>
        <h3>Entre ou cadastre.</h3>
        <InputField>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Insira seu email"
            required
          />
        </InputField>
        <InputField>
          <label htmlFor="password">Senha:</label>
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
        <Link href="/passwordReset"> Esqueceu a senha?</Link>
      </FormContainer>
    </LoginFormContainer>
  );
};

export default LoginForm;
