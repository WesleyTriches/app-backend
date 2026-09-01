# App Backend

API REST desenvolvida com **NestJS**, **TypeScript**, **Prisma ORM** e **SQLite**.

## Como executar

```bash
git clone https://github.com/WesleyTriches/app-backend.git
cd app-backend
npm install
```

Crie o arquivo `.env`:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="sua_chave_secreta"
```

Configure o banco:

```bash
npx prisma migrate dev
npx prisma generate
```

Inicie a aplicação:

```bash
npm run start:dev
```

A API estará disponível em:

```text
http://localhost:3000/api
```

## Rotas

### Autenticação

| Método | Rota                 | Descrição           |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Cadastra um usuário |
| POST   | `/api/auth/login`    | Realiza login       |

As rotas de autenticação são públicas.

Após o login, o token retornado deve ser utilizado nas rotas protegidas:

```http
Authorization: Bearer <token>
```

### Usuários

| Método | Rota             | Descrição           |
| ------ | ---------------- | ------------------- |
| POST   | `/api/users`     | Cadastra um usuário |
| GET    | `/api/users`     | Lista os usuários   |
| PUT    | `/api/users/:id` | Atualiza um usuário |
| DELETE | `/api/users/:id` | Remove um usuário   |

### Planos

| Método | Rota             | Descrição         |
| ------ | ---------------- | ----------------- |
| POST   | `/api/plans`     | Cadastra um plano |
| GET    | `/api/plans`     | Lista os planos   |
| GET    | `/api/plans/:id` | Busca um plano    |
| PUT    | `/api/plans/:id` | Atualiza um plano |
| DELETE | `/api/plans/:id` | Remove um plano   |

## Tecnologias

* NestJS
* TypeScript
* Prisma ORM
* SQLite
* JWT
* bcrypt
