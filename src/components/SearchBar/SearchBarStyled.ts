import styled from "styled-components";

const SearchBarStyled = styled.form`
  .btn-primary {
    background-color: transparent;
    --bs-btn-border-color: ${(props) => props.theme.colors.thirdColorText};
    width: 100%;
    color: ${(props) => props.theme.colors.thirdColorText};
    font-size: 14px;
    font-weight: 900;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(props) => props.theme.colors.thirdColorText};
    width: 100px;

    &-accent {
      background-color: transparent;
      color: ${(props) => props.theme.colors.thirdColorText};
      --bs-btn-border-color: ${(props) => props.theme.colors.thirdColorText};
    }
  }
`;

export default SearchBarStyled;
