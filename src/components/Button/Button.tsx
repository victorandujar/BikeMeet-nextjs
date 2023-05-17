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
    <button
      disabled={isDisabled}
      onClick={actionOnClick}
      className="btn btn-outline-success"
    >
      {text}
    </button>
  );
};

export default Button;
