import styled from "styled-components";

const ButtonStyled = styled.button`
  color: ${(props) => props.theme.colors.mainColorText};
  font-size: 15px;
  border: none;
  height: 20px;
  width: 60px;
  text-align: center;
  vertical-align: middle;
  padding: 0;
  margin: 0;

  :hover {
    background-color: transparent;
    color: ${(props) => props.theme.colors.thirdColorText};
    font-weight: bold;
    border: none;
  }

  :active {
    color: ${(props) => props.theme.colors.secondaryColorButton};
    background-color: ${(props) => props.theme.colors.mainColorButton};
  }
`;

export default ButtonStyled;
