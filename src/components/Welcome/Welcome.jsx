import React from 'react'
import {
 Button
} from '@material-ui/core'
import { Link } from 'react-router-dom'

function Welcome() {
    const style = {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(to right top, #2e3f59, #373f53, #3e404e, #414148, #434343)',
        color: "#fff"
    }
    return (
        <> 
           <div style={style}>
              <h2>WELCOME TO VOTTUN API PROJECT</h2>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                   <Button style={{ background: "linear-gradient(to right top, #2e3f59, #233249, #19263a, #0f1b2c, #030e1e)" }} variant="contained" color="primary">
                       Get started
                   </Button>
              </Link>
           </div>
        </>
    )
}

export default Welcome
