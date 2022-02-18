import * as S from "./styles"

import Image from "next/image";

export default function ProfileIcon() {
  return (
    <S.ProfileIcon>
      <Image
        src="/images/illustration.png"
        width={313}
        height={403}
        alt="mudar depois"
      />
    </S.ProfileIcon>
  );
}
