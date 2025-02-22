import React from "react";
import "./App.css";

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import {
  ConfirmSignIn,
  ForgotPassword,
  RequireNewPassword,
  Greetings,
  Authenticator
} from "aws-amplify-react";

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import "typeface-roboto";
import Dashboard from "./Dashboard";

import { CustomSignIn } from "./CustomSignIn";
import { CustomSignUp } from "./CustomSignUp";
import { CustomConfirmSignUp } from "./CustomConfirmSignUp";

Amplify.configure(awsconfig);

const App = ({ authState }) => (
  <>
    {/* <Authenticator hideDefault={true}>
      <Greetings inGreeting={username => "Hello " + username} />
    </Authenticator> */}
    {authState === "signedIn" && <Dashboard />}
  </>
);

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <Link color="inherit" href="https://www.iag.com.au/">
      IAG
    </Link> 2019
  </Typography>
);

const AppWithAuth = () => (
  <>
    <Authenticator
      hideDefault={true}
      usernameAttributes="email"
      includeGreetings={true}
    >
      <CustomSignIn />
      <ConfirmSignIn />
      <CustomSignUp />
      <CustomConfirmSignUp />
      <ForgotPassword />
      <RequireNewPassword />
      <Greetings />
      <App />
    </Authenticator>
  <Container>
    <Box mt={8}>
      <Copyright />
    </Box>
  </Container>
  </>
);

export default AppWithAuth;
