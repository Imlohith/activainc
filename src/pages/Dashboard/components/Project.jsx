import React from 'react'
import { 
    Paper,
    Typography
 } from '@material-ui/core'

 //styles import
import useStyles from '../styles'

function Project({ elevation, setElevation, projectName }) {
    //styles
    const classes = useStyles();

    return (
        <>
             <Paper className={classes.pen} 
                style={{ background: 'linear-gradient(to right, #00b4db, #0083b0)' }}
                onMouseOut={ () => setElevation(1) }
                onMouseOver={ () => setElevation(5) }
                elevation={elevation}
                onClick={() => alert(`project clicked ${projectName}`)}
              >
                <Typography variant="h6" component="h3" className={classes.title}>
                    { projectName }
                </Typography>
                <Typography style={{ color: "#fff" }}>
                    Paper can be used to build surface.
                </Typography>
            </Paper>
        </>
    )
}

export default Project
