import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Back = styled(ArrowBackIcon)`
    cursor: pointer;
`;

const BackButton = () => {
    let history = useHistory();
    return <Back onClick={() => history.goBack()} />;
};

export default BackButton;
