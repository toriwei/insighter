import React, { Component } from 'react'
import './App.css';
import Spotify from 'spotify-web-api-js';
import Login from './Login';
import Insights from './Insights'

const spotifyWebAPI = new Spotify();

class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ? true : false,
    }
    if (params.access_token) {
      spotifyWebAPI.setAccessToken(params.access_token)
    }
  }
   getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }
  componentDidMount() {
    /*
     * on mount, go to localhost:8888 (?)
     */
  }
  handleLogin() {
    this.setState({
      loggedIn: true
    })
  }
  render() {
    return (
      <div className="App">
        <Login 
          loggedIn = {this.state.loggedIn} 
          handleLogin = {() => this.handleLogin()}
        />
        {this.state.loggedIn === true ? (<Insights />) : null}
      </div>
    );
  }
}

export default App;