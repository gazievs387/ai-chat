import { Typography, useTheme } from "@mui/material"
import toast from "react-hot-toast"


export function useToast() {
    const theme = useTheme() 


    function toastText(text: string, type: "success" | "error" = "success") {
        toast[type](
            <Typography>
                {text}
            </Typography>,

            {
                position: "bottom-center",
                style: {
                    backgroundColor: theme.palette.mode === "light" ? theme.palette.background.default : theme.palette.background.lightGray
                }
            }
        )
    }


    return toastText
}
