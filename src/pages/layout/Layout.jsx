import React, { useState, useContext, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import Zoom from "@mui/material/Zoom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { AuthContext } from "../../context/AuthContext";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.light,
    // boxShadow: theme.shadows[1],
    fontSize: 14,
    border: "1px solid #E6E8ED",
    padding: "8px 16px",
    // borderRadius:"8px"
  },
  [`& .MuiTooltip-arrow`]: {
    // fontSize: 20,
    // color: "#4A4A4A",
    "&::before": {
      backgroundColor: "#fff",
      border: "1px solid #E6E8ED",
    },
  },
}));

export default function Layout() {
  const theme = useTheme();
  let pathname = useLocation().pathname;
  console.log("pathname", pathname);
  const { vasantor_admin_panel, logout, login } = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const listButtonStyle = {
    justifyContent: open ? "initial" : "center",
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    margin: "auto",
    boxSizing: "border-box",
    p: 0,
    mb: 1,
  };

  const iconStyle = { position: "relative", left: 7 };
  const activeStyle = {
    background: theme.palette.primary.light,
    ["&.MuiListItemButton-root"]: {
      // borderRadius: "10px",
      // "& span": {
      //   color: "#fff",
      // },
      // ["& .MuiSvgIcon-root"]: {
      //   color: "#fff",
      // },
    },
  };
  const withoutLayout = [
    "/",
    "/sign-up",
    "/forgot-password",
    "/reset-password",
    "/otp",
  ];
  if (withoutLayout.includes(pathname)) {
    return <Navigation />;
  } else if (!vasantor_admin_panel.access_token) {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            "& .MuiDrawer-paper": {
              justifyContent: "space-between",
            },
          }}
        >
          {/* <DrawerHeader
          sx={{ cursor: "pointer" }} 
        >
          
          <img
            src="/VS.png"
            alt="logo"
            style={{ display: "block", margin: "auto" }}
          />
        </DrawerHeader>
        <Divider /> */}
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <Box
                sx={{
                  cursor: "pointer",
                  py: 1.5,
                }}
              >
                <img
                  src="/VS.png"
                  alt="logo"
                  style={{
                    display: "block",
                    margin: "auto",
                    width: "24px",
                    marginBottom: "16px",
                  }}
                />
                <Divider />
              </Box>
            </ListItem>
            <LightTooltip
              sx={{ fontSize: "16px" }}
              title="Projects"
              arrow
              placement="right"
              TransitionComponent={Zoom}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  component={Link}
                  to="/projects"
                  sx={[
                    { ...listButtonStyle },
                    pathname === "/projects" && { ...activeStyle },
                  ]}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ position: "relative", left: 7 }}
                    >
                      <path
                        d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2H15.73C14.14 2 13.5 2.64 13.5 4.23V8.27C13.5 9.86 14.14 10.5 15.73 10.5H19.77C21.36 10.5 22 9.86 22 8.27Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.5 17.5H20.5"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M17.5 20.5V14.5"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </LightTooltip>
            <LightTooltip
              sx={{ fontSize: "16px" }}
              title="Comments"
              arrow
              placement="right"
              TransitionComponent={Zoom}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    ...listButtonStyle,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ position: "relative", left: 7 }}
                    >
                      <path
                        d="M8.5 10.5H15.5"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7 18.4299H11L15.45 21.39C16.11 21.83 17 21.3599 17 20.5599V18.4299C20 18.4299 22 16.4299 22 13.4299V7.42993C22 4.42993 20 2.42993 17 2.42993H7C4 2.42993 2 4.42993 2 7.42993V13.4299C2 16.4299 4 18.4299 7 18.4299Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </LightTooltip>
            <LightTooltip
              sx={{ fontSize: "16px" }}
              title="Team"
              arrow
              placement="right"
              TransitionComponent={Zoom}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    ...listButtonStyle,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ position: "relative", left: 7 }}
                    >
                      <path
                        d="M9.16 10.87C9.06 10.86 8.94 10.86 8.83 10.87C6.45 10.79 4.56 8.84 4.56 6.44C4.56 3.99 6.54 2 9 2C11.45 2 13.44 3.99 13.44 6.44C13.43 8.84 11.54 10.79 9.16 10.87Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </LightTooltip>
            <LightTooltip
              sx={{ fontSize: "16px" }}
              title="Task"
              arrow
              placement="right"
              TransitionComponent={Zoom}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    ...listButtonStyle,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ position: "relative", left: 7 }}
                    >
                      <path
                        d="M12.37 8.88H17.62"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.38 8.88L7.13 9.63L9.38 7.38"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.37 15.88H17.62"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.38 15.88L7.13 16.63L9.38 14.38"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </LightTooltip>
            <LightTooltip
              sx={{ fontSize: "16px" }}
              title="Favorite"
              arrow
              placement="right"
              TransitionComponent={Zoom}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    ...listButtonStyle,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      style={{ position: "relative", left: 7 }}
                    >
                      <path
                        d="M12.73 2.50989L14.49 6.02989C14.73 6.51989 15.37 6.98989 15.91 7.07989L19.1 7.60989C21.14 7.94989 21.62 9.42989 20.15 10.8899L17.67 13.3699C17.25 13.7899 17.02 14.5999 17.15 15.1799L17.86 18.2499C18.42 20.6799 17.13 21.6199 14.98 20.3499L11.99 18.5799C11.45 18.2599 10.56 18.2599 10.01 18.5799L7.02003 20.3499C4.88003 21.6199 3.58003 20.6699 4.14003 18.2499L4.85003 15.1799C4.98003 14.5999 4.75003 13.7899 4.33003 13.3699L1.85003 10.8899C0.390031 9.42989 0.860031 7.94989 2.90003 7.60989L6.09003 7.07989C6.62003 6.98989 7.26003 6.51989 7.50003 6.02989L9.26003 2.50989C10.22 0.599893 11.78 0.599893 12.73 2.50989Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </LightTooltip>
          </List>

          <List>
            <LightTooltip
              sx={{ fontSize: "16px" }}
              title="Search"
              arrow
              placement="right"
              TransitionComponent={Zoom}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    ...listButtonStyle,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ position: "relative", left: 7 }}
                    >
                      <path
                        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 22L20 20"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </LightTooltip>
            <LightTooltip
              sx={{ fontSize: "16px" }}
              title="Notification"
              arrow
              placement="right"
              TransitionComponent={Zoom}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    ...listButtonStyle,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ position: "relative", left: 7 }}
                    >
                      <path
                        d="M12 6.44V9.77"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M12.02 2C8.34002 2 5.36002 4.98 5.36002 8.66V10.76C5.36002 11.44 5.08002 12.46 4.73002 13.04L3.46002 15.16C2.68002 16.47 3.22002 17.93 4.66002 18.41C9.44002 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M15.33 18.82C15.33 20.65 13.83 22.15 12 22.15C11.09 22.15 10.25 21.77 9.64998 21.17C9.04998 20.57 8.66998 19.73 8.66998 18.82"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                      />
                    </svg>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>{" "}
            </LightTooltip>
            <LightTooltip
              sx={{ fontSize: "16px" }}
              title="Document & Help"
              arrow
              placement="right"
              TransitionComponent={Zoom}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    ...listButtonStyle,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ position: "relative", left: 7 }}
                    >
                      <path
                        d="M21.25 7.50001C21.25 9.57107 19.5711 11.25 17.5 11.25C15.4289 11.25 13.75 9.57107 13.75 7.50001C13.75 5.42895 15.4289 3.75002 17.5 3.75002L20.2098 3.75001L21.25 3.75001V3.75487V3.76362V3.7724V3.78123V3.79009V3.79899V3.80792V3.8169V3.8259V3.83495V3.84402V3.85314V3.86229V3.87147V3.88069V3.88995V3.89923V3.90856V3.91791V3.9273V3.93672V3.94618V3.95567V3.96519V3.97474V3.98433V3.99395V4.0036V4.01328V4.02299V4.03273V4.04251V4.05231V4.06215V4.07201V4.0819V4.09183V4.10178V4.11176V4.12178V4.13182V4.14188V4.15198V4.16211V4.17226V4.18244V4.19265V4.20288V4.21314V4.22343V4.23374V4.24408V4.25445V4.26484V4.27526V4.2857V4.29616V4.30666V4.31717V4.32771V4.33828V4.34886V4.35947V4.37011V4.38077V4.39145V4.40215V4.41288V4.42362V4.43439V4.44518V4.456V4.46683V4.47768V4.48856V4.49946V4.51037V4.52131V4.53226V4.54324V4.55423V4.56525V4.57628V4.58733V4.5984V4.60949V4.62059V4.63172V4.64286V4.65402V4.66519V4.67638V4.68759V4.69882V4.71006V4.72131V4.73259V4.74387V4.75517V4.76649V4.77782V4.78917V4.80053V4.81191V4.82329V4.83469V4.84611V4.85754V4.86898V4.88043V4.8919V4.90337V4.91486V4.92637V4.93788V4.9494V4.96094V4.97248V4.98404V4.9956V5.00718V5.01876V5.03036V5.04196V5.05358V5.0652V5.07683V5.08847V5.10012V5.11177V5.12343V5.1351V5.14678V5.15846V5.17016V5.18185V5.19356V5.20527V5.21698V5.2287V5.24043V5.25216V5.2639V5.27564V5.28738V5.29913V5.31088V5.32264V5.3344V5.34616V5.35793V5.3697V5.38147V5.39325V5.40502V5.4168V5.42858V5.44036V5.45214V5.46392V5.47571V5.48749V5.49927V5.51106V5.52284V5.53462V5.54641V5.55819V5.56997V5.58175V5.59352V5.6053V5.61707V5.62884V5.64061V5.65237V5.66414V5.67589V5.68765V5.6994V5.71115V5.72289V5.73463V5.74636V5.75809V5.76981V5.78153V5.79324V5.80495V5.81665V5.82834V5.84003V5.85171V5.86338V5.87505V5.88671V5.89836V5.91V5.92164V5.93326V5.94488V5.95649V5.96809V5.97968V5.99126V6.00283V6.01439V6.02594V6.03748V6.049V6.06052V6.07203V6.08352V6.09501V6.10648V6.11793V6.12938V6.14081V6.15224V6.16364V6.17504V6.18642V6.19778V6.20914V6.22047V6.2318V6.24311V6.2544V6.26568V6.27694V6.28819V6.29942V6.31064V6.32184V6.33302V6.34419V6.35533V6.36647V6.37758V6.38867V6.39975V6.41081V6.42185V6.43287V6.44388V6.45486V6.46583V6.47677V6.4877V6.4986V6.50949V6.52035V6.53119V6.54201V6.55281V6.56359V6.57435V6.58509V6.5958V6.60649V6.61716V6.6278V6.63842V6.64902V6.6596V6.67015V6.68067V6.69118V6.70165V6.71211V6.72253V6.73294V6.74331V6.75367V6.76399V6.77429V6.78456V6.79481V6.80503V6.81522V6.82538V6.83552V6.84563V6.85571V6.86576V6.87579V6.88578V6.89575V6.90569V6.91559V6.92547V6.93532V6.94514V6.95493V6.96468V6.97441V6.9841V6.99377V7.0034V7.013V7.02257V7.0321V7.0416V7.05107V7.06051V7.06992V7.07929V7.08862V7.09793V7.1072V7.11643V7.12563V7.1348V7.14393V7.15302V7.16208V7.1711V7.18009V7.18904V7.19796V7.20683V7.21567V7.22448V7.23324V7.24197V7.25066V7.25932V7.26793V7.27651V7.28504V7.29354V7.302V7.31042V7.3188V7.32714V7.33544V7.3437V7.35191V7.36009V7.36823V7.37632V7.38437V7.39238V7.40035V7.40828V7.41616V7.42401V7.4318V7.43956V7.44727V7.45494V7.46256V7.47014V7.47768V7.48517V7.49261V7.50001Z"
                        stroke="#555555"
                        stroke-width="1.5"
                      />
                      <path
                        d="M2.75 7.50001C2.75 9.57107 4.42893 11.25 6.5 11.25C8.57107 11.25 10.25 9.57107 10.25 7.50001C10.25 5.42895 8.57107 3.75002 6.5 3.75002L3.7902 3.75001L2.75 3.75001V3.75487V3.76362V3.7724V3.78123V3.79009V3.79899V3.80792V3.8169V3.8259V3.83495V3.84402V3.85314V3.86229V3.87147V3.88069V3.88995V3.89923V3.90856V3.91791V3.9273V3.93672V3.94618V3.95567V3.96519V3.97474V3.98433V3.99395V4.0036V4.01328V4.02299V4.03273V4.04251V4.05231V4.06215V4.07201V4.0819V4.09183V4.10178V4.11176V4.12178V4.13182V4.14188V4.15198V4.16211V4.17226V4.18244V4.19265V4.20288V4.21314V4.22343V4.23374V4.24408V4.25445V4.26484V4.27526V4.2857V4.29616V4.30666V4.31717V4.32771V4.33828V4.34886V4.35947V4.37011V4.38077V4.39145V4.40215V4.41288V4.42362V4.43439V4.44518V4.456V4.46683V4.47768V4.48856V4.49946V4.51037V4.52131V4.53226V4.54324V4.55423V4.56525V4.57628V4.58733V4.5984V4.60949V4.62059V4.63172V4.64286V4.65402V4.66519V4.67638V4.68759V4.69882V4.71006V4.72131V4.73259V4.74387V4.75517V4.76649V4.77782V4.78917V4.80053V4.81191V4.82329V4.83469V4.84611V4.85754V4.86898V4.88043V4.8919V4.90337V4.91486V4.92637V4.93788V4.9494V4.96094V4.97248V4.98404V4.9956V5.00718V5.01876V5.03036V5.04196V5.05358V5.0652V5.07683V5.08847V5.10012V5.11177V5.12343V5.1351V5.14678V5.15846V5.17016V5.18185V5.19356V5.20527V5.21698V5.2287V5.24043V5.25216V5.2639V5.27564V5.28738V5.29913V5.31088V5.32264V5.3344V5.34616V5.35793V5.3697V5.38147V5.39325V5.40502V5.4168V5.42858V5.44036V5.45214V5.46392V5.47571V5.48749V5.49927V5.51106V5.52284V5.53462V5.54641V5.55819V5.56997V5.58175V5.59352V5.6053V5.61707V5.62884V5.64061V5.65237V5.66414V5.67589V5.68765V5.6994V5.71115V5.72289V5.73463V5.74636V5.75809V5.76981V5.78153V5.79324V5.80495V5.81665V5.82834V5.84003V5.85171V5.86338V5.87505V5.88671V5.89836V5.91V5.92164V5.93326V5.94488V5.95649V5.96809V5.97968V5.99126V6.00283V6.01439V6.02594V6.03748V6.049V6.06052V6.07203V6.08352V6.09501V6.10648V6.11793V6.12938V6.14081V6.15224V6.16364V6.17504V6.18642V6.19778V6.20914V6.22047V6.2318V6.24311V6.2544V6.26568V6.27694V6.28819V6.29942V6.31064V6.32184V6.33302V6.34419V6.35533V6.36647V6.37758V6.38867V6.39975V6.41081V6.42185V6.43287V6.44388V6.45486V6.46583V6.47677V6.4877V6.4986V6.50949V6.52035V6.53119V6.54201V6.55281V6.56359V6.57435V6.58509V6.5958V6.60649V6.61716V6.6278V6.63842V6.64902V6.6596V6.67015V6.68067V6.69118V6.70165V6.71211V6.72253V6.73294V6.74331V6.75367V6.76399V6.77429V6.78456V6.79481V6.80503V6.81522V6.82538V6.83552V6.84563V6.85571V6.86576V6.87579V6.88578V6.89575V6.90569V6.91559V6.92547V6.93532V6.94514V6.95493V6.96468V6.97441V6.9841V6.99377V7.0034V7.013V7.02257V7.0321V7.0416V7.05107V7.06051V7.06992V7.07929V7.08862V7.09793V7.1072V7.11643V7.12563V7.1348V7.14393V7.15302V7.16208V7.1711V7.18009V7.18904V7.19796V7.20683V7.21567V7.22448V7.23324V7.24197V7.25066V7.25932V7.26793V7.27651V7.28504V7.29354V7.302V7.31042V7.3188V7.32714V7.33544V7.3437V7.35191V7.36009V7.36823V7.37632V7.38437V7.39238V7.40035V7.40828V7.41616V7.42401V7.4318V7.43956V7.44727V7.45494V7.46256V7.47014V7.47768V7.48517V7.49261V7.50001Z"
                        stroke="#555555"
                        stroke-width="1.5"
                      />
                      <path
                        d="M8.41603 10.376C8.07138 10.1462 7.60573 10.2393 7.37596 10.584C7.1462 10.9286 7.23933 11.3943 7.58397 11.624L8.41603 10.376ZM12 15L11.3292 15.3354C11.4562 15.5895 11.7159 15.75 12 15.75C12.2841 15.75 12.5438 15.5895 12.6708 15.3354L12 15ZM16.416 11.624C16.7607 11.3943 16.8538 10.9286 16.624 10.584C16.3943 10.2393 15.9286 10.1462 15.584 10.376L16.416 11.624ZM13 13L12.584 12.376L12.4183 12.4864L12.3292 12.6646L13 13ZM11 13L11.6708 12.6646L11.5817 12.4864L11.416 12.376L11 13ZM12.6708 15.3354L13.6708 13.3354L12.3292 12.6646L11.3292 14.6646L12.6708 15.3354ZM13.416 13.624L16.416 11.624L15.584 10.376L12.584 12.376L13.416 13.624ZM7.58397 11.624L10.584 13.624L11.416 12.376L8.41603 10.376L7.58397 11.624ZM10.3292 13.3354L11.3292 15.3354L12.6708 14.6646L11.6708 12.6646L10.3292 13.3354Z"
                        fill="#555555"
                      />
                      <path
                        d="M7 16L11.2929 20.2929C11.6834 20.6834 12.3166 20.6834 12.7071 20.2929L17 16"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <circle
                        cx="17"
                        cy="7"
                        r="1.25"
                        stroke="#555555"
                        stroke-width="1.5"
                      />
                      <circle
                        cx="7"
                        cy="7"
                        r="1.25"
                        stroke="#555555"
                        stroke-width="1.5"
                      />
                    </svg>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>{" "}
            </LightTooltip>
            <LightTooltip
              sx={{ fontSize: "16px" }}
              title="Settings"
              arrow
              placement="right"
              TransitionComponent={Zoom}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    ...listButtonStyle,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ position: "relative", left: 7 }}
                    >
                      <path
                        d="M3 9.10998V14.88C3 17 3 17 5 18.35L10.5 21.53C11.33 22.01 12.68 22.01 13.5 21.53L19 18.35C21 17 21 17 21 14.89V9.10998C21 6.99998 21 6.99999 19 5.64999L13.5 2.46999C12.68 1.98999 11.33 1.98999 10.5 2.46999L5 5.64999C3 6.99999 3 6.99998 3 9.10998Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>{" "}
            </LightTooltip>
            <LightTooltip
              sx={{ fontSize: "16px" }}
              title="User"
              arrow
              placement="right"
              TransitionComponent={Zoom}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    ...listButtonStyle,
                    background: "#F0F0D3",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 9.10998V14.88C3 17 3 17 5 18.35L10.5 21.53C11.33 22.01 12.68 22.01 13.5 21.53L19 18.35C21 17 21 17 21 14.89V9.10998C21 6.99998 21 6.99999 19 5.64999L13.5 2.46999C12.68 1.98999 11.33 1.98999 10.5 2.46999L5 5.64999C3 6.99999 3 6.99998 3 9.10998Z"
                    stroke="#555555"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="#555555"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> */}
                    <img
                      src="/Avatar.png"
                      alt="avatar"
                      width="28px"
                      height="28px"
                      style={{ position: "relative", left: 7 }}
                    />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </LightTooltip>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          {/* <DrawerHeader /> */}
          <Navigation />
          <footer
            id="footer"
            style={{
              backgroundColor: "#F8F8F8",
              borderTop: "1px solid #E7E7E7",
              // textAlign: "center",
              padding: "0px 0px 0px 70px",

              position: "fixed",
              left: "0",
              bottom: "0",
              // height: "60px",
              width: "100%",
            }}
          >
            <Breadcrumbs
              aria-label="breadcrumb"
              separator="›"
              // className={classes.breadcrumbsStyle}
            >
              <Link to="/projects">Projects</Link>
              <Link to="/projects">International</Link>

              <Link to="#">VerifyMe Web</Link>
            </Breadcrumbs>
          </footer>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            "& .MuiDrawer-paper": {
              justifyContent: "space-between",
            },
          }}
        >
          {/* <DrawerHeader
          sx={{ cursor: "pointer" }} 
        >
          
          <img
            src="/VS.png"
            alt="logo"
            style={{ display: "block", margin: "auto" }}
          />
        </DrawerHeader>
        <Divider /> */}
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <Box
                sx={{
                  cursor: "pointer",
                  py: 1.5,
                }}
              >
                <img
                  src="/VS.png"
                  alt="logo"
                  style={{
                    display: "block",
                    margin: "auto",
                    width: "24px",
                    marginBottom: "16px",
                  }}
                />
                <Divider />
              </Box>
            </ListItem>
            <LightTooltip
              sx={{ fontSize: "16px" }}
              title="Projects"
              arrow
              placement="right"
              TransitionComponent={Zoom}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  component={Link}
                  to="/projects"
                  sx={[
                    { ...listButtonStyle },
                    pathname === "/projects" && { ...activeStyle },
                  ]}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ position: "relative", left: 7 }}
                    >
                      <path
                        d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2H15.73C14.14 2 13.5 2.64 13.5 4.23V8.27C13.5 9.86 14.14 10.5 15.73 10.5H19.77C21.36 10.5 22 9.86 22 8.27Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.5 17.5H20.5"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M17.5 20.5V14.5"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </LightTooltip>
            <LightTooltip
              sx={{ fontSize: "16px" }}
              title="Comments"
              arrow
              placement="right"
              TransitionComponent={Zoom}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    ...listButtonStyle,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ position: "relative", left: 7 }}
                    >
                      <path
                        d="M8.5 10.5H15.5"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7 18.4299H11L15.45 21.39C16.11 21.83 17 21.3599 17 20.5599V18.4299C20 18.4299 22 16.4299 22 13.4299V7.42993C22 4.42993 20 2.42993 17 2.42993H7C4 2.42993 2 4.42993 2 7.42993V13.4299C2 16.4299 4 18.4299 7 18.4299Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </LightTooltip>
            <LightTooltip
              sx={{ fontSize: "16px" }}
              title="Team"
              arrow
              placement="right"
              TransitionComponent={Zoom}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    ...listButtonStyle,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ position: "relative", left: 7 }}
                    >
                      <path
                        d="M9.16 10.87C9.06 10.86 8.94 10.86 8.83 10.87C6.45 10.79 4.56 8.84 4.56 6.44C4.56 3.99 6.54 2 9 2C11.45 2 13.44 3.99 13.44 6.44C13.43 8.84 11.54 10.79 9.16 10.87Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </LightTooltip>
            <LightTooltip
              sx={{ fontSize: "16px" }}
              title="Task"
              arrow
              placement="right"
              TransitionComponent={Zoom}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    ...listButtonStyle,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ position: "relative", left: 7 }}
                    >
                      <path
                        d="M12.37 8.88H17.62"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.38 8.88L7.13 9.63L9.38 7.38"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.37 15.88H17.62"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.38 15.88L7.13 16.63L9.38 14.38"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </LightTooltip>
            <LightTooltip
              sx={{ fontSize: "16px" }}
              title="Favorite"
              arrow
              placement="right"
              TransitionComponent={Zoom}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    ...listButtonStyle,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      style={{ position: "relative", left: 7 }}
                    >
                      <path
                        d="M12.73 2.50989L14.49 6.02989C14.73 6.51989 15.37 6.98989 15.91 7.07989L19.1 7.60989C21.14 7.94989 21.62 9.42989 20.15 10.8899L17.67 13.3699C17.25 13.7899 17.02 14.5999 17.15 15.1799L17.86 18.2499C18.42 20.6799 17.13 21.6199 14.98 20.3499L11.99 18.5799C11.45 18.2599 10.56 18.2599 10.01 18.5799L7.02003 20.3499C4.88003 21.6199 3.58003 20.6699 4.14003 18.2499L4.85003 15.1799C4.98003 14.5999 4.75003 13.7899 4.33003 13.3699L1.85003 10.8899C0.390031 9.42989 0.860031 7.94989 2.90003 7.60989L6.09003 7.07989C6.62003 6.98989 7.26003 6.51989 7.50003 6.02989L9.26003 2.50989C10.22 0.599893 11.78 0.599893 12.73 2.50989Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </LightTooltip>
          </List>

          <List>
            <LightTooltip
              sx={{ fontSize: "16px" }}
              title="Search"
              arrow
              placement="right"
              TransitionComponent={Zoom}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    ...listButtonStyle,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ position: "relative", left: 7 }}
                    >
                      <path
                        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 22L20 20"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </LightTooltip>
            <LightTooltip
              sx={{ fontSize: "16px" }}
              title="Notification"
              arrow
              placement="right"
              TransitionComponent={Zoom}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    ...listButtonStyle,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ position: "relative", left: 7 }}
                    >
                      <path
                        d="M12 6.44V9.77"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M12.02 2C8.34002 2 5.36002 4.98 5.36002 8.66V10.76C5.36002 11.44 5.08002 12.46 4.73002 13.04L3.46002 15.16C2.68002 16.47 3.22002 17.93 4.66002 18.41C9.44002 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M15.33 18.82C15.33 20.65 13.83 22.15 12 22.15C11.09 22.15 10.25 21.77 9.64998 21.17C9.04998 20.57 8.66998 19.73 8.66998 18.82"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                      />
                    </svg>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>{" "}
            </LightTooltip>
            <LightTooltip
              sx={{ fontSize: "16px" }}
              title="Document & Help"
              arrow
              placement="right"
              TransitionComponent={Zoom}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    ...listButtonStyle,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ position: "relative", left: 7 }}
                    >
                      <path
                        d="M21.25 7.50001C21.25 9.57107 19.5711 11.25 17.5 11.25C15.4289 11.25 13.75 9.57107 13.75 7.50001C13.75 5.42895 15.4289 3.75002 17.5 3.75002L20.2098 3.75001L21.25 3.75001V3.75487V3.76362V3.7724V3.78123V3.79009V3.79899V3.80792V3.8169V3.8259V3.83495V3.84402V3.85314V3.86229V3.87147V3.88069V3.88995V3.89923V3.90856V3.91791V3.9273V3.93672V3.94618V3.95567V3.96519V3.97474V3.98433V3.99395V4.0036V4.01328V4.02299V4.03273V4.04251V4.05231V4.06215V4.07201V4.0819V4.09183V4.10178V4.11176V4.12178V4.13182V4.14188V4.15198V4.16211V4.17226V4.18244V4.19265V4.20288V4.21314V4.22343V4.23374V4.24408V4.25445V4.26484V4.27526V4.2857V4.29616V4.30666V4.31717V4.32771V4.33828V4.34886V4.35947V4.37011V4.38077V4.39145V4.40215V4.41288V4.42362V4.43439V4.44518V4.456V4.46683V4.47768V4.48856V4.49946V4.51037V4.52131V4.53226V4.54324V4.55423V4.56525V4.57628V4.58733V4.5984V4.60949V4.62059V4.63172V4.64286V4.65402V4.66519V4.67638V4.68759V4.69882V4.71006V4.72131V4.73259V4.74387V4.75517V4.76649V4.77782V4.78917V4.80053V4.81191V4.82329V4.83469V4.84611V4.85754V4.86898V4.88043V4.8919V4.90337V4.91486V4.92637V4.93788V4.9494V4.96094V4.97248V4.98404V4.9956V5.00718V5.01876V5.03036V5.04196V5.05358V5.0652V5.07683V5.08847V5.10012V5.11177V5.12343V5.1351V5.14678V5.15846V5.17016V5.18185V5.19356V5.20527V5.21698V5.2287V5.24043V5.25216V5.2639V5.27564V5.28738V5.29913V5.31088V5.32264V5.3344V5.34616V5.35793V5.3697V5.38147V5.39325V5.40502V5.4168V5.42858V5.44036V5.45214V5.46392V5.47571V5.48749V5.49927V5.51106V5.52284V5.53462V5.54641V5.55819V5.56997V5.58175V5.59352V5.6053V5.61707V5.62884V5.64061V5.65237V5.66414V5.67589V5.68765V5.6994V5.71115V5.72289V5.73463V5.74636V5.75809V5.76981V5.78153V5.79324V5.80495V5.81665V5.82834V5.84003V5.85171V5.86338V5.87505V5.88671V5.89836V5.91V5.92164V5.93326V5.94488V5.95649V5.96809V5.97968V5.99126V6.00283V6.01439V6.02594V6.03748V6.049V6.06052V6.07203V6.08352V6.09501V6.10648V6.11793V6.12938V6.14081V6.15224V6.16364V6.17504V6.18642V6.19778V6.20914V6.22047V6.2318V6.24311V6.2544V6.26568V6.27694V6.28819V6.29942V6.31064V6.32184V6.33302V6.34419V6.35533V6.36647V6.37758V6.38867V6.39975V6.41081V6.42185V6.43287V6.44388V6.45486V6.46583V6.47677V6.4877V6.4986V6.50949V6.52035V6.53119V6.54201V6.55281V6.56359V6.57435V6.58509V6.5958V6.60649V6.61716V6.6278V6.63842V6.64902V6.6596V6.67015V6.68067V6.69118V6.70165V6.71211V6.72253V6.73294V6.74331V6.75367V6.76399V6.77429V6.78456V6.79481V6.80503V6.81522V6.82538V6.83552V6.84563V6.85571V6.86576V6.87579V6.88578V6.89575V6.90569V6.91559V6.92547V6.93532V6.94514V6.95493V6.96468V6.97441V6.9841V6.99377V7.0034V7.013V7.02257V7.0321V7.0416V7.05107V7.06051V7.06992V7.07929V7.08862V7.09793V7.1072V7.11643V7.12563V7.1348V7.14393V7.15302V7.16208V7.1711V7.18009V7.18904V7.19796V7.20683V7.21567V7.22448V7.23324V7.24197V7.25066V7.25932V7.26793V7.27651V7.28504V7.29354V7.302V7.31042V7.3188V7.32714V7.33544V7.3437V7.35191V7.36009V7.36823V7.37632V7.38437V7.39238V7.40035V7.40828V7.41616V7.42401V7.4318V7.43956V7.44727V7.45494V7.46256V7.47014V7.47768V7.48517V7.49261V7.50001Z"
                        stroke="#555555"
                        stroke-width="1.5"
                      />
                      <path
                        d="M2.75 7.50001C2.75 9.57107 4.42893 11.25 6.5 11.25C8.57107 11.25 10.25 9.57107 10.25 7.50001C10.25 5.42895 8.57107 3.75002 6.5 3.75002L3.7902 3.75001L2.75 3.75001V3.75487V3.76362V3.7724V3.78123V3.79009V3.79899V3.80792V3.8169V3.8259V3.83495V3.84402V3.85314V3.86229V3.87147V3.88069V3.88995V3.89923V3.90856V3.91791V3.9273V3.93672V3.94618V3.95567V3.96519V3.97474V3.98433V3.99395V4.0036V4.01328V4.02299V4.03273V4.04251V4.05231V4.06215V4.07201V4.0819V4.09183V4.10178V4.11176V4.12178V4.13182V4.14188V4.15198V4.16211V4.17226V4.18244V4.19265V4.20288V4.21314V4.22343V4.23374V4.24408V4.25445V4.26484V4.27526V4.2857V4.29616V4.30666V4.31717V4.32771V4.33828V4.34886V4.35947V4.37011V4.38077V4.39145V4.40215V4.41288V4.42362V4.43439V4.44518V4.456V4.46683V4.47768V4.48856V4.49946V4.51037V4.52131V4.53226V4.54324V4.55423V4.56525V4.57628V4.58733V4.5984V4.60949V4.62059V4.63172V4.64286V4.65402V4.66519V4.67638V4.68759V4.69882V4.71006V4.72131V4.73259V4.74387V4.75517V4.76649V4.77782V4.78917V4.80053V4.81191V4.82329V4.83469V4.84611V4.85754V4.86898V4.88043V4.8919V4.90337V4.91486V4.92637V4.93788V4.9494V4.96094V4.97248V4.98404V4.9956V5.00718V5.01876V5.03036V5.04196V5.05358V5.0652V5.07683V5.08847V5.10012V5.11177V5.12343V5.1351V5.14678V5.15846V5.17016V5.18185V5.19356V5.20527V5.21698V5.2287V5.24043V5.25216V5.2639V5.27564V5.28738V5.29913V5.31088V5.32264V5.3344V5.34616V5.35793V5.3697V5.38147V5.39325V5.40502V5.4168V5.42858V5.44036V5.45214V5.46392V5.47571V5.48749V5.49927V5.51106V5.52284V5.53462V5.54641V5.55819V5.56997V5.58175V5.59352V5.6053V5.61707V5.62884V5.64061V5.65237V5.66414V5.67589V5.68765V5.6994V5.71115V5.72289V5.73463V5.74636V5.75809V5.76981V5.78153V5.79324V5.80495V5.81665V5.82834V5.84003V5.85171V5.86338V5.87505V5.88671V5.89836V5.91V5.92164V5.93326V5.94488V5.95649V5.96809V5.97968V5.99126V6.00283V6.01439V6.02594V6.03748V6.049V6.06052V6.07203V6.08352V6.09501V6.10648V6.11793V6.12938V6.14081V6.15224V6.16364V6.17504V6.18642V6.19778V6.20914V6.22047V6.2318V6.24311V6.2544V6.26568V6.27694V6.28819V6.29942V6.31064V6.32184V6.33302V6.34419V6.35533V6.36647V6.37758V6.38867V6.39975V6.41081V6.42185V6.43287V6.44388V6.45486V6.46583V6.47677V6.4877V6.4986V6.50949V6.52035V6.53119V6.54201V6.55281V6.56359V6.57435V6.58509V6.5958V6.60649V6.61716V6.6278V6.63842V6.64902V6.6596V6.67015V6.68067V6.69118V6.70165V6.71211V6.72253V6.73294V6.74331V6.75367V6.76399V6.77429V6.78456V6.79481V6.80503V6.81522V6.82538V6.83552V6.84563V6.85571V6.86576V6.87579V6.88578V6.89575V6.90569V6.91559V6.92547V6.93532V6.94514V6.95493V6.96468V6.97441V6.9841V6.99377V7.0034V7.013V7.02257V7.0321V7.0416V7.05107V7.06051V7.06992V7.07929V7.08862V7.09793V7.1072V7.11643V7.12563V7.1348V7.14393V7.15302V7.16208V7.1711V7.18009V7.18904V7.19796V7.20683V7.21567V7.22448V7.23324V7.24197V7.25066V7.25932V7.26793V7.27651V7.28504V7.29354V7.302V7.31042V7.3188V7.32714V7.33544V7.3437V7.35191V7.36009V7.36823V7.37632V7.38437V7.39238V7.40035V7.40828V7.41616V7.42401V7.4318V7.43956V7.44727V7.45494V7.46256V7.47014V7.47768V7.48517V7.49261V7.50001Z"
                        stroke="#555555"
                        stroke-width="1.5"
                      />
                      <path
                        d="M8.41603 10.376C8.07138 10.1462 7.60573 10.2393 7.37596 10.584C7.1462 10.9286 7.23933 11.3943 7.58397 11.624L8.41603 10.376ZM12 15L11.3292 15.3354C11.4562 15.5895 11.7159 15.75 12 15.75C12.2841 15.75 12.5438 15.5895 12.6708 15.3354L12 15ZM16.416 11.624C16.7607 11.3943 16.8538 10.9286 16.624 10.584C16.3943 10.2393 15.9286 10.1462 15.584 10.376L16.416 11.624ZM13 13L12.584 12.376L12.4183 12.4864L12.3292 12.6646L13 13ZM11 13L11.6708 12.6646L11.5817 12.4864L11.416 12.376L11 13ZM12.6708 15.3354L13.6708 13.3354L12.3292 12.6646L11.3292 14.6646L12.6708 15.3354ZM13.416 13.624L16.416 11.624L15.584 10.376L12.584 12.376L13.416 13.624ZM7.58397 11.624L10.584 13.624L11.416 12.376L8.41603 10.376L7.58397 11.624ZM10.3292 13.3354L11.3292 15.3354L12.6708 14.6646L11.6708 12.6646L10.3292 13.3354Z"
                        fill="#555555"
                      />
                      <path
                        d="M7 16L11.2929 20.2929C11.6834 20.6834 12.3166 20.6834 12.7071 20.2929L17 16"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <circle
                        cx="17"
                        cy="7"
                        r="1.25"
                        stroke="#555555"
                        stroke-width="1.5"
                      />
                      <circle
                        cx="7"
                        cy="7"
                        r="1.25"
                        stroke="#555555"
                        stroke-width="1.5"
                      />
                    </svg>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>{" "}
            </LightTooltip>
            <LightTooltip
              sx={{ fontSize: "16px" }}
              title="Settings"
              arrow
              placement="right"
              TransitionComponent={Zoom}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    ...listButtonStyle,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ position: "relative", left: 7 }}
                    >
                      <path
                        d="M3 9.10998V14.88C3 17 3 17 5 18.35L10.5 21.53C11.33 22.01 12.68 22.01 13.5 21.53L19 18.35C21 17 21 17 21 14.89V9.10998C21 6.99998 21 6.99999 19 5.64999L13.5 2.46999C12.68 1.98999 11.33 1.98999 10.5 2.46999L5 5.64999C3 6.99999 3 6.99998 3 9.10998Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>{" "}
            </LightTooltip>
            <LightTooltip
              sx={{ fontSize: "16px" }}
              title="User"
              arrow
              placement="right"
              TransitionComponent={Zoom}
            >
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    ...listButtonStyle,
                    background: "#F0F0D3",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 9.10998V14.88C3 17 3 17 5 18.35L10.5 21.53C11.33 22.01 12.68 22.01 13.5 21.53L19 18.35C21 17 21 17 21 14.89V9.10998C21 6.99998 21 6.99999 19 5.64999L13.5 2.46999C12.68 1.98999 11.33 1.98999 10.5 2.46999L5 5.64999C3 6.99999 3 6.99998 3 9.10998Z"
                    stroke="#555555"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="#555555"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> */}
                    <img
                      src="/Avatar.png"
                      alt="avatar"
                      width="28px"
                      height="28px"
                      style={{ position: "relative", left: 7 }}
                    />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </LightTooltip>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          {/* <DrawerHeader /> */}
          <Navigation />
          <footer
            id="footer"
            style={{
              backgroundColor: "#F8F8F8",
              borderTop: "1px solid #E7E7E7",
              // textAlign: "center",
              padding: "0px 0px 0px 70px",

              position: "fixed",
              left: "0",
              bottom: "0",
              // height: "60px",
              width: "100%",
            }}
          >
            <Breadcrumbs
              aria-label="breadcrumb"
              separator="›"
              // className={classes.breadcrumbsStyle}
            >
              <Link to="/projects">Projects</Link>
              <Link to="/projects">International</Link>

              <Link to="#">VerifyMe Web</Link>
            </Breadcrumbs>
          </footer>
        </Box>
      </Box>
    );
  }
}
