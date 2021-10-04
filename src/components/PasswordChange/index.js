import React, { Component } from "react";
import { StyledInput, StyledBigButton, StyledForm } from "../../compStyles";
import { withFirebase } from "../Firebase";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;
    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";
    return (
      <StyledForm onSubmit={this.onSubmit}>
        <StyledInput
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="New Password"
          autoComplete="new-password"
        />
        <StyledInput
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm New Password"
          autoComplete="off"
        />
        <StyledBigButton disabled={isInvalid} type="submit">
          Reset My Password
        </StyledBigButton>
        {error && <p>{error.message}</p>}
      </StyledForm>
    );
  }
}

export default withFirebase(PasswordChangeForm);
