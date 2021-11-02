import styled from "styled-components";
import React, { useState } from "react";

const StyledToggle = styled.div`
  position: relative;
  width: 270px;
  height: 30px;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.tone};
  background: ${(props) => props.theme.bgSecondary};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  user-select: none;
  padding: 0 5px;

  & > * {
    height: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
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

const Toggle = (props) => {
  const [activeButton, setActiveButton] = useState(
    props.alternatives.findIndex((a) => a)
  );

  console.log(activeButton);
  // const [activeButton, setActiveButton] = useState(
  //   props.defaultActive ? props.defaultActive : 0
  // );

  const handleClick = (e) => {
    setActiveButton(parseInt(e.target.dataset.id));
  };

  const activeChange = (e) => {
    if (e.target.dataset.id === activeButton) props.onClick();
  };

  // const addClass = (e) => {
  //   let divClass = "";
  //   if (e.target.dataset.id === activeButton) {
  //     divClass = "activeDiv";
  //   } else {
  //     divClass = null;
  //   }
  //   return divClass;
  // };

  let part = 100 / props.alternatives.length;
  if (!props.alternatives) return <></>;
  return (
    <StyledToggle onClick={(e) => activeChange(e)}>
      {props.alternatives.map((item, i) => (
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
              : activeButton === props.alternatives.length - 1
              ? "calc(" + part * activeButton + "% - 5px)"
              : "calc(" + part * activeButton + "%)",
        }}
      ></div>
    </StyledToggle>
  );
};

export default Toggle;
