import styled from "styled-components";

const CreateFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: #fff;
  border-radius: 20px;
  padding: 40px;
  width: 600px;

  .create-form {
    &__date {
      border: 1px solid rgba(0, 0, 0, 0.2);
      height: 56px;
      width: 400px;
      border-radius: 5px;
      padding: 0 15px;

      ::placeholder {
      }
    }
  }

  .btn-primary {
    background-color: ${(props) => props.theme.colors.secondaryColorButton};
    --bs-btn-border-color: ${(props) =>
      props.theme.colors.secondaryColorButton};
    width: 400px;
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

    &-accent {
      background-color: ${(props) => props.theme.colors.thirdColorText};
      color: ${(props) => props.theme.colors.mainColorButton};
    }
  }
`;

export default CreateFormStyled;
