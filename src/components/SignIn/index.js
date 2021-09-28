import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import {
  StyledInput,
  InputwithIcon,
  StyledBigButton,
  StyledForm,
} from "../../compStyles";
import emailIcon from "../../img/icons/email.svg";
import lockIcon from "../../img/icons/lock.svg";
import googlelogin from "../../img/googlelogin.svg";

const SignInPage = () => (
  <main>
    <h1>Login</h1>
    <SignInForm />
    <h3>OR</h3>
    <SignInGoogle />
    <PasswordForgetLink />

    <SignUpLink />
  </main>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <StyledForm onSubmit={this.onSubmit}>
        <InputwithIcon>
          <img src={emailIcon} />
          <StyledInput
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
        </InputwithIcon>
        <InputwithIcon>
          <img src={lockIcon} />
          <StyledInput
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
        </InputwithIcon>

        <StyledBigButton disabled={isInvalid} type="submit">
          LOGIN
        </StyledBigButton>
        {error && <p>{error.message}</p>}
      </StyledForm>
    );
  }
}

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  onSubmit = (event) => {
    this.props.firebase
      .doSignInWithGoogle()
      .then((socialAuthUser) => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.user.displayName,
          email: socialAuthUser.user.email,
          roles: {},
        });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  render() {
    const { error } = this.state;
    return (
      <div>
        <img onClick={this.onSubmit} src={googlelogin} />
        {error && <p>{error.message}</p>}
      </div>
    );
  }
}

const SignInForm = withRouter(withFirebase(SignInFormBase));

const SignInGoogle = withRouter(withFirebase(SignInGoogleBase));

export default SignInPage;

export { SignInForm, SignInGoogle };
