import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { Buttons } from "@/components";

import {
  FormContainer,
  LoginFormContainer,
  InputField,
} from "./LoginForm.style";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    if (name==="email"){
      setEmail(value)
    }
    if (name==="password"){
      setPassword(value)}

  };

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (isEmailValid(email) && password) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [email, password]);


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
            aria-label="Insira seu email"
            aria-required
          />
        </InputField>
        <InputField>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Insira sua senha"
            onChange={handleInput}
            required
          />
        </InputField>
        <div className="buttons">
          <Buttons
            type="submit"
            variant="primary"
            status={status}
            onClick={() => router.push("/profile")}
          >
            Entrar
          </Buttons>
          <Buttons
            type="button"
            variant="secondary"
            onClick={() => router.push("/createAccount")}
            status={true}
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
