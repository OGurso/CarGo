// import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "../Navigation";
// import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import Filter from "../Filter";
import ChatPage from "../Chat";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import ViewMap from "../Map/Map";
import List from "./../List/List";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";
import { lightTheme, darkTheme } from "./../../themes";
import { GlobalStyles } from "./../../globalStyles";
import { ThemeProvider } from "styled-components";
import { useLocalStorageState } from "../../utils";

const App = () => {
  const [theme, setTheme] = useLocalStorageState("theme", "light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Navigation />
        <div>
          <Route
            exact
            path={[ROUTES.LANDING, ROUTES.FILTER]}
            component={() => <Filter theme={theme} />}
          />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.CHAT} component={ChatPage} />

          <Route
            path={ROUTES.ACCOUNT}
            component={() => <AccountPage theme={theme} setTheme={setTheme} />}
          />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Switch>
            <Route path={ROUTES.MAP} component={ViewMap} />
            <Route path={ROUTES.LIST} component={List} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default withAuthentication(App);
