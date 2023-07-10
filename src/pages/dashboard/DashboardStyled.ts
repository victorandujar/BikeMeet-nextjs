import styled from "styled-components";

const DashboardStyled = styled.main`
  padding: 80px 0;
  display: flex;
  gap: 40px;

  @media (max-width: 970px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

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

  .dashboard-page {
    &__rides {
      width: 575px;
    }
  }
`;

export default DashboardStyled;
