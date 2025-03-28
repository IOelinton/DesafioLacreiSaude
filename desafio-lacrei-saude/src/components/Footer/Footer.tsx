import React from "react";
import Image from "next/image";
import Link from "next/link";

import logoCompleta from "../../../public/logos/logo-lacrei-saude-2.fe01ece5.svg";
import  Facebook  from "../../../public/icons/facebook.c4e93695.svg";
import  Instagram  from "../../../public/icons/instagram.6b226165.svg";
import  Linkedin  from "../../../public/icons/linkedin.a30519e7.svg";


import {FooterContainer} from "./Footer.styles"

const Footer = () => {
    return (
        <FooterContainer>
            <Link href="/"><Image src={logoCompleta} alt="Logo Lacrei Saúde" className="logoFooter" /></Link>
            <div className="footer-right">
                <p>© 2025 Lacrei Saúde. Todos os direitos reservados.</p>
                <div className="socias">
                    <a href="https://www.facebook.com/privacy/consent/inline/?flow=acv_fb_consent_debut_blocking&source=fb_1st_time_3pd_consent_flow">
                    <Image src={Facebook} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/lacreisaude/"><Image src={Instagram} alt="Instagram" /></a>
                    <a href="https://www.linkedin.com/company/lacrei-saude/"><Image src={Linkedin} alt="Linkedin" /></a>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;