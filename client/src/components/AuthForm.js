import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../store';
import ReactSignupLoginComponent from 'react-signup-login-component';

const AuthForm = () => {
  const signupWasClickedCallback = data => {
    console.log(data);
    alert('Signup callback, see log on the console to see the data.');
  };
  const loginWasClickedCallback = data => {
    console.log(data);
    alert('Login callback, see log on the console to see the data.');
  };
  const recoverPasswordWasClickedCallback = data => {
    console.log(data);
    alert('Recover password callback, see log on the console to see the data.');
  };
  return (
    <div>
      <ReactSignupLoginComponent
        usernameCustomLabel="Email"
        // goToSignupCustomLabel="Signup"
        submitLoginCustomLabel="Login"
        title="Signup/Signin"
        handleSignup={signupWasClickedCallback}
        handleLogin={loginWasClickedCallback}
        handleRecoverPassword={recoverPasswordWasClickedCallback}
        styles={{
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

const mapSignupDispatch = (dispatch, data) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const method = data.passwordConfirmation ? 'signin' : 'login';
      const email = data.username;
      const password = data.password;
      dispatch(auth(email, password, method));
    },
  };
};

// export const Login = connect(
//   mapLoginDispatch
// )(AuthForm);
export default connect(mapSignupDispatch)(AuthForm);
