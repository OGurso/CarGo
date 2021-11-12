import React, { Component } from "react";
import { SignInGoogle } from "../SignIn";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";

import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import {
    StyledBigButton,
    StyledInput,
    InputwithIcon,
    StyledForm,
} from "../../compStyles";
import emailIcon from "../../img/icons/email.svg";
import lockIcon from "../../img/icons/lock.svg";
import personIcon from "../../img/icons/person.svg";

const SignUpPage = () => (
    <main>
        <h1>Sign Up</h1>
        <SignUpForm />
    </main>
);

const INITIAL_STATE = {
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null,
    isAdmin: false,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = (event) => {
        const { username, email, passwordOne, isAdmin } = this.state;
        const roles = {};
        if (isAdmin) {
            roles[ROLES.ADMIN] = ROLES.ADMIN;
        }
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then((authUser) => {
                // Create a user in your Firebase realtime database
                return this.props.firebase.user(authUser.user.uid).set({
                    username,
                    email,
                    roles,
                });
            })
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.FILTER);
            })
            .catch((error) => {
                this.setState({ error });
            });
        event.preventDefault();
    };
    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onChangeCheckbox = (event) => {
        this.setState({ [event.target.name]: event.target.checked });
    };

    render() {
        const { username, email, passwordOne, passwordTwo, isAdmin, error } =
            this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === "" ||
            email === "" ||
            username === "";

        return (
            <StyledForm onSubmit={this.onSubmit}>
                <InputwithIcon>
                    <img src={personIcon} alt="username-icon" />
                    <StyledInput
                        name="username"
                        value={username}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Full Name"
                        autoComplete="name"
                    />
                </InputwithIcon>
                <InputwithIcon>
                    <img src={emailIcon} alt="email-icon" />
                    <StyledInput
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Email Address"
                        autoComplete="email"
                    />
                </InputwithIcon>
                <InputwithIcon>
                    <img src={lockIcon} alt="password-icon" />
                    <StyledInput
                        name="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                    />
                </InputwithIcon>
                <InputwithIcon>
                    <img src={lockIcon} alt="password-icon" />
                    <StyledInput
                        name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        type="password"
                        placeholder="Confirm Password"
                        autoComplete="off"
                    />
                </InputwithIcon>
                <label>
                    Admin:
                    <input
                        name="isAdmin"
                        type="checkbox"
                        checked={isAdmin}
                        onChange={this.onChangeCheckbox}
                    />
                </label>
                <StyledBigButton disabled={isInvalid} type="submit">
                    Sign Up
                </StyledBigButton>

                <SignInGoogle />
                {error && <p>{error.message}</p>}
            </StyledForm>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };
