import * as S from "./styles";

import Image from "next/image";

import LoginModal from "../../../../modals/Profile";
import { useState } from "react";

export default function HeaderIcons() {
  const imgLink = "https://avatars.githubusercontent.com/u/49456203?v=4";

  const [loginHandler, setLoginHandler] = useState(false);

  return (
    <S.IconsMainDiv>
      <S.ImageDiv>
        <Image
          src="/images/icons/notification.png"
          alt="NotificationIcon"
          layout="responsive"
          width={24}
          height={24}
        />
      </S.ImageDiv>

      <S.ProfileIcon
        loader={() => imgLink}
        src={imgLink}
        layout="fixed"
        width={30}
        height={30}
        alt="Profile Icon"
        onClick={() => {
          setLoginHandler(!loginHandler);
        }}
      />

      <LoginModal
        isOpen={loginHandler}
        onClose={() => {
          setLoginHandler(!loginHandler);
        }}
      />
    </S.IconsMainDiv>
  );
}
