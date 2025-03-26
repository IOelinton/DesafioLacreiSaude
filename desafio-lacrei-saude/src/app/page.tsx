"use client";

import {Header, Footer, LoginForm} from "@/components";
import { MainContent } from "./page.style";
export default function Home() {
  return (
    <MainContent>
      <Header/>
      <LoginForm/>
      <Footer/>
    </MainContent>
  );
}
