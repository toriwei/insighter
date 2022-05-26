import { createMuiTheme } from '@material-ui/core/styles'
export const theme = createMuiTheme({
  palette: {
    red: '#F4462F',
    indigo: '#414288',
    teal: '#1E7370',
    green: '#CBDF90',
    magenta: '#77183C',
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
})
