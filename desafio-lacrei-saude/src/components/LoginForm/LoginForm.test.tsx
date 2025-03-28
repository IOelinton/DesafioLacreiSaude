import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";
import "@testing-library/jest-dom";

// Mock do useRouter
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("LoginForm Component", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
    localStorage.clear();
  });

  it("deve renderizar o formulário de login corretamente", () => {
    render(<LoginForm />);

    expect(screen.getByLabelText(/Insira seu email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha:/i)).toBeInTheDocument();
    expect(screen.getByText(/Entrar/i)).toBeInTheDocument();
    expect(screen.getByText(/Criar conta/i)).toBeInTheDocument();
    expect(screen.getByText(/Esqueceu a senha\?/i)).toBeInTheDocument();
  });

  it("deve habilitar o botão 'Entrar' quando email e senha são válidos", () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText(/Insira seu email/i);
    const passwordInput = screen.getByLabelText(/Senha:/i);
    const enterButton = screen.getByText(/Entrar/i);

    fireEvent.change(emailInput, { target: { value: "teste@teste.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    expect(enterButton).not.toBeDisabled();
  });

  it("deve desabilitar o botão 'Entrar' quando email ou senha são inválidos", () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText(/Insira seu email/i);
    const passwordInput = screen.getByLabelText(/Senha:/i);
    const enterButton = screen.getByText(/Entrar/i);

    fireEvent.change(emailInput, { target: { value: "email-invalido" } });
    fireEvent.change(passwordInput, { target: { value: "" } });

    expect(enterButton).toBeDisabled();
  });

  it("deve redirecionar para /profile quando email e senha estão corretos", () => {
    localStorage.setItem(
      "userData",
      JSON.stringify([
        { email: "teste@teste.com", password: "123456", name: "Test", lastName: "User" },
      ])
    );

    render(<LoginForm />);

    const emailInput = screen.getByLabelText(/Insira seu email/i);
    const passwordInput = screen.getByLabelText(/Senha:/i);
    const enterButton = screen.getByText(/Entrar/i);

    fireEvent.change(emailInput, { target: { value: "teste@teste.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    fireEvent.click(enterButton);

    expect(mockPush).toHaveBeenCalledWith("/profile");
  });

});