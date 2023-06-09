import styled from "styled-components";

const LoginPageStyled = styled.main`
  color: ${(props) => props.theme.colors.mainColorText};
  padding: 30px 0 20px 0;

  .login-page {
    height: 100%;

    &__login-form {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      height: 100%;
      padding: 80px 0 20px 0;

      @media (max-width: 670px) {
        padding: 40px 0 20px 0;
      }
    }

    &__heading {
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
    }
  }

  .heading {
    text-align: center;
    width: 100%;
    padding-bottom: 10px;

    &__welcome {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }

    &__title {
      font-weight: 900;
      font-size: 30px;
    }

    &__slogan {
      border-bottom: 4px solid blue;
      padding-bottom: 10px;

      @media (max-width: 670px) {
        border-bottom: none;
      }
    }
  }

  .btn-outline-primary {
    border: 1px solid #000;
    color: ${(props) => props.theme.colors.secondaryColorButton};
    height: 40px;
    font-size: 12px;
    width: 80px;

    :hover {
      background-color: ${(props) => props.theme.colors.secondaryColorButton};
      color: ${(props) => props.theme.colors.secondaryColorText};
    }

    :active {
      background-color: ${(props) => props.theme.colors.mainColorButton};
      color: ${(props) => props.theme.colors.mainColorText};
      border: 1px solid #000;
    }
  }
`;

export default LoginPageStyled;
