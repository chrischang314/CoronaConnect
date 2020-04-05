import React from 'react'
import { Link } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme)=>({
  root: {
    flexGrow:1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  paper2: {
    height:180,
    width:300,
    padding: theme.spacing(2), 
    textAlign: 'center',
  },
  paper3: {
    padding: "3vw",
    textAlign: "center",
    whiteSpace: "nowrap",
    marginTop: "3vh",
    marginBottom: "4vh",
    marginLeft:"2vh",
    marginRight:"2vh"
  }
}));


export default function HomePageComponent(){
    const classes = useStyles()

    return (
        <div>
            {/* Title & Login */}
            <Grid container spacing={4}>
                <Grid item xs={10}>
                <Paper className={classes.paper3}>
                    <Typography variant="h2" component="h2" >
                        PPE Inventory Manager Beta 😷😷
                    </Typography>
                </Paper>
                </Grid>
                <Grid item xs={2}>
                <Paper className={classes.paper3}>
                    <Link to="/input">
                        <Button variant="contained" color="primary">
                            Sign in / Sign Up
                        </Button>
                    </Link>
                </Paper>
                </Grid>
            </Grid>
            {/* Button Inputs  */}
            <Grid container spacing={2}>
                <Grid item xs={4}>
                <Paper className={classes.paper3} elevation={3}>
                    <Link to="/input">
                        <Button variant="contained" color="primary">
                            Change Inventory here. 
                        </Button>
                    </Link>
                </Paper>
                </Grid>
                <Grid item xs={4}>
                <Paper className={classes.paper3} elevation={3}>
                    <Link to="/input">
                        <Button variant="contained" color="primary">
                            View Data Here.
                        </Button>
                    </Link>
                </Paper>
                </Grid>
                <Grid item xs={4}>
                <Paper className={classes.paper3} elevation={3}>
                    <Link to="/input">
                        <Button variant="contained" color="primary">
                            Change Inventory here. 
                        </Button>
                    </Link>
                </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper3} elevation={3}>
                        <Typography variant="h4" component="h4" >
                            A little bit about why we're around: 
                        </Typography>
                        <Typography variant="caption" >
                            Join us on our jounrey to better manage PPE inventories - and save lives. 
                        </Typography>
                        <Typography variant="body1">
                            Today, hospitals like Mass Gen face a number of extraordinarly excurciating challenges in managing a high volume of Covid Patientes. 
                        </Typography>
                    </Paper>
                </Grid>

            </Grid>
        </div>

    )







    // return(
    //     <div className={classes.root}>
    //         {/*Title / login Section   */}
    //         <Grid container spacing={2} className={classes.root}>
    //             <Grid item>
    //                 <Grid item xs={10}>
    //                     <Paper className={classes.paper}>
    //                     <Typography variant="h2" component="h2" gutterBottom>
    //                         PPE Inventory Manager Beta 😷😷
    //                     </Typography>
    //                     </Paper>
    //                 </Grid>
    //                 <Grid item xs={2}>
    //                     <Paper className={classes.paper}>
    //                         <Link to="/input">
    //                             <Button variant="contained" color="primary">
    //                                 Sign in / Sign Up
    //                             </Button>
    //                         </Link>
    //                     </Paper>
    //                 </Grid>
    //             </Grid>
    //         </Grid>

    //         {/* button section  */}
    //         <Grid container className={classes.root} spacing={2}>
    //             <Grid item xs={12}>
    //                 <Grid container justify="center" spacing={10}>
    //                     <Grid item >
    //                         <Paper className={classes.paper2}>
                                // <Link to="/input">
                                //     <Button variant="contained" color="primary">
                                //         Change Inventory here. 
                                //     </Button>
                                // </Link>
    //                             <Typography variant="body1" gutterBottom>
    //                                 Add to or subtract from your hospital's inventory!
    //                             </Typography>
    //                         </Paper>
    //                     </Grid>
    //                     <Grid item >
    //                         <Paper className={classes.paper2}>
    //                             <Link to="/input">
    //                                 <Button variant="contained" color="primary">
    //                                     Change Inventory here. 
    //                                 </Button>
    //                             </Link>
    //                         </Paper>
    //                     </Grid>
    //                     <Grid item >
    //                         <Paper className={classes.paper2}>
    //                             <Link to="/input">
    //                                 <Button variant="contained" color="primary">
    //                                     Change Inventory here. 
    //                                 </Button>
    //                             </Link>
    //                         </Paper>
    //                     </Grid>
    //                 </Grid>
                    
    //             </Grid>
    //         </Grid>
    //     </div>
    // )
}