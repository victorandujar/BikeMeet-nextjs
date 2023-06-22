import styled from "styled-components";

const RidesListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  justify-items: center;
`;

export default RidesListStyled;
