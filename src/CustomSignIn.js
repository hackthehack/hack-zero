import React from "react";
import { SignIn } from "aws-amplify-react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import logo from "./logo-trans.png";

export class CustomSignIn extends SignIn {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signIn", "signedOut", "signedUp"];
  }

  showComponent() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <img src={logo} alt="logo" style={{ width: "100%" }} />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            noValidate
            onSubmit={e => {
              e.preventDefault();
              super.signIn();
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
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  onClick={() => super.changeState("forgotPassword")}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" onClick={() => super.changeState("signUp")}>
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}
