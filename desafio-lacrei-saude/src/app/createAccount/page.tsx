"use client"

import { useRouter } from "next/navigation";

import {CreateAcountContainer} from "./createAccount.style"
import { Buttons } from "@/components";
import { InputField } from "@/components/LoginForm/LoginForm.style";

import React from "react";

export default function PasswordReset() {
  const router = useRouter();
  return (
    <CreateAcountContainer>
      <h2>Crie um nova conta:</h2>
      <p>Insira seus dados para criar uma nova conta:</p>

      <InputField>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Insira seu nome"
          onChange={() => {}}
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
          onChange={() => {}}
          required
        />
      </InputField>

     <InputField className="inputField">
        <label htmlFor="email">E-mail:</label>
        <input
        type="email"
        id="email"
        name="email"
        placeholder="Insira seu email"
        onChange={() => {}}
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
          onChange={() => {}}
          required
        />
      </InputField>

      <div className="passwordValidarion">
        <h3>A senha deve conter, no mínimo:</h3>
        <input type="checkbox" id="uppercase" name="uppercase" disabled/> Maiúscula
        <input type="checkbox" id="lowercase" name="lowercase" disabled/> Minúscula
        <input type="checkbox" id="number" name="number" disabled/> Número
        <input type="checkbox" id="special" name="special" disabled/> Caractere especial
      </div>

      <div className="confirmArea">
        <input type="checkbox" id="confirm" name="confirm" disabled/> Li e concordo com os termos de uso
        <input type="checkbox" id="confirm" name="confirm" disabled/> Tenho 18 anos ou mais
      </div>

    <div className="buttons">
      <Buttons type="submit" variant="primary" onClick={() => {}} status={false}>
        Criar Conta
      </Buttons>
      <Buttons type="button"  variant="secondary" onClick={() => router.push('/home')} status={true}>
        Voltar
      </Buttons>
      </div>

    </CreateAcountContainer>
  );
}
