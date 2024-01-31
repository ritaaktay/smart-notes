import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[600],
    },
    secondary: {
      main: grey[100],
    },
  },
});
