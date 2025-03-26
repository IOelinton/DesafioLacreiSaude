"use client";

import { GlobalStyle } from "@/styles/GlobalStyles";
import { Geist, Geist_Mono } from "next/font/google";

import {Header, Footer} from "@/components";
import { MainContent } from "./page.style";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GlobalStyle/>
        <MainContent>
          <Header/>
          {children}
          <Footer/>
        </MainContent>
      </body>
    </html>
  );
}
