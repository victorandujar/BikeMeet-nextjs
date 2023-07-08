import styled from "styled-components";

const RideStyled = styled.article`
  position: relative;
  width: 300px;
  height: 370px;

  img {
    object-fit: cover;
    height: 200px;
    margin-top: 0;
  }

  .card {
    border: none;

    &__location {
      display: none;
    }
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
        padding-top: 15px;
      }

      &--second {
        grid-column: 1;
        grid-row: 2;
        padding-top: 15px;
      }

      &--third {
        grid-column: 2;
        grid-row: 1;
        padding-top: 15px;
        padding-left: 8px;
      }

      &--fourth {
        grid-column: 2;
        grid-row: 2;
        padding-top: 15px;
        padding-left: 8px;
      }
    }

    &__icons-icon {
      padding-right: 5px;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 575px;
    height: 430px;
    margin: 0 auto;

    .card {
      min-width: 100%;
      min-height: 100%;

      &__location {
        display: inline;
        align-self: flex-end;
        margin: 25px 16px 0 0;
      }

      &__header {
        color: black;
        background-color: unset;
        width: 100%;
        margin-top: 0;
      }
    }

    .MuiCardHeader-subheader {
      color: black;
      font-weight: 700;
    }

    img {
      object-fit: cover;
      height: 210px;
      width: 100%;
      margin-top: 25px;
    }

    .content {
      &__title {
        font-size: 1.25rem;
      }

      &__icons {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;

export default RideStyled;
