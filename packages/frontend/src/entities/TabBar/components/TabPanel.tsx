import { Box, Typography } from "@mui/material";
import { LuCircleCheckBig } from "react-icons/lu";
import { blueMain } from "shared/static/styles/base";
import styles from "../styles/TabPanel.module.scss"


interface TabPanelProps {
    value: number;
    index: number;
    heading: string; 
    texts: string[];
    img: string;
}


export default function TabPanel(
    {
    value, 
    index,
    heading,
    texts,
    img
    } : TabPanelProps
) {
    return (
        <div role="tabpanel" hidden={value !== index}>
            <Box 
                sx={(t) => ({
                    display: "flex", 
                    gap: 4,
                    mx: 2,
                    [t.breakpoints.down("md")]: {
                        flexDirection: "column",
                        gap: 2
                    }
                })}
            >
                <div className={styles.panel_part} style={{display: "flex", flex: 1, flexDirection: "column", alignItems: "flex-start"}}>
                    <Typography variant="h5" sx={{fontWeight: 600, mb: 1}}>{heading}</Typography>

                    {texts.map((text, index) => {
                        return (
                            <div key={index} style={{display: "flex", alignItems: "flex-start", marginTop: 12}}>
                                <LuCircleCheckBig style={{flexShrink: 0, marginRight: 10}} color={blueMain} size={20} /> 
                                <Typography sx={{lineHeight: "20px"}} component="span">{text}</Typography>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.panel_part}>
                    <div className={styles.image}>
                        <img src={img} />
                    </div>
                </div>
            </Box>
        </div>
    )
}
