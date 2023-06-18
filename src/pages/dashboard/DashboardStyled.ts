import styled from "styled-components";

const DashboardStyled = styled.div`
  .error-message {
    color: ${(props) => props.theme.colors.mainColorText};
  }

  .skeleton {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 20px 0;
    gap: 40px;

    &__item {
      width: 100%;
      max-width: 345px;
      height: 400px;
    }
  }
`;

export default DashboardStyled;
