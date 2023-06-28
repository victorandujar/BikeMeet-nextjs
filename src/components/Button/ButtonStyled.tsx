import styled from "styled-components";

const ButtonStyled = styled.button`
  color: ${(props) => props.theme.colors.mainColorText};
  font-size: 11px;
  border: 1px solid black;
  height: 20px;
  width: 60px;
  text-align: center;
  vertical-align: middle;
  padding: 0;
  margin: 0;

  :hover {
    background-color: ${(props) => props.theme.colors.secondaryColorButton};
    color: ${(props) => props.theme.colors.secondaryColorText};
    border: 1px solid black;
  }
`;

export default ButtonStyled;
