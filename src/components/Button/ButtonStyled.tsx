import styled from "styled-components";

const ButtonStyled = styled.button`
  border: 1px solid black;
  color: ${(props) => props.theme.colors.mainColorText};
  font-size: 12px;

  :hover {
    background-color: ${(props) => props.theme.colors.secondaryColorButton};
    color: ${(props) => props.theme.colors.secondaryColorText};
  }
`;

export default ButtonStyled;
