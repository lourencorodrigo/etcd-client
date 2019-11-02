import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme } from '@material-ui/core/styles'

const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

const theme = React.useMemo(
  () =>
    createMuiTheme({
      palette: {
        type: prefersDarkMode ? 'dark' : 'light'
      }
    }),
  [prefersDarkMode]
)

export default theme
