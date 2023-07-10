import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.mainColorText};
  background-color: #fff;
  padding: 5px 20px;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  z-index: 2;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media (min-width: 1200px) {
    padding: 5px 60px;
  }

  @media (min-width: 1400px) {
    padding: 5px 160px;
  }

  .header-page {
    &__logo {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 40px;
    }

    &__navigation {
      display: flex;
      gap: 100px;
      align-items: center;
    }

    &__user-actions {
      display: flex;
      align-items: center;
      gap: 100px;
    }

    &__search {
      display: flex;
      align-items: center;
      gap: 30px;
    }
  }

  .title {
    font-weight: 900;
    display: flex;

    &__blue {
      font-size: 30px;
      color: ${(props) => props.theme.colors.thirdColorText};
      text-transform: uppercase;
    }

    &__black {
      font-size: 30px;
      text-transform: uppercase;
    }
  }

  .navbar {
    display: flex;
    gap: 40px;

    @media (max-width: 861px) {
      display: none;
    }
  }

  .arrow {
    :hover {
      color: ${(props) => props.theme.colors.thirdColorText};
    }
  }
`;

export default HeaderStyled;
