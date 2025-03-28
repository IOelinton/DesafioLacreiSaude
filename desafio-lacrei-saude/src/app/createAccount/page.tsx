"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

import { CreateAcountContainer } from "./createAccount.style";
import { Button } from "@/components";
import { InputField } from "@/components/LoginForm/LoginForm.style";

export default function PasswordReset() {
  const router = useRouter();

  // Estados para os campos
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [ageConfirmed, setAgeConfirmed] = useState<boolean>(false);

  // Estados para validações específicas da senha
  const [isLengthValid, setIsLengthValid] = useState<boolean>(false);
  const [hasUppercase, setHasUppercase] = useState<boolean>(false);
  const [hasLowercase, setHasLowercase] = useState<boolean>(false);
  const [hasNumber, setHasNumber] = useState<boolean>(false);
  const [hasSpecialChar, setHasSpecialChar] = useState<boolean>(false);

  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  // Função para validar o email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Função para validar os requisitos da senha
  useEffect(() => {
    setIsLengthValid(password.length >= 8);
    setHasUppercase(/[A-Z]/.test(password));
    setHasLowercase(/[a-z]/.test(password));
    setHasNumber(/\d/.test(password));
    setHasSpecialChar(/[@$!%*?&]/.test(password));
  }, [password]);

  // Monitorar mudanças nos campos e validar o formulário
  useEffect(() => {
    setIsEmailValid(validateEmail(email));

    // O formulário é válido apenas se todos os campos estiverem preenchidos e válidos
    setIsFormValid(
      name.trim() !== "" &&
        lastName.trim() !== "" &&
        isEmailValid &&
        isLengthValid &&
        hasUppercase &&
        hasLowercase &&
        hasNumber &&
        hasSpecialChar &&
        termsAccepted &&
        ageConfirmed
    );
  }, [
    name,
    lastName,
    email,
    password,
    termsAccepted,
    ageConfirmed,
    isEmailValid,
    isLengthValid,
    hasUppercase,
    hasLowercase,
    hasNumber,
    hasSpecialChar,
  ]);

  type userData = {
    name: string;
    lastName: string;
    email: string;
    password: string;
    termsAccepted: boolean;
  }

  const saveToLocalStorage = (data: userData) => {
   const existingData = localStorage.getItem("userData");
   const users = existingData ? JSON.parse(existingData) : [];
   users.push(data);
   localStorage.setItem("userData", JSON.stringify(users));
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isFormValid) {
      saveToLocalStorage({
        name,
        lastName,
        email,
        password,
        termsAccepted,
      });
      alert("Conta criada com sucesso!");
      router.push("/");
    } else {
      alert("Por favor, preencha todos os campos corretamente.");
    }
  };

  return (
    <CreateAcountContainer>
      <h2>Crie uma conta <span>Lacrei.</span></h2>
      <p>Insira seus dados para criar uma nova conta:</p>

      <InputField>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Insira seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </InputField>

      <InputField>
        <label htmlFor="lastName">Sobrenome:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Insira seu sobrenome"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </InputField>

      <InputField>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Insira seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {!isEmailValid && email && (
          <span className="error">Por favor, insira um email válido.</span>
        )}
      </InputField>

      <InputField>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Insira sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </InputField>

      <div className="passwordValidations">
        <h3>A senha deve conter, no mínimo:</h3>
        <ul className="requirements">
          <li className={isLengthValid ? "valid" : "invalid"}>8 caracteres</li>
          <li className={hasUppercase ? "valid" : "invalid"}>Uma letra maiúscula</li>
          <li className={hasLowercase ? "valid" : "invalid"}>Uma letra minúscula</li>
          <li className={hasNumber ? "valid" : "invalid"}>Um número</li>
          <li className={hasSpecialChar ? "valid" : "invalid"}>
            Um caractere especial (@, $, !, %, *, ?, &)
          </li>
        </ul>
      </div>

      <div className="confirmArea">
        <label>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />{" "}
          Li e concordo com os <span>termos de uso</span>
        </label>
        <label>
          <input
            type="checkbox"
            id="age"
            name="age"
            checked={ageConfirmed}
            onChange={(e) => setAgeConfirmed(e.target.checked)}
          />{" "}
          Tenho <span>18 anos</span> ou mais
        </label>
      </div>

      <div className="buttons">
        <Button
          type="submit"
          variant="primary"
          onClick={handleSubmit}
          status={isFormValid}
        >
          Criar Conta
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => router.push("/")}
          status={true}
        >
          Voltar
        </Button>
      </div>
    </CreateAcountContainer>
  );
}
