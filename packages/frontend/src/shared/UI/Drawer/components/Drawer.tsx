import { CSSObject, styled, Theme } from "@mui/material"
import MuiDrawer, { DrawerProps } from "@mui/material/Drawer"
import { useMemo } from "react"


const drawerWidth = 260;


const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    backgroundColor: theme.palette.background.lightGray
});
  
const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
});


export function Drawer({mobile, children, ...props}: ({mobile?: boolean} & DrawerProps)) {
    if (mobile) {
        return <MuiDrawer {...props}>{children}</MuiDrawer>
    }

    const DrawerDesktop = useMemo(() => styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
        {
            props: ({ open }) => open,
            style: {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
            },
        },
        {
            props: ({ open }) => !open,
            style: {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
            },
        },
        ],
    }),
    ), [])


    return <DrawerDesktop {...props} variant="permanent">{children}</DrawerDesktop>
}
