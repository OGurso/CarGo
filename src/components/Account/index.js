import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import { AuthUserContext, withAuthorization } from "../Session";
import { StyledBigButton, CenterAll } from "../../compStyles";
import Logout from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const AccountPage = ({ theme, setTheme, firebase }) => {
    const { username } = useContext(AuthUserContext);

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <CenterAll>
            <h1>Account: {username}</h1>
            <NavLink exact to={ROUTES.LANDING} onClick={firebase.doSignOut}>
                <StyledBigButton>
                    <Logout />
                    SIGN OUT
                </StyledBigButton>
            </NavLink>

            <StyledBigButton
                onClick={() => {
                    themeToggler();
                }}
            >
                {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
                MODE
            </StyledBigButton>
            <PasswordForgetForm />
            <PasswordChangeForm />
        </CenterAll>
    );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
