import styled from "styled-components";

const RegisterPageStyled = styled.main`
  color: ${(props) => props.theme.colors.mainColorText};
  padding: 50px 0;

  .register-page {
    height: 100%;

    &__register-form {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      height: 100%;
      padding: 70px 0 20px 0;
    }
  }

  .heading {
    text-align: center;
    width: 100%;
    &__title {
      font-weight: 900;
    }

    &__slogan {
      border-bottom: 4px solid blue;
      padding-bottom: 10px;
    }
  }
`;

export default RegisterPageStyled;
