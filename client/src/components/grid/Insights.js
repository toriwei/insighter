import React from 'react'
import Favorites from './Favorites.js'
import Typography from '@material-ui/core/Typography'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import '../../index.css'
import { theme } from '../../theme.js'

const useStyles = makeStyles({
  root: {
    textAlign: 'left',
  },
  content: {
    padding: 40,
  },
  header: {
    color: theme.palette.red,
  },
  dataTitle: {
    paddingTop: 40,
  },
  term: {
    paddingBottom: 20,
    paddingTop: 20,
  },
  footer: {
    height: 80,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: theme.palette.green,
    color: theme.palette.magenta,
    display: 'flex',
    alignItems: 'center',
  },
  artist: {
    color: theme.palette.indigo,
  },
  track: {
    color: theme.palette.teal,
  },
  a: {
    color: theme.palette.magenta,
  },
})
export default function Insights() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.content}>
          <div className={classes.header}>
            <Typography variant="h1">insights</Typography>
            <Typography variant="body1">
              welcome to insighter. explore your top artists, tracks, and more.
            </Typography>
          </div>
          <div className={classes.artist}>
            <div className={classes.dataTitle}>
              <Typography variant="h3" component="h2">
                top artists
              </Typography>
            </div>
            <div className={classes.term}>
              <Typography variant="h4" component="h3">
                all-time
              </Typography>
            </div>
            <div className={classes.favorites}>
              <Favorites type={'artist'} term={'long_term'} />
            </div>

            <div className={classes.term}>
              <Typography variant="h4" component="h3">
                six months
              </Typography>
            </div>
            <Favorites type={'artist'} term={'medium_term'} />
            <div className={classes.term}>
              <Typography variant="h4" component="h3">
                one month
              </Typography>
            </div>
            <Favorites type={'artist'} term={'short_term'} />
          </div>
          <div className={classes.track}>
            <div className={classes.dataTitle}>
              <Typography variant="h3" component="h2">
                top tracks
              </Typography>
            </div>
            <div className={classes.term}>
              <Typography variant="h4" component="h3">
                all-time
              </Typography>
            </div>
            <Favorites type={'track'} term={'long_term'} />
            <div className={classes.term}>
              <Typography variant="h4" component="h3">
                six months
              </Typography>
            </div>
            <Favorites type={'track'} term={'medium_term'} />
            <div className={classes.term}>
              <Typography variant="h4" component="h3">
                one month
              </Typography>
            </div>

            <Favorites type={'track'} term={'short_term'} />
          </div>
        </div>
        <div className={classes.footer}>
          <Typography variant="body2" component="body1">
            Made by{' '}
            <a
              href="https://github.com/toriwei"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.a}
            >
              Tori
            </a>
          </Typography>
        </div>
      </div>
    </ThemeProvider>
  )
}
