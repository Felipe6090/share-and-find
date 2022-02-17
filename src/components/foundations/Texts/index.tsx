import styled from "styled-components";

export const DefaultH1 = styled.h1`
  font-family: ${(props) => props.theme.fonts.defaultFont};
  font-size: 2rem;
  color: ${(props) => props.theme.fonts.defaultColor};
`;

export const DefaultSpan = styled.span`
  font-family: ${(props) => props.theme.fonts.defaultFont};
  font-size: 1rem;
  color: ${(props) => props.theme.fonts.defaultColor};
`;
