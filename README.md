# Express Js Cars Api
Basic cars api using Express Js - Typescript

## Installation

```
npm install
```

```
npm start
```

## Endpoints

## Auth Endpoints


| Method | URI                | Body | Returns        | Result |
| ------ | ------------------ | ------ | -------------- | ------ |
| `POST`  | `/api/auth/signup` |   `{email: string, firstName: string, lastName?: string}`    | `{user:User , emailLink: string}` |   Successful Signup and will get password in email (use emailLink to open email)   |
| `POST`  | `/api/auth/login` |   `{email: string, password: string}`    | `{token: string}` |   login successful   |


## Categories Endpoints


| Method | URI                | Body/Query | Returns        | Result |
| ------ | ------------------ | ------ | -------------- | ------ |
| `POST`  | `/api/categories` |   `{name: string}`    | Category |  |
| `GET`  | `/api/categories` |   `{limit?: number, name:gt: string}`    | Category[] |   |
| `GET`  | `/api/categories/:categoryId` |     | Category |   |
| `PUT`  | `/api/categories/:categoryId` |   `{name?: string}`  | Category |   |
| `DELETE`  | `/api/categories/:categoryId` |  |    |


## Cars Endpoints


| Method | URI                | Body/Query | Returns        | Result |
| ------ | ------------------ | ------ | -------------- | ------ |
| `POST`  | `/api/cars` |   Car    | Car |  |
| `GET`  | `/api/cars` |   `{limit?: number, createdAt:lt: string}`    | Car[] |   |
| `GET`  | `/api/cars/:carId` |     | Car |   |
| `PUT`  | `/api/cars/:carId` |   Partial{Car}  | Car |   |
| `DELETE`  | `/api/cars/:carId` |  |    |