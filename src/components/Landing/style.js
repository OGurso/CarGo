import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  & > * {
    margin: 10% 0;
  }

  div {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    & * {
      margin: 10px auto;
    }
  }
`;
