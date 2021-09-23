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
- GET /tvshows

> Anime

- Get /animes
- Get /animes/:id

> Events / Watch Events

- Get /events
- Post /events
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

## Endpoints

### POST /users/signup

> Create new user

_Request Header_

```
not needed
```

_Request Body_

```
{
  "email": "<user email(email)>",<required>
  "password": "<user password(string)>",<required>
  "username": "<user username>",

}
```

_Response (201 - Created)_

```
{
  "id": <given id by system>,
  "email": "<user email>"
}
```

_Response (400 - Validation Error)_

```
{
  message:"Email is Required"
}
```

OR

```
{
  message:"Password is Required"
}
```

OR

```
{
  message:"Password length min 5"
}
```

### POST /users/login

> Login with avalible user

_Request Header_

```
not needed
```

_Request Body_

```
{
  "email": "<user email(email)>",<required>
  "password": "<user password(string)>",<required>
}
```

_Response (200 - Ok)_

```
{
  "access_token": <given access_token by system>,
}
```

_Response (401 - Auth Error)_

```
{
   message: "Email/Password is not valid"
}
```

_Response (500 - Internal Server Error)_

```
{
  message:"Internal Server Error"
}
```

### GET /movies

> Get all Movies with paging

_Request Header_

```
<not needed>
```

_Request Body_

```
not needed
```

_Availible query_

```
_For filtering_
page=<integer>
```

_Response (200)_

```

{
  "page": 1,
  "results": [
    {
      "poster_path": "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg",
      "adult": false,
      "overview": "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
      "release_date": "2016-08-03",
      "genre_ids": [
        14,
        28,
        80
      ],
      "id": 297761,
      "original_title": "Suicide Squad",
      "original_language": "en",
      "title": "Suicide Squad",
      "backdrop_path": "/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
      "popularity": 48.261451,
      "vote_count": 1466,
      "video": false,
      "vote_average": 5.91
    },
    ...
  ],
  "total_results": 19629,
  "total_pages": 982

_Response (500 - Internal Server Error)_

```

```
{
message:"Internal Server Error"
}

```

### GET /movies/:id

> Get movie by given Id

_Request Header_

```

not needed

```

_Request Body_

```

not needed

```

_Response (200 - Ok)_

```

{
"adult": false,
"backdrop_path": "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
"belongs_to_collection": null,
"budget": 63000000,
"genres": [
{
"id": 18,
"name": "Drama"
}
],
"homepage": "",
"id": 550,
"imdb_id": "tt0137523",
"original_language": "en",
"original_title": "Fight Club",
"overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
"popularity": 0.5,
"poster_path": null,
"production_companies": [
{
"id": 508,
"logo_path": "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
"name": "Regency Enterprises",
"origin_country": "US"
},
{
"id": 711,
"logo_path": null,
"name": "Fox 2000 Pictures",
"origin_country": ""
},
{
"id": 20555,
"logo_path": null,
"name": "Taurus Film",
"origin_country": ""
},
{
"id": 54050,
"logo_path": null,
"name": "Linson Films",
"origin_country": ""
},
{
"id": 54051,
"logo_path": null,
"name": "Atman Entertainment",
"origin_country": ""
},
{
"id": 54052,
"logo_path": null,
"name": "Knickerbocker Films",
"origin_country": ""
},
{
"id": 25,
"logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
"name": "20th Century Fox",
"origin_country": "US"
}
],
"production_countries": [
{
"iso_3166_1": "US",
"name": "United States of America"
}
],
"release_date": "1999-10-12",
"revenue": 100853753,
"runtime": 139,
"spoken_languages": [
{
"iso_639_1": "en",
"name": "English"
}
],
"status": "Released",
"tagline": "How much can you know about yourself if you've never been in a fight?",
"title": "Fight Club",
"video": false,
"vote_average": 7.8,
"vote_count": 3439
}

```

```

_Response (404 - Not Found Error)_

```

{
message: `Movie with id: <id> not found`
}

```

_Response (500 - Internal Server Error)_

```

{
message:"Internal Server Error"
}

```

```

### GET /movies/trending

> Get all movie in trending section

_Request Header_

```
<not needed>
```

_Request Body_

```
not needed
```

_Availible query_

```
_For filtering_
page=<integer>
```

_Response (200)_

```

{
  "page": 1,
  "results": [
    {
      "poster_path": "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg",
      "adult": false,
      "overview": "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
      "release_date": "2016-08-03",
      "genre_ids": [
        14,
        28,
        80
      ],
      "id": 297761,
      "original_title": "Suicide Squad",
      "original_language": "en",
      "title": "Suicide Squad",
      "backdrop_path": "/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
      "popularity": 48.261451,
      "vote_count": 1466,
      "video": false,
      "vote_average": 5.91
    },
    ...
  ],
  "total_results": 19629,
  "total_pages": 982

_Response (500 - Internal Server Error)_

```

