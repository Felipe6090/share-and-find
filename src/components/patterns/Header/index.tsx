import Logo from "../Logo";

import HeaderIcons from "./components/HeaderIcons";
import SearchInput from "./components/SearchInput";

import * as S from "./styles";

export default function Header() {
  return (
    <S.MainHeaderDiv>
      <Logo />

      <SearchInput />

      <HeaderIcons />
    </S.MainHeaderDiv>
  );
}
