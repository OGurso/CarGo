import { StyledBigButton } from "../../compStyles";
import Datepicker from "../Filter/Datepicker";
import { lightTheme, darkTheme } from "../../themes";

const SearchReg = (props) => {
    let { nextStep, theme } = props;
    return (
        <>
            <Datepicker theme={theme === "light" ? lightTheme : darkTheme} />
            <StyledBigButton onClick={() => nextStep()}>Next</StyledBigButton>
        </>
    );
};

export default SearchReg;
