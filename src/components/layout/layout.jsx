/** @jsx jsx */
import { jsx } from "theme-ui";
import { GlobalThemeProvider } from "../../state/global-theme-provider";

export const Layout = ({ children }) => {
  return <GlobalThemeProvider>{children}</GlobalThemeProvider>;
};

export default Layout;
