import { Box, Typography } from '@mui/material';
import { QueryError } from 'shared/types/api';


interface ErrorHandlerProps {
    error: QueryError;
    retry: () => void;
}


export function ErrorHandler({error, retry}: ErrorHandlerProps) {
    if (!error) {
        return <></>
    }


    let errorText;

    if (error?.code === "ERR_NETWORK") {
        errorText = "Проверьте подключение к интернету и повторите" 
    } else if (error?.response?.status === 500) {
        errorText = "Мы приносим извинения, произошла ошибка на нашей стороне, мы уже занимаемся ее исправлением"
    } else if (error?.response?.data?.code === "MODEL_UNAVAILABLE") {
        errorText = "Данная модель временно недоступна. Повторите позже или используйте другую"
    } else if (error?.response?.data?.code === "LIMIT_EXCEEDED") {
        errorText = "Превышено ограничение запросов к данной модели. Повторите позже или используйте другую"
    } else {
        errorText = "Произошла ошибка"
    }
        

    return (
        <Box 
            sx={{display: "flex", maxWidth: "80%", pl: "10%", justifyContent: "center", alignItems: "center", flexWrap: "wrap", my: 2}}
            onClick={retry}
        >
            <Typography sx={{display: "block", width: "100%", textAlign: "center"}}>
                {errorText}
            </Typography>  <br /> <br /> <br /> 

            <Typography sx={{cursor: "pointer", ":hover": {opacity: 0.6}}} color="primary">
                Повторить
            </Typography>
        </Box>
    )
}
