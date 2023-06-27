import { primaryFont } from "@/utils/fonts/fonts";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  isDisabled: boolean;
  actionOnClick?: () => void;
  type?: string;
}

const Button = ({
  text,
  isDisabled,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled
      disabled={isDisabled}
      onClick={actionOnClick}
      className={`btn btn-outline-success ${primaryFont.className}`}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
