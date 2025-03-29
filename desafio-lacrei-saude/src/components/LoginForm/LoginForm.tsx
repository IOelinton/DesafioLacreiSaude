import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { Button } from "@/components";

import {
  FormContainer,
  LoginFormContainer,
  InputField,
} from "./LoginForm.style";

type User = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]); // Tipagem corrigida

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
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

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("userData") || "[]");
    setUsers(storedUsers);
  }, []);

  const handleRedirect = () => {
    const user = users.find((user) => user.email === email); // Tipagem corrigida
    if (user && user.password === password) {
      router.push("/profile");
    } else {
      alert("Usuário ou senha inválidos");
    }
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
          <Button
            type="button"
            variant="primary"
            disabled={!status}
            onClick={handleRedirect} // Corrigido para usar handleRedirect
          >
            Entrar
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => router.push("/createAccount")}
          >
            Criar conta
          </Button>
        </div>
        <Link href="/passwordReset"> Esqueceu a senha?</Link>
      </FormContainer>
    </LoginFormContainer>
  );
};
export default LoginForm;
