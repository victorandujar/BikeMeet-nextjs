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
`;

export default TopNavbarStyled;
