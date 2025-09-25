import { Box, Chip, Grid, Typography } from "@mui/material";
import { FeatureCard } from "shared/UI/FeatureCard";
import { LuBrain, LuCode, LuFileText, LuImage, LuLock, LuZap } from "react-icons/lu";


export function FeaturesBlock() {
    return (
        <Box 
            id="FeaturesBlock"
            sx={(t) => ({
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                pt: 15, 
                bgcolor: t.palette.background.default, 
                [t.breakpoints.down("lg")]: {
                    pt: 7
                }
            })}
        >
            <Chip label="Возможности" size="small" variant="outlined" />

            <Typography variant="h4" sx={{textAlign: "center"}}>Невероятные возможности ИИ</Typography>

            <Typography color="textSecondary" sx={{fontSize: 19, maxWidth: "800px", px: 2, textAlign: "center"}}>
                AI Chat объединяет передовые ИИ инструменты с интуитивно понятным дизайном для предоставления исключительного пользовательского опыта.
            </Typography>
            
            <Box 
                sx={(t) => ({
                    width: "100%", 
                    maxWidth: 1024, 
                    boxSizing: "border-box",
                    pb: 20,
                    mt: 8,
                    [t.breakpoints.down("lg")]: {
                        pb: 10,
                        px: 2
                    }
                })}
            >
                <Grid container spacing={4} sx={{alignItems: "center"}}>
                    <Grid size={{ lg: 4, xs: 12}}>
                        <FeatureCard 
                            Icon={LuBrain}
                            head="Лучшее понимание"
                            text="Понимает контекст, нюансы и сложные запросы с замечательной точностью"
                            sx={(t) => ({
                                borderColor: "rgba(37, 99, 235, 0.2)", 
                                borderWidth: 2,
                                "&:hover": {
                                    borderColor: "primary.main"
                                }
                            })}
                        />
                    </Grid>
                    <Grid size={{ lg: 4, xs: 12}}>
                        <FeatureCard
                            Icon={LuZap}
                            head="Ответы в реальном времени"
                            text="Получите мгновенные, вдумчивые ответы на ваши вопросы"
                        />
                    </Grid>
                    <Grid size={{ lg: 4, xs: 12}}>
                        <FeatureCard
                            Icon={LuCode}
                            head="Генерация кода"
                            text="Напишет, объяснит и проверяет код на нескольких десятках языках программирования"
                        />
                    </Grid>
                    <Grid size={{ lg: 4, xs: 12}}>
                        <FeatureCard
                            Icon={LuFileText}
                            head="Создание контента"
                            text="Создавайте статьи, email, посты и многое другое"
                        />
                    </Grid>
                    <Grid size={{ lg: 4, xs: 12}}>
                        <FeatureCard
                            Icon={LuImage}
                            head="Понимание изображения"
                            text="Проанализируйте изображения для большего контроля"
                        />
                    </Grid>
                    <Grid size={{ lg: 4, xs: 12}}>
                        <FeatureCard
                            Icon={LuLock}
                            head="Безопасность"
                            text="Ваши разговоры остаются закрытыми и конфиденциальными"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
