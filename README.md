# CorpFlow

Sistema de Gerenciamento de Fluxos de Trabalho.

## Sobre o Projeto

Este projeto foi desenvolvido como trabalho A3 para a disciplina de Teoria da Computação e Compiladores da faculdade IBMR.

### Prints da aplicação em funcionamento:
<img width="977" alt="Screenshot 2025-05-24 at 12 16 38" src="https://github.com/user-attachments/assets/45ded549-fe1d-4fb9-87c1-7089afd47cea" />

### Equipe
- Lorena Assis de Souza da Silva
- Mauricio de Oliveira Pereira Junior
- Wallace Batista de Souza
- Jorge William Cardoso Furtado
- Thaise Soares Freire

🚀 [Ver Demo em Produção](https://mauriciopjunior.github.io/CorpFlow/)

## Tecnologias

- *Frontend*: 
  - HTML5
  - TailwindCSS para estilização
  - JavaScript (Vanilla)
  - AlpineJS para interatividade

- *Backend*: 
  - Node.js
  - Express.js para API REST
  - Mongoose para modelagem de dados

- *Banco de Dados*: 
  - MongoDB

## Pré-requisitos

- Node.js (versão 12 ou superior)
- MongoDB (versão 4 ou superior)
- Navegador web moderno

## Como Rodar Localmente

1. Clone este repositório:
bash
git clone https://github.com/seu-usuario/corpflow.git
cd corpflow


2. Instale as dependências e inicie o servidor:
bash
npm install
node server.js


3. Certifique-se que o MongoDB está rodando localmente na porta 27017

4. Abra o arquivo index.html no seu navegador

## Funcionalidades

- *Gestão de Fluxos*
  - Criar e salvar fluxos de trabalho
  - Buscar e listar fluxos cadastrados
  - Interface visual para montagem de fluxos
  
- *Tipos de Blocos*
  - Ação: para tarefas e atividades
  - Condição: para validações
  - Decisão: para ramificações no fluxo

- *Validações*
  - Verificação de integridade do fluxo
  - Validação de campos obrigatórios
  - Checagem de regras de negócio

## Estrutura do Projeto


/
├── index.html      # Interface principal
├── api.js         # Funções de comunicação com API
├── buscaFluxo.js  # Funcionalidades de listagem
└── server.js      # Servidor Express e modelo de dados


## API Endpoints

- GET /api/fluxos - Lista todos os fluxos
- POST /api/fluxos - Cria novo fluxo

## Contribuição

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)
3. Commit suas mudanças (git commit -m 'Add some AmazingFeature')
4. Push para a branch (git push origin feature/AmazingFeature)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.



