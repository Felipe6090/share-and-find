import * as S from "./styles";
import * as T from "../../../../components/foundations/Texts";

import Image from "next/image";

import i18next from "../../../../utils/i18n";

export default function Illustration() {
  return (
    <S.IllustrationMainDiv>
      <S.IllustrationImg>
        <Image
          src="/images/illustration.png"
          width={313}
          height={403}
          alt="mudar depois"
        />
      </S.IllustrationImg>

      <T.DefaultH1>{i18next.t("LoginScreen.IllustrationH1")}</T.DefaultH1>

      <T.DefaultSpan>{i18next.t("LoginScreen.IllustrationSpan")}</T.DefaultSpan>
    </S.IllustrationMainDiv>
  );
}
