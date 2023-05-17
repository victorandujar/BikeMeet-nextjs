import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      mainColorText: string;
      mainColorButton: string;
      secondaryColorButton: string;
      secondaryColorText: string;
      thirdColorText: string;
      cardBackGroundColor: string;
      loaderBackGroundColor: string;
    };
    backgroundColors: {
      mainBackGround: string;
      secondaryBackGround: string;
    };
  }
}
