import React, { useState, useEffect, useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import HomeIcon from "@mui/icons-material/Home";
import Visibility from "@mui/icons-material/Visibility";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import StoreIcon from "@mui/icons-material/Store";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LockResetIcon from "@mui/icons-material/LockReset";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AppsIcon from "@mui/icons-material/Apps";
import HowToRegIcon from "@mui/icons-material/HowToReg";
// import { makeStyles } from "@mui/styles";
import Navigation from "../navigation/Navigation";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ListItem from "@mui/material/ListItem";
import Skeleton from "@mui/material/Skeleton";
import SettingsPowerIcon from "@mui/icons-material/SettingsPower";
import { getDataWithToken } from "../../services/GetDataService";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import CircleIcon from "@mui/icons-material/Circle";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import RecentActorsOutlinedIcon from "@mui/icons-material/RecentActorsOutlined";
import PlaylistRemoveOutlinedIcon from "@mui/icons-material/PlaylistRemoveOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";

const drawerWidth = 270;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   // background: "#fff !important",
//   // boxShadow: "none !important",
//   borderBottom: "1px solid #dddddd !important",
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   zIndex: `${theme.zIndex.drawer + 1} !important`,
//   background: "#fff !important",
//   boxShadow: "none !important",
//   ...(open && {
//     // background: "#fff !important",
//     // boxShadow: "none !important",
//     borderBottom: "1px solid #dddddd !important",
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background: "#fff !important",
  boxShadow: "none",
  zIndex: theme.zIndex.drawer + 1,
  // borderBottom: "1px solid #dddddd !important",
  ...(open && {
    // width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Layout() {
  // const classes = useStyles();
  const theme = useTheme();
  let navigate = useNavigate();
  let pathname = useLocation().pathname;
  // console.log("pathname", pathname);

  const { login, vasantor_admin_panel, logout } = useContext(AuthContext);
  // console.log("vasantor_admin_panel", vasantor_admin_panel);
  const [open, setOpen] = useState(true);

  const [openLoadingDialog, setOpenLoadingDialog] = useState(false);
  const time = parseInt(1000 * 60 * 120);

  const listButtonStyle = {
    // marginBottom: "5px !important",
    padding: "6px 16px !important",
    "& span": {
      color: theme.palette.text.light,
      fontSize: "14px",
      fontWeight: "500 !important",
      // [theme.breakpoints.down("xl")]: {
      //   fontSize: "14px",
      // },
      // [theme.breakpoints.down("md")]: {
      //   fontSize: "12px",
      // },
    },
    ["& .MuiListItemIcon-root"]: {
      minWidth: "32px",
    },
    ["& .MuiSvgIcon-root"]: {
      position: "relative",
      top: "-2px",
      color: theme.palette.text.light,
      fontSize: "20px",
      [theme.breakpoints.down("md")]: {
        fontSize: "10px",
      },
    },
    ["&.MuiListItemButton-root"]: { borderRadius: "10px" },
    ["&.MuiListItemButton-root:hover"]: {
      "& span": {
        color: "#fff",
      },
      background: theme.palette.primary.main,

      ["& .MuiSvgIcon-root"]: {
        color: "#fff",
      },
    },
  };
  const activeStyle = {
    ["&.MuiListItemButton-root"]: {
      borderRadius: "10px",
      "& span": {
        color: "#fff",
      },
      background: theme.palette.primary.main,

      ["& .MuiSvgIcon-root"]: {
        color: "#fff",
      },
    },
  };
  const navigateRoutes = (routeName) => {
    navigate(routeName, { replace: true });
  };

  const fnLogout = () => {
    logout();
    navigate("/");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const withoutLayout = ["/", "/forgot-password", "/reset-password", "/verify"];

  if (withoutLayout.includes(pathname)) {
    return (
      <Navigation
        openLoadingDialog={openLoadingDialog}
        setOpenLoadingDialog={setOpenLoadingDialog}
      />
    );
  } else if (!vasantor_admin_panel.access_token) {
    return (
      <Navigation
        openLoadingDialog={openLoadingDialog}
        setOpenLoadingDialog={setOpenLoadingDialog}
      />
    );
  } else {
    return (
      <Box sx={{ display: "flex" }}>
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img
                src="/logo.png"
                alt=""
                // className={classes.logoStyle}
                style={{
                  position: "relative",
                  top: "8px",
                  left: "0px",
                  // cursor: "pointer",
                  maxWidth: "175px",
                }}
              />
              {/* <IconButton
                onClick={handleDrawerClose}
                aria-label="open drawer"
                edge="start"
                style={{
                  ml: 2,
                  position: "relative",
                  top: "-10px",
                  left: "35px",
                  borderRadius: "10px",
                  border: "1px solid rgba(158,31,96,1)",

                  padding: "5px",
                  "&:hover": {
                    background: "rgba(158,31,96,1)",
                  },
                }}
              
              >
                <MenuIcon
                  sx={{ color: "rgba(158,31,96,1)", fontSize: "26px" }}
                />
              </IconButton> */}
            </Typography>

            <div variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <IconButton
                id="basic-button"
                aria-controls={menuOpen ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={menuOpen ? "true" : undefined}
                onClick={handleClick}
                style={{
                  padding: 0,
                  color: theme.palette.primary.main,
                  fontSize: "14px",
                  textTransform: "none",
                }}
              >
                <SettingsPowerIcon sx={{ width: 40, height: 40 }} />
              </IconButton>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navigateRoutes("/change-password");
                  }}
                >
                  Change Password
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    fnLogout();
                  }}
                >
                  Sign Out
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          // classes={{ paper: classes.MuiDrawer }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              borderRight: "none",
              boxShadow: "none",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader></DrawerHeader>

          <List sx={{ px: 4, py: 4 }}>
            <Typography
              variant="small"
              color="text.main"
              sx={{ fontWeight: 700, mb: 1 }}
            >
              Dashboard
            </Typography>

            <ListItemButton
              component={Link}
              to="/dashboard"
              sx={[
                { ...listButtonStyle, mb: 2 },
                pathname === "/dashboard" && { ...activeStyle },
              ]}
            >
              <ListItemIcon>
                <DashboardOutlinedIcon />
              </ListItemIcon>

              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <Typography
              variant="small"
              color="text.main"
              sx={{ fontWeight: 700, mb: 1 }}
            >
              Country Pages
            </Typography>

            <ListItemButton
              component={Link}
              to="/country-list"
              sx={[
                { ...listButtonStyle, mb: 2 },
                pathname === "/country-list" && { ...activeStyle },
              ]}
            >
              <ListItemIcon>
                <PublicOutlinedIcon />
              </ListItemIcon>

              <ListItemText primary="Country" />
            </ListItemButton>

            <Typography
              variant="small"
              color="text.main"
              sx={{ fontWeight: 700, mb: 1 }}
            >
              Bank Pages
            </Typography>

            {/* <ListItemButton
              component={Link}
              to="/add-order"
              sx={[
                { ...listButtonStyle, mb: 0.5 },
                pathname === "/add-order" && { ...activeStyle },
              ]}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>

              <ListItemText primary="Add Order" />
            </ListItemButton> */}
            <ListItemButton
              component={Link}
              to="/bank-list"
              sx={[
                { ...listButtonStyle, mb: 2 },
                pathname === "/bank-list" && { ...activeStyle },
              ]}
            >
              <ListItemIcon>
                <AccountBalanceOutlinedIcon />
              </ListItemIcon>

              <ListItemText primary="Bank" />
            </ListItemButton>

            <Typography
              variant="small"
              color="text.main"
              sx={{ fontWeight: 700, mb: 1 }}
            >
              Transfer Pages
            </Typography>

            <ListItemButton
              component={Link}
              to="/transfer-history"
              sx={[
                { ...listButtonStyle, mb: 2 },
                pathname === "/transfer-history" && { ...activeStyle },
              ]}
            >
              <ListItemIcon>
                <FeaturedPlayListOutlinedIcon />
              </ListItemIcon>

              <ListItemText primary="Transfer History" />
            </ListItemButton>

            <Typography
              variant="small"
              color="text.main"
              sx={{ fontWeight: 700, mb: 1 }}
            >
              Transaction Pages
            </Typography>

            <ListItemButton
              component={Link}
              to="/transaction-charges"
              sx={[
                { ...listButtonStyle, mb: 0.5 },
                pathname === "/transaction-charges" && { ...activeStyle },
              ]}
            >
              <ListItemIcon>
                <LocalAtmOutlinedIcon />
              </ListItemIcon>

              <ListItemText primary="Transaction Charges" />
            </ListItemButton>
            <ListItemButton
              component={Link}
              to="/transaction-limit"
              sx={[
                { ...listButtonStyle, mb: 2 },
                pathname === "/transaction-limit" && { ...activeStyle },
              ]}
            >
              <ListItemIcon>
                <PriceChangeOutlinedIcon />
              </ListItemIcon>

              <ListItemText primary="Transaction Limit" />
            </ListItemButton>
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />

          <Navigation
            openLoadingDialog={openLoadingDialog}
            setOpenLoadingDialog={setOpenLoadingDialog}
          />
        </Main>
      </Box>
    );
  }
}
