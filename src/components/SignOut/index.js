import React from "react";
import { InlineButton } from "../../compStyles";
import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => (
  <InlineButton type="button" onClick={firebase.doSignOut}>
    Sign Out
  </InlineButton>
);

export default withFirebase(SignOutButton);
