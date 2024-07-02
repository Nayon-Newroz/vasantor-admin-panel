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
  InputAdornment,
  Paper,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
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
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const NewlyAdded = () => {
  const theme = useTheme();
  let navigate = useNavigate();

  const customeTextFeild = {
    background: "#ffffff",
    "& label.Mui-focused": {
      color: "#E5E5E5",
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-input": {
      padding: "15px 24px 15px 0px",
    },
    "& .MuiOutlinedInput-root": {
      paddingLeft: "24px",
      "& fieldset": {
        borderColor: "rgba(0,0,0,0)",
      },

      "&:hover fieldset": {
        borderColor: "rgba(0,0,0,0)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(0,0,0,0)",
      },
    },
  };
  return (
    <Paper
      sx={{
        boxShadow: "none",
        border: "1px solid #E5E5E5",

        height: "Calc(100vh - 477px)",
        overflow: "auto",
        boxSizing: "border-box",
      }}
    >
      <TableContainer>
        <Table
          aria-label="simple table"
          sx={{
            "& thead tr th": {
              py: 0.5,
            },
            "& tbody tr td": {
              py: 0.5,
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    <Checkbox size="small" /> Key
                  </Grid>
                  <Grid item xs="auto">
                    <IconButton>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M5.00658 12.6667L1.65991 9.32666"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.00659 1.33331V12.6666"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.99316 1.33331L12.3398 4.67331"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.99316 12.6666V1.33331"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </IconButton>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    Value
                  </Grid>
                  <Grid item xs="auto">
                    <IconButton>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M5.00658 12.6667L1.65991 9.32666"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.00659 1.33331V12.6666"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.99316 1.33331L12.3398 4.67331"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.99316 12.6666V1.33331"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </IconButton>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    Platform
                  </Grid>
                  <Grid item xs="auto">
                    <IconButton>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M5.00658 12.6667L1.65991 9.32666"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.00659 1.33331V12.6666"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.99316 1.33331L12.3398 4.67331"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.99316 12.6666V1.33331"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </IconButton>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    Tags
                  </Grid>
                  <Grid item xs="auto">
                    <IconButton>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M5.00658 12.6667L1.65991 9.32666"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.00659 1.33331V12.6666"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.99316 1.33331L12.3398 4.67331"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.99316 12.6666V1.33331"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </IconButton>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    Screenshot Source
                  </Grid>
                  <Grid item xs="auto">
                    <IconButton>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M5.00658 12.6667L1.65991 9.32666"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.00659 1.33331V12.6666"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.99316 1.33331L12.3398 4.67331"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.99316 12.6666V1.33331"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </IconButton>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
              <TableRow
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    whiteSpace: "nowrap",
                  }}
                >
                  <Checkbox size="small" /> Brand tagline
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      whiteSpace: "nowrap",
                      width: "250px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    The country's top mobile operator has decided to make the
                    minimum limit of 30 rupees in mobile phone recharge
                  </Box>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      whiteSpace: "nowrap",
                      width: "100px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    Android, IOS, Web
                  </Box>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      whiteSpace: "nowrap",
                      width: "100px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    Brand, Verify, Tagline
                  </Box>
                </TableCell>

                <TableCell>
                  <Box
                    sx={{
                      whiteSpace: "nowrap",
                      width: "250px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    https://www.domain.com/directory/abc.jpg
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          px: 2.5,
          py: 1.125,
          mb: 3,
          // borderBottom: "2px solid #E5E5E5",
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{ textTransform: "none" }}
          disableElevation
          startIcon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.33301 7.99992L7.99654 10.6666L13.333 5.33325"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.66699 7.99992L5.33052 10.6666L10.667 5.33325"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        >
          Add to A
        </Button>
        &nbsp; &nbsp; &nbsp;
        <Typography
          variant="small"
          sx={{ display: "inline-fles" }}
          color="text.light"
        >
          Take bulk action by this button
        </Typography>
      </Box>
    </Paper>
  );
};

export default NewlyAdded;
