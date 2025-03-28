import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom";

describe("Footer Component", () => {
  it("Verifica se o logo é renderizado", () => {
    render(<Footer />);
    const logo = screen.getByAltText("Logo Lacrei Saúde");
    expect(logo).toBeInTheDocument();
  });

  it("Verifica se o copyright esta presente", () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/© 2025 Lacrei Saúde. Todos os direitos reservados./i);
    expect(copyrightText).toBeInTheDocument();
  });

  it("Verifica se todos os links são renderizados corretamente", () => {
    render(<Footer />);
    const facebookLink = screen.getByAltText("Facebook");
    const instagramLink = screen.getByAltText("Instagram");
    const linkedinLink = screen.getByAltText("Linkedin");

    expect(facebookLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
  });

  it("Verifica se todos os links possuem href corretamente", () => {
    render(<Footer />);
    const facebookLink = screen.getByRole("link", { name: /facebook/i });
    const instagramLink = screen.getByRole("link", { name: /instagram/i });
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

    expect(facebookLink).toHaveAttribute("href", "https://www.facebook.com/privacy/consent/inline/?flow=acv_fb_consent_debut_blocking&source=fb_1st_time_3pd_consent_flow");
    expect(instagramLink).toHaveAttribute("href", "https://www.instagram.com/lacreisaude/");
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/company/lacrei-saude/");
  });
});