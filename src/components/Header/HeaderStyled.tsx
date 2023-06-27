import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 70px;
  color: ${(props) => props.theme.colors.mainColorText};

  .header-page {
    &__logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 40px;
    }

    &__navigation {
      display: flex;
      gap: 40px;
      align-items: center;
    }
  }

  .title {
    font-weight: 900;
    display: flex;

    &__blue {
      font-size: 30px;
      color: ${(props) => props.theme.colors.thirdColorText};
    }

    &__black {
      font-size: 30px;
    }
  }

  .navbar {
    @media (max-width: 861px) {
      display: none;
    }
  }
`;

export default HeaderStyled;
