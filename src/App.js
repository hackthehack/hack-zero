import React from "react";
import "./App.css";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

import {
  ConfirmSignIn,
  SignUp,
  ConfirmSignUp,
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

Amplify.configure(awsconfig);

const App = ({ authState }) => (
  <>
    {/* <Authenticator hideDefault={true}>
      <Greetings inGreeting={username => "Hello " + username} />
    </Authenticator> */}
    {authState === "signedIn" && <Dashboard />}
  </>
);

const signUpConfig = {
  header: "Register for Hack Day",
  defaultCountryCode: "61",
  signUpFields: [
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
  ]
};

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <Link color="inherit" href="https://www.iag.com.au/">
      IAG
    </Link> 2019
  </Typography>
);

const AppWithAuth = () => (
  <Container>
    <Authenticator
      hideDefault={true}
      usernameAttributes="email"
      includeGreetings={true}
    >
      <CustomSignIn />
      <ConfirmSignIn />
      <SignUp signUpConfig={signUpConfig} />
      <ConfirmSignUp />
      <ForgotPassword />
      <RequireNewPassword />
      <Greetings />
      <App />
    </Authenticator>
    <Box mt={8}>
      <Copyright />
    </Box>
  </Container>
);

export default AppWithAuth;
