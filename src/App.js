import React from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const signUpConfig = {
  header: 'Register for Hack Day',
  defaultCountryCode: '61',
  signUpFields: [
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password'
    },
    {
      label: 'Name',
      key: 'name',
      required: true,
      displayOrder: 3,
      type: 'string'
    },
    {
      label: 'Phone',
      key: 'phone_number',
      required: true,
      displayOrder: 4,
      type: 'phone_number'
    }
  ]
}

export default withAuthenticator(App, { signUpConfig, usernameAttributes: 'email', includeGreetings: true });
