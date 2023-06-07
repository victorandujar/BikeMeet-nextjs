import styled from "styled-components";

const RecoveryEmailConfirmationStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.mainColorText};
  gap: 50px;
  padding: 70px 0;

  .email-sent {
    &__success {
      font-size: 40px;
      font-weight: 900;
      letter-spacing: 2px;
    }

    &__check-icon {
      color: green;
    }

    &__login {
      background: ${(props) =>
        props.theme.backgroundColors.secondaryBackGround};
      color: ${(props) => props.theme.colors.secondaryColorText};
      width: 80px;
      height: 30px;
      margin: 0;
      text-align: center;
      font-size: 14px;
      font-weight: 900;
      border-radius: 10px;
    }
  }

  .btn-primary {
    background-color: ${(props) => props.theme.colors.secondaryColorButton};
    --bs-btn-border-color: ${(props) =>
      props.theme.colors.secondaryColorButton};
    width: 100%;
    color: ${(props) => props.theme.colors.secondaryColorText};
    font-size: 14px;
    font-weight: 900;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    border: none;

    &-accent {
      background-color: ${(props) => props.theme.colors.thirdColorText};
      color: ${(props) => props.theme.colors.mainColorButton};
    }
  }
`;
export default RecoveryEmailConfirmationStyled;
