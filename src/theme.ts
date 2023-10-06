import { createTheme, responsiveFontSizes } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#286EF1",
    },
    secondary: {
      main: "#9026B1",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});
export default responsiveFontSizes(theme);
