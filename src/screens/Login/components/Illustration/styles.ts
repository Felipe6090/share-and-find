import styled from "styled-components";


export const IllustrationMainDiv = styled.div`
  height: 100vmin;
  width: 50%;

  background-color: ${(props) => props.theme.colors.backgroundColor};

  display: flex;
  flex-direction: column;

  justify-content: flex-end;

  padding: 0 50px 50px 30px;
`;

export const IllustrationImg = styled.div`
    align-self: center;
`;