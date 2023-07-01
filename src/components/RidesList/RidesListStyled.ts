import styled from "styled-components";

const RidesListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  justify-items: center;

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-self: center;
  }
`;

export default RidesListStyled;
