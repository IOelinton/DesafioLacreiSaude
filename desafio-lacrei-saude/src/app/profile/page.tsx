"use client";

import React, { useState, useEffect } from "react";

const PerfilPage = () => {
  const [userInfo, setUserInfo] = useState<{ name: string; email: string } | null>(null);

  const getUserFromLocalStorage = (email: string) => {
    // Obtém os dados salvos no localStorage
    const existingData = localStorage.getItem("userData");
  
    if (!existingData) {
      console.log("Nenhum dado encontrado no localStorage.");
      return null; // Retorna null se não houver dados
    }

    // Converte os dados de JSON para um array de objetos
    const users = JSON.parse(existingData);

    // Procura o usuário pelo e-mail
    const user = users.find((user: { email: string }) => user.email === email);

    if (user) {
      console.log("Usuário encontrado:", user);
      return user; // Retorna o objeto do usuário encontrado
    } else {
      console.log("Usuário não encontrado.");
      return null; // Retorna null se o usuário não for encontrado
    }
  };


  useEffect(() => {
    // Substitua pelo e-mail do usuário autenticado
    const emailToSearch = "email@example.com";

    const user = getUserFromLocalStorage(emailToSearch);
    setUserInfo(user); // Atualiza o estado com os dados do usuário
  }, []);

  return (
    <div>
      <h1>Perfil do Usuário</h1>

      {/* Renderiza os dados do usuário, se encontrados */}
      {userInfo ? (
        <div>
          <p><strong>Nome:</strong> {userInfo.name}</p>
          <p><strong>E-mail:</strong> {userInfo.email}</p>
        </div>
      ) : (
        <p>Nenhum usuário encontrado.</p>
      )}
    </div>
  );
};

export default PerfilPage;
