import { HeaderWithBack, CenterAll } from "../../compStyles";
import React from "react";
import BackButton from "../reuseables/BackButton";
import { Stepper, Step, StepLabel } from "@mui/material";
import styled from "styled-components";
import {
    Available,
    SearchReg,
    CarConfirm,
    UploadImages,
    ChoosePrice,
    Confirm,
} from "./export";

const CarReg = ({ theme }) => {
    const [activeStep, setActiveStep] = React.useState({ data: "", step: 0 });

    const Container = styled.div`
        display: flex;
        min-height: calc(100vh - 310px);
        justify-content: center;
        align-items: center;
        font-family: "Comfortaa";
        & > div > * {
            margin-bottom: 30px;
            padding: 0 20px;
        }

        & > div > label {
            font-size: 18px;
        }
    `;
    const StyledHeader = styled.div`
        background: ${(props) => props.theme.bgSecondary};
        padding: 0 40px;
        display: flex;
        height: 125px;
        align-items: center;
        justify-content: flex-start;
        > h3 {
            color: ${(props) => props.theme.color};
            position: relative;
            &:after {
                content: " ";
                background: ${(props) => props.theme.color};
                height: 2px;
                width: 100%;
                position: absolute;
                bottom: -15px;
                left: 0;
            }
        }
    `;
    //component object with assocciative title
    let steps = [
        {
            title: "Rent Your Car",
            view: <SearchReg />,
        },
        {
            title: "Is this your car",
            view: <CarConfirm />,
        },
        {
            title: "Upload Images",
            view: <UploadImages />,
        },
        {
            title: "Choose Price",
            view: <ChoosePrice />,
        },
        {
            title: "When is it Available",
            view: <Available theme={theme} />,
        },
        {
            title: "Congratulation",
            view: <Confirm />,
        },
    ];
    //changes view depending on whats active which is saved under the address activeStep.step
    const changeView = (data) => {
        let state = {};
        if (!data) {
            state = { ...activeStep };
            state.step = state.step + 1;
        } else {
            state = { data: data, step: activeStep.step + 1 };
        }
        setActiveStep(state);
    };
    return (
        <>
            <HeaderWithBack>
                <BackButton />
            </HeaderWithBack>
            <Stepper
                activeStep={activeStep.step}
                sx={{
                    width: "70%",
                    margin: "30px auto",
                }}
            >
                {steps.map((item, index) => {
                    return (
                        <Step
                            key={index}
                            sx={{
                                padding: 0,
                            }}
                        >
                            <StepLabel
                                icon=""
                                sx={{
                                    " > span.MuiStepLabel-iconContainer": {
                                        padding: 0,
                                    },
                                    " svg.Mui-completed": { color: "#43456C" },
                                    " svg.Mui-active": { color: "#43456C" },
                                }}
                            ></StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <StyledHeader>
                <h3>{steps[activeStep.step].title}</h3>
            </StyledHeader>

            <Container>
                <CenterAll>
                    {/* create a cloned components depending on whats defined under steps and pass states to child components to control view */}
                    {React.cloneElement(steps[activeStep.step].view, {
                        nextStep: changeView,
                        activeStep: activeStep,
                    })}
                </CenterAll>
            </Container>
        </>
    );
};

export default CarReg;
