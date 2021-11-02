import React, { useState } from "react";
import { withAuthorization } from "../Session";
import { withFirebase } from "../Firebase";
import Datepicker from "./Datepicker";
import { lightTheme, darkTheme } from "../../themes";
import { CenterAll } from "../../compStyles";
import BigButton from "../reuseables/BigButton";
import Toggle from "../reuseables/Toggle";

const Filter = ({ theme }) => {
  const alternatives = [
    { name: "Book a car", key: "book" },
    { name: "Rent out a car", key: "rent" },
  ];
  return (
    <CenterAll>
      <Toggle alternatives={alternatives} />
      <p>When do you need a car?</p>
      <Datepicker theme={theme === "light" ? lightTheme : darkTheme} />
      <BigButton
        handleClick={() => {
          console.log("knapp tryckt");
        }}
        label="DONE"
        type="primary"
      />
      {/* <div>{tab.alternative[tab.active].key}</div> */}
    </CenterAll>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(withFirebase(Filter));
