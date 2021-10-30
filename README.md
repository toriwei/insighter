# insighter
Insighter gives users data about their top artists and tracks on Spotify. This web-app was made with the Spotify API, React, and Material UI. 

## the process
I made this project during the summer of 2021. This was my first time working with this API, as well as React.js and Material UI. 

## further developments
In the future, I want to first optimize the code, as there is repitition with the styling and the front page runs slowly. I want to learn more about the login authentication as well and try to integrate that in a more efficient manner. In general, I would like to polish the styling with the cards. For more features, I would want to provide the user with more audio information of their favorite songs, like BPM or mood. Another future endeavor I want to implement is calculating the user's favorite genres.

## running the app
To run the React app:
1. `cd client`
2. `npm start`

To run the Spotify login authentication (in a split terminal):

1. `cd auth-server`
2. `node authorization-code/app.js`

## resources i used
1. [Now Playing: A Quick Intro to Spotify's API with React](https://www.youtube.com/watch?v=prayNyuN3w0&t=1045s)
2. [Spotify for Developer's Web API Reference](https://developer.spotify.com/documentation/web-api/reference/)
3. [Spotify's Authentication Flow Example](https://github.com/spotify/web-api-auth-examples)
4. [Spotify Web API JS](https://github.com/JMPerez/spotify-web-api-js)