"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {HeaderContainer} from "./Header.styles";

import { Buttons } from "@/components";

import Logosigla from "../../../public/logos/logo-ls.ccbc0d80.svg";
import LogoLacrei from "../../../public/logos/logo-lacrei-saude.a3375403.svg";

const Header = () => {
  const router = useRouter();
  return (
    <HeaderContainer>
        <div className="logo-area">
            <Link href="/"><Image src={Logosigla} alt="LS" className="logoSigla"/></Link>
            <Link href="/"><Image src={LogoLacrei} alt="lacrei saúde" /></Link>
        </div>
        <Buttons variant="secondary" onClick={() => router.push('/professionals')} status={true}>Profissionais</Buttons>
    </HeaderContainer>
  );
};

export default Header;