import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html{
  /* margin:0;
  padding:0;
  width:100vw;
  height:100vh; */
}
body{
  background-color: ${(props) => props.theme.bgPrimary};
  color: ${(props) => props.theme.color};

}
a{
  color: ${(props) => props.theme.color};
}

h1, h2, h3{
  font-family: "Comfortaa";
  h3{
    color:${(props) => props.theme.tone};
  }
}
h1,p{
  padding: 0 20px;
}
main{
  display:flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
`;
