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

const CarReg = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };
    const Container = styled.div`
        display: flex;
        min-height: calc(100vh - 310px);
        justify-content: center;
        align-items: center;
    `;
    const StyledHeader = styled.div`
        background: #f8f8f8;
        padding: 0 40px;
        display: flex;
        height: 125px;
        align-items: center;
        justify-content: flex-start;
        > h3 {
            color: black;
            position: relative;
            &:after {
                content: " ";
                background: black;
                height: 2px;
                width: 100%;
                position: absolute;
                bottom: -15px;
                left: 0;
            }
        }
    `;
    let steps = [
        {
            title: "Rent Your Car",
            view: "SearchReg",
        },
        {
            title: "Is this your car",
            view: "CarConfirm",
        },
        {
            title: "Upload Images",
            view: "UploadImages",
        },
        {
            title: "Choose Price",
            view: "ChoosePrice",
        },
        {
            title: "When is it Available",
            view: "Available",
        },
        {
            title: "Congratulation",
            view: "Confirm",
        },
    ];
    const changeView = () => {
        setActiveStep(activeStep + 1);
    };
    return (
        <>
            <HeaderWithBack>
                <BackButton />
            </HeaderWithBack>
            <Stepper
                activeStep={activeStep}
                sx={{
                    width: "80%",
                    margin: "30px auto",
                }}
            >
                {steps.map((item) => {
                    return (
                        <Step
                            key={item.view}
                            sx={{
                                padding: 0,
                            }}
                        >
                            <StepLabel
                                icon=" "
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
                <h3>{steps[activeStep].title}</h3>
            </StyledHeader>

            <Container>
                <CenterAll>
                    {React.createElement(
                        steps[activeStep].view,
                        { changeView: () => changeView() },
                        null
                    )}
                </CenterAll>
            </Container>
        </>
    );
};

export default CarReg;
