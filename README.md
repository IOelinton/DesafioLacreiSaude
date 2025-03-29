# 📱 Desafio Lacrei Saúde

> [!CAUTION]
> Crie uma conta antes de testar a aplicação.

## 🌟 Sobre o Projeto
Olá! Bem-vindo ao **Desafio Lacrei Saúde**! Este projeto é um desafio proposto pela Lacrei Saúde, uma empresa de saúde digital.

### 🛠️ O que usamos para fazer?
- **React** - Para criar a interface do usuário.
- **Next.js** - Para renderização do lado do servidor e geração de sites estáticos.
- **TypeScript** - Para adicionar tipagem estática ao código e melhorar a experiência de desenvolvimento.
- **Styled-Components** - Para estilização dos componentes utilizando CSS-in-JS.
- **Jest** - Para testes automatizados e garantia de qualidade.
- **React Testing Library** - Para testes focados na interação do usuário.

### 🛠️ O que foi feito:
- Foram criadas 5 páginas, sendo 2 principais como solicitado no desafio e 3 adicionais para testes de login e reset de senha, ambas sem implementação complexa.
- Página de login e de cadastro totalmente funcionais.
- Páginas de usuários, profissionais e de reset de senha apenas visuais, para navegação usando links e botões.
- Header e footer em todas as páginas de forma dinâmica.

### Funcionalidades Principais:
- **Login e Cadastro**: Implementação de tela de login e cadastro de usuário.
- Navegação intuitiva e responsiva.
- Componentes reutilizáveis para consistência visual.
- Testes unitários para garantir a qualidade do código.

### Pontos de melhorias:
- Componentização do input.
- Adicionar feedback visual de erro próximo aos campos dos formulários.
- Criação da página de perfil para visualização de dados do usuário.
- Reduzir o número de redundâncias no código CSS.
- Adicionar botão de revelar senha nos inputs de senha.
- Adicionar botão de de logout.


## 🚀 Como fazer funcionar no seu computador

### Antes de começar
Você vai precisar ter instalado:
- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Git](https://git-scm.com/)

### Passo a passo
1. Primeiro, copie o projeto para seu computador:
```bash
git clone git@github.com:IOelinton/DesafioLacreiSaude.git
```

2. Entre na pasta do projeto:
```bash
cd DesafioLacreiSaude/desafio-lacrei-saude
```

3. Instale o que o projeto precisa para funcionar:
```bash
npm install
# ou
yarn install
```

4. Agora é só iniciar:
```bash
npm run dev
# ou
yarn dev
```

5. Para navegar na aplicação, abra seu navegador e acesse `http://localhost:3000`.

    5.1 Crie uma conta de usuário para poder acessar a aplicação.

    5.2 Faça login com as credenciais criadas.

## ✅ Testes e Aprovação
Os testes foram implementados utilizando **Jest** e **React Testing Library**. Para rodar os testes:
```bash
npm run test
# ou
yarn run test
```
Para ver o relatório de cobertura de testes, execute:
```bash
npm run test:coverage
# ou
yarn run test:coverage
```

## ✅ Testes Aprovados
Prints dos testes aprovados:
![coverage testes](/desafio-lacrei-saude/assets/testCoverage.png)

Todos os testes dos componentes principais, como `Header`, `Footer` e `Buttons`, foram aprovados com sucesso.

## ✅ Build and Deploy
O deploy da aplicação foi realizado com sucesso utilizando a plataforma **Vercel**. Você pode acessar o projeto online através do link:

- [LacreiSaúde](https://desafio-lacrei-saude-ecru.vercel.app/)

Para realizar o deploy da aplicação em seu ambiente Vercel, basta executar um dos comandos abaixo e completar os passos de configuração de conta:

```bash
# Deploy em preview
npm run deploy

# Deploy em produção
npm run deploy:prod
```

Também é possível realizar o deploy da aplicação em seu ambiente Vercel através do link abaixo:
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FOelinton%2FDesafioLacreiSaude&project-name=DesafioLacreiSaude&repository-name=DesafioLacreiSaude)

## 📝 Informações Extras

### Dicas Úteis
- Certifique-se de que todas as dependências estão corretamente instaladas antes de rodar o projeto.
- Para problemas de compatibilidade, utilize a versão recomendada do Node.js.

## 📫 Contato
Oelinton Araujo - [oelinton.dearaujo@gmail.com] - Whatsapp: (54) 99702-9318

Link do projeto: [https://github.com/IOelinton/DesafioLacreiSaude](https://github.com/IOelinton/DesafioLacreiSaude)

---