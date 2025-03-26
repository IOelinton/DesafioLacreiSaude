'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Buttons } from "@/components";

import {
  FormContainer,
  LoginFormContainer,
  InputField,
} from "./LoginForm.style";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>(""); // Tipagem explícita
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (status) {
      router.push("/profile");
    } else {
      alert("Por favor, preencha os campos corretamente.");
    }
  };

  const isEmailValid = (email: string): boolean => {
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
            onClick={handleSubmit}
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
