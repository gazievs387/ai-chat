import { Box, Button, Chip, Typography, useTheme } from "@mui/material";
import { BsChevronRight } from "react-icons/bs";
import { LuSparkles } from "react-icons/lu";
import { Link } from "react-router";
import { useIsDark } from "shared/model/themeContext";
import { ChatMini } from "widgets/ChatMini";


export function Block1() {
    const isDark = useIsDark()
    const theme = useTheme()


    return (
        <Box 
            sx={{
                display: "flex", 
                pt: 12, 
                pb: 12, 
                backgroundImage: isDark ? "linear-gradient(rgb(2, 8, 23), rgb(30, 41, 59))" : "linear-gradient(rgb(255, 255, 255), rgb(241, 245, 249))",
                [theme.breakpoints.down("lg")]: {
                    pt: 0,
                    flexDirection: "column"
                }
            }}
        >
            <Box 
                sx={{
                    flex: 4, 
                    pt: 12, 
                    pl: "6%", 
                    pr: 15,
                    [theme.breakpoints.down("lg")]: {
                        pt: 6,
                        px: "3%"
                    }
                }}
            >
                <Chip 
                    label="Чат с искусственным интеллектом" 
                    size="small"
                    sx={(t) => ({
                        color: t.palette.text.primary,
                        bgcolor: t.palette.background.lightGray,
                        fontSize: 12,
                        fontWeight: 500,
                        p: "0 5px",
                    })} 
                />

                <Typography variant="h3" sx={{lineHeight: 1, mt: 2}}>
                    Интеллектуальный помощник у вас под рукой
                </Typography>

                <Typography 
                    color="textSecondary" 
                    sx={(t) => ({
                        fontSize: 19, 
                        mt: 2,
                        [t.breakpoints.down("lg")]: {
                            fontSize: 16
                        }
                    })}
                >
                    AI Chat обеспечивает естественные, полезные и точные разговоры, основанные на передовом ИИ. Получайте ответы, создавайте контент и решайте проблемы мгновенно.
                </Typography>
                
                <Box sx={(t) => ({display: "flex", gap: 1, mt: 2, [t.breakpoints.down("sm")]: {flexDirection: "column"}})}>
                    
                    <Link to="chat">
                        <Button variant="contained" fullWidth size="large" sx={{textTransform: "none"}}>
                            Использовать AI Chat <LuSparkles size={17} style={{marginLeft: 10}} />
                        </Button>
                    </Link>

                    <Button variant="outlined" size="large" sx={{textTransform: "none"}}>
                        Узнать больше <BsChevronRight size={12} style={{marginLeft: 10}} />
                    </Button>
                </Box>
            </Box>

            <Box sx={{
                display: "flex", 
                flex: 3, 
                pt: 4, 
                pr: 10, 
                justifyContent: "center",
                [theme.breakpoints.down("lg")]: {
                    px: "3%"
                }
            }}>
                <ChatMini />
            </Box>
        </Box>
    );
}
