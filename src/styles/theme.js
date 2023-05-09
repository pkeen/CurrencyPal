import { createTheme } from "@mui/material";
import { teal } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            //main: teal[500]
            main: '#18A678'
            
        },
        secondary: {
            main: '#1d65c4'
        }
    },
    typography: {
        fontFamily: "'Wix Madefor Text', 'Lato', 'Roboto', sans-serif",
        h1: {
            fontWeight: 500
        }
    }
})



