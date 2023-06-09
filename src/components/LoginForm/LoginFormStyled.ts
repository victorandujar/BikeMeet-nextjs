import styled from "styled-components";

const LoginFormStyled = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 8px 5px 15px gray;
  width: 1050px;
  font-size: 15px;

  @media (max-width: 1070px) {
    width: 800px;
  }

  @media (max-width: 860px) {
    width: 500px;
    flex-direction: column;
  }

  @media (max-width: 530px) {
    width: 100%;
    flex-direction: column;
  }

  .login-interface {
    &__picture {
      border-radius: 10px 0 0 10px;
      object-fit: cover;
      width: 600px;
      height: 500px;

      @media (max-width: 1070px) {
        width: 450px;
        object-position: 25%;
      }

      @media (max-width: 860px) {
        width: 100%;
        height: 300px;
        border-radius: 10px 10px 0 0;
      }

      @media (max-width: 530px) {
        width: 100%;
        height: 300px;
        border-radius: 10px 10px 0 0;
      }
    }

    &__left-block {
      position: relative;
    }

    &__title {
      font-size: 40px;
      letter-spacing: 2px;
      color: ${(props) => props.theme.colors.secondaryColorText};
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);

      @media (max-width: 860px) {
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &__slogan {
      color: ${(props) => props.theme.colors.secondaryColorText};
      position: absolute;
      top: 26%;
      left: 49.7%;
      transform: translate(-50%, -50%);

      @media (max-width: 860px) {
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
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

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    padding: 20px;
    width: 100%;

    &__footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    &__email-text {
      color: ${(props) => props.theme.colors.mainColorText};
      font-size: 12px;

      @media (max-width: 1070px) {
        font-size: 12px;
      }

      @media (max-width: 530px) {
        font-size: 10px;
      }
    }

    &__show-password {
      position: relative;
    }
  }

  .show-button {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .visibility-icon {
    opacity: 50%;
  }

  .email {
    height: 70px;
  }

  .form-label {
    font-size: 12px;
    color: ${(props) => props.theme.colors.mainColorText};
  }

  .mb-3 {
    width: 100%;
  }

  .form-control {
    font-size: 14px;
    width: 100%;

    ::placeholder {
      font-size: 12px;
    }
  }

  .form-check {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &__label {
      font-size: 12px;
      color: ${(props) => props.theme.colors.mainColorText};
    }

    &__forgot {
      color: ${(props) => props.theme.colors.thirdColorText};
      font-size: 12px;
      text-align: right;
    }
  }

  .footer {
    width: 100%;

    &__google {
      color: #ef0000;
    }

    &__strava {
      color: orange;
    }
  }

  .signup {
    display: flex;
    gap: 5px;
    font-size: 12px;

    &__text {
      color: ${(props) => props.theme.colors.mainColorText};
    }

    &__link {
      color: ${(props) => props.theme.colors.mainColorText};
      font-weight: 900;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .loader__container {
    height: 40px;
  }

  .modals-messages {
    &__error {
      color: #ff0202;
      font-size: 12px;
      font-weight: 900;
    }
  }
`;

export default LoginFormStyled;
