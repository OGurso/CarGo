import styled from "styled-components";
import React, { useState, useEffect } from "react";

const StyledToggle = styled.div`
    position: relative;
    width: 90vw;
    height: 45px;
    border-radius: 100px;
    box-shadow: 0px 0px 5px ${(props) => props.theme.tone};
    background: ${(props) => props.theme.bgSecondary};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    user-select: none;
    margin: 5px;
    & > * {
        height: 35px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: capitalize;
        color: ${(props) => props.theme.tone};
        z-index: 2;
        transition: all 0.3s ease;
    }
    .active {
        position: absolute;
        background: ${(props) => props.theme.bgPrimary};
        border-radius: 100px;
        box-shadow: 0px 0px 5px ${(props) => props.theme.tone};
        z-index: 1;
    }
    .activeDiv {
        color: ${(props) => props.theme.color};
    }
`;

const Toggle = ({ alternatives, callback, setToggleCopy }) => {
    const [activeButton, setActiveButton] = useState(0);

    useEffect(() => {
        if (setToggleCopy) {
            setToggleCopy(activeButton);
        }
    }, [activeButton]);

    useEffect(() => {
        if (typeof callback != "function") return;
        callback(alternatives[activeButton]);
    }, []);

    const handleClick = (e) => {
        let index = e.target.dataset.id;
        setActiveButton(parseInt(index));
        if (typeof callback != "function") return;
        callback(alternatives[index]);
    };

    let part = 100 / alternatives.length;
    if (!alternatives) return <></>;
    return (
        <StyledToggle>
            {alternatives.map((item, i) => (
                <div
                    className={i === activeButton ? "activeDiv" : null}
                    key={i}
                    data-id={i}
                    onClick={(e) => handleClick(e)}
                >
                    {item.name}
                </div>
            ))}
            <div
                className="active"
                style={{
                    width: "calc(" + part + " * 1%)",
                    left:
                        activeButton === 0
                            ? "calc(" + part * activeButton + "% + 5px)"
                            : activeButton === alternatives.length - 1
                            ? "calc(" + part * activeButton + "% - 5px)"
                            : "calc(" + part * activeButton + "%)",
                }}
            ></div>
        </StyledToggle>
    );
};

export default Toggle;
