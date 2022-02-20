import styled from "styled-components";

import Image from "next/image";

export const ListMainDiv = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
`;

export const ListTitle = styled.p`
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;

  padding: 0 15px;

  margin-top: 75px;
`;

export const VideosList = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  column-gap: 20px;

  row-gap: 60px;

  justify-items: center;
`;

export const VideoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const VideoThumbnail = styled(Image)``;

export const InfosDiv = styled.div`
  display: flex;

  justify-content: space-between;
  padding: 0 15px 0 5px;
`;

export const ChannelImg = styled(Image)`
  border-radius: 100px;
`;

export const VideoTitle = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;

  grid-area: Title;
`;

export const SubInfosDiv = styled.div`
  display: grid;

  width: 80%;

  grid-template-columns: 50% 50%;
  grid-template-rows: 75% 25%;

  grid-template-areas:
    "Title Title"
    "ChannelName LaunchDate";
`;

export const ChannelName = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 0.8rem;

  grid-area: ChannelName;
`;

export const LaunchDate = styled.span`
  font-family: "Open Sans", sans-serif;
  font-size: 0.8rem;

  grid-area: LaunchDate;
`;
