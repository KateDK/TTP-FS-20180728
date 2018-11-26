import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../store/user';
import ReactSignupLoginComponent from 'react-signup-login-component';

const AuthForm = props => {
  const signupWasClickedCallback = data => {
    console.log(
      'Signup callback, see log on the console to see the data. ',
      data
    );
    props.handleAuth(data);
  };
  const loginWasClickedCallback = data => {
    console.log(
      'Login callback, see log on the console to see the data. ',
      data
    );
    props.handleAuth(data);
  };
  const recoverPasswordWasClickedCallback = data => {
    console.log(data);
    return;
  };
  return (
    <div className="authForm">
      <ReactSignupLoginComponent
        usernameCustomLabel="Email"
        submitLoginCustomLabel="Login"
        title="Signup/Signin"
        handleSignup={signupWasClickedCallback}
        handleLogin={loginWasClickedCallback}
        handleRecoverPassword={recoverPasswordWasClickedCallback}
        styles={{
          mainWrapper: {
            padding: 0,
            margin: 0,
          },
          recoverPassword: {
            wrapper: { backgroundColor: 'yellow' },
            inputWrapper: { backgroundColor: 'AliceBlue' },
            buttonsWrapper: { backgroundColor: 'Aqua' },
            input: { backgroundColor: 'LavenderBlush' },
            button: { backgroundColor: 'LightCoral' },
          },
        }}
      />
    </div>
  );
};

const mapDispatch = dispatch => {
  return {
    handleAuth: data => {
      const method = data.passwordConfirmation ? 'signup' : 'login';
      const email = data.username;
      const password = data.password;
      dispatch(auth(email, password, method));
    },
  };
};

export default connect(
  null,
  mapDispatch
)(AuthForm);
