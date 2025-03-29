import React from "react";

import { StyledButton } from "./Button.styles";

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    variant: "primary" | "secondary";
    children: React.ReactNode;
    disabled?: boolean; // Define se o botão está ativo ou desativado
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ type="button", variant, children, disabled, onClick }: ButtonProps) => {
    return (
        <StyledButton
            type={type}
            className={`${variant}Button`}
            onClick={onClick}
            disabled={disabled} // Desabilita o botão se status for false
        >
            {children}
        </StyledButton>
    );
};

export default Button;