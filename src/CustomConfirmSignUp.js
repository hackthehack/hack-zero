import React from "react";
import { ConfirmSignUp } from "aws-amplify-react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import logo from "./logo-trans.png";

export class CustomConfirmSignUp extends ConfirmSignUp {
  constructor(props) {
    super(props);
    this._validAuthStates = ["confirmSignUp"];
  }

  showComponent() {
		const username = this.usernameFromAuthData();
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <img src={logo} alt="logo" style={{ width: "100%" }} />
          <Typography component="h1" variant="h5">
            Confirm Email Address
          </Typography>
          <form
            noValidate
            onSubmit={e => {
              e.preventDefault();
              super.confirm();
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              readOnly
              fullWidth
              name="username"
              label="Email"
              id="username"
              value={username ? username : ''}
              onChange={this.handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="code"
              label="Validation Code"
              id="code"
              autoComplete="off"
              onChange={this.handleInputChange}
            />
            <Typography component="p">
              Haven't received a code? <Link href="#" onClick={() => super.resend()}>Resend code</Link>
            </Typography>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Confirm
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
