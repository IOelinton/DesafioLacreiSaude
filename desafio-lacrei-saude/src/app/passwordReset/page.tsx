"use client";

import { InputField } from "@/components/LoginForm/LoginForm.style";
import { Buttons } from "@/components";

export default function PasswordReset() {
  return (
    <>
      <h2>Redefina sua senha</h2>
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
      <Buttons  variant="primary">
        Enviar Link
      </Buttons>
      <Buttons  variant="secondary">
        Voltar
      </Buttons>
    </>
  );
}
