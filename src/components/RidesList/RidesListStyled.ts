import styled from "styled-components";

const RidesListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 40px;
  justify-items: center;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-self: center;
  }

  @media screen and (max-width: 690px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    align-self: center;

    .list {
      &__item {
        width: 300px;
        height: 370px;
      }
    }
  }
`;

export default RidesListStyled;
