import React from 'react';
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

export default AuthForm;
