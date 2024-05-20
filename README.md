# Projeto de Busca de Endereços

Este é um projeto de exemplo que permite buscar, cadastrar, atualizar e deletar endereços. A aplicação é construída com Node.js no backend, utilizando Express e PostgreSQL, e React no frontend.

## Estrutura do Projeto

### Backend

- app.js: Ponto de entrada da aplicação backend.
- routes/addresses.js: Define as rotas relacionadas aos endereços.
- controllers/addressController.js: Contém a lógica para manipulação dos dados de endereços.
- models/address.js: Define o modelo de dados para o endereço.
- config/database.js: Configura a conexão com o banco de dados PostgreSQL.

### Frontend

- src/App.js: Componente principal do aplicativo React.
- src/components/AddressList.js: Componente que exibe a lista de endereços cadastrados e permite a exclusão e atualização.
- src/components/UpdateAddressForm.js: Componente que exibe o formulário para atualizar um endereço.
- src/components/AddressPage.js: Componente que exibe um formulário para buscar um endereço pelo CEP e permite cadastrar um novo endereço se o CEP não for encontrado.
- src/components/AddressList.css: Arquivo de estilos para o componente AddressList.
- src/components/AddressPage.css: Arquivo de estilos para o componente AddressPage.

## Instalação

### Pré-requisitos

- Node.js
- PostgreSQL

### Backend

1. Clone o repositório:
   ```bash
   git clone git@github.com:HeilKgb/buscador-de-enderecos.git
   cd projeto-busca-enderecos/backend

Uso
Funcionalidades
Buscar endereço pelo CEP: Na página principal, você pode informar um CEP para buscar os detalhes do endereço. Se o endereço não for encontrado, uma opção para cadastrar o endereço será exibida.
Cadastrar novo endereço: Se o CEP informado não existir, você pode cadastrar um novo endereço manualmente.
Listar endereços cadastrados: Na página de listagem de endereços, você pode ver todos os endereços cadastrados no sistema.
Atualizar endereço: Na página de listagem de endereços, você pode clicar no checkbox de atualização para exibir o formulário de atualização com os detalhes do endereço.
Deletar endereço: Na página de listagem de endereços, você pode clicar no checkbox de exclusão para deletar um endereço.

# Endpoints da API

### GET /addresses: Retorna todos os endereços cadastrados.
### GET /addresses/:id: Retorna um endereço específico pelo ID.
### POST /addresses: Cadastra um novo endereço.
### PUT /addresses/:id: Atualiza um endereço existente pelo ID.
### DELETE /addresses/:id: Deleta um endereço pelo ID.

# Estrutura do Banco de Dados
## Tabela addresses

| Coluna    | Tipo          | Descrição                                    |
|-----------|---------------|----------------------------------------------|
| id        | SERIAL        | Identificador único                          |
| userName  | VARCHAR(255)  | Nome do usuário                              |
| street    | VARCHAR(255)  | Nome da rua                                  |
| city      | VARCHAR(255)  | Nome da cidade                               |
| state     | VARCHAR(255)  | Nome do estado                               |
| country   | VARCHAR(255)  | Nome do país                                 |
| nickname  | VARCHAR(255)  | Apelido para o endereço (opcional)          |

