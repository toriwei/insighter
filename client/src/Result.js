import React from 'react'
import './App.css';
import ArtistCard from './ArtistCard.js'
import TrackCard from './TrackCard.js'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginLeft: 70,
      marginRight: 70,
      padding: 0,
      marginTop: 10,
      marginBottom: 10,
      // color: 'red',
      // border: 'solid',
    },
  }));

export default function Result ({type, data}) {
  const classes = useStyles()

  let Card;
  if (type === "artist") {
    Card = data.map((artist, index) => (
      <Grid item key={artist.name} xs={12} sm={6} md={3} align="center">
          <ArtistCard artist={artist} index={index + 1}/>
      </Grid>
      ))
  } else {
    Card = data.map((track, index) => (
      <Grid item key={track.id} xs={12} sm={6} md={3} align="center">
          <TrackCard track={track} index={index + 1}/>
      </Grid>
      ))
  }
    return (
        <div className={classes.root}>
                <Grid 
                  container 
                  spacing={1} 
                  justify="center"
                >
                      {Card}
                </Grid>
        </div>

    )
}