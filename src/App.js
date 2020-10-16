import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import {Button, makeStyles} from '@material-ui/core'
import image from './image.png'

/* const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})); */

const useStyles = makeStyles({
  font: {
    fontFamily: 'Nunito Sans',
  }
});

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=12</Paper>
        </Grid>

      </Grid>
      </div>
      <Grid container spacing={3} justify="center">
        <Grid item xs={6} >
          <h1 className={classes.font}>¿Necesitas un proveedor pero no sabes dónde encontrarlo?</h1>
          <p className={classes.font}>Somos la plataforma de licitaciones enfocada en PyMES en México</p>
          <Button variant="contained" color="primary" className={classes.font}>Comenzar un proyecto</Button>
        </Grid>
        <img src={image} alt="person with computer"/>
      </Grid>
    </React.Fragment>
  );
}

export default App;
