import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 70px;
  color: #000;

  .navbar {
    padding: 0;
  }

  .navbar-nav {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  .btn-outline-success {
    border: 1px solid black;
    color: #000;
    font-size: 12px;

    :hover {
      background-color: #000;
      color: #fff;
    }
  }

  .header-page {
    &__logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 40px;
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    }
  }
`;

export default HeaderStyled;
