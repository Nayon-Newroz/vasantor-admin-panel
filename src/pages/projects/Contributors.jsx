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

const Contributors = () => {
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
        mt: 2,

        height: "Calc(100vh - 177px)",
        overflow: "auto",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          p: 1.125,
          borderBottom: "2px solid #E5E5E5",
        }}
      >
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <Typography variant="medium" sx={{ fontWeight: 500 }}>
              People
            </Typography>
          </Grid>
          <Grid item xs={9} sx={{ textAlign: "right" }}>
            <Grid container alignItems="center" justifyContent="flex-end">
              <Grid
                item
                xs="auto"
                // sx={{ borderLeft: "1px solid #E5E5E5" }}
              >
                &nbsp;
                {/* <IconButton sx={{ borderRadius: "8px" }}>
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
              </IconButton> */}
                <TextField
                  //   label="With normal TextField"

                  sx={{ ...customeTextFeild }}
                  size="small"
                  placeholder="Search people..."
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
                &nbsp;{" "}
                <Button
                  variant="contained"
                  disableElevation
                  size="small"
                  sx={{ textTransform: "none" }}
                  startIcon={<AddOutlinedIcon />}
                  //  component={Link}
                  //  to="/create-project"
                >
                  Add people or groups
                </Button>
                &nbsp;{" "}
                <Button
                  variant="outlined"
                  disableElevation
                  size="small"
                  sx={{ textTransform: "none" }}
                  //  component={Link}
                  //  to="/create-project"
                >
                  Import from project
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={2} sx={{ pl: 2.5 ,py:0.5}}>
                {/* <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    Title
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
                </Grid> */}
              </TableCell>
              <TableCell sx={{py:0.5}}>
                Referenced languages
                <IconButton>
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.28 0.966797L6.9333 5.31346C6.41997 5.8268 5.57997 5.8268 5.06664 5.31346L0.719971 0.966797"
                      stroke="#555555"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </IconButton>
              </TableCell>
              <TableCell sx={{py:0.5}}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    Contributable languages
                  </Grid>
                  <Grid item xs="auto">
                    <IconButton>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00004 14.6663C11.6667 14.6663 14.6667 11.6663 14.6667 7.99967C14.6667 4.33301 11.6667 1.33301 8.00004 1.33301C4.33337 1.33301 1.33337 4.33301 1.33337 7.99967C1.33337 11.6663 4.33337 14.6663 8.00004 14.6663Z"
                          stroke="#555555"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.00244 10.667L8.00244 7.33366"
                          stroke="#555555"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.00598 5.33301L7.99999 5.33301"
                          stroke="#555555"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </IconButton>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell sx={{py:0.5}}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    Reviewer
                  </Grid>
                  <Grid item xs="auto">
                    <IconButton>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00004 14.6663C11.6667 14.6663 14.6667 11.6663 14.6667 7.99967C14.6667 4.33301 11.6667 1.33301 8.00004 1.33301C4.33337 1.33301 1.33337 4.33301 1.33337 7.99967C1.33337 11.6663 4.33337 14.6663 8.00004 14.6663Z"
                          stroke="#555555"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.00244 10.667L8.00244 7.33366"
                          stroke="#555555"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.00598 5.33301L7.99999 5.33301"
                          stroke="#555555"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </IconButton>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell sx={{py:0.5}}>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    Project admin
                  </Grid>
                  <Grid item xs="auto">
                    <IconButton>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00004 14.6663C11.6667 14.6663 14.6667 11.6663 14.6667 7.99967C14.6667 4.33301 11.6667 1.33301 8.00004 1.33301C4.33337 1.33301 1.33337 4.33301 1.33337 7.99967C1.33337 11.6663 4.33337 14.6663 8.00004 14.6663Z"
                          stroke="#555555"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.00244 10.667L8.00244 7.33366"
                          stroke="#555555"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.00598 5.33301L7.99999 5.33301"
                          stroke="#555555"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </IconButton>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell align="right" sx={{py:0.5}}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
              <TableRow
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ width: "40px", py: 0, pr: 0, pl: 1.5 }}>
                  {/* <Checkbox size="small" /> */}
                  <Box
                    sx={{
                      background: "#F0F0D3",
                      width: "33px",
                      height: "33px",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src="/Avatar.png"
                      alt="avatar"
                      width="28px"
                      height="28px"
                      //   style={{ position: "relative", left: 7 }}
                    />
                  </Box>
                </TableCell>
                <TableCell sx={{ width: "320px" }}>
                  <Typography
                    component="div"
                    variant="medium"
                    color="text.main"
                  >
                    FastPay Services
                  </Typography>
                  <Typography
                    component="div"
                    color="text.fade"
                    variant="medium"
                  >
                    services@fast-pay.cash
                  </Typography>
                </TableCell>
                <TableCell>All</TableCell>
                <TableCell>All</TableCell>
                <TableCell>
                  {" "}
                  <Checkbox size="small" />
                </TableCell>
                <TableCell>
                  {" "}
                  <Checkbox size="small" />
                  <FormControl
                    size="small"
                    sx={{
                      //   ...customeTextFeild,

                      "& .MuiSelect-select": {
                        color: "#426DF3",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "rgba(0,0,0,0)",
                        },

                        "&:hover fieldset": {
                          borderColor: "rgba(0,0,0,0)",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "rgba(0,0,0,0)",
                        },
                        "& label.Mui-focused": {
                          color: "rgba(0,0,0,0)",
                        },
                      },
                    }}
                  >
                    {/* {baseLanguage.length < 1 && (
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ color: "#b3b3b3" }}
                  >
                    Select Base Language
                  </InputLabel>
                )} */}
                    <Select
                      size="small"
                      labelId="demo-simple-select-label"
                      id="baseLanguage"
                      IconComponent={(props) => (
                        <ExpandMoreIcon
                          {...props}
                          style={{ color: "#426DF3" }}
                        />
                      )}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            maxHeight: 250,
                            // Set the max height here
                          },
                        },
                      }}
                      value={"Customize"}
                      // label="Age"
                      // onChange={handleChange}

                      //   value={baseLanguage}
                      //   onChange={(e) => setBaseLanguage(e.target.value)}
                    >
                      <MenuItem value={"Customize"}>Customize</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>

                <TableCell align="right">
                  <Button
                    variant="outlined"
                    color="error"
                    disableElevation
                    size="small"
                    sx={{ textTransform: "none" }}
                    //  component={Link}
                    //  to="/create-project"
                  >
                    Remove
                  </Button>
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
          mb:3
          // borderBottom: "2px solid #E5E5E5",
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{ textTransform: "none" }}
          disableElevation
          startIcon={<DoneOutlinedIcon />}
        >
          Approved
        </Button>
        &nbsp;{" "}
        <IconButton
          variant="outlined"
          // sx={{ textTransform: "none",minWidth:0,width:"40px",p:0,p:.5 }}
          disableElevation
          sx={{
            borderRadius: "4px",
            border: `1px solid ${theme.palette.primary.main}`,
            px: 1.5,
            minHeight: "30px",
          }}
          size="small"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M9.93325 1.33331H6.06659C5.61326 1.33331 4.97325 1.59998 4.65325 1.91998L1.91992 4.65332C1.59992 4.97332 1.33325 5.61332 1.33325 6.06665V9.93331C1.33325 10.3866 1.59992 11.0266 1.91992 11.3466L4.65325 14.08C4.97325 14.4 5.61326 14.6666 6.06659 14.6666H9.93325C10.3866 14.6666 11.0266 14.4 11.3466 14.08L14.0799 11.3466C14.3999 11.0266 14.6666 10.3866 14.6666 9.93331V6.06665C14.6666 5.61332 14.3999 4.97332 14.0799 4.65332L11.3466 1.91998C11.0266 1.59998 10.3866 1.33331 9.93325 1.33331Z"
              stroke="#687535"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.29346 12.72L12.7201 3.29333"
              stroke="#687535"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </IconButton>
        &nbsp; &nbsp;
        <Typography
          variant="small"
          sx={{ display: "inline-fles" }}
          color="primary.main"
        >
          Verify, Detect, Onboard and Enjoy
        </Typography>
      </Box>
    </Paper>
  );
};

export default Contributors;
