"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { InputField } from "@/components/LoginForm/LoginForm.style";
import { Buttons } from "@/components";
import { PasswordResetContainer } from "./passwordReset.style";

export default function PasswordReset() {
  const router = useRouter();

  const [email, setEmail] = useState("");
const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
  setEmail(e.target.value);
  }

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <PasswordResetContainer>
    <h2>Redefina sua senha</h2>
    <InputField className="inputField">
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
    <div className="buttons">
      <Buttons variant="primary" onClick={() => alert(`Link enviado para: ${email}`)} status={isEmailValid(email)}>
        Enviar Link
      </Buttons>
      <Buttons variant="secondary" onClick={() => router.push("/home")} status={true}>
        Voltar
      </Buttons>
    </div>
    </PasswordResetContainer>
  );
}
