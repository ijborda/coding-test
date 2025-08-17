# Express Typescript example: Build Node.js REST Api in Typescript

Node v22

Build Node.js Rest Api example using Express and Typescript that handles GET/POST/PUT/DELETE Http requests.

Base URL (local): http://localhost:7070/ (depending on the .env)

| Methods	| Urls	| Input | Actions
| -------- | ------- | ------- | ---- |
| GET | api/ | - | welcome
| GET | api/books/ | Query params: sort (true = asc by ID, false = descending by ID), limit (number) | get all Books
| GET | api/books/:id | - | get Book by id
| POST | api/books | Body: {id: number, title: string} | add new Book
| PUT | api/books/:id | Body: {title: string} | update Book by id
| DELETE | api/books/:id | - | remove Book by id