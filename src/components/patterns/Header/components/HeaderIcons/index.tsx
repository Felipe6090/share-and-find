import * as S from "./styles";
import * as I from "../../../Inputs";

import Image from "next/image";

export default function HeaderIcons() {
  return (
    <S.IconsMainDiv>
      <Image
        src="/images/icons/notification.png"
        alt="NotificationIcon"
        width={25}
        height={25}
      />
    </S.IconsMainDiv>
  );
}
