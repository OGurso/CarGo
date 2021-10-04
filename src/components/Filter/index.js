import React from "react";
import { withAuthorization /*, AuthUserContext*/ } from "../Session";
import Datepicker from "./Datepicker";
import { lightTheme, darkTheme } from "../../themes";

// import { withFirebase } from "../Firebase";

const Filter = ({ theme }) => {
  // console.log(props.theme);
  return (
    <>
      <h1>Filter</h1>
      {/* {console.log(props.theme)} */}
      <Datepicker theme={theme === "light" ? lightTheme : darkTheme} />
    </>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Filter);
