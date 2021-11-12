import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "../Navigation";
// import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import Filter from "../Filter";
import ChatPage from "../Chat";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import Cars from "../Cars";
import CarReg from "../CarReg";
import CarInfo from "../Cars/CarInfo";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";
import { lightTheme, darkTheme } from "./../../themes";
import { GlobalStyles } from "./../../globalStyles";
import { ThemeProvider } from "styled-components";
import { useLocalStorageState } from "../../utils";
import Landing from "./../Landing/index";

const App = () => {
    const [theme, setTheme] = useLocalStorageState("theme", "light");
    const [selectedCar, setSelectedCar] = useState({});

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Router>
                <Navigation />
                <Route exact path={ROUTES.LANDING} component={Landing} />
                <Route
                    exact
                    path={ROUTES.FILTER}
                    component={() => <Filter theme={theme} />}
                />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                <Route
                    path={ROUTES.PASSWORD_FORGET}
                    component={PasswordForgetPage}
                />
                <Route path={ROUTES.CHAT} component={ChatPage} />

                <Route
                    path={ROUTES.ACCOUNT}
                    component={() => (
                        <AccountPage theme={theme} setTheme={setTheme} />
                    )}
                />
                <Route path={ROUTES.ADMIN} component={AdminPage} />
                <Route
                    path={ROUTES.CARINFO}
                    component={() => <CarInfo selectedCar={selectedCar} />}
                />
                <Route
                    path={ROUTES.CARREG}
                    exact
                    component={() => <CarReg theme={theme} />}
                />

                <Route path={[ROUTES.MAP, ROUTES.LIST]} exact>
                    <Cars setSelectedCar={setSelectedCar} />
                </Route>
            </Router>
        </ThemeProvider>
    );
};

export default withAuthentication(App);