```
{
message:"Internal Server Error"
}

```

### GET /tvshows

> Get all TV Shows with paging

_Request Header_

```
<not needed>
```

_Request Body_

```
not needed
```

_Availible query_

```
_For filtering_
page=<integer>
```

_Response (200)_

```

{
  "page": 1,
  "results": [
    {
      "poster_path": "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg",
      "adult": false,
      "overview": "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
      "release_date": "2016-08-03",
      "genre_ids": [
        14,
        28,
        80
      ],
      "id": 297761,
      "original_title": "Suicide Squad",
      "original_language": "en",
      "title": "Suicide Squad",
      "backdrop_path": "/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
      "popularity": 48.261451,
      "vote_count": 1466,
      "video": false,
      "vote_average": 5.91
    },
    ...
  ],
  "total_results": 19629,
  "total_pages": 982

_Response (500 - Internal Server Error)_

```

```
{
message:"Internal Server Error"
}

```

### GET /tvshows/:id

> Get Tv Show by given Id

_Request Header_

```

not needed

```

_Request Body_

```

not needed

```

_Response (200 - Ok)_

```

{
"adult": false,
"backdrop_path": "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
"belongs_to_collection": null,
"budget": 63000000,
"genres": [
{
"id": 18,
"name": "Drama"
}
],
"homepage": "",
"id": 550,
"imdb_id": "tt0137523",
"original_language": "en",
"original_title": "Fight Club",
"overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
"popularity": 0.5,
"poster_path": null,
"production_companies": [
{
"id": 508,
"logo_path": "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
"name": "Regency Enterprises",
"origin_country": "US"
},
{
"id": 711,
"logo_path": null,
"name": "Fox 2000 Pictures",
"origin_country": ""
},
{
"id": 20555,
"logo_path": null,
"name": "Taurus Film",
"origin_country": ""
},
{
"id": 54050,
"logo_path": null,
"name": "Linson Films",
"origin_country": ""
},
{
"id": 54051,
"logo_path": null,
"name": "Atman Entertainment",
"origin_country": ""
},
{
"id": 54052,
"logo_path": null,
"name": "Knickerbocker Films",
"origin_country": ""
},
{
"id": 25,
"logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
"name": "20th Century Fox",
"origin_country": "US"
}
],
"production_countries": [
{
"iso_3166_1": "US",
"name": "United States of America"
}
],
"release_date": "1999-10-12",
"revenue": 100853753,
"runtime": 139,
"spoken_languages": [
{
"iso_639_1": "en",
"name": "English"
}
],
"status": "Released",
"tagline": "How much can you know about yourself if you've never been in a fight?",
"title": "Fight Club",
"video": false,
"vote_average": 7.8,
"vote_count": 3439
}

```

```

_Response (404 - Not Found Error)_

```

{
message: `Movie with id: <id> not found`
}

```

_Response (500 - Internal Server Error)_

```

{
message:"Internal Server Error"
}

```

```

### GET /tvshows/trending

> Get all movie in trending section

_Request Header_

```
<not needed>
```

_Request Body_

```
not needed
```

_Availible query_

```
_For filtering_
page=<integer>
```

_Response (200)_

```

{
  "page": 1,
  "results": [
    {
      "poster_path": "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg",
      "adult": false,
      "overview": "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
      "release_date": "2016-08-03",
      "genre_ids": [
        14,
        28,
        80
      ],
      "id": 297761,
      "original_title": "Suicide Squad",
      "original_language": "en",
      "title": "Suicide Squad",
      "backdrop_path": "/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
      "popularity": 48.261451,
      "vote_count": 1466,
      "video": false,
      "vote_average": 5.91
    },
    ...
  ],
  "total_results": 19629,
  "total_pages": 982

_Response (500 - Internal Server Error)_

```

```
{
message:"Internal Server Error"
}

```

### GET /animes

> Get all animes with 20 limit page and paging

_Request Header_

```
<not needed>
```

_Request Body_

```
not needed
```

_Availible query_

```
_For filtering_
page=<integer>
```

_Response (200)_

```

{
    "status_code": 200,
    "message": "Page 1 contains 100 anime. Last page number is 161 for a total of 16094 anime",
    "data": {
        "current_page": 1,
        "count": 16094,
        "documents": [
            {
                // with sme give as /animes/:id
            },
            {
                // ...
            },
            // ...
        ],
        "last_page": 161
    }
}

_Response (500 - Internal Server Error)_

```

```
{
message:"Internal Server Error"
}

```

