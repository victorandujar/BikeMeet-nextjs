import styled from "styled-components";

const LoginFormStyled = styled.div`
  display: flex;
  background-color: #0c0c0c;
  border-radius: 10px;
  box-shadow: 8px 5px 15px gray;
  width: 1050px;
  font-size: 15px;
  position: absolute;

  @media (max-width: 1070px) {
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

    &__lef-block {
      position: relative;
    }

    &__title {
      font-size: 40px;
      letter-spacing: 2px;
      color: ${(props) => props.theme.colors.secondaryColorText};
      position: absolute;
      top: 20%;
      left: 30%;
      transform: translate(-50%, -50%);

      @media (max-width: 860px) {
        top: 7%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &__slogan {
      color: ${(props) => props.theme.colors.secondaryColorText};
      position: absolute;
      top: 25%;
      left: 29.8%;
      transform: translateX(-50%);

      @media (max-width: 860px) {
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
      }
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
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
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

    &__text {
      color: ${(props) => props.theme.colors.secondaryColorText};

      @media (max-width: 1070px) {
        font-size: 12px;
      }

      @media (max-width: 530px) {
        font-size: 10px;
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

  .form-control {
    font-size: 14px;
    width: 100%;

    ::placeholder {
      font-size: 12px;
    }
  }

  .form-check-label {
    font-size: 12px;
    color: ${(props) => props.theme.colors.secondaryColorText};
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
      color: ${(props) => props.theme.colors.secondaryColorText};
    }

    &__link {
      color: ${(props) => props.theme.colors.secondaryColorText};
      font-weight: 900;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export default LoginFormStyled;
