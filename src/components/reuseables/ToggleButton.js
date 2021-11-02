import React, { useState } from "react";
import styled from "styled-components";

const RadioContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  height: 38px;
  margin-top: 1rem;
  padding: 0 10px;

  background: black;

  & > * input {
    visibility: hidden;
    display: none;
  }

  > label {
    display: flex;
    align-items: center;
    height: 2rem;
    padding: 5px 20px;
    letter-spacing: 0.1rem;
    z-index: 2;
    text-align: center;
    margin: 0px 2px;
    &:hover {
      opacity: 0.7;
    }
  }

  input:checked {
    visibility: hidden;
  }

  button {
    position: absolute;
    top: 2;
    height: 2rem;
    border: none;
    padding: 0.3rem;
    border-radius: 10px;
    letter-spacing: 0.1rem;
    opacity: 0.7;
    z-index: 1;
    transition: all 0.3s linear;
  }
`;

const ToggleButton = ({ options }) => {
  // console.log()

  const [selected, setSelected] = useState(true);
  const [defaultValue, setDefaultValue] = useState(0);

  const handleChange = (e) => {
    setSelected(e.target.value === selected);
    console.log(e.target.value);
  };

  const delAvWidth = 100 / options.length;

  const style = {
    width: `calc(${delAvWidth} * 1%)`,
    left: !defaultValue ? "0" : `calc(${delAvWidth} * ${defaultValue} * 1%)`,
  };

  return (
    <RadioContainer onChange={handleChange}>
      {options.map((button, index) => (
        <label
          key={button.name}
          htmlFor={button.value}
          onChange={() => setDefaultValue(index)}
        >
          <input
            key={button.value}
            type="radio"
            id={button.value}
            value={button.value}
            name="options"
            defaultChecked={button.default}
          />
          {button.name}
        </label>
      ))}
      <button style={style}></button>
    </RadioContainer>
  );
};

// function index(props) {
//   return <Buttons options={props.options} />;
// }

export default ToggleButton;
