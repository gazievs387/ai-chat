import { Box, Chip, Typography } from '@mui/material';
import { TabBar } from 'entities/TabBar';


export function UseCasesBlock() {
    return (
        <Box 
            sx={(t) => ({
                display: "flex", 
                flexDirection: "column",
                alignItems: "center",
                bgcolor: t.palette.background.lightGray, 
                pt: 17,
                pb: 20,
                [t.breakpoints.down("lg")]: {
                    pt: 8,
                    pb: 10
                }
            })}
        >
            <Chip label="Варианты использования" variant="outlined" size="small" />

            <Typography sx={{textAlign: "center"}} variant="h4">Как люди используют AI Chat</Typography>

            <Typography color="textSecondary" sx={{fontSize: 19, maxWidth: "800px", px: 2, textAlign: "center"}}>
                От студентов до профессионалов, AI Chat помогает людям в разных областях.
            </Typography>

            <TabBar />
        </Box>
    )
}
