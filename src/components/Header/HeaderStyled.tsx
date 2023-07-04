import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 70px;
  color: ${(props) => props.theme.colors.mainColorText};
  background-color: #fff;
  padding: 5px 20px;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  z-index: 2;
  width: 100%;

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
      text-transform: uppercase;
    }

    &__black {
      font-size: 30px;
      text-transform: uppercase;
    }
  }

  .navbar {
    @media (max-width: 861px) {
      display: none;
    }
  }
`;

export default HeaderStyled;
