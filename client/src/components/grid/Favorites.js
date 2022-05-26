import React, { Component } from 'react'
import '../../App.js'
import Spotify from 'spotify-web-api-js'
import Result from '../cards/Result.js'

const spotifyWebAPI = new Spotify()

class Favorites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: props.type,
      term: props.term,
      data: [],
    }
  }
  componentDidMount() {
    if (this.state.type === 'artist') {
      spotifyWebAPI
        .getMyTopArtists({ time_range: this.state.term, limit: 20 })
        .then((response) => {
          this.setState({
            data: Object.assign(this.state.data, response.items),
          })
        })
    } else if (this.state.type === 'track') {
      spotifyWebAPI
        .getMyTopTracks({ time_range: this.state.term, limit: 20 })
        .then((response) => {
          this.setState({
            data: Object.assign(this.state.data, response.items),
          })
        })
    }
  }
  render() {
    return (
      <div className="Favorites">
        <Result
          type={this.state.type}
          term={this.state.term}
          data={this.state.data}
        />
      </div>
    )
  }
}

export default Favorites
