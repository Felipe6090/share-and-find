import styled from "styled-components";

import Image from "next/image";

export const IconsMainDiv = styled.div`
  display: flex;

  width: 7%;
  justify-content: space-between;

  align-items: center;
`;

export const ImageDiv = styled.div`
  width: 24px;
  height: 24px;
`;

export const ProfileIcon = styled(Image)`
  border-radius: 100px;

  cursor: pointer;
`;
