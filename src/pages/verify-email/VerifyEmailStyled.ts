import styled from "styled-components";

const VerifyEmailStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 100px 0;
  color: ${(props) => props.theme.colors.mainColorText};

  .verify-page {
    &__success {
      font-size: 25px;
      font-weight: 900;
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

  .welcome {
    font-size: 20px;

    &__name-black {
      font-weight: 900;
      font-size: 30px;
    }

    &__name-blue {
      font-weight: 900;
      color: ${(props) => props.theme.colors.thirdColorText};
      font-size: 30px;
    }
  }
`;

export default VerifyEmailStyled;
