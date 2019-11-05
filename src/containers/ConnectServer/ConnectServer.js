import React from 'react'
import {
  TextField,
  Grid,
  Paper,
  Button
} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { useStyles } from './styles'

const ConnectServer = () => {
  const classes = useStyles()
  const [selectedServer, setSelectedServer] = React.useState(false)

  const servers = [
    { title: 'http://127.40.2.123:2378', year: 1994 }
  ]

  const onChange = (event, value) => setSelectedServer(value)

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Grid item xs={12}>
        <Autocomplete
          className={classes.autoComplete}
          options={servers}
          getOptionLabel={option => option.title}
          onChange={onChange}
          renderInput={params => (
            <TextField
              {...params}
              label="Server"
              variant="outlined"
              fullWidth
            />
          )}
        />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            size="large"
            className={classes.button}
            startIcon={<AddCircleIcon />}
          >
            New Server
          </Button>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default ConnectServer
