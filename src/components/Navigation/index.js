import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import { AuthUserContext } from "../Session";
import { withFirebase } from "../Firebase";

import AccountCircle from "@mui/icons-material/AccountCircle";
import CalendarToday from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const NavContainer = styled.nav`
    display: flex;
    flex-wrap: nowrap;
    position: fixed;
    box-sizing: border-box;
    bottom: 0;
    left: 0;
    z-index: 101;
    width: 100%;
    height: 60px;
    padding: 4px 10px;
    background: ${(props) => props.theme.bgSecondary};
    border-top: 2px solid ${(props) => props.theme.bgPrimary};

    span {
        font-size: 12px;
    }

    & > * {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        transition: all 0.2s ease-in;

        & > * {
            color: ${(props) => props.theme.tone};
        }
    }
    .activeLink {
        border-radius: 10px;
        background: ${(props) => props.theme.bgPrimary};
        & > * {
            color: ${(props) => props.theme.themePrimary};
        }
    }
`;

const Navigation = ({ firebase }) => (
    <>
        <AuthUserContext.Consumer>
            {(authUser) =>
                authUser ? (
                    <NavigationAuth authUser={authUser} firebase={firebase} />
                ) : null
            }
        </AuthUserContext.Consumer>
    </>
);

// authUser.roles[ROLES.ADMIN]
const NavigationAuth = ({ authUser, firebase }) => {
    return (
        <NavContainer>
            <NavLink activeClassName="activeLink" to={ROUTES.FILTER}>
                <CalendarToday />
                <span>FILTER</span>
            </NavLink>
            <NavLink activeClassName="activeLink" to={ROUTES.CARREG}>
                <AddCircleOutlineIcon />
                <span>ADD CAR</span>
            </NavLink>
            <NavLink activeClassName="activeLink" to={ROUTES.ACCOUNT}>
                <AccountCircle />
                <span>ACCOUNT</span>
            </NavLink>
            {!!authUser.roles[ROLES.ADMIN] && (
                <NavLink activeClassName="activeLink" to={ROUTES.ADMIN}>
                    <PersonIcon />
                    <span>ADMIN</span>
                </NavLink>
            )}
        </NavContainer>
    );
};

export default withFirebase(Navigation);
