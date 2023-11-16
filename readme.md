# Basic Express

Basic express.js project with basic routes:
* Express
* Joi
* sequelize
* mySql

---

## URL

_Server_
```
http://localhost:3000
```
---


## Global Response

_Response (500 - Internal Server Error)_
```
{
  "message": "Internal Server Error"
}
```
---


## RESTful endpoints


### GET /pokemons

> Get all pokemons

_Request Header_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "id": 1,
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/",
        "categoryId": 1,
        "createdAt": "2023-11-15T07:46:09.000Z",
        "updatedAt": "2023-11-15T07:46:09.000Z"
    },
    {
        "id": 2,
        "name": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon/2/",
        "categoryId": 3,
        "createdAt": "2023-11-15T07:46:09.000Z",
        "updatedAt": "2023-11-15T07:46:09.000Z"
    },
]
```

---

### GET /pokemons/:id

 > Get pokemon by id

_Request Params_

```
/<pokemon_id>/

```

_Request Header_

```
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "id": 1,
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon/1/",
    "categoryId": 1,
    "createdAt": "2023-11-15T07:46:09.000Z",
    "updatedAt": "2023-11-15T07:46:09.000Z",
    "Category": {
        "name": "omnivora"
    }
}
```

_Response (404)_
```
{
    "status": "Error",
    "message": "Pokemon tidak ditemukan"
}
```

---

### PUT /pokemons/:id

 > Edit Category pokemon by pokemon_id

_Request Params_

```
/<pokemon_id>/

```

_Request Header_

```
not needed
```

_Request Body_
```
{
  "categoryId" : <categoryId>,
}
```

_Response (200)_
```
{
    "message": "Category pokemon berhasil di ubah"
}
```

_Response (404)_
```
{
    "status": "Error",
    "message": "Pokemon tidak ditemukan"
}
```
```
{
    "status": "Error",
    "message": "Category tidak ditemukan"
}
```

---

### GET /pokemons/category/:categoryId

> Get Pokemon by Category

_Request Params_

```
/<pokemon_categoryId>/

```

_Request Header_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "total": 7,
    "pokemons": [
        {
            "id": 7,
            "name": "squirtle",
            "url": "https://pokeapi.co/api/v2/pokemon/7/",
            "categoryId": 1,
            "createdAt": "2023-11-15T14:54:29.000Z",
            "updatedAt": "2023-11-15T14:54:29.000Z",
            "Category": {
                "id": 1,
                "name": "omnivora"
            }
        },
        {
            "id": 8,
            "name": "wartortle",
            "url": "https://pokeapi.co/api/v2/pokemon/8/",
            "categoryId": 1,
            "createdAt": "2023-11-15T14:54:29.000Z",
            "updatedAt": "2023-11-15T14:54:29.000Z",
            "Category": {
                "id": 1,
                "name": "omnivora"
            }
        },
        {
            "id": 9,
            "name": "blastoise",
            "url": "https://pokeapi.co/api/v2/pokemon/9/",
            "categoryId": 1,
            "createdAt": "2023-11-15T14:54:29.000Z",
            "updatedAt": "2023-11-15T14:54:29.000Z",
            "Category": {
                "id": 1,
                "name": "omnivora"
            }
        },
        {
            "id": 13,
            "name": "weedle",
            "url": "https://pokeapi.co/api/v2/pokemon/13/",
            "categoryId": 1,
            "createdAt": "2023-11-15T14:54:29.000Z",
            "updatedAt": "2023-11-15T14:54:29.000Z",
            "Category": {
                "id": 1,
                "name": "omnivora"
            }
        },
        {
            "id": 14,
            "name": "kakuna",
            "url": "https://pokeapi.co/api/v2/pokemon/14/",
            "categoryId": 1,
            "createdAt": "2023-11-15T14:54:29.000Z",
            "updatedAt": "2023-11-15T14:54:29.000Z",
            "Category": {
                "id": 1,
                "name": "omnivora"
            }
        },
        {
            "id": 15,
            "name": "beedrill",
            "url": "https://pokeapi.co/api/v2/pokemon/15/",
            "categoryId": 1,
            "createdAt": "2023-11-15T14:54:29.000Z",
            "updatedAt": "2023-11-15T14:54:29.000Z",
            "Category": {
                "id": 1,
                "name": "omnivora"
            }
        },
        {
            "id": 18,
            "name": "pidgeot",
            "url": "https://pokeapi.co/api/v2/pokemon/18/",
            "categoryId": 1,
            "createdAt": "2023-11-15T14:54:29.000Z",
            "updatedAt": "2023-11-15T14:54:29.000Z",
            "Category": {
                "id": 1,
                "name": "omnivora"
            }
        }
    ]
}

```

