import { DefaultTheme } from "styled-components";
import { createTheme } from "@mui/material";
import { quaternaryFont } from "@/utils/fonts/fonts";

const theme: DefaultTheme = {
  colors: {
    mainColorButton: "#fff",
    secondaryColorButton: "#000",
    cardBackGroundColor: "#EAEAEA",
    loaderBackGroundColor: "#fff",
    mainColorText: "#000",
    secondaryColorText: "#fff",
    thirdColorText: "#0000ff",
  },
  backgroundColors: {
    mainBackGround: "#fff",
    secondaryBackGround: "#000",
  },
};

export const muiTheme = createTheme({
  typography: {
    fontFamily: `${quaternaryFont.style.fontFamily}`,
  },
});

export default theme;
