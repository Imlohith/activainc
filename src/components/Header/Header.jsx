import React from 'react'
import { 
        AppBar,
        Toolbar,
        Typography,
       } from '@material-ui/core';
import Logo from '../../assets/Logo/actchain_logo.png'

//styles
import useStyles from './styles'

function Header() {
    const classes = useStyles();
    return (
        <>
              <AppBar position="static" style={{ alignItems: 'center', background: 'rgba(25,123,189)' }}>
                 <Toolbar>
                    <Typography className={classes.title}>
                        <img src={Logo} alt="company logo" className={classes.image} />
                    </Typography>
                 </Toolbar>
             </AppBar>
        </>
    )
}

export default Header
