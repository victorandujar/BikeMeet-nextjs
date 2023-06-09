import styled from "styled-components";

const RecoveryPasswordEmailPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.mainColorText};
  gap: 50px;
  padding: 70px 0;

  .recovery-email {
    &__form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      @media (max-width: 450px) {
        width: 100%;
      }
    }
  }

  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    &__title {
      font-weight: 900;
    }

    &__text {
      font-size: 15px;
    }
  }

  .form-control {
    width: 400px;
    font-size: 14px;
    font-weight: 500;

    @media (max-width: 450px) {
      width: 100%;
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

  .modals-messages {
    &__error {
      color: #ff0202;
      font-size: 12px;
      font-weight: 900;
    }

    &__success {
      color: #03c403;
      font-size: 12px;
      font-weight: 900;
    }
  }
`;

export default RecoveryPasswordEmailPageStyled;
