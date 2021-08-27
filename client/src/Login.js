import React from 'react'
import './Login.css'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import './index.css'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F4462F"
    },
    secondary: {
      main: "#EFE6F9"
    }
  },
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  }
})

const useStyles = makeStyles({
  button: {
    fontSize: "22px",
    borderRadius: "500px",
    paddingLeft: "50px",
    paddingRight: "50px",
    textTransform: 'lowercase'
  }

})
function Login(props) {
    const classes = useStyles()
    if (props.loggedIn) {
        return null
    }
    return (
    <ThemeProvider theme={theme}>
      <div className="Login">
        <div className="content">
          <div>
              <Typography variant="h1" component="h2" color="primary" gutterBottom>
                welcome to insighter
              </Typography>
            </div> 
            <div>         
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                href="http://localhost:8888/login"
                size="large"
              >
                Enter
              </Button>
            </div>
        </div>
          
    </div>
    </ThemeProvider>

    )
}

export default Login