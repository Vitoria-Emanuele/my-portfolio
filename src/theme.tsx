import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: "#012a58",
            light: '#16395f',
            dark: '#001730',
            contrastText: "#fff"
        },
        secondary: {
            main: "#1d2c3b",
            light: '#33414e',
            dark: '#141d28',
            contrastText: "#fff",
        },
      },
      typography: {
        fontFamily: '"Roboto", "Arial", sans-serif ',

      },
});
theme = responsiveFontSizes(theme);

export default theme;
