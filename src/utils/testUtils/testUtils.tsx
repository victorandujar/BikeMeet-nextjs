import { RootState, setupStore, store } from "@/store/store";
import { PreloadedState } from "@reduxjs/toolkit";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/Theme";
import GlobalStyles from "@/styles/GlobalStyles";
import { render } from "@testing-library/react";

const renderWithProviders = (
  ui: React.ReactElement,
  preloadState?: PreloadedState<RootState>
) => {
  const testStore = preloadState ? setupStore(preloadState) : store;

  const Wrapper = ({ children }: PropsWithChildren) => {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={testStore}>
          {children}
          <GlobalStyles />
        </Provider>
      </ThemeProvider>
    );
  };

  return render(ui, { wrapper: Wrapper });
};

export default renderWithProviders;
