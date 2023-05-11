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
                        "&.Mui-selected": {
                            color: theme.palette.secondary.superDark,
                            backgroundColor: theme.palette.secondary.superLight,
                        }
                        
                    },
                }
            ]
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    // Left variant
                    '&.subvariant-right': {
                        '& fieldset': {
                            borderRadius: '0px 8px 8px 0px'
                        }
                    },
                    // Right no border-radius
                    '&.subvariant-left': {
                        '& fieldset': {
                            borderRadius: '8px 0px 0px 8px'
                        }
                    },
                    // Border highlighting
                    // Green
                    '&.subvariant-primary': {
                        '& .Mui-focused fieldset': {
                            borderColor: theme.palette.primary.main
                        },
                        '&:hover fieldset': {
                            borderColor: theme.palette.primary.main
                        }
                    },
                    '&.subvariant-secondary': {
                        '& .Mui-focused fieldset': {
                            borderColor: theme.palette.secondary.main
                        },
                        '&:hover fieldset': {
                            borderColor: theme.palette.secondary.main
                        }
                    },
                }
            },
            variants: [
                {
                    props: { variant: 'left'},
                    style: {
                        select: {
                            backgroundColor: 'red',
                        borderRadius: 0,
                        color: theme.palette.secondary.main
                        },
                        backgroundColor: 'red',
                        borderRadius: 0,
                        color: theme.palette.secondary.main
                    }
                }
            ]
        }
    },
    typography: {
        h5: {
            fontWeight: theme.typography.fontWeightBold,
            "& span.primary": {
                color: theme.palette.primary.main,
            },
            "& span.secondary": {
                color: theme.palette.secondary.main,
                },
            "& span.error": {
                color: theme.palette.error.main
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.25rem',
            },
        },
        h1: {
            [theme.breakpoints.down('md')]: {
                fontSize: '3.5rem',
            },
            
            [theme.breakpoints.down('sm')]: {
                fontSize: '2.5rem',
            },

        }
    }
})

//updates for new custom input field
theme = createTheme(theme, {
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    "&.subvariant-noBorder": {
                        "& fieldset": {
                            border: 'none',
                            outline: 'none',
                        }
                    }

                }
                
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    "&.primary-color": {
                        border: 'none',
                        borderColor: theme.palette.primary.dark,
                        "&.focused": {
                            border: '2px solid',
                            borderColor: theme.palette.primary.main
                        },
                    },
                    "&.secondary-color": {
                        border: 'none',
                        borderColor: theme.palette.secondary.dark,
                        "&.focused": {
                            border: '2px solid',
                            borderColor: theme.palette.secondary.main
                        }
                    }
                    

                    
                }
            }
        }
    }
})

export default theme;


