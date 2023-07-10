import styled from "styled-components";

const TopNavbarStyled = styled.nav`
  display: flex;

  .navigation {
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center;

    &__link {
      display: flex;
      gap: 10px;
      align-items: center;

      :hover {
        color: ${(props) => props.theme.colors.thirdColorText};
      }
    }
  }

  .new-ride {
    background-color: ${(props) => props.theme.colors.thirdColorText};
    width: 130px;
    color: ${(props) => props.theme.colors.secondaryColorText};
    font-size: 14px;
    border-radius: 30px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 10px;

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
