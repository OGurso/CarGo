import CheckIcon from "@mui/icons-material/Check";
import { StyledBigButton } from "../../compStyles";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

const Confirm = ({ theme }) => {
    const history = useHistory();
    const StyledCheck = styled(CheckIcon)`
        background: ${(props) => props.theme.themePrimary};
        color: white;
        width: 30vw !important;
        height: 30vw !important;
        border-radius: 100%;
        padding: 50px !important;
    `;
    return (
        <>
            <StyledCheck />
            <StyledBigButton onClick={() => history.push(`/map`)}>
                Done
            </StyledBigButton>
        </>
    );
};

export default Confirm;
