# Characters App

`RESTAPI demo with express, babel, jwt, postgresql, sequilize, swagger, s3`

## [Try API](https://charactersapi.herokuapp.com/api-docs/)

* Documentation with Swagger

## Routes without Authentication

### Auth
`POST /auth/login`
`POST /auth/register`

## Routes with Authentication JWT

### Character
`GET  /characters`
`GET  /character/:id`
`GET  /character/:id/movies`
`POST /character`
`POST /character/:id/image`
`PUT  /character/:id/update`
`PUT /character/:idCharacter/movie/:idMovie`
`DELETE /character/:id/delete`

### Content Types
`GET /contentTypes`
`POST /contentType`
`PUT /contentType/:id/update`
`DELETE /contentType/:id/delete`

### Genre Types
`GET /genreTypes`
`POST /genreType`
`PUT /genreType/:id/update`
`DELETE /genreType/:id/delete`

### Movies
`GET /movies`
`GET /movie/:id`
`GET movie/:id/characters`
`POST /movie`
`POST /movie/:id/image`
`PUT /movie/:id/update`
`PUT /movie/:idMovie/character/:idCharacter`
`DELETE /movie/:id/delete`

### Users
`GET /users`
`POST /user`
`PUT /user/:id/update`
`DELETE /user/:id/delete`