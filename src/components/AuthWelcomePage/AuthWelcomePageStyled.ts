import styled from "styled-components";

const AuthWelcomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  .google-welcomePage {
    &__image {
      border-radius: 50%;
    }
  }
`;

export default AuthWelcomePageStyled;
