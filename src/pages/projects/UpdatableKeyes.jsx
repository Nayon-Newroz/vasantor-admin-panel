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

const UpdatableKeyes = () => {
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
    // <Paper
    //   sx={{
    //     boxShadow: "none",
    //     border: "1px solid #E5E5E5",

    //     height: "Calc(100vh - 577px)",
    //     overflow: "auto",
    //     boxSizing: "border-box",
    //   }}
    // >
    <>
    <Box
      sx={{
        borderBottom: "1px solid #E5E5E5",
        background: "#fff",
        borderRadius: "6px",
       
      }}
    >
      <Grid container  alignItems="center"  >
        <Grid item xs={5}>
         &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Updatable Keyes
        </Grid>
        <Grid item xs={7} sx={{ textAlign: "right" }}>
          <Grid container alignItems="center" justifyContent="flex-end">
            <Grid
              item
              xs="auto"
              // sx={{ borderLeft: "1px solid #E5E5E5" }}
            >
              <TextField
                //   label="With normal TextField"

                sx={{ ...customeTextFeild, background: "#EFF3FF" }}
                size="small"
                // placeholder="Search people..."
                id="outlined-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
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
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs="auto" sx={{ borderLeft: "1px solid #E5E5E5" }}>
              <IconButton
                variant="outlined"
                disableElevation
                size="small"
                sx={{
                  textTransform: "none",
                  borderRadius: "0px",
                  padding: "10px",
                }}
                //  component={Link}
                //  to="/create-project"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 9V3H15"
                    stroke="#555555"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 15V21H9"
                    stroke="#555555"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 3L13.5 10.5"
                    stroke="#555555"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 13.5L3 21"
                    stroke="#555555"
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
    </Box>
    <Box>
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
                    <TableCell
                      sx={{
                     
                      }}
                    >
                      <Box
                        sx={{
                          whiteSpace: "nowrap",
                          width: "250px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        The country's top mobile operator has decided to make
                        the minimum limit of 30 rupees in mobile phone recharge
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                    
                      }}
                    >
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
                    <TableCell
                      sx={{
                   
                      }}
                    >
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

                    <TableCell
                      sx={{
                        // background: [1, 4, 8].includes(i) ? "#FFECEC" : "",
                      }}
                    >
                      <Box
                        sx={{
                          whiteSpace: "nowrap",
                          width: "200px",
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
        </Box>
    </>

    // </Paper>
  );
};

export default UpdatableKeyes;
