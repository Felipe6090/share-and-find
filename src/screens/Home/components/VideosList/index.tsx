import VideosListMock from "../../../../mocks/VideosListMock";

import * as S from "./styles";

export default function VideosList() {
  return (
    <S.ListMainDiv>
      <S.ListTitle>Top Vídeos</S.ListTitle>

      <S.VideosList>
        {VideosListMock.map((video) => {
          return (
            <S.VideoDiv key={video.videoId}>
              <S.VideoThumbnail
                src={video.thumbnail}
                layout="fixed"
                width={280}
                height={160}
                alt="Vídeo Thumbnail"
              />

              <S.InfosDiv>
                <S.ChannelImg
                  src={video.channelImg}
                  layout="fixed"
                  width={40}
                  height={40}
                  alt="Channel Image"
                />

                <S.SubInfosDiv>
                  <S.VideoTitle>{video.title}</S.VideoTitle>

                  <S.ChannelName>{video.channel}</S.ChannelName>

                  <S.LaunchDate>{video.postDate}</S.LaunchDate>
                </S.SubInfosDiv>
              </S.InfosDiv>
            </S.VideoDiv>
          );
        })}
      </S.VideosList>

      <S.ListTitle>Vídeos Recomendados</S.ListTitle>

      <S.VideosList>
        {VideosListMock.map((video) => {
          return (
            <S.VideoDiv key={video.videoId}>
              <S.VideoThumbnail
                src={video.thumbnail}
                layout="fixed"
                width={280}
                height={160}
                sizes="100%"
                alt="Vídeo Thumbnail"
              />

              <S.InfosDiv>
                <S.ChannelImg
                  src={video.channelImg}
                  layout="fixed"
                  width={40}
                  height={40}
                  alt="Channel Image"
                />

                <S.SubInfosDiv>
                  <S.VideoTitle>{video.title}</S.VideoTitle>

                  <S.ChannelName>{video.channel}</S.ChannelName>

                  <S.LaunchDate>{video.postDate}</S.LaunchDate>
                </S.SubInfosDiv>
              </S.InfosDiv>
            </S.VideoDiv>
          );
        })}
      </S.VideosList>
    </S.ListMainDiv>
  );
}
