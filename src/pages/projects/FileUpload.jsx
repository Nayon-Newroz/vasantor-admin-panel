import React, { useContext, useEffect, useMemo, useState } from "react";
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
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "70px 20px 20px",
  height: "313px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fff",
  // color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const FileUpload = ({ handleBack, handleNext }) => {
  const theme = useTheme();
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ accept: { "image/*": [] } });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <Box sx={{ mt: 12.5 }}>
      <Box>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Upload localization files
        </Typography>
        <Typography
          variant="medium"
          color="text.fade"
          sx={{ textAlign: "center" }}
        >
          Localize supports most popular localization file formats.&nbsp;
          <Link
            style={{
              textDecoration: "none",
              color: theme.palette.info.main,
            }}
          >
            Learn more.
          </Link>
        </Typography>
        <Box className="container" sx={{ my: 2.5 }}>
          <Box {...getRootProps({ style })}>
            <input {...getInputProps()} />
            <Avatar
              sx={{
                width: 44,
                height: 44,
                bgcolor: "#E5E5E5",
                mb: 7,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M9.5 17.5V11.5L7.5 13.5"
                  stroke="#555555"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.5 11.5L11.5 13.5"
                  stroke="#555555"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.5 10.5V15.5C22.5 20.5 20.5 22.5 15.5 22.5H9.5C4.5 22.5 2.5 20.5 2.5 15.5V9.5C2.5 4.5 4.5 2.5 9.5 2.5H14.5"
                  stroke="#555555"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.5 10.5H18.5C15.5 10.5 14.5 9.5 14.5 6.5V2.5L22.5 10.5Z"
                  stroke="#555555"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Avatar>
            <Typography
              variant="h6"
              color="text.fade"
              sx={{ textAlign: "center", my: 1.5 }}
            >
              Select a file or drag and drop it here
            </Typography>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              sx={{ gap: "2px" }}
            >
              <Grid
                item
                sx={{
                  width: "58px",
                  px: 1,
                  py: 0.75,
                  border: `1px solid ${theme.palette.text.fade}`,
                  textAlign: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M8.75 14V16.25C8.75 16.625 8.45 17 8 17C7.55 17 7.25 16.625 7.25 16.25V14H8.75Z"
                    stroke="#969696"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.75 14V16.25C11.75 16.625 11.45 17 11 17C10.55 17 10.25 16.625 10.25 16.25V14H11.75Z"
                    stroke="#969696"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.25 8.75V12.5C13.25 13.325 12.575 14 11.75 14H7.25C6.425 14 5.75 13.325 5.75 12.5V8.75C5.75 7.925 6.425 7.25 7.25 7.25H11.75C12.575 7.25 13.25 7.925 13.25 8.75Z"
                    stroke="#969696"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.25 8.75V11.75C4.25 12.2 3.95 12.5 3.5 12.5C3.05 12.5 2.75 12.2 2.75 11.75V8.75C2.75 8.3 3.05 8 3.5 8C3.95 8 4.25 8.3 4.25 8.75Z"
                    stroke="#969696"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.25 8.75V11.75C16.25 12.2 15.95 12.5 15.5 12.5C15.05 12.5 14.75 12.2 14.75 11.75V8.75C14.75 8.3 15.05 8 15.5 8C15.95 8 16.25 8.3 16.25 8.75Z"
                    stroke="#969696"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.25 14H8.75"
                    stroke="#969696"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.7 5.75H11.3C11.975 5.75 12.5 5.1875 12.5 4.46429C12.5 2.69643 11.15 1.25 9.5 1.25C7.85 1.25 6.5 2.69643 6.5 4.46429C6.5 5.1875 7.025 5.75 7.7 5.75Z"
                    stroke="#969696"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <Typography variant="xsmall" color="text.mute">
                  XML
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  width: "58px",
                  px: 1,
                  py: 0.75,
                  border: `1px solid ${theme.palette.text.fade}`,
                  textAlign: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M8.75 14V16.25C8.75 16.625 8.45 17 8 17C7.55 17 7.25 16.625 7.25 16.25V14H8.75Z"
                    stroke="#969696"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.75 14V16.25C11.75 16.625 11.45 17 11 17C10.55 17 10.25 16.625 10.25 16.25V14H11.75Z"
                    stroke="#969696"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.25 8.75V12.5C13.25 13.325 12.575 14 11.75 14H7.25C6.425 14 5.75 13.325 5.75 12.5V8.75C5.75 7.925 6.425 7.25 7.25 7.25H11.75C12.575 7.25 13.25 7.925 13.25 8.75Z"
                    stroke="#969696"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.25 8.75V11.75C4.25 12.2 3.95 12.5 3.5 12.5C3.05 12.5 2.75 12.2 2.75 11.75V8.75C2.75 8.3 3.05 8 3.5 8C3.95 8 4.25 8.3 4.25 8.75Z"
                    stroke="#969696"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.25 8.75V11.75C16.25 12.2 15.95 12.5 15.5 12.5C15.05 12.5 14.75 12.2 14.75 11.75V8.75C14.75 8.3 15.05 8 15.5 8C15.95 8 16.25 8.3 16.25 8.75Z"
                    stroke="#969696"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.25 14H8.75"
                    stroke="#969696"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.7 5.75H11.3C11.975 5.75 12.5 5.1875 12.5 4.46429C12.5 2.69643 11.15 1.25 9.5 1.25C7.85 1.25 6.5 2.69643 6.5 4.46429C6.5 5.1875 7.025 5.75 7.7 5.75Z"
                    stroke="#969696"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <Typography variant="xsmall" color="text.mute">
                  js
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* <Typography
          variant="h6"
          color="text.fade"
          sx={{ textAlign: "center", mb: 2.5 }}
        >
          Or
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <Link
            style={{
              textDecoration: "none",
              color: theme.palette.info.main,
            }}
          >
            Cope-paste data
          </Link>
        </Box> */}
      </Box>
    </Box>
  );
};

export default FileUpload;
