import styled from "styled-components";

const CreateFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 40px;
    border-radius: 20px;

    @media (max-width: 480px) {
      width: 400px;
    }

    @media (max-width: 420px) {
      width: 350px;
    }

    @media (max-width: 370px) {
      width: 300px;
    }

    @media (max-width: 310px) {
      width: 280px;
    }

    &__title {
      width: 100%;
    }

    &__block {
      @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .MuiInputBase-formControl {
    @media (max-width: 480px) {
      width: 100%;
    }
  }

  .create-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__stepper {
      width: 1000px;

      @media (max-width: 950px) {
        display: none;
      }
    }

    &__field {
      width: 400px;
      color: #000;

      @media (max-width: 420px) {
        width: 350px;
      }

      @media (max-width: 370px) {
        width: 300px;
      }

      @media (max-width: 310px) {
        width: 280px;
      }
    }

    &__custom-input {
      border: 1px solid rgba(0, 0, 0, 0.2);
      height: 56px;
      width: 400px;
      border-radius: 5px;
      padding: 13px 15px;
      background-color: ${(props) =>
        props.theme.backgroundColors.tertiaryBackGround};

      @media (max-width: 420px) {
        width: 350px;
      }

      @media (max-width: 370px) {
        width: 300px;
      }

      @media (max-width: 310px) {
        width: 280px;
      }

      :hover {
        border: 1px solid rgba(0, 0, 0, 1);
      }
    }

    &__buttons {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      width: 100%;

      @media (max-width: 480px) {
        width: 400px;
      }

      @media (max-width: 420px) {
        width: 350px;
      }

      @media (max-width: 370px) {
        width: 300px;
      }

      @media (max-width: 310px) {
        width: 280px;
      }
    }
  }

  .btn-primary {
    background-color: ${(props) => props.theme.colors.secondaryColorButton};
    width: 180px;
    height: 40px;
    color: ${(props) => props.theme.colors.secondaryColorText};
    font-size: 14px;
    font-weight: 700;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    align-self: center;
    border: none;

    @media (max-width: 420px) {
      width: 160px;
    }

    @media (max-width: 370px) {
      width: 140px;
    }

    @media (max-width: 310px) {
      width: 120px;
    }

    &-accent {
      background-color: ${(props) => props.theme.colors.thirdColorText};
      color: ${(props) => props.theme.colors.mainColorButton};
    }
  }

  .btn-outline-primary {
    background-color: ${(props) => props.theme.colors.mainColorButton};
    border: 1px solid ${(props) => props.theme.colors.thirdColorText};
    width: 180px;
    height: 40px;
    color: ${(props) => props.theme.colors.thirdColorText};
    font-size: 14px;
    font-weight: 700;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    align-self: center;

    @media (max-width: 420px) {
      width: 160px;
    }

    @media (max-width: 370px) {
      width: 140px;
    }

    @media (max-width: 310px) {
      width: 120px;
    }
  }
`;

export default CreateFormStyled;
