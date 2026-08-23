# App Backend

API REST desenvolvida com **NestJS**, **TypeScript**, **Prisma ORM** e **SQLite**.

## Como usar

Clone o repositório:

```bash
git clone https://github.com/WesleyTriches/app-backend.git
cd app-backend
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` na raiz:

```env
DATABASE_URL="file:./dev.db"
```

Configure o banco:

```bash
npx prisma migrate dev
npx prisma generate
```

Inicie o projeto:

```bash
npm run start:dev
```

A API estará disponível em:

```text
http://localhost:3000/api
```

## Rotas

```text
/api/users
/api/profiles
/api/plans
```

Exemplo de CRUD de planos:

```text
POST    /api/plans
GET     /api/plans
GET     /api/plans/:id
PUT     /api/plans/:id
DELETE  /api/plans/:id
```

## Tecnologias

* NestJS
* TypeScript
* Prisma ORM
* SQLite
