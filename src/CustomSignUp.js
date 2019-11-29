import React from "react";
import { SignUp } from "aws-amplify-react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import logo from "./logo-trans.png";

export class CustomSignUp extends SignUp {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signUp"];
    this.signUpFields = [
      {
        label: "Email",
        key: "email",
        required: true,
        displayOrder: 1,
        type: "string"
      },
      {
        label: "Password",
        key: "password",
        required: true,
        displayOrder: 2,
        type: "password"
      },
      {
        label: "Name",
        key: "name",
        required: true,
        displayOrder: 3,
        type: "string"
      },
      {
        label: "Phone",
        key: "phone_number",
        required: true,
        displayOrder: 4,
        type: "phone_number"
      }
    ];
  }

  showComponent() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <img src={logo} alt="logo" style={{ width: "100%" }} />
          <Typography component="h1" variant="h5">
            Register for Hack Day!
          </Typography>
          <form
            noValidate
            onSubmit={e => {
              e.preventDefault();
              super.signUp();
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={this.handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              label="Name"
              id="name"
              autoComplete="name"
              onChange={this.handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="phone_number"
              label="Phone"
              id="phone_number"
              type="tel"
              autoComplete="phone_number"
              onChange={event => {
                const phoneNumber = event.target.value.replace(/^0/, '+61')
                this.onPhoneNumberChanged(phoneNumber)
              }}
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" onClick={() => super.changeState("signIn")}>
                  Sign In
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}