### GET /animes/:id

> Get anime with give id

_Request Header_

```
<not needed>
```

_Request Body_

```
not needed
```

_Response (200)_

```

{
    "status_code": 200,
    "message": "Anime found",
    "data": {
        "anilist_id": 21,
        "mal_id": 21,
        "format": 0,
        "status": 1,
        "titles": {
            "en": "One Piece",
            "jp": "ワンピース",
            "it": "One Piece"
        },
        "descriptions": {
            "en": "",
            "it": "Monkey D. Luffy (Nel doppiaggio italiano, Rubber) è un pirata diciassettenne che da bambino ha mangiato il frutto del diavolo Gom Gom che gli ha permesso di diventare un uomo gomma perdendo però la facoltà di nuotare. Il suo sogno è quello di diventare il Re dei pirati trovando il leggendario One Piece, tesoro nascosto da Gol D. Roger, il vecchio Re dei pirati. Per riuscire nell'impresa Rufy dovrà formare la sua ciurma formata da amici e abili combattenti del quali il pirata potrà fidarsi ciecamente. Nasce così la Ciurma di Cappello di Paglia, legata dall'indissolubile legame dell'amicizia."
        },
        "start_date": "1999-10-20T00:00:00Z",
        "end_date": "1970-01-01T00:00:00Z",
        "season_period": 3,
        "season_year": 1999,
        "episodes_count": 992,
        "episode_duration": 24,
        "cover_image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21-tXMN3Y20PIL9.jpg",
        "cover_color": "#e4a15d",
        "banner_image": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Fantasy",
            "Pirates",
            "Ensemble Cast",
            "Shounen",
            "Super Power",
            "Male Protagonist",
            "Conspiracy",
            "Ships",
            "Tragedy",
            "Time Skip",
            "Politics",
            "War",
            "Lost Civilization",
            "Swordplay",
            "Shapeshifting",
            "Henshin",
            "Animals",
            "Primarily Adult Cast",
            "Real Robot",
            "Gender Bending",
            "Anachronism",
            "Primarily Male Cast",
            "Skeleton",
            "Anti-Hero",
            "Ninja",
            "Espionage",
            "Guns",
            "Cyborg",
            "Nudity",
            "Mermaid",
            "Kuudere",
            "Tanned Skin",
            "Time Manipulation",
            "Zombie",
            "Battle Royale",
            "Assassins",
            "Adoption"
        ],
        "score": 86,
        "id": 11
    },
    "version": "1"
}

_Response (500 - Internal Server Error)_

```

```
{
message:"Internal Server Error"
}

```

### GET /events

> Get all events your with your credentials

_Request Header_

```
<access_token:<your access token>
```

_Request Body_

```
not needed
```

_Response (200)_

```

[{id:<event_id>,
status:<status of the event[active,on-hold,canceled,completed] >,
summary:<event_summary with code >,
end:<event_end date>,
start:<event start date>,}]

_Response (500 - Internal Server Error)_

```

```
{
message:"Internal Server Error"
}

```

### Post /events

> Post new events with your access_token

_Request Header_

```
<access_token:<your access token>
```

_Request Body_

```


summary:<event_summary with code >,
end:<event_end date>,
start:<event start date>
```

_Response (200)_

```

{id:<event_id>,
status:<status of the event always active the first instance made>,
summary:<event_summary with code >,
end:<event_end date>,
start:<event start date>,}

_Response (500 - Internal Server Error)_

```

```
{
message:"Internal Server Error"
}

```

### Put /events/:id

> Update events with give id

_Request Header_

```
<access_token:<your access token>
```

_Request Body_

```

status:<status of the event ,
summary:<event_summary with code >,
end:<event_end date automacly in fe>,
start:<event start date>
```

_Response (200)_

```

{id:<event_id>,
status:<status of the event>,
summary:<event_summary with code >,
end:<event_end date>,
start:<event start date>,}

_Response (500 - Internal Server Error)_

```

```
{
message:"Internal Server Error"
}

```

### Patch /events/:id

> Update events with give id to completed

_Request Header_

```
<access_token:<your access token>
```

_Request Body_

```

not needed
```

_Response (200)_

```

{id:<event_id>,
status:<status of the event>,
summary:<event_summary with code >,
end:<event_end date>,
start:<event start date>,}

_Response (500 - Internal Server Error)_

```

```
{
message:"Internal Server Error"
}

```

### Delete /events/:id

> delete event with given id

_Request Header_

```
<access_token:<your access token>
```

_Request Body_

```

not needed
```

_Response (200)_

```
<event deleted>

```

_Response (500 - Internal Server Error)_

```


{
message:"Internal Server Error"
}

```
