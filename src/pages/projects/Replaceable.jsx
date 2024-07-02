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

const Replaceable = () => {
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
                    Value Existing
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
                    Value to Updare
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

              <TableCell>A</TableCell>
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
                    background: "#FFECEC",
                  }}
                >
                  <Checkbox size="small" /> Brand tagline
                </TableCell>
                <TableCell sx={{ background: "#EFF3FF" }}>
                  <Box
                    sx={{
                      whiteSpace: "nowrap",
                      width: "200px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    The country's top mobile operator has decided to make the
                    minimum limit of 30 rupees in mobile phone recharge
                  </Box>
                </TableCell>
                <TableCell sx={{ background: "#F9E8EF" }}>
                  <Box
                    sx={{
                      whiteSpace: "nowrap",
                      width: "200px",
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
                  {/* <Button
                    variant="outlined"
                    color="error"
                    disableElevation
                    size="small"
                    sx={{ textTransform: "none" }}
                    //  component={Link}
                    //  to="/create-project"
                  >
                    Remove
                  </Button> */}
                  <IconButton
                    sx={{
                      borderRadius: "2px",
                      background: "#687535",
                      "&:hover": {
                        background: "#7f9137",
                      },
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.3335 7.99992L7.99703 10.6666L13.3335 5.33325"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.6665 7.99992L5.33003 10.6666L10.6665 5.33325"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </IconButton>
                  &nbsp;
                  <IconButton
                    sx={{
                      borderRadius: "2px",
                      background: "#426DF3",
                      "&:hover": {
                        background: "#6186f7",
                      },
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6663 8.59992V11.3999C10.6663 13.7333 9.73301 14.6666 7.39967 14.6666H4.59967C2.26634 14.6666 1.33301 13.7333 1.33301 11.3999V8.59992C1.33301 6.26659 2.26634 5.33325 4.59967 5.33325H7.39967C9.73301 5.33325 10.6663 6.26659 10.6663 8.59992Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.6663 4.59992V7.39992C14.6663 9.73325 13.733 10.6666 11.3997 10.6666H10.6663V8.59992C10.6663 6.26659 9.73301 5.33325 7.39967 5.33325H5.33301V4.59992C5.33301 2.26659 6.26634 1.33325 8.59967 1.33325H11.3997C13.733 1.33325 14.6663 2.26659 14.6663 4.59992Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </IconButton>{" "}
                  <IconButton
                    sx={{
                      borderRadius: "2px",
                      background: "#F23836",
                      "&:hover": {
                        background: "#f85351",
                      },
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5669 6.09326L12.1336 12.8066C12.0603 13.8533 12.0003 14.6666 10.1403 14.6666H5.86026C4.00026 14.6666 3.94026 13.8533 3.86693 12.8066L3.43359 6.09326"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14 3.98665C11.78 3.76665 9.54667 3.65332 7.32 3.65332C6 3.65332 4.68 3.71999 3.36 3.85332L2 3.98665"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.66699 3.31325L5.81366 2.43992C5.92033 1.80659 6.00033 1.33325 7.12699 1.33325H8.87366C10.0003 1.33325 10.087 1.83325 10.187 2.44659L10.3337 3.31325"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.88672 11H9.10672"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.33301 8.33325H9.66634"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </IconButton>{" "}
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
          Replace
        </Button>
        &nbsp;{" "}
        <Button
          variant="outlined"
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
                d="M10.6668 8.59992V11.3999C10.6668 13.7333 9.7335 14.6666 7.40016 14.6666H4.60016C2.26683 14.6666 1.3335 13.7333 1.3335 11.3999V8.59992C1.3335 6.26659 2.26683 5.33325 4.60016 5.33325H7.40016C9.7335 5.33325 10.6668 6.26659 10.6668 8.59992Z"
                stroke="#687535"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.6668 4.59992V7.39992C14.6668 9.73325 13.7335 10.6666 11.4002 10.6666H10.6668V8.59992C10.6668 6.26659 9.7335 5.33325 7.40016 5.33325H5.3335V4.59992C5.3335 2.26659 6.26683 1.33325 8.60016 1.33325H11.4002C13.7335 1.33325 14.6668 2.26659 14.6668 4.59992Z"
                stroke="#687535"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        >
          Duplicate
        </Button>
        &nbsp;{" "}
        <Button
          variant="outlined"
          size="small"
          color="error"
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
                d="M12.5664 6.09326L12.1331 12.8066C12.0598 13.8533 11.9998 14.6666 10.1398 14.6666H5.85977C3.99977 14.6666 3.93977 13.8533 3.86644 12.8066L3.43311 6.09326"
                stroke="#F23836"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 3.98665C11.78 3.76665 9.54667 3.65332 7.32 3.65332C6 3.65332 4.68 3.71999 3.36 3.85332L2 3.98665"
                stroke="#F23836"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.6665 3.31325L5.81317 2.43992C5.91984 1.80659 5.99984 1.33325 7.1265 1.33325H8.87317C9.99984 1.33325 10.0865 1.83325 10.1865 2.44659L10.3332 3.31325"
                stroke="#F23836"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.88672 11H9.10672"
                stroke="#F23836"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.3335 8.33325H9.66683"
                stroke="#F23836"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        >
          Remove
        </Button>
        &nbsp; &nbsp; &nbsp;
        <Typography
          variant="small"
          sx={{ display: "inline-fles" }}
          color="text.light"
        >
          You can take bulk action by those button if you select row’s above
        </Typography>
      </Box>
    </Paper>
  );
};

export default Replaceable;
