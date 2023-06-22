import styled from "styled-components";

const RideStyled = styled.article`
  position: relative;
  width: 300px;
  height: 400px;

  img {
    object-fit: cover;
    height: 200px;
    margin-top: 0;
  }

  .card {
    &__header {
      color: white;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
      width: 100%;
      margin-top: 0;
    }

    &__content {
      display: flex;
      flex-direction: column;
    }

    &__footer  {
      justify-content: space-between;
    }
  }

  .MuiCardHeader-subheader {
    color: white;
    font-weight: 700;
  }

  .content {
    &__icons {
      display: grid;

      &--first {
        grid-column: 1;
        grid-row: 1;
      }

      &--second {
        grid-column: 1;
        grid-row: 2;
      }

      &--third {
        grid-column: 2;
        grid-row: 1;
      }

      &--fourth {
        grid-column: 2;
        grid-row: 2;
      }
    }
  }
`;

export default RideStyled;
