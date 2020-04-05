import React, {component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import AddressForm from './checkin.component';
import PaymentForm from './payment.component';
import Review from './review.component';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));


export default class DonationForm extends component{
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeGear = this.onChangeGear.bind(this)
        this.onSubmitReload = this.onSubmitReload.bind(this)


        this.state = {
            name: '',
            patientID:'',
            N95masks:'',
            surgicalMasks:'',
            gowns:'',
            gloves:'',
            faceMasks:'',
        }


    }
    render(){
    return (
        <React.Fragment>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
            <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
                Company name
            </Typography>
            
            </Toolbar>
        </AppBar>
        <main className={classes.layout}>
            <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
                Staff Gear Form🎒🎒
            </Typography>
            <React.Fragment>
                {/* INSERT FORM CONTENT HERE */}
                {/* {getStepContent(activeStep)} */}

                {/* bottom buttons section */}
                <div className={classes.buttons}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.onSubmitReload}
                    className={classes.button}
                >
                    Another staff Member
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.onSubmit}
                    className={classes.button}
                >
                    Exit
                </Button>
                </div>
            </React.Fragment>
            </Paper>
            <Copyright />
        </main>
        </React.Fragment>
    );};
};