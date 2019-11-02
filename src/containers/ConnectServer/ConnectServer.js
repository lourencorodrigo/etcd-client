/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import {
  Select,
  FormControl,
  InputLabel,
  Grid,
  Paper,
  Button
} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { useStyles } from './styles'

const ConnectServer = () => {
  const classes = useStyles()
  const inputLabel = React.useRef(null)
  const [state, setState] = React.useState({
    age: '',
    name: 'hai'
  })

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    })
  }

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <Grid item xs={12}>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
              Server
            </InputLabel>
            <Select
              native
              value={state.age}
              onChange={handleChange('age')}
              inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple'
              }}
            >
              <option value="" />
              <option value={10}>127.0.0.1:2379 - Local</option>
              <option value={20}>168.8.23.75:2379 - Digital Ocean</option>
              <option value={30}>192.23.12.79:3001 - Gympass</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            Go!
          </Button>
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
