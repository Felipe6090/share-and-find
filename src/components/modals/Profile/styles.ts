import { ModalUnstyled } from "@mui/base";

import styled from "styled-components";

export const ModalMainDiv = styled(ModalUnstyled)`
  display: flex;

  align-items: center;
  justify-content: center;

  background-color: #000;

  backdrop-filter: blur(2px);
  outline: none;

  position: absolute;

  z-index: 2;

  right: 25px;
  top: 50px;
`;
