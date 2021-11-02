import React from "react";
import styled from "styled-components";

const StyledBigButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 32px;
  border: none;
  text-transform: uppercase;
  font-family: "Comfortaa";
  font-size: 16px;

  &:disabled,
  &[disabled] {
    color: ${(props) => props.theme.tone};
    font-weight: lighter;
  }
  background-color: ${(props) => props.theme.themePrimary};
  color: ${(props) => props.theme.colorDarkBg};

  .button.secondary {
    background-color: #fff;
    color: #000;
    border: 2px solid ${(props) => props.theme.themePrimary};
  }
`;

function BigButton(props) {
  const className = `button ${props.type}`;

  return (
    <StyledBigButton className={className} onClick={props.handleClick}>
      {props.icon && props.icon} {props.label}
    </StyledBigButton>
  );
}

BigButton.defaultProps = {
  type: "secondary",
};

export default BigButton;
