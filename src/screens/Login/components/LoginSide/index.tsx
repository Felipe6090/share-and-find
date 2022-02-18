import * as S from "./styles";

import i18next from "../../../../utils/i18n";

import Logo from "../../../../components/patterns/Logo";

import {
  GoogleButton,
  GithubButton,
} from "../../../../components/patterns/Inputs";

export default function LoginSide() {
  return (
    <S.LoginSideMainDiv>
      <Logo />

      <GoogleButton size="large">
        {i18next.t("LoginScreen.GoogleButton")}
      </GoogleButton>

      <GithubButton size="large">
        {i18next.t("LoginScreen.GithubButton")}
      </GithubButton>
    </S.LoginSideMainDiv>
  );
}
