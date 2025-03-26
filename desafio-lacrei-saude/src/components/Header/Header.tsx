import React from "react";
import Image from "next/image";
import Link from "next/link";

import {HeaderContainer} from "./Header.styles";

import { Buttons } from "@/components";

import Logosigla from "../../../public/logos/logo-ls.ccbc0d80.svg";
import LogoLacrei from "../../../public/logos/logo-lacrei-saude.a3375403.svg";

const Header = () => {
  return (
    <HeaderContainer>
        <div className="logo-area">
            <Link href="/home"><Image src={Logosigla} alt="LS" className="logoSigla"/></Link>
            <Link href="/home"><Image src={LogoLacrei} alt="lacrei saúde" /></Link>
        </div>
        <Buttons variant="secondary" onClick={() => alert("clicou em ajuda")}>Ajuda</Buttons>
    </HeaderContainer>
  );
};

export default Header;