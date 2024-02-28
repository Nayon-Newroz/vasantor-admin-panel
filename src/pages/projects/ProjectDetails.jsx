import React, { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// import MenuIcon from "../icons/MenuIcon";
import { useTheme } from "@mui/material/styles";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import FilterListOffOutlinedIcon from "@mui/icons-material/FilterListOffOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import Collapse from "@mui/material/Collapse";
import { getDataWithToken } from "../../services/GetDataService";
import { AuthContext } from "../../context/AuthContext";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Checkbox from "@mui/material/Checkbox";
import AvatarGroup from "@mui/material/AvatarGroup";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Editor from "./Editor";
import Upload from "./Upload";
import Download from "./Download";

const ProjectDetails = () => {
  const theme = useTheme();
  const [activeMenuName, setActiveMenuName] = useState("Download");
  const [language, setLanguage] = useState("");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  const showChild = () => {
    switch (activeMenuName) {
      case "Editor":
        return <Editor />;

      case "Upload":
        return <Upload />;
      case "Download":
        return <Download />;

      default:
        break;
    }
  };
  return (
    <div>
      {" "}
      <Box sx={{ px: 4 }}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 2.5, mt: 2.5 }}
        >
          <Grid item>
            <Typography
              variant="h5"
              color="primary.main"
              sx={{ fontWeight: 700 }}
            >
              VerifyMe Web
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              alignItems="center"
              justifyContent="flex-end"
              spacing={1}
            >
              <Grid item>
                {" "}
                <Box sx={{ display: "flex" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/user.png"
                    sx={{ width: 24, height: 24, ml: -1.5 }}
                  />
                  <Avatar
                    alt="Travis Howard"
                    src="/user.png"
                    sx={{ width: 24, height: 24, ml: -1.5 }}
                  />
                  <Avatar
                    alt="Cindy Baker"
                    src="/user.png"
                    sx={{ width: 24, height: 24, ml: -1.5 }}
                  />
                  <Avatar
                    alt="Agnes Walker"
                    src="/user.png"
                    sx={{ width: 24, height: 24, ml: -1.5 }}
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/user.png"
                    sx={{ width: 24, height: 24, ml: -1.5 }}
                  />
                </Box>
              </Grid>
              <Grid item>
                <img
                  src="/US.svg"
                  alt="USA flag"
                  style={{
                    height: "24px",
                    width: "34px",
                    position: "relative",
                    top: 7,
                  }}
                />
                &nbsp;
                <img
                  src="/BD.svg"
                  alt="BD flag"
                  style={{
                    height: "24px",
                    width: "34px",
                    position: "relative",
                    top: 7,
                  }}
                />
                &nbsp;
                <img
                  src="/SA.svg"
                  alt="SA flag"
                  style={{
                    height: "24px",
                    width: "34px",
                    position: "relative",
                    top: 7,
                  }}
                />
                &nbsp;{" "}
                <IconButton
                  variant="outlined"
                  // sx={{ textTransform: "none",minWidth:0,width:"40px",p:0,p:.5 }}
                  disableElevation
                  sx={{
                    borderRadius: "4px",
                    border: `1px solid ${theme.palette.text.fade}`,
                    px: 1,
                    py: 0,
                    //   minHeight: "30px",
                  }}
                  size="small"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 12H18"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 18V6"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ mb: 1.125 }}>
          <Grid container>
            <Grid item xs={6}>
              <Typography
                variant="base"
                color="text.fade"
                //   sx={{ fontWeight: 500, cursor: "pointer" }}
              >
                This language file for Agent/Reseller
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Button
                variant="outlined"
                size="small"
                sx={{ textTransform: "none" }}
                startIcon={<AddOutlinedIcon />}
              >
                Add New Project
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ borderBottom: "1px solid #ECECEC" }}>
          <Grid container>
            <Grid item xs={9}>
              <Button
                variant="text"
                // size="small"
                sx={{
                  textTransform: "none",
                  borderRadius: "0px",
                  color:
                    activeMenuName === "Editor"
                      ? theme.palette.primary.main
                      : theme.palette.text.light,
                  borderBottom:
                    activeMenuName === "Editor" &&
                    `1px solid ${theme.palette.primary.main}`,
                }}
                onClick={() => setActiveMenuName("Editor")}
              >
                Editor
              </Button>
              <Button
                variant="text"
                // size="small"
                sx={{
                  textTransform: "none",
                  borderRadius: "0px",
                  color:
                    activeMenuName === "Upload"
                      ? theme.palette.primary.main
                      : theme.palette.text.light,
                  borderBottom:
                    activeMenuName === "Upload" &&
                    `1px solid ${theme.palette.primary.main}`,
                }}
                onClick={() => setActiveMenuName("Upload")}
              >
                Upload
              </Button>
              <Button
                variant="text"
                // size="small"
                sx={{
                  textTransform: "none",
                  borderRadius: "0px",
                  color:
                    activeMenuName === "Download"
                      ? theme.palette.primary.main
                      : theme.palette.text.light,
                  borderBottom:
                    activeMenuName === "Download" &&
                    `1px solid ${theme.palette.primary.main}`,
                }}
                onClick={() => setActiveMenuName("Download")}
              >
                Download
              </Button>
              <Button
                variant="text"
                // size="small"
                sx={{
                  textTransform: "none",
                  borderRadius: "0px",
                  color:
                    activeMenuName === "Tasks"
                      ? theme.palette.primary.main
                      : theme.palette.text.light,
                  borderBottom:
                    activeMenuName === "Tasks" &&
                    `1px solid ${theme.palette.primary.main}`,
                }}
                onClick={() => setActiveMenuName("Tasks")}
              >
                Tasks
              </Button>
              <Button
                variant="text"
                // size="small"
                sx={{
                  textTransform: "none",
                  borderRadius: "0px",
                  color:
                    activeMenuName === "Contributors"
                      ? theme.palette.primary.main
                      : theme.palette.text.light,
                  borderBottom:
                    activeMenuName === "Contributors" &&
                    `1px solid ${theme.palette.primary.main}`,
                }}
                onClick={() => setActiveMenuName("Contributors")}
              >
                Contributors
              </Button>
              <Button
                variant="text"
                // size="small"
                sx={{
                  textTransform: "none",
                  borderRadius: "0px",
                  color:
                    activeMenuName === "OTA Bundles"
                      ? theme.palette.primary.main
                      : theme.palette.text.light,
                  borderBottom:
                    activeMenuName === "OTA Bundles" &&
                    `1px solid ${theme.palette.primary.main}`,
                }}
                onClick={() => setActiveMenuName("OTA Bundles")}
              >
                OTA Bundles
              </Button>
            </Grid>
            <Grid item xs={3} sx={{ textAlign: "right" }}>
              <Button
                variant="text"
                size="small"
                sx={{ textTransform: "none", color: theme.palette.text.light }}
                startIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ position: "relative", top: -1 }}
                  >
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke="#969696"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 12.8801V11.1201C2 10.0801 2.85 9.22006 3.9 9.22006C5.71 9.22006 6.45 7.94006 5.54 6.37006C5.02 5.47006 5.33 4.30006 6.24 3.78006L7.97 2.79006C8.76 2.32006 9.78 2.60006 10.25 3.39006L10.36 3.58006C11.26 5.15006 12.74 5.15006 13.65 3.58006L13.76 3.39006C14.23 2.60006 15.25 2.32006 16.04 2.79006L17.77 3.78006C18.68 4.30006 18.99 5.47006 18.47 6.37006C17.56 7.94006 18.3 9.22006 20.11 9.22006C21.15 9.22006 22.01 10.0701 22.01 11.1201V12.8801C22.01 13.9201 21.16 14.7801 20.11 14.7801C18.3 14.7801 17.56 16.0601 18.47 17.6301C18.99 18.5401 18.68 19.7001 17.77 20.2201L16.04 21.2101C15.25 21.6801 14.23 21.4001 13.76 20.6101L13.65 20.4201C12.75 18.8501 11.27 18.8501 10.36 20.4201L10.25 20.6101C9.78 21.4001 8.76 21.6801 7.97 21.2101L6.24 20.2201C5.33 19.7001 5.02 18.5301 5.54 17.6301C6.45 16.0601 5.71 14.7801 3.9 14.7801C2.85 14.7801 2 13.9201 2 12.8801Z"
                      stroke="#969696"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              >
                Settings
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box>{showChild()}</Box>
      </Box>
    </div>
  );
};

export default ProjectDetails;
