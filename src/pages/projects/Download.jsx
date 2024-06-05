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

  return (
    <Box
      sx={{
        
      }}
    >
      <Grid container>
        <Grid
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
          <Box sx={{ p: 2, background: "#fff", mb: 1 }}>
            <Box>
              <IconButton
                sx={{ borderRadius: "8px" }}
                onClick={() => setFileFormateOpen(!fileFormateOpen)}
              >
                {fileFormateOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                  >
                    <path
                      d="M11.2797 6.0333L6.93306 1.68664C6.41973 1.1733 5.57973 1.1733 5.06639 1.68664L0.719727 6.0333"
                      stroke="#222222"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                  >
                    <path
                      d="M11.28 1.30154L6.9333 5.6482C6.41997 6.16154 5.57997 6.16154 5.06664 5.6482L0.719971 1.30154"
                      stroke="#222222"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </IconButton>
              <Typography
                variant="medium"
                sx={{ display: "inline-flex", fontWeight: 600 }}
              >
                File format
              </Typography>
            </Box>
            <Collapse in={fileFormateOpen}>
              <FormControl fullWidth size="small" sx={{ my: 1.125 }}>
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
                          <Checkbox size="small" />
                        </TableCell>
                        <TableCell sx={{ pl: 0, py: 0, fontWeight: 600 }}>
                          Include all platform keys
                          <IconButton sx={{ borderRadius: "8px" }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M8.00016 14.6667C11.6668 14.6667 14.6668 11.6667 14.6668 8.00004C14.6668 4.33337 11.6668 1.33337 8.00016 1.33337C4.3335 1.33337 1.3335 4.33337 1.3335 8.00004C1.3335 11.6667 4.3335 14.6667 8.00016 14.6667Z"
                                stroke="#969696"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.00244 10.6666L8.00244 7.33329"
                                stroke="#969696"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.00586 5.33337L7.99987 5.33337"
                                stroke="#969696"
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
            </Collapse>
          </Box>
          <Box sx={{ p: 2, background: "#fff", mb: 1 }}>
            <Box>
              <IconButton
                sx={{ borderRadius: "8px" }}
                onClick={() => setFileFormateOpen2(!fileFormateOpen2)}
              >
                {fileFormateOpen2 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                  >
                    <path
                      d="M11.2797 6.0333L6.93306 1.68664C6.41973 1.1733 5.57973 1.1733 5.06639 1.68664L0.719727 6.0333"
                      stroke="#222222"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                  >
                    <path
                      d="M11.28 1.30154L6.9333 5.6482C6.41997 6.16154 5.57997 6.16154 5.06664 5.6482L0.719971 1.30154"
                      stroke="#222222"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </IconButton>
              <Typography
                variant="medium"
                sx={{ display: "inline-flex", fontWeight: 600 }}
              >
                File format
              </Typography>
            </Box>
            <Collapse in={fileFormateOpen2}>
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
            </Collapse>
          </Box>
          <Box sx={{ p: 2, background: "#fff", mb: 1 }}>
            <Box>
              <IconButton
                sx={{ borderRadius: "8px" }}
                onClick={() => setFileStructureOpen(!fileStructureOpen)}
              >
                {fileStructureOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                  >
                    <path
                      d="M11.2797 6.0333L6.93306 1.68664C6.41973 1.1733 5.57973 1.1733 5.06639 1.68664L0.719727 6.0333"
                      stroke="#222222"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                  >
                    <path
                      d="M11.28 1.30154L6.9333 5.6482C6.41997 6.16154 5.57997 6.16154 5.06664 5.6482L0.719971 1.30154"
                      stroke="#222222"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </IconButton>
              <Typography
                variant="medium"
                sx={{ display: "inline-flex", fontWeight: 600 }}
              >
                File structure
              </Typography>
            </Box>
            <Collapse in={fileStructureOpen}>
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
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M8.00016 14.6667C11.6668 14.6667 14.6668 11.6667 14.6668 8.00004C14.6668 4.33337 11.6668 1.33337 8.00016 1.33337C4.3335 1.33337 1.3335 4.33337 1.3335 8.00004C1.3335 11.6667 4.3335 14.6667 8.00016 14.6667Z"
                              stroke="#969696"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.00244 10.6666L8.00244 7.33329"
                              stroke="#969696"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.00586 5.33337L7.99987 5.33337"
                              stroke="#969696"
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
              <TextField
                sx={{ mb: 1 }}
                id="outlined-basic"
                // label="Outlined"
                variant="outlined"
                fullWidth
                size="small"
                placeholder="locale/%LANG_ISO%.%FORMAT%"
              />
              <Typography variant="small" color="text.fade">
                Example: locale/en.json
              </Typography>
              <TableContainer sx={{ py: 1.125 }}>
                <Table aria-label="simple table">
                  <TableBody>
                    <TableRow sx={{ "& td, & th": { border: 0 } }}>
                      <TableCell sx={{ width: "30px", p: 0 }}>
                        <Checkbox size="small" color="info" />
                      </TableCell>
                      <TableCell sx={{ pl: 0, py: 0 }}>
                        Multiple files per language (use assigned filenames).
                        Directory prefix:
                        <IconButton sx={{ borderRadius: "8px" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M8.00016 14.6667C11.6668 14.6667 14.6668 11.6667 14.6668 8.00004C14.6668 4.33337 11.6668 1.33337 8.00016 1.33337C4.3335 1.33337 1.3335 4.33337 1.3335 8.00004C1.3335 11.6667 4.3335 14.6667 8.00016 14.6667Z"
                              stroke="#969696"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.00244 10.6666L8.00244 7.33329"
                              stroke="#969696"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.00586 5.33337L7.99987 5.33337"
                              stroke="#969696"
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
              <TextField
                sx={{ mb: 1 }}
                id="outlined-basic"
                // label="Outlined"
                variant="outlined"
                fullWidth
                size="small"
                placeholder="%LANG_ISO%/"
              />
              <Typography variant="small" color="text.fade">
                Example: en/
              </Typography>

              <TableContainer sx={{ py: 1.125 }}>
                <Table aria-label="simple table">
                  <TableBody>
                    <TableRow sx={{ "& td, & th": { border: 0 } }}>
                      <TableCell sx={{ pl: 0, py: 0, color: "#7B5100" }}>
                        2 unassigned keys will be exported to no_filename.json
                        <IconButton sx={{ borderRadius: "8px" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M8.00016 14.6667C11.6668 14.6667 14.6668 11.6667 14.6668 8.00004C14.6668 4.33337 11.6668 1.33337 8.00016 1.33337C4.3335 1.33337 1.3335 4.33337 1.3335 8.00004C1.3335 11.6667 4.3335 14.6667 8.00016 14.6667Z"
                              stroke="#969696"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.00244 10.6666L8.00244 7.33329"
                              stroke="#969696"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.00586 5.33337L7.99987 5.33337"
                              stroke="#969696"
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
            </Collapse>
          </Box>
        </Grid>
        <Grid
          item
          xs={3.5}
          sx={{
            height: "Calc(100vh - 177px)",
            px: 2,
            pt: 1.125,
            background: "#fff",
            boxSizing: "border-box",
          }}
        >
          <Typography variant="medium" color="text.light" sx={{ mb: 1 }}>
            Quick download with current settings
          </Typography>
          <Box>
            <Button variant="outlined">Build</Button>&nbsp;&nbsp;
            <Button variant="outlined">Preview</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Download;
