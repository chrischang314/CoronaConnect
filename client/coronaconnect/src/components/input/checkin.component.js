import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//         Staff Information 📋📋

export default function AddressForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>

        <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
            Staff Information 📋📋
            </Typography>
          </Grid>
        </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
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
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Gear Used 🎒🎒
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" gutterBottom>
            Number of N95 Masks
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
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="body1" gutterBottom>
            Number of Surgical Masks
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="n95masks"
            name="n95masks"
            label="Surgical Masks"
            fullWidth
            variant="outlined"
            autoComplete=""
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="body1" gutterBottom>
            Number of Gowns
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="n95masks"
            name="n95masks"
            label="Gowns"
            fullWidth
            variant="outlined"
            autoComplete=""
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="body1" gutterBottom>
            Number of Gloves
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="n95masks"
            name="n95masks"
            label="Gloves"
            fullWidth
            variant="outlined"
            autoComplete=""
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" gutterBottom>
            Number of Face Masks
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="n95masks"
            name="n95masks"
            label="Face Masks"
            fullWidth
            variant="outlined"
            autoComplete=""
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}