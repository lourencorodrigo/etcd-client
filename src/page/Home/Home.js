import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import ConnectServer from '../../containers/ConnectServer'
import { useStyles } from './styles'

const Home = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={2}>
      <ConnectServer />
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>xs=12</Paper>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Paper className={classes.paper}>xs=12 sm=6</Paper>
      </Grid>
    </Grid>
  )
}

export default Home
