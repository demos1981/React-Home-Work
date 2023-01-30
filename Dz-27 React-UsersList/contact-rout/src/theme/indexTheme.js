import { createTheme } from "@mui/material/styles";

export default createTheme({
    palette: {
        primary: {
          light: '#42a5f5',
          main: '#42a5f5',
          dark: '#01579b',
          // contrastText: will be calculated to contrast with palette.primary.main
        },
},
});