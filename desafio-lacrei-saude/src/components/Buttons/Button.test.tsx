import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Buttons from "./Buttons";

describe("Buttons Component", () => {
    test("deve renderizar o botão com o texto correto", () => {
        render(
            <Buttons variant="primary" status={true}>
                Clique aqui
            </Buttons>
        );
        const buttonElement = screen.getByText("Clique aqui");
        expect(buttonElement).toBeInTheDocument();
    });

    test("deve aplicar a classe CSS correspondente ao variant", () => {
        render(
            <Buttons variant="secondary" status={true}>
                Clique aqui
            </Buttons>
        );
        const buttonElement = screen.getByText("Clique aqui");
        expect(buttonElement).toHaveClass("secondaryButton");
    });

    test("deve desabilitar o botão quando status for false", () => {
        render(
            <Buttons variant="primary" status={false}>
                Clique aqui
            </Buttons>
        );
        const buttonElement = screen.getByText("Clique aqui");
        expect(buttonElement).toBeDisabled();
    });

    test("deve habilitar o botão quando status for true", () => {
        render(
            <Buttons variant="primary" status={true}>
                Clique aqui
            </Buttons>
        );
        const buttonElement = screen.getByText("Clique aqui");
        expect(buttonElement).not.toBeDisabled();
    });

    test("deve chamar o evento onClick quando o botão é clicado", () => {
        const handleClick = jest.fn();
        render(
            <Buttons variant="primary" status={true} onClick={handleClick}>
                Clique aqui
            </Buttons>
        );
        const buttonElement = screen.getByText("Clique aqui");
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});