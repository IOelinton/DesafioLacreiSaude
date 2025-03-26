import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Buttons } from "@/components";

import {
  FormContainer,
  LoginFormContainer,
  InputField,
} from "./LoginForm.style";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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
            onChange={handleInput}
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
          <Buttons type="submit" variant="primary" status={isEmailValid(email)}>
            Entrar
          </Buttons>
          <Buttons
            type="submit"
            variant="secondary"
            onClick={() => router.push("/createAccount")}
          >
            Criar conta
          </Buttons>
        </div>
        <Link href="/passwordReset"> Esqueceu a senha?</Link>
      </FormContainer>
    </LoginFormContainer>
  );
};

export default LoginForm;
