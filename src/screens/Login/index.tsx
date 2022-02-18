import Illustration from "./components/Illustration";
import LoginSide from "./components/LoginSide";

import * as S from "./styles";

export default function LoginScreen() {
  return (
    <S.LoginScreenDiv>
      <Illustration />
      <LoginSide />
    </S.LoginScreenDiv>
  );
}
