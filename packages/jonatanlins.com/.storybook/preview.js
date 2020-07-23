import { addDecorator } from "@storybook/react";

import { ThemeProvider } from "styled-components";
import theme from "../src/style/theme";
import "../src/style/global.css";
import "../src/style/fonts.css";

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));
