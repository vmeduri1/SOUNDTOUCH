# Welcome to SoundTouch
SoundPop is a web application that allows users to listen to songs that touch, in order to discover new music, or listen to old music. The site is meant to authenticate good music and keep the good vibes going. This site was inspired by [SoundCloud](https://soundcloud.com/), where individuals can search for songs, stream music, make playlists, comment on songs, and upload music.
#### Live link: 

*** 

### Index
[Technologies](#technologies)

[Key Features](#key-features)

[Code Snippets](#code-snippets)

[Wiki Pages](#wiki-pages)

[Stretch Goals](#stretch-goals)

***

### Technologies
#### Front End
- JavaScript
- HTML
- CSS
- React/Redux

#### Back End
- Built with Express.js
- Uses a PostgreSQL Database
- Sequelize.js
- AJAX
- Express Validator Library
- CSURF Library

***

### Key Features
- Uses bcryptjs library to secure authentication
- Grants logged in users access to add to favorites, and view their favorites
- Prevents csrf attacks and uses validation forms to authenticate users

***

### Code Snippets

### Wiki Pages
#### [Database Schema](https://github.com/vmeduri1/soundWave/wiki/Database-Schema)
<img width="300" alt="Screen Shot 2021-04-25 at 1 23 03 PM" src="https://user-images.githubusercontent.com/71046664/116004680-6d8e8b80-a5c9-11eb-83b1-40d23aeb575f.png">

#### [Frontend Routes](
# User-facing routes
## `/user/login`
### Log in Page
This page displays a log in form
* `GET /login`
* `POST /login`
* `POST /demo-user`

## `/user/logout`
*   `POST /logout`

## `/user/sign-up'
### Sign up page
This page displays a sign up form
* `GET /sign-up`
* `POST /sign-up'

## '/'
This page displays the most recent songs with their artist and album cover, as well as a means to play, pause, rewind, and fast-forward them, on the bottom of the screen.
* `GET /`

## `/upload`
This page sets the user up to upload a song with a given audio file, requiring a Title. 
* `GET /upload`
* `POST /upload`

