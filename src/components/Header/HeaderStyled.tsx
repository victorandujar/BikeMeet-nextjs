import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 70px;
  color: ${(props) => props.theme.colors.mainColorText};

  .navbar {
    padding: 0;
  }

  .navbar-nav {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  .header-page {
    &__logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 40px;
    }
  }

  .title {
    font-weight: 900;
    display: flex;

    &__blue {
      font-size: 40px;
      color: ${(props) => props.theme.colors.thirdColorText};
    }

    &__black {
      font-size: 40px;
    }
  }
`;

export default HeaderStyled;
