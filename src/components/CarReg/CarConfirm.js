import { StyledBigButton } from "../../compStyles";

const CarConfirm = ({ nextStep, activeStep }) => {
    const car = activeStep.data;
    return (
        <>
            <h2>{car.model}</h2>
            <img src={car.img} alt="Image of Your Car" />
            <StyledBigButton onClick={() => nextStep()}>Next</StyledBigButton>
        </>
    );
};

export default CarConfirm;
