import styled from "styled-components";

const TopNavbarStyled = styled.nav`
  display: flex;

  .navigation {
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center;

    @media (max-width: 950px) {
      display: flex;
      align-items: flex-end;
      width: 150px;
    }

    &__link {
      display: flex;
      gap: 10px;
      align-items: center;

      @media (max-width: 950px) {
        display: none;
      }

      :hover {
        color: ${(props) => props.theme.colors.thirdColorText};
      }
    }

    &__profile {
      @media (max-width: 950px) {
        width: 72px;
      }
    }
  }

  .new-ride {
    background-color: ${(props) => props.theme.colors.thirdColorText};
    width: 125px;
    color: ${(props) => props.theme.colors.secondaryColorText};
    font-size: 14px;
    border-radius: 30px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 5px;

    @media (max-width: 950px) {
      display: none;
    }

    &__icon {
      opacity: 80%;
      font-size: 30px;
    }

    :hover {
      background-color: ${(props) => props.theme.colors.mainColorButton};
      border: 2px solid ${(props) => props.theme.colors.thirdColorText};
    }
  }
`;

export default TopNavbarStyled;
