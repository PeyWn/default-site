/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui";
import theme from "../utils/theme";

export const GlobalThemeProvider = ({ children }) => {
  console.log(theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
