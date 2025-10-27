import { useMediaQuery } from "@mui/material";


export function useIsMobile() {
    const isMobile = useMediaQuery((t) => t.breakpoints.down("lg"))

    return isMobile
}
