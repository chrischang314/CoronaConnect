import React, {component} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';



// import AddressForm from './checkin.component';
// import PaymentForm from './payment.component';
// import Review from './review.component';

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

const useStyles = theme => ({
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
});


class DonationForm extends component{
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onSubmitReload = this.onSubmitReload.bind(this)

        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangeStaffID = this.onChangeStaffID.bind(this)
        this.onChangeN95masks = this.onChangeN95masks.bind(this)
        this.onChangeSurgicalMasks = this.onChangeSurgicalMasks.bind(this)
        this.onChangeGowns = this.onChangeGowns.bind(this)
        this.onChangeGloves = this.onChangeGloves.bind(this)
        this.onChangeFaceMasks = this.onChangeFaceMasks.bind(this)
        

        this.state = {
            firstName: '',
            lastName:'',
            staffID:'',
            N95masks:'',
            surgicalMasks:'',
            gowns:'',
            gloves:'',
            faceMasks:'',
        }
        this.classes = useStyles();
    }

    onChangeFirstName(e){
        this.setState({
            firstName: e.target.value
        })
    }
    onChangeLastName(e){
        this.setState({
            lastName: e.target.value
        })
    }
    onChangeStaffID(e){
        this.setState({
            staffID: e.target.value
        })
    }
    onChangeN95masks(e){
        this.setState({
            N95masks: e.target.value
        })
    }
    onChangeSurgicalMasks(e){
        this.setState({
            surgicalMasks: e.target.value
        })
    }
    onChangeGowns(e){
        this.setState({
            gowns: e.target.value
        })
    }
    onChangeGloves(e){
        this.setState({
            gloves: e.target.value
        })
    }
    onChangeFaceMasks(e){
        this.setState({
            faceMasks: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault()
        //plug into database backend API using values in state

        window.location='/'

    }    
    onSubmitReload(e){
        e.preventDefault()
        //plug into database backend API using values in state


        window.location='/'
    }

    render(){
        const {classes} = this.props
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
                    {/* FORM CONTENT Below */}
                    <React.Fragment>
                        <Typography variant="h6" gutterBottom>
                            Staff Information 📋📋
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="First name"
                                fullWidth
                                autoComplete="fname"
                                value={this.state.firstName}
                                onChange={this.onChangeFirstName}
                                // onChange={}
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Last name"
                                fullWidth
                                autoComplete="lname"
                                value={this.state.lastName}
                                onChange={this.onChangeLastName}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                required
                                id="staffID"
                                name="staffID"
                                label="Staff ID"
                                fullWidth
                                autoComplete="Staff ID"
                                value={this.state.staffID}
                                onChange={this.onChangeStaffID}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom>
                                Gear Used 🎒🎒
                            </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Typography variant="body1" gutterBottom>
                                N95 Masks
                            </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="n95masks"
                                name="n95masks"
                                label="N95 Masks"
                                fullWidth
                                variant="outlined"
                                autoComplete=""
                                value={this.state.N95masks}
                                onChange={this.onChangeN95masks}
                            />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                            <Typography variant="body1" gutterBottom>
                                Surgical Masks
                            </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="surgicalMasks"
                                name="surgicalMasks"
                                label="Surgical Masks"
                                fullWidth
                                variant="outlined"
                                autoComplete=""
                                value={this.state.surgicalMasks}
                                onChange={this.onChangeSurgicalMasks}
                            />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                            <Typography variant="body1" gutterBottom>
                                Gowns
                            </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="gowns"
                                name="gowns"
                                label="Gowns"
                                fullWidth
                                variant="outlined"
                                autoComplete=""
                                value={this.state.gowns}
                                onChange={this.onChangeGowns}
                            />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                            <Typography variant="body1" gutterBottom>
                                Gloves
                            </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="gloves"
                                name="gloves"
                                label="Gloves"
                                fullWidth
                                variant="outlined"
                                autoComplete=""
                                value={this.state.gloves}
                                onChange={this.onChangeGloves}
                            />
                            </Grid>
                            
                            <Grid item xs={12} sm={6}>
                            <Typography variant="body1" gutterBottom>
                                Face Masks
                            </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="faceMasks"
                                name="faceMasks"
                                label="Face Masks"
                                fullWidth
                                variant="outlined"
                                autoComplete=""
                                value={this.state.faceMasks}
                                onChange={this.onChangeFaceMasks}
                            />
                            </Grid>
                        </Grid>
                        </React.Fragment>
                    {/* bottom buttons section */}
                    <div className={classes.buttons}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.onSubmitReload}
                            className={classes.button}
                        >
                            Add Another staff Member
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

export default withStyles(useStyles)(DonationForm)