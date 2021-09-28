import React, { useContext } from "react";

import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import { AuthUserContext, withAuthorization } from "../Session";
import { StyledBigButton } from "../../compStyles";

const AccountPage = ({ theme, setTheme }) => {
  const { email } = useContext(AuthUserContext);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div>
      <h1>Account: {email}</h1>
      <StyledBigButton
        onClick={() => {
          themeToggler();
        }}
      >
        MODE
      </StyledBigButton>
      <PasswordForgetForm />
      <PasswordChangeForm />
    </div>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
