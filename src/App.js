import React from 'react'
import { CssBaseline, Container } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { teal } from '@material-ui/core/colors'
import Home from './page/Home'

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(2),
  }
}))

const App = () => {
  const classes = useStyles()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: teal
        }
      }),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className={classes.container} maxWidth="lg">
        <Home />
      </Container>
    </ThemeProvider>
  )
}

export default App
