import { Box, Button, Typography } from '@mui/material';
import { LuChevronRight, LuSparkles } from 'react-icons/lu';
import { Link } from 'react-router';


export function Block6() {
    return (
        <Box
            sx={(t) => ({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                bgcolor: t.palette.primary.main,
                py: 14,
                [t.breakpoints.down("lg")]: {
                    py: 7
                }
            })}
        >
            <Typography variant="h4" sx={(t) => ({color: t.palette.background.default, textAlign: "center"})} >
                Готовы испытать будущее вместе с AI Chat?
            </Typography>

            <Typography 
                sx={(t) => ({
                    fontSize: 19, 
                    maxWidth: "800px", 
                    px: 2, 
                    color: t.palette.background.default, 
                    textAlign: "center", 
                    mt: 1,
                    [t.breakpoints.down("lg")]: {
                        fontSize: 17
                    }
                })}
            >
                Присоединяйтесь к тысячам пользователей, которые уже повышают свою производительность с помощью AI Chat
            </Typography>

            <Box 
                sx={(t) => ({
                    display: "flex", 
                    flexDirection: "row", 
                    gap: 2, 
                    mt: 2,
                    [t.breakpoints.down("md")]: {
                        flexDirection: "column"
                    }
                })}
            >
                <Link to="chat">
                    <Button 
                        variant="outlined"
                        sx={{
                            py: "6px",
                            ":hover": {
                                opacity: 0.85,
                            }
                        }}
                    >
                        Начать пробную версию <LuSparkles style={{marginLeft: 16}} />
                    </Button>
                </Link>
                
                <Link to="chat">
                    <Button 
                        fullWidth
                        sx={(t) => ({
                            borderStyle: "solid", 
                            borderWidth: 1, 
                            borderColor: t.palette.primary.contrastText, 
                            color: t.palette.primary.contrastText,
                            textTransform: "none",
                            ":hover": {
                                color: t.palette.primary.main,
                                bgcolor: t.palette.primary.contrastText,
                            }
                        })}
                    >
                        Начать бесплатно <LuChevronRight style={{marginLeft: 16}} />
                    </Button>
                </Link>
            </Box>
        </Box>
    )
}
