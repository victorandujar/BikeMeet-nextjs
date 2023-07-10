import styled from "styled-components";

const BottomNavbarWrapperStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  @media (min-width: 950px) {
    display: none;
  }
`;

export default BottomNavbarWrapperStyled;
