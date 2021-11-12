import { StyledInput, StyledBigButton } from "../../compStyles";

const ChoosePrice = ({ nextStep }) => {
    return (
        <>
            <h2>Rekommended daily price for your car is $35</h2>
            <label>Set your daily price</label>
            <StyledInput value="$"></StyledInput>
            <StyledBigButton onClick={() => nextStep()}>Next</StyledBigButton>
        </>
    );
};

export default ChoosePrice;
