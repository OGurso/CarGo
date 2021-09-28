import styled from "styled-components";

export const StyledInput = styled.input`
  width: 250px;
  height: 50px;
  border: 2px solid ${(props) => props.theme.themePrimary};
  border-radius: 32px;
  font-size: 14px;
  padding: 0 14px 0 14px;
  background-color: ${(props) => props.theme.bgPrimary};
  color: ${(props) => props.theme.color};
  font-family: "Comfortaa";

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.tone};
  }
`;

export const StyledBigButton = styled.button`
  background-color: ${(props) => props.theme.themePrimary};
  color: ${(props) => props.theme.colorDarkBg};
  width: 250px;
  height: 50px;
  border-radius: 32px;
  border: none;
  text-transform: uppercase;
  font-family: "Comfortaa";
  font-size: 18px;
  &:disabled,
  &[disabled] {
    color: ${(props) => props.theme.tone};
    font-weight: lighter;
  }
  &.secondary {
    border-radius: 32px;
    background-color: #fff;
    color: #000;
    border: 2px solid ${(props) => props.theme.themePrimary};
  }
`;

export const InlineButton = styled.button`
  background-color: ${(props) => props.theme.themePrimary};
  color: ${(props) => props.theme.colorDarkBg};
  border-radius: 32px;
  font-family: "Comfortaa";
  border: none;
`;

export const InputwithIcon = styled.div`
  position: relative;
  & > input {
    padding: 0 14px 0 30px;
    margin: 10px 0;
  }
  & > img {
    fill: ${(props) => props.theme.tone};
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  & > img,
  & > button,
  & > p {
    margin: 20px 0;
  }
`;
