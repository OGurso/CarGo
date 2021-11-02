import React, { useContext, useState } from "react";

import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import { AuthUserContext, withAuthorization } from "../Session";
import { StyledBigButton, CenterAll } from "../../compStyles";
// import Toggle from "./../reuseables/Toggle";
// import ButtonGroup from "./../reuseables/ToggleTwo";
import ToggleButton from "./../reuseables/ToggleButton";

const AccountPage = ({ theme, setTheme }) => {
  const { username } = useContext(AuthUserContext);

  const themeToggler = (e) => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const toggleOptions = [
    { name: "Light", value: "light" },
    { name: "Dark", value: "dark" },
  ];

  // function onChange(e) {
  //   console.log(e.target.value);
  // }
  return (
    <CenterAll>
      <h1>Account: {username}</h1>
      {/* <ToggleButton options={toggleOptions} onChange={(e) => themeToggler(e)} /> */}
      {/* <ToggleButton
        
        defaultActive={1}
        onClick={() => themeToggler()}
      /> */}
      {/* <ButtonGroup onChange={onChange} options={alternatives} name="themes" /> */}
      <StyledBigButton
        onClick={() => {
          themeToggler();
        }}
      >
        MODE
      </StyledBigButton>
      <PasswordForgetForm />
      <PasswordChangeForm />
    </CenterAll>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
