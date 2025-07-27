import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import TabPanel from './TabPanel';


export function TabBar() {
    const [value, setValue] = useState(0)


    return (
        <Box sx={{width: "100%", maxWidth: 900, boxSizing: "border-box", mt: 5}}>
            <Tabs
                value={value} 
                onChange={(e, newValue) => {setValue(newValue)}}
                indicatorColor="primary"
                textColor="inherit"
                scrollButtons
                variant="scrollable"
                aria-label="full width tabs example"
                sx={(t) => ({
                    mb: 2,
                    "& .MuiTabs-list": {
                        justifyContent: "space-between"
                    }
                })}
            >
                <Tab label="Продуктивность" />
                <Tab label="Образование" />
                <Tab label="Разработка" />
                <Tab label="Креатив" />
            </Tabs>

            <TabPanel 
                value={value} 
                index={0} 
                heading='Повысьте продуктивность'
                texts={[
                    "Проекты электронных писем и сообщений за секунды",
                    "Суммируйте длинные документы и статьи",
                    "Генерировать повестки дня и элементы действий",
                    "Исследовательские темы и компиляция информации"
                ]}
                img={"https://media.istockphoto.com/id/1488294044/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%BC%D0%B5%D0%BD-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82-%D0%BD%D0%B0-%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%D0%B5-%D0%BE%D1%82%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D0%B8-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B8-%D1%81-%D0%B4%D0%B8%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0%D0%BC%D0%B8-%D0%BF%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8F%D0%BC%D0%B8.jpg?s=2048x2048&w=is&k=20&c=i0cC0kRwBV00kXGL5mjQVtQEx1SW7aP1fyF4oKTgzZM="}
            />

            <TabPanel 
                value={value} 
                index={1} 
                heading='Улучшить обучение'
                texts={[
                    "Поможет с домашними заданиями",
                    "Объяснит сложные понятия в простых словах",
                    "Практика изучения языка с разговорами", 
                    "Создание учебных пособия и карточек"
                ]}
                img={"https://media.istockphoto.com/id/1460007178/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0-%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8-%D0%BD%D0%B0-%D1%81%D1%82%D0%BE%D0%BB%D0%B5-%D0%B8-%D1%84%D0%BE%D0%BD%D0%B5-%D0%B4%D0%BB%D1%8F-%D0%B8%D0%B7%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B8-%D0%B8%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B9-%D0%B2-%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8-%D1%88%D0%BA%D0%BE%D0%BB%D0%B5-%D0%B8%D0%BB%D0%B8.jpg?s=1024x1024&w=is&k=20&c=T9BvbnYanBk0_baAVvFGYorpHZOwJhpDQh-Za88T4bE="}
            />

            <TabPanel 
                value={value} 
                index={2} 
                heading='Ускорение разработки'
                texts={[
                    "Создать фрагменты и функции кода",
                    "Проблемы отладки и оптимизировать производительность",
                    "Объясните концепции кода и программирования",
                    "Преобразовать между языками программирования"
                ]}
                img={"https://media.istockphoto.com/id/1700567210/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BE%D0%B1%D0%B5%D1%81%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B8%D0%BB%D0%B8-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%81%D1%82-%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D0%B0%D0%B5%D1%82-%D0%BD%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%B5-%D1%87%D1%82%D0%BE%D0%B1%D1%8B-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C.jpg?s=1024x1024&w=is&k=20&c=23RDJMNzvWkh7qRKXPxOOsgAoXEjjcZpMiVqSACbtKE="}
            />

            <TabPanel 
                value={value} 
                index={3} 
                heading='Получите вдохновение'
                texts={[
                    "Пишите рассказы, стихи и творческий контент",
                    "Создание маркетинговых текстов и публикаций в социальных сетях",
                    "Мозговой штурм идей для проектов и кампаний",
                    "Создавайте планы статей и презентаций"
                ]}
                img={"https://media.istockphoto.com/id/1371081916/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D1%84%D0%BE%D1%80%D0%BC%D1%83%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BD%D0%B0-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D1%8B%D1%85-%D0%BA%D1%83%D0%B1%D0%B8%D0%BA%D0%B0%D1%85-%D1%81-%D1%80%D0%B5%D1%87%D0%B5%D0%B2%D1%8B%D0%BC%D0%B8-%D0%BF%D1%83%D0%B7%D1%8B%D1%80%D1%8C%D0%BA%D0%B0%D0%BC%D0%B8.jpg?s=1024x1024&w=is&k=20&c=Vo1ys9yG_jDv6q7rTKUltrweWHHdhV5MfWqqt53RFWk="}
            />
        </Box>
    )
}
