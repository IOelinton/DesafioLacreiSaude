import React from "react";
import { render, screen } from "@testing-library/react";
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

});