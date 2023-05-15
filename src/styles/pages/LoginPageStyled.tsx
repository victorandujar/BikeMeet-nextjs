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
  }

  .btn-outline-primary {
    border: 1px solid #000;
    color: #000;
    height: 40px;
    font-size: 13px;

    :hover {
      background-color: #000;
      color: #fff;
    }

    :active {
      background-color: #fff;
      color: #000;
      border: 1px solid #000;
    }
  }
`;

export default LoginPageStyled;
