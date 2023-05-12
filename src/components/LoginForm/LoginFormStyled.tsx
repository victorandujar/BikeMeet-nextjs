import styled from "styled-components";

const LoginFormStyled = styled.div`
  display: flex;
  background-color: #0c0c0c;
  border-radius: 10px;
  box-shadow: 8px 5px 15px gray;
  width: 1050px;
  font-size: 15px;

  .login-interface {
    &__picture {
      border-radius: 10px 0 0 10px;
    }

    &__lef-block {
      position: relative;
    }

    &__title {
      position: absolute;
      left: 20%;
      top: 10%;
      font-size: 40px;
      letter-spacing: 2px;
    }

    &__slogan {
      position: absolute;
      left: 20%;
      top: 16%;
    }
  }

  .btn {
    background-color: #000;
  }

  .btn-primary {
    background-color: #ffffff;
    --bs-btn-border-color: #000;
    width: 100%;
    color: #000000;
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
    gap: 10px;
    padding: 30px;
    width: 100%;

    &__footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }

  .form-label {
    font-size: 12px;
  }

  .form-control {
    font-size: 14px;

    ::placeholder {
      font-size: 12px;
    }
  }

  .form-check-label {
    font-size: 12px;
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
`;

export default LoginFormStyled;
