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
  type,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      disabled={isDisabled}
      onClick={actionOnClick}
      className="btn btn-outline-success"
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
