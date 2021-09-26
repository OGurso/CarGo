import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.bgPrimary};
    color: ${(props) => props.theme.color};
}
a{
  color: ${(props) => props.theme.color};
}
input{
  width: 250px;
  height: 50px;
  border: 2px solid ${(props) => props.theme.themePrimary};
  border-radius: 32px;
  font-size: 14px;
  padding: 0 18px;
  background-color : ${(props) => props.theme.bgPrimary}; 
  color : ${(props) => props.theme.color}; 
  
  &::placeholder{
    color: ${(props) => props.theme.color};
  }
}
`;
