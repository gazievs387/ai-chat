import { useMediaQuery } from "@mui/material";



export function useIsMobile() {
    const isDesktop = useMediaQuery((t) => t.breakpoints.down("lg"))

    return isDesktop
}
