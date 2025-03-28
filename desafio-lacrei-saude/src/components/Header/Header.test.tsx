import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";
import { useRouter } from "next/navigation";

// Mock do hook useRouter
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Header Component", () => {
  it("Verifica se ambos os logos são renderizados", () => {
    render(<Header />);
    const logoSigla = screen.getByAltText("LS");
    const logoLacrei = screen.getByAltText("lacrei saúde");

    expect(logoSigla).toBeInTheDocument();
    expect(logoLacrei).toBeInTheDocument();
  });

  it("Verifica se o botao de redirecionamento para página de profissionais está presente", () => {
    render(<Header />);
    const button = screen.getByRole("button", { name: /profissionais/i });

    expect(button).toBeInTheDocument();
  });

  it("Verifica se ao clicar no botao o redirecionamento acontece", () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

    render(<Header />);
    const button = screen.getByRole("button", { name: /profissionais/i });

    fireEvent.click(button);

    expect(mockPush).toHaveBeenCalledWith("/professionals");
  });
});