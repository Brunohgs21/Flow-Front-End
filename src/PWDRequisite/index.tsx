import { DivCheck } from "../components/FormRegister/styles";

interface IPWDRequisiteProps {
  capsLetterFlag: string;
  numberFlag: string;
  pwdLengthFlag: string;
  specialCharFlag: string;
}

const PWDRequisite = ({
  capsLetterFlag,
  numberFlag,
  pwdLengthFlag,
  specialCharFlag,
}: IPWDRequisiteProps) => {
  return (
    <DivCheck>
      <p className={capsLetterFlag}>Deve conter no mínimo 1 letra maiúscula</p>
      <p className={numberFlag}>Deve conter no mínimo 1 número</p>
      <p className={pwdLengthFlag}>Deve conter no mínimo 8 caracteres</p>
      <p className={specialCharFlag}>
        Deve conter no mínimo 1 caractere especial
      </p>
    </DivCheck>
  );
};

export default PWDRequisite;
