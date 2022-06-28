# 📣 library_management_system_be 📣

### Api Postman collection

This Repository include postman collection on root directory and fell free to test api. Thanks

## Installation

clone repository

```console
$ git clone https://github.com/ARKAR-PHYO/library_management_system_be.git
```

```console
$ cd library_management_system_be/server
```

Install dependencies

```console
$ yarn
```

---

### Setup database with Prisma

Copy .env.example

```console
$ cp .env.example .env
```

Change

```mysql
mysql://db_username:db_password@localhost:3306/db
```

complete the following require fields

```mysql
db_username, db_password and db
```

Prisma migrate

```console
$ yarn prisma migrate dev
```

Database seeding

```console
$ yarn prisma db seed
```

---

### Run development

Watch clear Javascript codes

```console
$ yarn run watch
```

Run development

```console
$ yarn run dev
```
