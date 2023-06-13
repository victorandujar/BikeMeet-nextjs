import styled from "styled-components";

const RideStyled = styled.article`
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    margin-top: 0;
  }

  .card {
    &__header {
      position: absolute;
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
