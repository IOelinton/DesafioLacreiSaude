import React from "react";
import Image from "next/image";

import {HeaderContainer} from "./Header.styles";

import { Buttons } from "@/components";

import Logosigla from "../../../public/logos/logo-ls.ccbc0d80.svg";
import LogoLacrei from "../../../public/logos/logo-lacrei-saude.a3375403.svg";

const Header = () => {
  return (
    <HeaderContainer>
        <div className="logo-area">
            <Image src={Logosigla} alt="LS" className="logoSigla"/>
            <Image src={LogoLacrei} alt="lacrei saúde" />
        </div>
        <Buttons variant="secondary">Entrar</Buttons>
    </HeaderContainer>
  );
};

export default Header;