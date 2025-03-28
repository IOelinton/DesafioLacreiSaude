import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Buttons from "./Button";

describe("Componente Botão", () => {
  test("Verifica a renderização do botão com o texto correto", () => {
    render(
      <Buttons variant="primary" status={true}>
        Click Me
      </Buttons>
    );

    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("Verifica se o botão possui o comportamento de ativo caso tenha o status true", () => {
    render(
      <Buttons variant="primary" status={true}>
        Enabled Button
      </Buttons>
    );

    const buttonElement = screen.getByRole("button", { name: /enabled button/i });
    expect(buttonElement).toBeEnabled();
  });

  test("Verifica se o botão possui o comportamento de inativo caso tenha o status true", () => {
    render(
      <Buttons variant="primary" status={false}>
        Disabled Button
      </Buttons>
    );

    const buttonElement = screen.getByRole("button", { name: /disabled button/i });
    expect(buttonElement).toBeDisabled();
  });

  test("Verifica se a callback é chamada ao clickar", () => {
    const handleClick = jest.fn();

    render(
      <Buttons variant="primary" status={true} onClick={handleClick}>
        Clickable Button
      </Buttons>
    );

    const buttonElement = screen.getByRole("button", { name: /clickable button/i });
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("Verifica se o estilo do botão é alterado de acordo com a propriedade variant", () => {
    render(
      <Buttons variant="primary" status={true}>
        Primary Button
      </Buttons>
    );

    const buttonElement = screen.getByRole("button", { name: /primary button/i });
    expect(buttonElement).toHaveClass("primaryButton");
  });
});