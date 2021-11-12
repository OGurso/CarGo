import { StyledInput, StyledBigButton } from "../../compStyles";
import { useState } from "react";
import { fakeCarApi } from "../../API/fakeData";
import Alert from "@mui/material/Alert";

const SearchReg = ({ nextStep }) => {
    const [search, setSearch] = useState("ABC123");
    const [error, setError] = useState();
    function queryData(regnr) {
        let response = {
            ok: true,
        };

        if (response.ok) {
            return fakeCarApi;
        } else {
            return false;
        }
    }
    const checkReg = () => {
        let regnr = search;
        let response = false;
        if (!(response = queryData(regnr))) {
            setError(<Alert severity="error">Api failed!</Alert>);
        } else {
            let found = response.find((e) => e.reg === regnr);

            if (found) {
                nextStep(found);
            } else {
                setError(
                    <Alert severity="warning">
                        <p>Car not found!</p>
                        <p>Try ABC123 for demo purpuses</p>
                    </Alert>
                );
            }
        }
    };
    return (
        <>
            <label>Vehicle Registration plate</label>
            {error}
            <StyledInput
                value={search}
                onChange={(element) => setSearch(element.target.value)}
            ></StyledInput>

            <StyledBigButton onClick={() => checkReg()}>Next</StyledBigButton>
        </>
    );
};

export default SearchReg;
