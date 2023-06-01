import styled from "styled-components";

const RegisterFormStyled = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.mainColorText};
  background-color: #0c0c0c;
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
    width: 300px;
    flex-direction: column;
  }

  .register-interface {
    &__picture {
      border-radius: 10px 0 0 10px;
      object-fit: cover;
      width: 550px;
      height: 500px;

      @media (max-width: 1130px) {
        width: 450px;
        object-position: 25%;
      }

      @media (max-width: 860px) {
        width: 500px;
        height: 300px;
        border-radius: 10px 10px 0 0;
      }

      @media (max-width: 530px) {
        width: 300px;
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

      @media (max-width: 860px) {
        display: flex;
        flex-direction: column;
      }
    }
  }

  .form-label {
    font-size: 12px;
    color: ${(props) => props.theme.colors.secondaryColorText};
  }

  .mb-3 {
    width: 100%;
  }

  .row-2 {
    width: 240px;

    @media (max-width: 1130px) {
      width: 150px;
    }

    @media (max-width: 860px) {
      width: 100%;
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
  }

  .field-names {
    width: 240px;

    @media (max-width: 1130px) {
      width: 150px;
    }

    @media (max-width: 860px) {
      width: 100%;
    }
  }

  .login {
    display: flex;
    gap: 5px;
    font-size: 12px;

    &__text {
      color: ${(props) => props.theme.colors.secondaryColorText};
    }

    &__link {
      color: ${(props) => props.theme.colors.secondaryColorText};
      font-weight: 900;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .no-match {
    color: red;
    font-size: 11px;
  }

  .check-password {
    color: ${(props) => props.theme.colors.secondaryColorText};
    font-size: 10px;
  }
`;

export default RegisterFormStyled;
