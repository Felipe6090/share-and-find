import * as S from "./styles";

import UnregisteredModal from "./UnregisteredModal";

type IType = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginModal({ isOpen, onClose }: IType) {
  return (
    <S.ModalMainDiv open={isOpen} onClose={onClose}>
      <UnregisteredModal onClose={onClose} />
    </S.ModalMainDiv>
  );
}
