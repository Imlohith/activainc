import React, { useState } from 'react'
import { 
    Grid,
    Divider,
    Typography
 } from '@material-ui/core'

 //utility components
 import Project from './components/Project'

 //styles
 import useStyles from './styles'

function Dashboard() {
    const classes = useStyles();

    const [elevation1, setElevation1] = useState(1)
    const [elevation2, setElevation2] = useState(1)
    const [elevation3, setElevation3] = useState(1)
    const [elevation4, setElevation4] = useState(1)
    const [elevation5, setElevation5] = useState(1)

    return (
        <>                   
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs className={classes.scrolly} >
                       <div className={classes.section}>
                           <Typography variant="h6" component="h6" color="textSecondary">
                                CARS
                           </Typography>
                           <Divider orientation="horizontal" />

                            <div className={classes.space}>

                                <Project  elevation={elevation1} setElevation={setElevation1} projectName="le ladhak" />

                                <Project  elevation={elevation2} setElevation={setElevation2} projectName="srinagar" />

                                <Project  elevation={elevation3} setElevation={setElevation3} projectName="shimla" />

                                <Project  elevation={elevation4} setElevation={setElevation4} projectName="himachal pradesh" />
                                
                                <Project  elevation={elevation5} setElevation={setElevation5} projectName="assam" />

                                <Project  elevation={elevation1} setElevation={setElevation1} projectName="le ladhak" />

                                <Project  elevation={elevation2} setElevation={setElevation2} projectName="srinagar" />

                                <Project  elevation={elevation3} setElevation={setElevation3} projectName="shimla" />

                                <Project  elevation={elevation4} setElevation={setElevation4} projectName="himachal pradesh" />
                                
                                <Project  elevation={elevation5} setElevation={setElevation5} projectName="assam" />

                               
                                <Typography variant="span" component="span" color="textSecondary">
                                   <a href="#" style={{display: 'flex', justifyContent: 'flex-end' }}>View all projects</a>
                               </Typography>

                            </div>
                       </div>
                    </Grid>
                    <Divider orientation="vertical" light={true} style={{ height: "85vh", marginTop: '30px' }} />
                    <Grid item xs={6}>
                        <div className={classes.section}>
                           <Typography variant="h6" component="h6" color="primary">
                               CAR SUMMARY 
                           </Typography>
                           <Divider orientation="horizontal"  />
                        </div>
                    </Grid>
                    <Divider orientation="vertical" light={true} style={{ height: "85vh", marginTop: '30px' }} />
                    <Grid item xs>
                        <div className={classes.section}>
                            <Typography variant="h6" component="h6" color="secondary">
                                Notifications
                            </Typography>
                            <Divider orientation="horizontal"  />
                            <div className={classes.space}>
                                <div className={classes.notis}>
                                    <div className={classes.notiColor}>
                                        Lohith just created a project <br />
                                        <span style={{ fontSize: '12px' }}>10 sec ago </span>
                                    </div>
                                    <div className={classes.notiColor}>
                                        vijay just created a project <br />
                                        <span style={{ fontSize: '12px' }}>2 sec ago </span>
                                    </div>
                                    <div className={classes.notiColor}>
                                        rahul added a comment <br />
                                        <span style={{ fontSize: '12px' }}>20 sec ago </span>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Dashboard
