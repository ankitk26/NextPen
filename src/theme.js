import { createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

// Change primary color of MUI
const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[700],
    },
  },
});

export default theme;
