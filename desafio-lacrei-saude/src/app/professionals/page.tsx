"use client"

import React from "react";

import { Profissional } from "@/types/profissional";
import { profissionais } from "@/mocks/profissionais";

import { ProfiCard } from "@/components";
import { ProfileContent } from "./professional.style";

const Profile = () => {
  return (
    <ProfileContent>
      {
      profissionais.map((profissional:Profissional, index: number ) => (
        <ProfiCard key={index} name={profissional.name} specialty={profissional.specialty} email={profissional.email}/>
        ))
        }
    </ProfileContent>
  );
};

export default Profile;