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
import Alert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px",
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

const Download = () => {
  const theme = useTheme();
  const [age, setAge] = React.useState(10);
  const [fileFormateOpen, setFileFormateOpen] = useState(true);
  const [fileFormateOpen2, setFileFormateOpen2] = useState(true);
  const [fileStructureOpen, setFileStructureOpen] = useState(true);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const customeTextFeild = {
    background: "#ffffff",
    "& label.Mui-focused": {
      color: "#E5E5E5",
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-input": {
      // padding: "15px 24px 15px 0px",
    },
    "& .MuiOutlinedInput-root": {
      // paddingLeft: "24px",
      "& fieldset": {
        borderColor: "#E5E5E5",
      },

      "&:hover fieldset": {
        borderColor: "#E5E5E5",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#E5E5E5",
      },
    },
  };
  return (
    <Box
      item
      xs={8.5}
      sx={{
        pr: 2,
        py: 2,
        height: "Calc(100vh - 177px)",
        overflow: "auto",
        boxSizing: "border-box",
      }}
    >
      <Alert
        icon={false}
        severity="warning"
        sx={{ color: "#7B5100", p: 2, py: 1, mb: 2 }}
      >
        Your project contains 4 QA issues.
      </Alert>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          {" "}
          <Box sx={{ p: 2, background: "#fff", mb: 1 }}>
            <Box>
              <Typography
                variant="medium"
                sx={{ display: "inline-flex", fontWeight: 600 }}
              >
                File format
              </Typography>
            </Box>

            <FormControl fullWidth size="small" sx={{ mt: 1.125 }}>
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                // label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>JSON (.json)</MenuItem>
              </Select>

              <TableContainer sx={{ px: 4, mt: 1 }}>
                <Table aria-label="simple table">
                  <TableBody>
                    <TableRow sx={{ "& td, & th": { border: 0 } }}>
                      <TableCell sx={{ width: "30px", p: 0 }}>
                        <Checkbox size="small" color="info" />
                      </TableCell>
                      <TableCell sx={{ pl: 0, py: 0, fontWeight: 600 }}>
                        Include all platform keys
                        <IconButton sx={{ borderRadius: "8px" }}>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                              stroke="#555555"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9.00293 12L9.00293 8.25"
                              stroke="#555555"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9.00684 6L9.0001 6"
                              stroke="#555555"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={6}>
          {" "}
          <Box sx={{ p: 2, background: "#fff", mb: 1 }}>
            <Box>
              <Typography
                variant="medium"
                sx={{ display: "inline-flex", fontWeight: 600 }}
              >
                File structure
              </Typography>
            </Box>

            <TableContainer sx={{ py: 1.125 }}>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow sx={{ "& td, & th": { border: 0 } }}>
                    <TableCell sx={{ width: "30px", p: 0 }}>
                      <Checkbox size="small" color="info" />
                    </TableCell>
                    <TableCell sx={{ pl: 0, py: 0 }}>
                      One file per language. Bundle structure:
                      <IconButton sx={{ borderRadius: "8px" }}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                            stroke="#555555"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.00293 12L9.00293 8.25"
                            stroke="#555555"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.00684 6L9.0001 6"
                            stroke="#555555"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ "& td, & th": { border: 0 } }}>
                    <TableCell sx={{ width: "30px", p: 0 }}>
                      <Checkbox size="small" color="info" />
                    </TableCell>
                    <TableCell sx={{ pl: 0, py: 0 }}>
                      Multiple files per language (use assigned filenames).
                      Directory prefix:
                      <IconButton sx={{ borderRadius: "8px" }}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                            stroke="#555555"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.00293 12L9.00293 8.25"
                            stroke="#555555"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.00684 6L9.0001 6"
                            stroke="#555555"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ p: 2, background: "#fff", mb: 1 }}>
            <Box>
              <Typography
                variant="medium"
                sx={{ display: "inline-flex", fontWeight: 600 }}
              >
                File format
              </Typography>
            </Box>

            <TableContainer sx={{ py: 1.125 }}>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      colSpan={2}
                      sx={{
                        pl: 0,
                        py: 0,
                        fontWeight: 600,
                        color: theme.palette.text.light,
                      }}
                    >
                      <Checkbox size="small" color="info" /> All (2/2)
                    </TableCell>
                  </TableRow>

                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      sx={{
                        pl: 0,
                        py: 0,
                        fontWeight: 600,
                        color: theme.palette.text.light,
                        width: "50%",
                      }}
                    >
                      <Checkbox size="small" color="info" />
                      <img
                        src="/US.svg"
                        style={{ position: "relative", top: 3 }}
                      />{" "}
                      &nbsp; English{" "}
                      <Link
                        style={{
                          textDecoration: "none",
                          color: theme.palette.info.main,
                        }}
                      >
                        en
                      </Link>
                    </TableCell>
                    <TableCell
                      sx={{
                        pl: 0,
                        py: 0,
                        fontWeight: 600,
                        color: theme.palette.text.light,
                      }}
                    >
                      <Grid container alignItems="center">
                        <Grid item sx={{ width: "50px" }}>
                          100%
                        </Grid>
                        <Grid item sx={{ width: "Calc(100% - 50px)" }}>
                          <LinearProgress variant="determinate" value={100} />
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      sx={{
                        pl: 0,
                        py: 0,
                        fontWeight: 600,
                        color: theme.palette.text.light,
                        width: "50%",
                      }}
                    >
                      <Checkbox size="small" color="info" />
                      <img
                        src="/BD.svg"
                        style={{ position: "relative", top: 3 }}
                      />{" "}
                      &nbsp; Bengali (Bangladesh){" "}
                      <Link
                        style={{
                          textDecoration: "none",
                          color: theme.palette.info.main,
                        }}
                      >
                        bn_BD
                      </Link>
                    </TableCell>
                    <TableCell
                      sx={{
                        pl: 0,
                        py: 0,
                        fontWeight: 600,
                        color: theme.palette.text.light,
                      }}
                    >
                      <Grid container alignItems="center">
                        <Grid item sx={{ width: "50px" }}>
                          100%
                        </Grid>
                        <Grid item sx={{ width: "Calc(100% - 50px)" }}>
                          <LinearProgress variant="determinate" value={100} />
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
        <Grid item xs={6}>
          {" "}
          <Box sx={{ p: 2, background: "#fff", mb: 1 }}>
            <Typography
              variant="medium"
              component="div"
              sx={{ fontWeight: 600, mb: 1.5 }}
            >
              Content to export
            </Typography>

            <Typography
              variant="medium"
              component="div"
              sx={{ fontWeight: 600, mb: 1 }}
            >
              Data
            </Typography>
            <FormControl fullWidth size="small" sx={{ mb: 1.5 }}>
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                // label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>JSON (.json)</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="medium" sx={{ fontWeight: 600, mb: 1 }}>
              Include tags{" "}
              <IconButton sx={{ borderRadius: "8px" }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                    stroke="#555555"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.00293 12L9.00293 8.25"
                    stroke="#555555"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.00684 6L9.0001 6"
                    stroke="#555555"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </IconButton>
            </Typography>
            <FormControl
              fullWidth
              size="small"
              sx={{
                ...customeTextFeild,
                "& label.Mui-focused": {
                  color: "rgba(0,0,0,0)",
                },
                mb: 1.5,
              }}
            >
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}

              <InputLabel
                id="demo-simple-select-label"
                sx={{ color: "#b3b3b3" }}
              >
                Search for a tag
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                MenuProps={{
                  PaperProps: {
                    sx: {
                      maxHeight: 250, // Set the max height here
                    },
                  },
                }}
                // value={age}
                // label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>JSON (.json)</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="medium" sx={{ fontWeight: 600, mb: 1 }}>
              Exclude tags{" "}
              <IconButton sx={{ borderRadius: "8px" }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                    stroke="#555555"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.00293 12L9.00293 8.25"
                    stroke="#555555"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.00684 6L9.0001 6"
                    stroke="#555555"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </IconButton>
            </Typography>
            <FormControl
              fullWidth
              size="small"
              sx={{
                ...customeTextFeild,
                "& label.Mui-focused": {
                  color: "rgba(0,0,0,0)",
                },
                mb: 1.5,
              }}
            >
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}

              <InputLabel
                id="demo-simple-select-label"
                sx={{ color: "#b3b3b3" }}
              >
                Search for a tag
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                MenuProps={{
                  PaperProps: {
                    sx: {
                      maxHeight: 250, // Set the max height here
                    },
                  },
                }}
                // value={age}
                // label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>JSON (.json)</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="medium" sx={{ fontWeight: 600, mb: 1 }}>
              File name{" "}
              <IconButton sx={{ borderRadius: "8px" }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                    stroke="#555555"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.00293 12L9.00293 8.25"
                    stroke="#555555"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.00684 6L9.0001 6"
                    stroke="#555555"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </IconButton>
            </Typography>
            <FormControl
              fullWidth
              size="small"
              sx={{
                ...customeTextFeild,
                "& label.Mui-focused": {
                  color: "rgba(0,0,0,0)",
                },
                mb: 1.5,
              }}
            >
              {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}

              <InputLabel
                id="demo-simple-select-label"
                sx={{ color: "#b3b3b3" }}
              >
                Search for a tag
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                MenuProps={{
                  PaperProps: {
                    sx: {
                      maxHeight: 250, // Set the max height here
                    },
                  },
                }}
                // value={age}
                // label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>JSON (.json)</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={6}>
          {" "}
          <Box sx={{ p: 2, background: "#fff", mb: 1 }}>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="medium"
                sx={{ display: "inline-flex", fontWeight: 600 }}
              >
                Advanced settings
              </Typography>
            </Box>
            <Grid container columnSpacing={1.5} sx={{ mb: 2 }}>
              <Grid item xs={6}>
                <TableContainer sx={{ py: 1.125 }}>
                  <Table aria-label="simple table">
                    <TableBody>
                      <TableRow sx={{ "& td, & th": { border: 0 } }}>
                        <TableCell sx={{ width: "30px", p: 0 }}>
                          <Checkbox size="small" color="info" />
                        </TableCell>
                        <TableCell sx={{ pl: 0, py: 0 }}>
                          Don’t use directory prefix
                          <IconButton sx={{ borderRadius: "8px" }}>
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                                stroke="#555555"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9.00293 12L9.00293 8.25"
                                stroke="#555555"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9.00684 6L9.0001 6"
                                stroke="#555555"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </IconButton>
                        </TableCell>
                      </TableRow>
                      <TableRow sx={{ "& td, & th": { border: 0 } }}>
                        <TableCell sx={{ width: "30px", p: 0 }}>
                          <Checkbox size="small" color="info" />
                        </TableCell>
                        <TableCell sx={{ pl: 0, py: 0 }}>
                          Replace line breaks with&nbsp;{" "}
                          <spna
                            style={{
                              background: "#FAFAFA",
                              padding: "2px 12px",
                              borderRadius: "4px",
                              border: "1px solid #E5E5E5",
                            }}
                          >
                            /n
                          </spna>
                          <IconButton sx={{ borderRadius: "8px" }}>
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                                stroke="#555555"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9.00293 12L9.00293 8.25"
                                stroke="#555555"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9.00684 6L9.0001 6"
                                stroke="#555555"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </IconButton>
                        </TableCell>
                      </TableRow>
                      <TableRow sx={{ "& td, & th": { border: 0 } }}>
                        <TableCell sx={{ width: "30px", p: 0 }}>
                          <Checkbox size="small" color="info" />
                        </TableCell>
                        <TableCell sx={{ pl: 0, py: 0 }}>
                          Add new line at EOF
                          <IconButton sx={{ borderRadius: "8px" }}>
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                                stroke="#555555"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9.00293 12L9.00293 8.25"
                                stroke="#555555"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9.00684 6L9.0001 6"
                                stroke="#555555"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={6}>
                <TableContainer sx={{ py: 1.125 }}>
                  <Table aria-label="simple table">
                    <TableBody>
                      <TableRow sx={{ "& td, & th": { border: 0 } }}>
                        <TableCell sx={{ width: "30px", p: 0 }}>
                          <Checkbox size="small" color="info" />
                        </TableCell>
                        <TableCell sx={{ pl: 0, py: 0 }}>
                          Disable referencing
                          <IconButton sx={{ borderRadius: "8px" }}>
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                                stroke="#555555"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9.00293 12L9.00293 8.25"
                                stroke="#555555"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9.00684 6L9.0001 6"
                                stroke="#555555"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </IconButton>
                        </TableCell>
                      </TableRow>
                      <TableRow sx={{ "& td, & th": { border: 0 } }}>
                        <TableCell sx={{ width: "30px", p: 0 }}>
                          <Checkbox size="small" color="info" />
                        </TableCell>
                        <TableCell sx={{ pl: 0, py: 0 }}>
                          Unescape forward slashes
                          <IconButton sx={{ borderRadius: "8px" }}>
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                                stroke="#555555"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9.00293 12L9.00293 8.25"
                                stroke="#555555"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9.00684 6L9.0001 6"
                                stroke="#555555"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>

            <Grid container columnSpacing={1.5}>
              <Grid item xs={6}>
                {" "}
                <Typography variant="medium" sx={{ fontWeight: 600, mb: 1 }}>
                  Empty translations{" "}
                  <IconButton sx={{ borderRadius: "8px" }}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                        stroke="#555555"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.00293 12L9.00293 8.25"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.00684 6L9.0001 6"
                        stroke="#555555"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </IconButton>
                </Typography>
                <FormControl
                  fullWidth
                  size="small"
                  sx={{
                    ...customeTextFeild,
                    "& label.Mui-focused": {
                      color: "rgba(0,0,0,0)",
                    },
                    mb: 1.5,
                  }}
                >
                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}

                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ color: "#b3b3b3" }}
                  >
                    Search for a tag
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          maxHeight: 250, // Set the max height here
                        },
                      },
                    }}

                    // value={age}
                    // label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>Export as empty strings</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                {" "}
                <Typography variant="medium" sx={{ fontWeight: 600, mb: 1 }}>
                  Indentation{" "}
                  <IconButton sx={{ borderRadius: "8px" }}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                        stroke="#555555"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.00293 12L9.00293 8.25"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.00684 6L9.0001 6"
                        stroke="#555555"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </IconButton>
                </Typography>
                <FormControl
                  fullWidth
                  size="small"
                  sx={{
                    ...customeTextFeild,
                    "& label.Mui-focused": {
                      color: "rgba(0,0,0,0)",
                    },
                    mb: 1.5,
                  }}
                >
                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}

                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ color: "#b3b3b3" }}
                  >
                    Search for a tag
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          maxHeight: 250, // Set the max height here
                        },
                      },
                    }}

                    // value={age}
                    // label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>4 spaces</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                {" "}
                <Typography variant="medium" sx={{ fontWeight: 600, mb: 1 }}>
                  Sort keys by{" "}
                  <IconButton sx={{ borderRadius: "8px" }}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                        stroke="#555555"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.00293 12L9.00293 8.25"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.00684 6L9.0001 6"
                        stroke="#555555"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </IconButton>
                </Typography>
                <FormControl
                  fullWidth
                  size="small"
                  sx={{
                    ...customeTextFeild,
                    "& label.Mui-focused": {
                      color: "rgba(0,0,0,0)",
                    },
                    mb: 1.5,
                  }}
                >
                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}

                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ color: "#b3b3b3" }}
                  >
                    Search for a tag
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          maxHeight: 250, // Set the max height here
                        },
                      },
                    }}

                    // value={age}
                    // label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>First added</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{ position: "relative" }}>
                {" "}
                <Typography variant="medium" sx={{ fontWeight: 600, mb: 1 }}>
                  Placeholder format{" "}
                  <IconButton sx={{ borderRadius: "8px" }}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                        stroke="#555555"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.00293 12L9.00293 8.25"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.00684 6L9.0001 6"
                        stroke="#555555"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </IconButton>
                </Typography>
                <FormControl
                  fullWidth
                  size="small"
                  sx={{
                    ...customeTextFeild,
                    "& label.Mui-focused": {
                      color: "rgba(0,0,0,0)",
                    },
                    mb: 1.5,
                  }}
                >
                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}

                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ color: "#b3b3b3" }}
                  >
                    Search for a tag
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          maxHeight: 250, // Set the max height here
                        },
                      },
                    }}

                    // value={age}
                    // label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>Printf</MenuItem>
                  </Select>
                </FormControl>
                <TableContainer
                  sx={{ px: 4, mt: 1, position: "absolute", bottom: -35 }}
                >
                  <Table aria-label="simple table">
                    <TableBody>
                      <TableRow sx={{ "& td, & th": { border: 0 } }}>
                        <TableCell sx={{ width: "30px", p: 0 }}>
                          <Checkbox size="small" color="info" />
                        </TableCell>
                        <TableCell sx={{ pl: 0, py: 0, fontWeight: 600 }}>
                          Convert all &nbsp;
                          <spna
                            style={{
                              background: "#FAFAFA",
                              padding: "2px 8px",
                              borderRadius: "4px",
                              border: "1px solid #E5E5E5",
                              fontWeight: 400,
                              color: theme.palette.text.light,
                            }}
                          >
                            [%]
                          </spna>
                          &nbsp;to&nbsp;
                          <spna
                            style={{
                              background: "#FAFAFA",
                              padding: "2px 8px",
                              borderRadius: "4px",
                              border: "1px solid #E5E5E5",
                              fontWeight: 400,
                              color: theme.palette.text.light,
                            }}
                          >
                            %%
                          </spna>
                          <IconButton sx={{ borderRadius: "8px" }}>
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                                stroke="#555555"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9.00293 12L9.00293 8.25"
                                stroke="#555555"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9.00684 6L9.0001 6"
                                stroke="#555555"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={6}>
                {" "}
                <Typography variant="medium" sx={{ fontWeight: 600, mb: 1 }}>
                  Plural format{" "}
                  <IconButton sx={{ borderRadius: "8px" }}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                        stroke="#555555"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.00293 12L9.00293 8.25"
                        stroke="#555555"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.00684 6L9.0001 6"
                        stroke="#555555"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </IconButton>
                </Typography>
                <FormControl
                  fullWidth
                  size="small"
                  sx={{
                    ...customeTextFeild,
                    "& label.Mui-focused": {
                      color: "rgba(0,0,0,0)",
                    },
                    mb: 1.5,
                  }}
                >
                  {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}

                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ color: "#b3b3b3" }}
                  >
                    Search for a tag
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          maxHeight: 250, // Set the max height here
                        },
                      },
                    }}

                    // value={age}
                    // label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>Array</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 5,
          color: "#555555",
          px: 1,
          py: 1.75,
          background: "#F0F0D3",
          fontSize: "14px",
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item> Quick download with current settings</Grid>
          <Grid item>
            {" "}
            <Button
              variant="contained"
              disableElevation
              size="small"
              sx={{ textTransform: "none" }}

              //  component={Link}
              //  to="/create-project"
            >
              Build & Download
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Download;
