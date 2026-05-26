# ✅ Teste Técnico – Analista de Testes

Testes automatizados do site [SauceDemo](https://www.saucedemo.com) utilizando **Cypress**.

---

## 📁 Estrutura do Projeto

```
saucedemo-cypress/
├── .github/
│   └── workflows/
│       └── cypress.yml          # Pipeline GitHub Actions
├── cypress/
│   ├── e2e/
│   │   ├── CT01-CT02-login.cy.js      # Testes de autenticação
│   │   ├── CT03-CT04-carrinho.cy.js   # Testes de carrinho
│   │   └── CT05-checkout.cy.js        # Teste de checkout completo
│   └── support/
│       ├── commands.js          # Comandos customizados
│       └── e2e.js               # Importações globais
├── cypress.config.js            # Configurações do Cypress
├── package.json
└── README.md
```

---

## 🧪 Casos de Teste

| ID    | Cenário                                      |
|-------|----------------------------------------------|
| CT01  | Login com credenciais válidas                |
| CT02  | Login com credenciais inválidas              |
| CT03  | Adicionar produto ao carrinho                |
| CT04  | Produto aparece listado no carrinho          |
| CT05  | Fluxo completo de checkout                   |

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js 18+
- npm

### Instalação

```bash
npm install
```

### Abrir interface do Cypress (modo visual)

```bash
npm run cy:open
```

### Executar todos os testes em modo headless

```bash
npm run cy:run
```

---

## ⚙️ Pipeline CI/CD

Os testes rodam automaticamente via **GitHub Actions** a cada `push` ou `pull request` nas branches `main` e `develop`.

Os artefatos gerados (vídeos e screenshots) ficam disponíveis na aba **Actions** do GitHub por 7 dias.
