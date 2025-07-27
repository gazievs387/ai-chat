import { Box, Chip, Typography } from '@mui/material';
import { PriceCard } from 'entities/PriceCard';


export function PriceBlock() {
    return (
        <Box
            sx={(t) => ({
                display: "flex", 
                flexDirection: "column",
                alignItems: "center",
                bgcolor: t.palette.background.default,
                pt: 17,

                [t.breakpoints.down("lg")]: {
                    px: 1,
                    pt: 8
                }
            })}
        >
            <Chip label="Цены" variant="outlined" size="small" />
            
            <Typography variant="h4" sx={{textAlign: "center"}}>
                Простое и прозрачное ценообразование
            </Typography>

            <Typography color="textSecondary" sx={{fontSize: 19, maxWidth: "800px", px: 2, textAlign: "center"}}>
                Выберите подходящий вам план. Все планы включают 7-дневную бесплатную пробную версию.
            </Typography>

            <Box sx={(t) => ({
                display: "flex", 
                justifyContent: "space-between", 
                width: "100%", 
                maxWidth: 1024, 
                pb: 20, 
                mt: 5,

                [t.breakpoints.down("lg")]: {
                    flexDirection: "column",
                    pb: 10
                }
            })}>
                <PriceCard
                    heading="Бесплатный"
                    text="Начните с базовых функций"
                    price={0}
                    features={[
                        "Основные возможности ИИ",
                        "Стандартная скорость ответа"
                    ]}
                    btnText="Начать"
                />

                <PriceCard
                    heading="Про"
                    text="Для тех, кому нужно больше возможностей"
                    price={15}
                    features={[
                        "Неограниченные сообщения",
                        "Более умный ИИ",
                        "Приоритетная скорость ответа",
                        "Загрузка файлов"
                    ]}
                    btnText="Начать пробный период"
                    btnVariant="contained"
                    cardSx={{borderColor: "primary.main", borderWidth: 2}}
                >
                    Популярный
                </PriceCard>

                <PriceCard
                    heading="Бизнес"
                    text="Для команд и организаций"
                    price={29}
                    priceLabel="за пользователя/месяц"
                    features={[
                        "Возможности в Про",
                        "Работа в команде",
                        "Панель администратора",
                        "Индивидуальное обучение ИИ",
                        "Приоритетная поддержка"
                    ]}
                    btnText="Связаться с отделом продаж"
                />
            </Box>
        </Box>
    )
}
