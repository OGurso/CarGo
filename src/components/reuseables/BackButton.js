import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";

const BackButton = () => {
    let history = useHistory();
    return <ArrowBackIcon onClick={() => history.goBack()} />;
};

export default BackButton;
