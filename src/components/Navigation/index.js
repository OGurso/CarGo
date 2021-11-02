import React, { useState } from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";

import { AuthUserContext } from "../Session";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CalendarToday from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Logout from "@mui/icons-material/Logout";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationAuth authUser={authUser} /> : null)}
    </AuthUserContext.Consumer>
  </div>
);

// authUser.roles[ROLES.ADMIN]
const NavigationAuth = ({ authUser }) => {
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 100,
        width: "100%",
      }}
      md={{
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 100,
        height: "45px",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          to={ROUTES.FILTER}
          label="FILTER"
          icon={<CalendarToday />}
        />
        <BottomNavigationAction
          component={Link}
          to={ROUTES.CHAT}
          label="CHAT"
          icon={<AddCircleOutlineIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to={ROUTES.ACCOUNT}
          label="ACCOUNT"
          icon={<AccountCircle />}
        />

        {!!authUser.roles[ROLES.ADMIN] && (
          <BottomNavigationAction
            component={Link}
            to={ROLES.ADMIN}
            label="ADMIN"
            icon={<PersonIcon />}
          />
        )}
        <BottomNavigationAction
          component={SignOutButton}
          to={ROLES.ADMIN}
          label="Sign out"
          icon={<Logout />}
        />
      </BottomNavigation>
    </Box>
  );
};

// const NavigationNonAuth = () => (
//   <ul>
//     <li>
//       <Link to={ROUTES.LANDING}>Landing</Link>
//     </li>
//     <li>
//       <Link to={ROUTES.SIGN_IN}>Login</Link>
//     </li>
//   </ul>
// );

export default Navigation;
