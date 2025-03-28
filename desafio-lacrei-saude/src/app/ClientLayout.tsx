// app/ClientLayout.tsx
'use client'

import { GlobalStyle } from "@/styles/GlobalStyles";
import {Header, Footer} from "@/components";
import { MainContent } from "./page.style";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <GlobalStyle/>
      <MainContent>
        <Header/>
        {children}
        <Footer/>
      </MainContent>
    </>
  );
}
