import styled from "styled-components";

type ITypes = {
  header?: boolean;
  theme?: any;
};

export const LogoStyle = styled.p`
  font-family: ${(props) => props.theme.fonts.Logo.fontFamily};

  ${(props) => props.theme.fonts.Logo.LogoConfig};

  font-size: ${(props: ITypes) =>
    props.header ? "1.5rem" : props.theme.fonts.Logo.LogoSize};
  font-weight: bold;
`;
