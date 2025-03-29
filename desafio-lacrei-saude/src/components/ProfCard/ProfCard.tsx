import React from "react";
import { ProfiCard } from "./ProfCard.Style";

import { Profissional } from "@/types/profissional";

const ProfCard = ({name, email,  specialty}: Profissional) => {
    return (
        <ProfiCard>
            <h2>{`${name}`}</h2>
            <h3>Especialidade: <span>{`${specialty}`}</span></h3>
            <h3>Email: <span>{`${email}`}</span></h3>
        </ProfiCard>
    );
};

export default ProfCard;