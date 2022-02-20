import * as S from "./styles";
import * as I from "../../../patterns/Inputs";

type IType = {
  onClose: () => void;
};

export default function UnregisteredModal({ onClose }: IType) {
  return (
    <S.ModalMainDiv>
      <I.GoogleButton size="large" onClick={onClose}>
        asdjsad
      </I.GoogleButton>

      <I.GithubButton size="large" onClick={onClose}>
        asdjsad
      </I.GithubButton>
    </S.ModalMainDiv>
  );
}
