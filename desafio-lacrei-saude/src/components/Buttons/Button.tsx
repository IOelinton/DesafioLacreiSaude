import React from "react";

import { Button } from "./Button.styles";

interface ButtonProps {
    type?: "button" | "submit" | "reset";
    variant: "primary" | "secondary";
    children: React.ReactNode;
    status: boolean; // Define se o botão está ativo ou desativado
    onClick: () => void;
}

const Buttons = ({ type="button", variant, children, status, onClick }: ButtonProps) => {
    return (
        <Button
            type={type}
            className={`${variant}Button`}
            onClick={onClick}
            disabled={!status} // Desabilita o botão se status for false
        >
            {children}
        </Button>
    );
};

export default Buttons;