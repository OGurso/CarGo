import React from "react";
import { withAuthorization } from "../Session";
import { withFirebase } from "../Firebase";
import Datepicker from "./Datepicker";
import { lightTheme, darkTheme } from "../../themes";
import { CenterAll } from "../../compStyles";
import BigButton from "../reuseables/BigButton";
import Toggle from "../reuseables/Toggle";
import * as ROUTES from "../../constants/routes";

const Filter = ({ theme, history }) => {
    const alternatives = [
        { name: "Book a car", key: "book", link: ROUTES.FILTER },
        { name: "Rent out a car", key: "rent", link: ROUTES.CARREG },
    ];
    return (
        <CenterAll>
            <Toggle
                alternatives={alternatives}
                callback={(item) => history.push(item.link)}
            />
            <p>When do you need a car?</p>

            <Datepicker theme={theme === "light" ? lightTheme : darkTheme} />

            <BigButton
                handleClick={() => {
                    history.push(ROUTES.MAP);
                }}
                label="Go to cars"
                type="primary"
            />
        </CenterAll>
    );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(withFirebase(Filter));
