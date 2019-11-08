import React, { useState } from 'react'
import { 
    Button,
    Grid,
    Paper,
    TextField,
    CircularProgress,
    Divider,
    Typography
   } from '@material-ui/core'
import Header from '../../components/Header'
import Logo from '../../assets/Logo/actchain.png'
import { Link } from 'react-router-dom'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';


//styles
import useStyles from './styles'

function Signup(props) {
    const classes = useStyles();

    
    //local

    //radio button state
    const [radioValue, setRadioValue] = useState('dealer')

    //Methods
    const onSubmitHandler = () => {
        console.log("onSubmit handler clicked")
    } 

    const handleChange = event => {
        setRadioValue(event.target.value);
    };

    const handleLogin = () => {
        localStorage.setItem('authToken', "dfgdfgdfg");
        props.history.push('/dashboard')
    } 
    return (
        <>
           <Header />
            <Grid
            container
            alignItems="center"
            justify="center"
            style={{ minHeight: '90vh' }}
            xs={false} 
            md={12}
            xl={12}
            sm={12}
            lg={12}
            >      
            <Grid xs={7} md={8} className={classes.root}>
                <Paper className={classes.paper} elevation={8}>
                    <Grid item container>
                        <Grid item xs={5} style={{ display: 'flex' }} justify="center" alignItems="center" > 
                            <img src={Logo} alt="company logo" style={{ height: 300 }} />
                        </Grid>
                        <Grid item xs={1} style={{ display: 'flex' }} direction="column" justify="center" alignItems="center" >
                           <Divider orientation="vertical" style={{ height: '50vh' }} />
                        </Grid>
                        <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column' }} justify="center" alignItems="center">
                            <Typography>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Please select the type:</FormLabel>
                                <RadioGroup aria-label="position" name="position" value={radioValue} onChange={handleChange} row>
                                    <FormControlLabel
                                    value="dealer"
                                    control={<Radio color="primary" />}
                                    label="dealer"
                                    labelPlacement="end"
                                    />
                                    <FormControlLabel
                                    value="buyer"
                                    control={<Radio color="primary" />}
                                    label="Buyer"
                                    labelPlacement="end"
                                    />
                                </RadioGroup>
                                </FormControl>
                            </Typography>
                            {
                                radioValue === "dealer" && 
                                <>
                                <Typography variant="h5" component="h5" align="center">
                                   Dealer Registration
                               </Typography>
                             <form className={classes.form} noValidate>
                              <Grid container spacing={2}>
                                 <Grid xs={6} md={6} sm={6} lg={6} item>
                                  <TextField
                                     variant="outlined"
                                     margin="dense"
                                     required
                                     id="email"
                                     label="Email Address"
                                     name="email"
                                     autoComplete="email"
                                     autoFocus
                                     fullWidth
                                 />
                                 </Grid>
                                 <Grid xs={6} md={6} sm={6} lg={6} item>
                                 <TextField
                                     variant="outlined"
                                     margin="dense"
                                     required
                                     name="name"
                                     label="Name"
                                     fullWidth
                                     autoComplete="current-password"
                                 />   
                                 </Grid>
                             </Grid>
                              
                             <Grid container>
                                 <Grid xs={12} md={12} item>
                                     <TextField
                                         variant="outlined"
                                         margin="dense"
                                         required
                                         name="name"
                                         label="address"
                                         fullWidth
                                     />   
                                     </Grid>
                             </Grid>
 
                             <Grid container spacing={2}>
                                 <Grid xs={6} md={6} sm={6} lg={6} item>
                                     <TextField
                                         variant="outlined"
                                         margin="dense"
                                         required
                                         name="name"
                                         label="city"
                                         fullWidth
                                     />   
                                 </Grid>
                                 <Grid xs={6} md={6} sm={6} lg={6} item>
                                     <TextField
                                         variant="outlined"
                                         margin="dense"
                                         required
                                         name="name"
                                         label="state"
                                         fullWidth
                                     />   
                                 </Grid>
                             </Grid>
 
                             <Grid container spacing={2}>
                                 <Grid xs={6} md={6} sm={6} lg={6} item>
                                     <TextField
                                         variant="outlined"
                                         margin="dense"
                                         required
                                         name="name"
                                         label="mobile"
                                         fullWidth
                                     />   
                                 </Grid>
                                 <Grid xs={6} md={6} sm={6} lg={6} item>
                                     <TextField
                                         variant="outlined"
                                         margin="dense"
                                         required
                                         name="name"
                                         label="zip"
                                         fullWidth
                                     />   
                                 </Grid>
                             </Grid>

                             <Grid container spacing={2}>
                                <Grid xs={6} md={6} sm={6} lg={6} item>
                                   <Typography>
                                        New car
                                   </Typography>
                                    <Grid container spacing={1}>
                                          <Grid item xs>
                                            <TextField
                                                variant="outlined"
                                                margin="dense"
                                                required
                                                name="name"
                                                label="name"
                                                fullWidth
                                            />   
                                          </Grid>
                                          <Grid item xs>
                                          <TextField
                                                variant="outlined"
                                                margin="dense"
                                                required
                                                name="title"
                                                label="title"
                                                fullWidth
                                            />   
                                          </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                          <Grid item xs={6}>
                                            <TextField
                                                variant="outlined"
                                                margin="dense"
                                                required
                                                name="mobile"
                                                label="mobile"
                                                fullWidth
                                            />   
                                          </Grid>
                                          <Grid item xs={6}>
                                          <TextField
                                                variant="outlined"
                                                margin="dense"
                                                required
                                                name="work email"
                                                label="work email"
                                                fullWidth
                                            />   
                                          </Grid>
                                    </Grid>
                                </Grid>
                                <Grid xs={6} item>
                                  <Typography>
                                        Used car
                                   </Typography>
                                   <Grid container spacing={1}>
                                          <Grid item xs>
                                            <TextField
                                                variant="outlined"
                                                margin="dense"
                                                required
                                                name="name"
                                                label="name"
                                                fullWidth
                                            />   
                                          </Grid>
                                          <Grid item xs>
                                          <TextField
                                                variant="outlined"
                                                margin="dense"
                                                required
                                                name="title"
                                                label="title"
                                                fullWidth
                                            />   
                                          </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                          <Grid item xs={6}>
                                            <TextField
                                                variant="outlined"
                                                margin="dense"
                                                required
                                                name="mobile"
                                                label="mobile"
                                                fullWidth
                                            />   
                                          </Grid>
                                          <Grid item xs={6}>
                                          <TextField
                                                variant="outlined"
                                                margin="dense"
                                                required
                                                name="work email"
                                                label="wirk email"
                                                fullWidth
                                            />   
                                          </Grid>
                                    </Grid>
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
                                       onClick={handleLogin}
                                     >
                                       Sign up
                                     </Button>
                                 </div>
                              </form>
                              </>
                            }
                            {
                                radioValue === 'buyer' &&
                                <>
                                <Typography variant="h5" component="h5" align="center">
                                Buyer Registration
                               </Typography>
                            <form className={classes.form} noValidate>
                              <Grid container spacing={2}>
                                 <Grid xs={6} item>
                                 <TextField
                                     variant="outlined"
                                     margin="dense"
                                     required
                                     id="email"
                                     label="dealership name"
                                     name="dealername"
                                     autoComplete="dealer"
                                     autoFocus
                                     fullWidth
                                 />
                                 </Grid>
                                 <Grid xs={6} item>
                                 <TextField
                                     variant="outlined"
                                     margin="dense"
                                     required
                                     name="brand"
                                     label="brand"
                                     fullWidth
                                     autoComplete="brand"
                                 />   
                                 </Grid>
                             </Grid>
                              
                             <Grid container>
                                 <Grid xs={12} item>
                                     <TextField
                                         variant="outlined"
                                         margin="dense"
                                         required
                                         name="name"
                                         label="address"
                                         fullWidth
                                     />   
                                     </Grid>
                             </Grid>
 
                             <Grid container spacing={2}>
                                 <Grid xs={6} item>
                                     <TextField
                                         variant="outlined"
                                         margin="dense"
                                         required
                                         name="name"
                                         label="city"
                                         fullWidth
                                     />   
                                 </Grid>
                                 <Grid xs={6} item>
                                     <TextField
                                         variant="outlined"
                                         margin="dense"
                                         required
                                         name="name"
                                         label="state"
                                         fullWidth
                                     />   
                                 </Grid>
                             </Grid>
 
                             <Grid container spacing={2}>
                                 <Grid xs={6} item>
                                     <TextField
                                         variant="outlined"
                                         margin="dense"
                                         required
                                         name="zip"
                                         label="zip"
                                         fullWidth
                                     />   
                                 </Grid>
                                 <Grid xs={6} item>
                                     <TextField
                                         variant="outlined"
                                         margin="dense"
                                         required
                                         name="wesbite"
                                         label="website"
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
                                       Sign up
                                     </Button>
                                 </div>
                              </form>
                                </>
                            }
                           <Typography>
                              Already have an account? <Link to="/login">login</Link>
                           </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>   

            </Grid> 
        </>
    )
}

export default Signup

