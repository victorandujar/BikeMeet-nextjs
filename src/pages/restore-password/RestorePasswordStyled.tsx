import styled from "styled-components";

const RestorePasswordPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.mainColorText};
  gap: 50px;
  padding: 60px 0;

  .restore-password {
    &__form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 14px;
    }
  }

  .form-control {
    width: 300px;
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

  .btn-outline-dark {
    width: 300px;
  }
`;

export default RestorePasswordPageStyled;
