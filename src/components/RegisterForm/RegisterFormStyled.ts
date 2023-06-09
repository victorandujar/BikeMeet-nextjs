import styled from "styled-components";

const RegisterFormStyled = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.mainColorText};
  background-color: ${(props) => props.theme.backgroundColors.mainBackGround};
  border-radius: 10px;
  box-shadow: 8px 5px 15px gray;
  width: 1100px;
  font-size: 15px;

  @media (max-width: 1130px) {
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

  .register-interface {
    &__picture {
      border-radius: 10px 0 0 10px;
      object-fit: cover;
      width: 550px;
      height: 100%;

      @media (max-width: 1130px) {
        width: 380px;
        object-position: 25%;
      }

      @media (max-width: 860px) {
        width: 500px;
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
      left: 50%;
      transform: translate(-50%, -50%);

      @media (max-width: 860px) {
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .register-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 20px;
    width: 100%;

    &__in-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      gap: 10px;

      @media (max-width: 860px) {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
    }
  }

  .form-label {
    font-size: 12px;
    color: ${(props) => props.theme.colors.mainColorText};
  }

  .mb-3 {
    width: 100%;
  }

  .fields {
    &__row-2 {
      width: 240px;

      @media (max-width: 1130px) {
        width: 180px;
      }

      @media (max-width: 860px) {
        width: 100%;
      }
    }
  }

  .form-control {
    font-size: 14px;
    width: 100%;

    ::placeholder {
      font-size: 12px;
    }
  }

  .btn {
    background-color: ${(props) => props.theme.colors.secondaryColorButton};
  }

  .btn-primary {
    background-color: ${(props) => props.theme.colors.mainColorButton};
    --bs-btn-border-color: ${(props) =>
      props.theme.colors.secondaryColorButton};
    width: 100%;
    color: ${(props) => props.theme.colors.mainColorText};
    font-size: 14px;
    font-weight: 900;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    &-accent {
      background-color: ${(props) => props.theme.colors.thirdColorText};
      color: ${(props) => props.theme.colors.mainColorButton};
    }
  }

  .login {
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

  .no-match {
    color: red;
    font-size: 11px;
  }

  .messages {
    display: flex;
    flex-direction: column;
    height: 25px;
    padding-top: 2px;
    font-weight: 800;

    @media (max-width: 860px) {
      padding-top: 5px;
      height: 25px;
    }

    &__check {
      color: ${(props) => props.theme.colors.mainColorText};
      font-size: 10px;
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

    &__success {
      color: #03c403;
      font-size: 12px;
      font-weight: 900;
    }
  }
`;

export default RegisterFormStyled;
