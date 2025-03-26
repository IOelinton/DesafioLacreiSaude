import React from "react";

import {Button} from "./Button.styles";

interface ButtonProps {
    variant: "primary" | "secondary";
    children: React.ReactNode;
}


const Buttons = ({variant, children}: ButtonProps) => {
    return (
        <Button className={`${variant}Button`} type="button">
            {children}
        </Button>
    );
};

export default Buttons;