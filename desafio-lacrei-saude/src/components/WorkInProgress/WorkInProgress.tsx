import React from 'react';
import Link from 'next/link';

import { Working } from './WorkinProgress.style';

const WorkInProgress = () => {
  return (
    <Working>
            <h1 className="error">503!</h1>
            <p>Oops! Esta página está em manutenção.</p>
            <p>
                Por favor, volte mais tarde para ver as mudanças.
            </p>
            <Link
                href="/home"
                className="linkRedirect"
            >
               Voltar para a página inicial
            </Link>
    </Working>
  );
};

export default WorkInProgress;