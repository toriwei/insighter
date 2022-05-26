import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { usePalette } from 'react-palette'

var tinycolor = require('tinycolor2')

const useStyles = makeStyles({
  root: {
    width: 210,
    height: 270,
    padding: 0,
    margin: 0,
  },
  media: {
    height: 110,
    width: 110,
    margin: 'auto',
  },
  cardContent: {
    margin: 'auto',
    paddingTop: 0,
    paddingBottom: 0,
  },
  header: {
    paddingTop: 8,
    paddingBottom: 8,
  },
})

export default function ArtistCard({ artist, index }) {
  const classes = useStyles()
  const { data } = usePalette(artist.images[0].url)
  let cardColor = tinycolor(data.lightMuted)
  let textColor
  cardColor.isLight() ? (textColor = 'black') : (textColor = 'white')
  return (
    <Card className={classes.root} style={{ backgroundColor: data.lightMuted }}>
      <CardContent className={classes.cardContent} style={{ color: textColor }}>
        <Grid container>
          <Grid item xs={9}>
            <Typography
              noWrap
              className={classes.header}
              variant="body2"
              align="center"
            >
              {artist.name}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.header} variant="body2">
              {index}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={artist.images[0].url}
        title={artist.name}
      />
      <CardContent className={classes.cardContent} style={{ color: textColor }}>
        <Typography
          className={classes.type}
          variant="body2"
          align="left"
          component="div"
        >
          <p>{artist.genres.slice(0, 3).join(' • ')}</p>
          <p>popularity: {artist.popularity}</p>
        </Typography>
      </CardContent>
    </Card>
  )
}
