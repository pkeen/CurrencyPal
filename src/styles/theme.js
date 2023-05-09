import { createTheme } from "@mui/material";
import { teal } from "@mui/material/colors";

let theme = createTheme({
    palette: {
        primary: {
            //main: teal[500]
            main: '#18A678',
            dark: '#107454',
            light: '#7dcbae',
            superLight: '#dff2ec',
            superDark: '#002918'
            
        },
        secondary: {
            main: '#2b7bc9',
            dark: '#256ab7',
            light: '#52a9ec',
            superLight: '#daedfb',
            superDark: '#071422'
        }
    },
    typography: {
        fontFamily: "'Wix Madefor Text', 'Lato', 'Roboto', sans-serif",
        h1: {
            fontWeight: 500
        },
    },
    
})

theme = createTheme(theme, {
    components: {
        MuiMenuItem: {
            styleOverrides:{
                root: {
                    "&:hover": {
                        color: theme.palette.primary.superDark,
                        backgroundColor: theme.palette.primary.superLight
                    }
                }
            },
            variants: [
                {
                    props: { variant: 'secondary'},
                    style: {
                        "&:hover": {
                            color: theme.palette.secondary.superDark,
                            backgroundColor: theme.palette.secondary.superLight,
                        },
                        
                    },
                }
            ]
        }
    }
})


export default theme;


