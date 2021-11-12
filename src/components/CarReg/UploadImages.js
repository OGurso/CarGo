import { StyledBigButton } from "../../compStyles";
import UploadButtons from "../reuseables/UploadButtons";

const UploadImages = ({ nextStep }) => {
    return (
        <>
            <UploadButtons />
            <StyledBigButton onClick={() => nextStep()}>Next</StyledBigButton>
        </>
    );
};

export default UploadImages;
