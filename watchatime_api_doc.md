# WatchaTime App Server

WatchaTime App is an application to manage your Watch Time be it Movies, Tv Show, or Anime. This app has :

- RESTful endpoint for Event, CRUD operation and resource endpoint for movies
- JSON formatted response

&nbsp;

## Endpoint List

> Movie & TV Show

- GET /movies
- GET /movies/:id
- GET /movies/trending
- GET /tvshows/:id
- GET /tvshows/trending

> Anime

- Get /animes
- Get /animes/:id

> Events / Watch Events

- Get /events
- Post /events
- Get /events/:id
- Put /events/:id
- Patch /events/:id
- Delete /events/:id

> User

- POST /register
- POST /login
- Get /users/:id

## Common Error

### Bad Request

- Error because provided body (for post,put or patch) is wrong/null
  > Status : 400

### Forbidden

- Error because provided auth/token does not have access to that endpoint
  > Status : 403

### Not Logged In

- Error because provided token is wrong/null
  > Status : 401

### Not Found

- Error because the resource or credensitial not exist
  > Status : 404

### Internal Server Error

- General error in WatchaTime server end
  > Status : 500
