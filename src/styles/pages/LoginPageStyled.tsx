import styled from "styled-components";

const LoginPageStyled = styled.main`
  color: #000;

  .login-page {
    height: 100%;

    &__login-form {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      height: 100%;
      padding: 70px 0;
    }

    &__heading {
      display: flex;
      justify-content: space-between;
    }

    &__signUp {
      background-color: #000;
      color: #fff;
      height: 30px;
      border-radius: 10px;
      width: 75px;
      font-size: 13px;
    }
  }
`;

export default LoginPageStyled;
