import { Story } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/global";
import theme from "../src/styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story: Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
