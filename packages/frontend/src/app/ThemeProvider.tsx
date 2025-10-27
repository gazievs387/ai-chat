import { createTheme, ThemeProvider, useColorScheme } from "@mui/material";
import { PropsWithChildren, useEffect, useMemo } from "react";
import { blueMain, darkBgMain, darkTextMain, lightBgGray, lightGrayA100, lightBgWhite, lightTextBlack, lightTextGray, darkGrayA100, darkTextGray, darkMainTextContrast, lightMainTextContrast, darkBgGray } from "shared/static/styles/base";
import { useAppSelector } from "shared/model";
import { useThemeValue } from "shared/hooks/useThemeValue";


function ThemeController({children}: PropsWithChildren) {
    const { isDark } = useThemeValue() 
    const {setColorScheme} = useColorScheme()


    useEffect(() => {
        if (isDark) {
            setColorScheme("dark")

            localStorage.setItem("theme", "dark")

            document.body.classList.remove('light')
            document.body.classList.add('dark');
        } else {
            setColorScheme("light")

            localStorage.setItem("theme", "light")
            
            document.body.classList.remove('dark');
            document.body.classList.add('light')
        }
    }, [isDark])


    return (
        <>
            {children}
        </>
    )
}

function AppThemeProvider({children}: PropsWithChildren) {
    const appTheme = useAppSelector(state => state.theme.theme)


    const theme = useMemo(() => {
        return createTheme({
            colorSchemes: {
                light: {
                    palette: {
                        primary: {
                            main: blueMain,
                            contrastText: lightMainTextContrast
                        },

                        text: {
                            primary: lightTextBlack,
                            secondary: lightTextGray
                        },

                        background: {
                            default: lightBgWhite,
                            lightGray: lightBgGray
                        },

                        divider: lightGrayA100
                    }

                    
                },
                dark: {
                    palette: {
                        primary: {
                            main: blueMain,
                            contrastText: darkMainTextContrast
                        },

                        text: {
                            primary: darkTextMain,
                            secondary: darkTextGray
                        },

                        background: {
                            default: darkBgMain,
                            lightGray: darkBgGray
                        },

                        divider: darkGrayA100
                    }   
                }
            },


            components: {
                MuiButton: {
                    styleOverrides: {
                        root: {
                            textTransform: "none",
                            paddingInline: 20
                        },
                        outlined: ({theme}) => ({
                            color: theme.palette.text.primary,
                            backgroundColor: theme.palette.background.default,
                            borderColor: theme.palette.divider,
                            ":hover": {
                                backgroundColor: theme.palette.background.lightGray
                            }
                        })
                    }
                },
                MuiTypography: {
                    defaultProps: {
                        color: "textPrimary"
                    },
                    
                    styleOverrides: {
                        root: {
                            variants: [
                                {
                                    props: { variant: "h3" },
                                    style: ({theme}) => ({
                                        fontSize: 48,
                                        fontWeight: 700,
                                        [theme.breakpoints.down("lg")]: {
                                            fontSize: 30
                                        }
                                    })
                                },
                                {
                                    props: { variant: "h4" },
                                    style: ({theme}) => ({
                                        fontSize: 36,
                                        fontWeight: 700,
                                        lineHeight: 1.5,
                                        paddingInline: 10,
                                        [theme.breakpoints.down("lg")]: {
                                            fontSize: 27
                                        }
                                    })
                                }
                            ]
                        }
                    },
                    
                },
                MuiTextField: {
                    styleOverrides: {
                        root: ({theme}) => ({
                            flex: 1, 
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '5px'
                            }, 
                            '& .MuiOutlinedInput-root fieldset': {
                                borderColor: theme.palette.divider
                            },
                            '& .MuiInputBase-inputMultiline': {
                                overflow: 'auto',
                                '&::-webkit-scrollbar': {
                                width: '8px',
                                },
                                '&::-webkit-scrollbar-track': {
                                background: theme.palette.background.default, 
                                },
                                '&::-webkit-scrollbar-thumb': {
                                background: "lightgray",
                                borderRadius: '10px',
                                },
                                '&::-webkit-scrollbar-thumb:hover': {
                                backgroundColor: '#555'
                                },
                            }
                        })
                    }
                },
                MuiChip: {
                    styleOverrides: {
                        root: {
                            fontWeight: 500,
                            paddingInline: 8,
                        },
                        outlined: ({theme}) => ({
                            borderColor: theme.palette.divider
                        })
                    }
                },
                MuiCard: {
                    styleOverrides: {
                        root: ({theme}) => ({
                            backgroundColor: theme.palette.background.default,
                            borderColor: theme.palette.divider,
                            borderRadius: 10
                        }),

                    }
                },
                MuiTab: {
                    styleOverrides: {
                        root: ({theme}) => ({
                            textTransform: "none", 
                            color: theme.palette.text.secondary, 
                            opacity: 1
                        })
                    }
                },
                MuiAccordion: {
                    styleOverrides: {
                        root: ({theme}) => ({
                            backgroundColor: "transparent", 
                            border: "none", 
                            "::before": {
                                backgroundColor: theme.palette.divider
                            }
                        })
                    }
                },
                MuiDrawer: {
                    styleOverrides: {
                        root: {
                            "& .MuiPaper-root": {
                                '&::-webkit-scrollbar': {
                                    width: '8px',
                                },
                                '&::-webkit-scrollbar-track': {
                                    background: "transparent", 
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    background: "lightgray",
                                    borderRadius: '10px',
                                },
                                '&::-webkit-scrollbar-thumb:hover': {
                                    backgroundColor: '#555'
                                },
                            },
                        }
                    }
                }
            },
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 450,
                    md: 768,
                    lg: 1024,
                    xl: 1536
                }
            }
            
        })
    }, [appTheme])

    
    return (
        <ThemeProvider theme={theme}>
            <ThemeController>
                {children}
            </ThemeController>
        </ThemeProvider>
    )
}


export default AppThemeProvider;
