// test-utils.js
import { render, RenderOptions } from "@testing-library/react";
import React, { FC, ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global";
import theme from "../../styles/theme";

const AllTheProviders: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });
