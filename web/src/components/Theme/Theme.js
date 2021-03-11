import { green } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const defaultTheme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const Theme = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

Theme.propTypes = {};

export default Theme;
