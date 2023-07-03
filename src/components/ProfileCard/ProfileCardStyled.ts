import styled from "styled-components";

const ProfileCardStyled = styled.article`
  color: ${(props) => props.theme.colors.mainColorText};
  position: relative;
  width: 300px;
  box-shadow: 5px 20px 30px gray;
  border-radius: 22% 2% 2% 2%;
  padding-top: 10px;

  @media (max-width: 1000px) {
    display: none;
  }

  .user-profile {
    &__avatar {
      object-fit: cover;
      border-radius: 50%;
      position: absolute;
      z-index: 1;
      top: 0px;
    }
  }

  .user {
    position: relative;
    padding-bottom: 10px;
    padding-left: 120px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    &__name {
      font-size: 12px;
    }

    &__location {
      font-size: 12px;
      font-weight: 900;
    }
  }

  .data {
    position: relative;
    left: 40%;
    font-size: 12px;
    width: 180px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px 0;

    border-left: 1px solid rgba(0, 0, 0, 0.2);

    &__row2 {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }

  .stats {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      font-weight: 900;
    }
  }

  .next-activity {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    &__information {
      display: flex;
      padding: 8px;
      justify-content: space-between;
      border-top: 1px solid rgba(0, 0, 0, 0.2);
    }

    &__title {
      font-weight: 900;
    }

    &__text {
      padding: 8px;
      color: gray;
    }
  }
`;

export default ProfileCardStyled;
