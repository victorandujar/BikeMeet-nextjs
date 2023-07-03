import styled from "styled-components";

const DashboardStyled = styled.main`
  padding: 50px 0;

  .error-message {
    color: ${(props) => props.theme.colors.mainColorText};
  }

  .skeleton {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 30px;
    justify-items: center;

    &__item {
      width: 100%;
      max-width: 300px;
      height: 362.69px;
    }
  }

  @media screen and (min-width: 1200px) {
    .skeleton {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;

      &__item {
        width: 100%;

        max-width: 575px;
        height: 430px;
      }
    }
  }
`;

export default DashboardStyled;