_Response (404 - Validation Error)_
```
{
    "status": "Error",
    "message": "Category tidak ditemukan"
}
```

---


### GET /users

 > Get all Users

_Request Header_

```
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```
[
    {
        "id": 1,
        "name": "uya",
        "gender": "pria",
        "createdAt": "2023-11-15T07:46:09.000Z",
        "updatedAt": "2023-11-15T13:11:28.000Z"
    },
    {
        "id": 2,
        "name": "kuya",
        "gender": "pria",
        "createdAt": "2023-11-15T07:46:09.000Z",
        "updatedAt": "2023-11-15T07:46:09.000Z"
    },
]
```

---
### GET /users/:userId

> Get user by id

_Request Params_

```
/<user_id>/

```

_Request Header_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "username": "uya",
    "gender": "pria",
    "pokemons": [
        {
            "id": 1,
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/",
            "Category": {
                "name": "omnivora"
            }
        },
        {
            "id": 2,
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/",
            "Category": {
                "name": "omnivora"
            }
        },
        {
            "id": 3,
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon/3/",
            "Category": {
                "name": "omnivora"
            }
        }
    ]
}
```

_Response (404)_
```
{
    "status": "Error",
    "message": "User tidak ditemukan"
}
```

---

### POST /users/add

> Add User

_Request Header_
```
not needed
```

_Request Body_
```
{
  "name" : "<name>",
  "gender": "<gender>"
}
```

_Response (201)_
```
{
    "message": "User berhasil di daftarkan",
    "newUser": {
        "name": "yeni",
        "gender": "wanita"
    }
}
```

_Response (400 - Validation Error)_
```
{
    "status": "Validation Failed",
    "message": "\"name\" is not allowed to be empty"
}
```

```
{
    "status": "Error",
    "message": "Nama sudah terdaftar, coba ganti dengan nama lain"
}
```

---

### PUT /users/:usersId

> Edit user by id

_Request Params_
```
/<user_id>/
```

_Request Header_
```
not needed
```

_Request Body_
```
{
  "name" : "<name>",
  "gender": "<gender>"
}
```

_Response (200)_
```
{
    "message": "User berhasil di ubah",
    "newData": {
        "name": "kuyang",
        "gender": "wanita"
    }
}
```

_Response (400 - Validation Error)_
```
{
    "status": "Validation Failed",
    "message": "\"name\" is not allowed to be empty"
}
```

```
{
    "status": "Error",
    "message": "Nama sudah terdaftar, coba ganti dengan nama lain"
}
```


_Response (404 - Error Not Found)_
```
{
    "status": "Error",
    "message": "User tidak ditemukan"
}
```

---

### DELETE /users/:userId/:pokeId

> Delete myPokemon

_Request Params_

```
/<user_id>/<poke_id>/

```

_Request Header_
```
not needed
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "message": "pokemon berhasil di lepas"
}
```

_Response (404)_
```
{
    "status": "Error",
    "message": "User tidak ditemukan"
}
```
```
{
    "status": "Error",
    "message": "Kamu tidak mempunyai pokemon ini untuk di lepas"
}
```

---

### POST /users/:userId

> Add myPokemon

_Request Params_

```
/<user_id>/

```

_Request Header_
```
not needed
```

_Request Body_
```
{
  "pokeId" : <pokeId,
}
```

_Response (201)_
```
{
    "status": "Success",
    "message": "Selamat, Pokemon berhasil di tangkap",
    "data": {
        "id": 17,
        "name": "pidgeotto",
        "url": "https://pokeapi.co/api/v2/pokemon/17/",
        "Category": {
            "name": "omnivora"
        }
    }
}
```

_Response (400 - Validation Error)_
```
{
    "status": "Validation Failed",
    "message": "\"pokeId\" must be a number"
}
```
```
{
    "status": "Error",
    "message": "Pokemon sudah ditangkap sebelumnya !"
}
```

```

_Response (404 - Error Not Found)_
```
{
    "status": "Error",
    "message": "User tidak ditemukan"
}
```

```
{
    "status": "Error",
    "message": "Pokemon tidak ditemukan"
}
```

---

