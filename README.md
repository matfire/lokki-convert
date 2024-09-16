# Convert

## Stack

### Front

- react
- tanstack-query
- tailwindcss
- headlessui

### Back

- AdonisJS
- Lucid Orm
- SQLite

## Running Convert

### Front

- Install dependencies
```bash
pnpm install 
```
- Run the application
```bash
pnpm dev
```

### Back

> [!IMPORTANT] 
> Get an api key [here](https://currencyapi.com/) to use the currency conversion service

- Install dependencies
```bash
pnpm install
```
- Copy environment file
```bash
cp .env.example .env
```
- Generate application key
```bash
node ace generate:key
```
- Run Migrations
```bash
node ace migration:run
```
- Seed database
```bash
node ace db:seed
```
- Add the following environment variables:

  - `CURRENCY_API_KEY`: the api key you got earlier
- Run the application
```bash
pnpm dev
```