import React, { useState } from 'react'
import { 
        Button,
        Grid,
        Paper,
        TextField,
        CircularProgress,
        Divider,
        Typography,
       } from '@material-ui/core'
import Header from '../../components/Header'
import Logo from '../../assets/Logo/actchain.png'
import { Link } from 'react-router-dom'

//styles
import useStyles from './styles'

function Login() {
    const classes = useStyles();

    //local
    var [isLoading, setIsLoading] = useState(false);
    var [error, setError] = useState(null);
    var [loginValue, setLoginValue] = useState("");
    var [passwordValue, setPasswordValue] = useState("");

    //Methods
    const onSubmitHandler = () => {
        console.log("onSubmit handler clicked")
    } 

    return (
   <>
    <Header />
    <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ minHeight: '90vh' }}
      className={classes.root}
    >
      <Grid item xs={7}>
          <Paper className={classes.paper} elevation={8}>
          <Grid container>
                        <Grid item xs={5} style={{ height: '50vh', display: 'flex' }} justify="center" alignItems="center" > 
                            <img src={Logo} alt="company logo" style={{ height: 300 }} />
                        </Grid>
                        <Grid item xs={1} style={{ display: 'flex' }} direction="column" justify="center" alignItems="center" >
                           <Divider orientation="vertical" style={{ height: '50vh' }} />
                        </Grid>
                        <Grid item xs={6} style={{ height: '50vh', display: 'flex', flexDirection: 'column' }} justify="center" alignItems="center">
                           <Typography variant="h5" component="h5" align="center">
                               Login Here
                           </Typography>
                           <form className={classes.form} noValidate>
 
                            <Grid container>
                                <Grid md={12} item>
                                    <TextField
                                        variant="outlined"
                                        margin="dense"
                                        required
                                        name="name"
                                        label="email"
                                        fullWidth
                                    />   
                                    </Grid>
                            </Grid>

                            <Grid container>
                                <Grid md={12} item>
                                    <TextField
                                        variant="outlined"
                                        margin="dense"
                                        required
                                        name="name"
                                        type="password"
                                        label="password"
                                        fullWidth
                                    />   
                                    </Grid>
                            </Grid>


                              <div className={classes.formButtons}>
                                    <Button
                                      style={{ marginTop: 0, height: 40, background: 'rgba(25,123,189)' }}
                                      className={classes.signInButton}
                                      color="primary"
                                      fullWidth
                                      size="large"
                                      type="submit"
                                      variant="contained"
                                    >
                                      Sign In
                                    </Button>
                                </div>
                           </form>
                           <Typography>
                              Don't have an account? <Link to="signup">signup</Link>
                           </Typography>
                        </Grid>
                    </Grid>
          </Paper>
      </Grid>   

    </Grid> 

        </>
    )
}

export default Login
