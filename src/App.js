import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid'
import {Button, makeStyles} from '@material-ui/core'
import image from './image.png'

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
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <h1 className={classes.font}>¿Necesitas un proveedor pero no sabes dónde encontrarlo?</h1>
          <p className={classes.font}>Somos la plataforma de licitaciones enfocada en PyMES en México</p>
          <Button variant="contained" color="primary" className={classes.font}>Comenzar un proyecto</Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={image} alt="person with computer"/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
