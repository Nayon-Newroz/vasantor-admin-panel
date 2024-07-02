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
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import Checkbox from "@mui/material/Checkbox";

const Projects = () => {
  const theme = useTheme();
  const { adtech_admin_panel, logout } = useContext(AuthContext);
  const [gridView, setGridView] = useState(false);

  const pageLoading = () => {
    let rows = [];

    for (let i = 0; i < 25; i++) {
      let cells = [];

      for (let j = 0; j < 8; j++) {
        cells.push(
          <TableCell key={j} sx={{ py: 1.5 }}>
            <Skeleton></Skeleton>
          </TableCell>
        );
      }

      rows.push(<TableRow key={i}>{cells}</TableRow>);
    }

    return rows;
  };

  return (
    <Box sx={{ mb: 5 }}>
      <Box
        sx={{
          pb: 1.125,
          pt: 7,
          px: 4,
          mb: 1.125,
          // background: "red",

          // borderBottom: `1px solid ${theme.palette.text.fade}`,
          // boxShadow: " rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
        }}
      >
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <Button
              size="small"
              sx={{ textTransform: "none" }}
              endIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M3.39339 1.83337H12.6066C13.3754 1.83337 14 2.43604 14 3.17778V4.66127C14 5.20599 13.6517 5.8782 13.3033 6.2143L10.3003 8.77563C9.87988 9.11173 9.6036 9.78394 9.6036 10.3287V13.2261C9.6036 13.6317 9.32733 14.1649 8.97898 14.3735L8.00601 14.9646C7.09309 15.5093 5.84384 14.895 5.84384 13.8172V10.2475C5.84384 9.77235 5.56757 9.16968 5.27928 8.83358L2.62462 6.13317C2.27628 5.80866 2 5.1944 2 4.78876V3.24732C2 2.43604 2.62462 1.83337 3.39339 1.83337Z"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            >
              Projects
            </Button>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            <IconButton
              sx={{
                borderRadius: "8px",
                background: gridView && theme.palette.primary.light,
              }}
              onClick={() => setGridView(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M7.875 15.425V3.575C7.875 2.45 7.395 2 6.2025 2H3.1725C1.98 2 1.5 2.45 1.5 3.575V15.425C1.5 16.55 1.98 17 3.1725 17H6.2025C7.395 17 7.875 16.55 7.875 15.425Z"
                  stroke="#555555"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5 15.425V3.575C16.5 2.45 16.02 2 14.8275 2H11.7975C10.605 2 10.125 2.45 10.125 3.575V15.425C10.125 16.55 10.605 17 11.7975 17H14.8275C16.02 17 16.5 16.55 16.5 15.425Z"
                  stroke="#555555"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </IconButton>
            &nbsp;
            <IconButton
              sx={{
                borderRadius: "8px",
                background: gridView === false && theme.palette.primary.light,
              }}
              onClick={() => setGridView(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M14.925 10.625H3.075C1.95 10.625 1.5 11.105 1.5 12.2975V15.3275C1.5 16.52 1.95 17 3.075 17H14.925C16.05 17 16.5 16.52 16.5 15.3275V12.2975C16.5 11.105 16.05 10.625 14.925 10.625Z"
                  stroke="#555555"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.925 2H3.075C1.95 2 1.5 2.48 1.5 3.6725V6.7025C1.5 7.895 1.95 8.375 3.075 8.375H14.925C16.05 8.375 16.5 7.895 16.5 6.7025V3.6725C16.5 2.48 16.05 2 14.925 2Z"
                  stroke="#555555"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </IconButton>
            &nbsp; &nbsp;
            <Button
              variant="outlined"
              disableElevation
              size="small"
              sx={{ textTransform: "none" }}
              startIcon={<AddOutlinedIcon />}
              component={Link}
              to="/create-project"
            >
              Add New Project
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          px: 4,
        }}
      >
        <Collapse in={!gridView}>
          <Paper sx={{ mb: 3.5, boxShadow: "none" }}>
            {[1, 2, 3, 4].map((item, i) => (
              <Grid container ket={i}>
                {" "}
                <Grid
                  item
                  xs={3}
                  sx={{ py: 2, px: 2.5, borderBottom: "1px solid #ECECEC" }}
                >
                  <Link
                    to="/project-details/1"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="medium"
                      color="primary.main"
                      sx={{ fontWeight: 500, mb: 0.5, cursor: "pointer" }}
                    >
                      VerifyMe Web
                    </Typography>
                  </Link>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ mb: 1.25 }}
                  >
                    <Grid item size="auto">
                      {" "}
                      <Typography variant="small" color="text.light">
                        Done
                      </Typography>
                    </Grid>
                    <Grid item size="auto">
                      {" "}
                      <Typography
                        variant="small"
                        color="text.light"
                        sx={{ textAlign: "right" }}
                      >
                        99%
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ mb: 1.25 }}
                  >
                    <Grid item size="auto">
                      {" "}
                      <Typography variant="small" color="text.light">
                        Team
                      </Typography>
                    </Grid>
                    <Grid item size="auto">
                      {" "}
                      <Typography
                        variant="small"
                        color="text.light"
                        sx={{ textAlign: "right" }}
                      >
                        10
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ mb: 1.25 }}
                  >
                    <Grid item size="auto">
                      {" "}
                      <Typography variant="small" color="text.light">
                        Base Key
                      </Typography>
                    </Grid>
                    <Grid item size="auto">
                      {" "}
                      <Typography
                        variant="small"
                        color="text.light"
                        sx={{ textAlign: "right" }}
                      >
                        13354
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ mb: 1.25 }}
                  >
                    <Grid item size="auto">
                      {" "}
                      <Typography variant="small" color="text.light">
                        OTA Usage (GB)
                      </Typography>
                    </Grid>
                    <Grid item size="auto">
                      {" "}
                      <Typography
                        variant="small"
                        color="text.light"
                        sx={{ textAlign: "right" }}
                      >
                        18.41
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" sx={{ mb: 1.125 }}>
                    <Grid item size="auto">
                      <IconButton sx={{ borderRadius: "8px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M7.21582 5.18005H10.2783"
                            stroke="#969696"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.72168 5.18005L4.15918 5.61755L5.47168 4.30505"
                            stroke="#969696"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.21582 9.26331H10.2783"
                            stroke="#969696"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.72168 9.26331L4.15918 9.7008L5.47168 8.38831"
                            stroke="#969696"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.25002 12.8333H8.75002C11.6667 12.8333 12.8334 11.6666 12.8334 8.74996V5.24996C12.8334 2.33329 11.6667 1.16663 8.75002 1.16663H5.25002C2.33335 1.16663 1.16669 2.33329 1.16669 5.24996V8.74996C1.16669 11.6666 2.33335 12.8333 5.25002 12.8333Z"
                            stroke="#969696"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </IconButton>
                    </Grid>
                    <Grid item size="auto">
                      <IconButton sx={{ borderRadius: "8px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M10.5817 12.6117C10.0683 12.7634 9.46167 12.8334 8.75 12.8334H5.25C4.53833 12.8334 3.93167 12.7634 3.41833 12.6117C3.54667 11.095 5.10417 9.89917 7 9.89917C8.89583 9.89917 10.4533 11.095 10.5817 12.6117Z"
                            stroke="#969696"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.75002 1.16663H5.25002C2.33335 1.16663 1.16669 2.33329 1.16669 5.24996V8.74996C1.16669 10.955 1.83169 12.1625 3.41835 12.6116C3.54669 11.095 5.10419 9.89911 7.00002 9.89911C8.89585 9.89911 10.4534 11.095 10.5817 12.6116C12.1684 12.1625 12.8334 10.955 12.8334 8.74996V5.24996C12.8334 2.33329 11.6667 1.16663 8.75002 1.16663ZM7.00002 8.26578C5.84502 8.26578 4.91169 7.32664 4.91169 6.17164C4.91169 5.01664 5.84502 4.08329 7.00002 4.08329C8.15502 4.08329 9.08835 5.01664 9.08835 6.17164C9.08835 7.32664 8.15502 8.26578 7.00002 8.26578Z"
                            stroke="#969696"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M9.08835 6.17172C9.08835 7.32672 8.15502 8.26586 7.00002 8.26586C5.84502 8.26586 4.91168 7.32672 4.91168 6.17172C4.91168 5.01672 5.84502 4.08337 7.00002 4.08337C8.15502 4.08337 9.08835 5.01672 9.08835 6.17172Z"
                            stroke="#969696"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </IconButton>
                    </Grid>
                    <Grid item size="auto">
                      <IconButton sx={{ borderRadius: "8px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M5.25 6.41663V9.91663L6.41667 8.74996"
                            stroke="#969696"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.25004 9.91667L4.08337 8.75"
                            stroke="#969696"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.8333 5.83329V8.74996C12.8333 11.6666 11.6666 12.8333 8.74996 12.8333H5.24996C2.33329 12.8333 1.16663 11.6666 1.16663 8.74996V5.24996C1.16663 2.33329 2.33329 1.16663 5.24996 1.16663H8.16663"
                            stroke="#969696"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.8333 5.83329H10.5C8.74996 5.83329 8.16663 5.24996 8.16663 3.49996V1.16663L12.8333 5.83329Z"
                            stroke="#969696"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </IconButton>
                    </Grid>
                    <Grid item size="auto">
                      <IconButton sx={{ borderRadius: "8px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M2.43248 8.92497L5.07498 11.5675C6.15998 12.6525 7.92164 12.6525 9.01248 11.5675L11.5733 9.00663C12.6583 7.92163 12.6583 6.15997 11.5733 5.06913L8.92498 2.43247C8.37081 1.8783 7.60664 1.5808 6.82498 1.62163L3.90831 1.76163C2.74164 1.81413 1.81414 2.74163 1.75581 3.90247L1.61581 6.81913C1.58081 7.60663 1.87831 8.3708 2.43248 8.92497Z"
                            stroke="#969696"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.54159 7.00004C6.347 7.00004 6.99992 6.34712 6.99992 5.54171C6.99992 4.73629 6.347 4.08337 5.54159 4.08337C4.73617 4.08337 4.08325 4.73629 4.08325 5.54171C4.08325 6.34712 4.73617 7.00004 5.54159 7.00004Z"
                            stroke="#969696"
                            stroke-linecap="round"
                          />
                        </svg>
                      </IconButton>
                    </Grid>
                    <Grid item size="auto">
                      <IconButton sx={{ borderRadius: "8px" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M2.91667 5.83337C2.275 5.83337 1.75 6.35837 1.75 7.00004C1.75 7.64171 2.275 8.16671 2.91667 8.16671C3.55833 8.16671 4.08333 7.64171 4.08333 7.00004C4.08333 6.35837 3.55833 5.83337 2.91667 5.83337Z"
                            stroke="#969696"
                          />
                          <path
                            d="M11.0833 5.83337C10.4416 5.83337 9.91663 6.35837 9.91663 7.00004C9.91663 7.64171 10.4416 8.16671 11.0833 8.16671C11.725 8.16671 12.25 7.64171 12.25 7.00004C12.25 6.35837 11.725 5.83337 11.0833 5.83337Z"
                            stroke="#969696"
                          />
                          <path
                            d="M7.00004 5.83337C6.35837 5.83337 5.83337 6.35837 5.83337 7.00004C5.83337 7.64171 6.35837 8.16671 7.00004 8.16671C7.64171 8.16671 8.16671 7.64171 8.16671 7.00004C8.16671 6.35837 7.64171 5.83337 7.00004 5.83337Z"
                            stroke="#969696"
                          />
                        </svg>
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={9}
                  sx={{ background: "#ECECEC", borderBottom: "1px solid #fff" }}
                >
                  <Box
                    sx={{
                      p: 2.5,
                      pb: 0.5,
                      borderBottom: "1px solid #fff",
                    }}
                  >
                    <Grid container alignItems="center">
                      <Grid item xs={6}>
                        <Typography variant="small" color="text.light">
                          Platform
                        </Typography>
                      </Grid>
                      <Grid item xs={6} sx={{ textAlign: "right" }}>
                        <IconButton sx={{ borderRadius: "8px" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M12.4834 7.52497L9.85837 8.86663L7.9917 6.99997L9.85837 5.1333L12.4834 6.41663C12.95 6.64997 12.95 7.34997 12.4834 7.52497Z"
                              stroke="#555555"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9.85842 5.13337L7.99175 7.00004L2.39175 12.6L2.04175 12.775C1.63341 13.0084 1.16675 12.6584 1.16675 12.1917V1.80837C1.16675 1.34171 1.63341 1.05004 2.04175 1.22504L9.85842 5.13337Z"
                              stroke="#555555"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9.85827 8.86667L2.3916 12.6L7.9916 7L9.85827 8.86667Z"
                              stroke="#555555"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M7.9916 7.00003L2.3916 1.40002"
                              stroke="#555555"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </IconButton>

                        <IconButton sx={{ borderRadius: "8px" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.98324 1.16663C9.0999 1.80829 8.80824 2.44996 8.45824 2.91663C8.10824 3.38329 7.46657 3.79163 6.8249 3.73329C6.70824 3.09163 6.9999 2.50829 7.3499 2.04163C7.75824 1.57496 8.3999 1.22496 8.98324 1.16663ZM10.8499 11.3166C11.1416 10.85 11.3166 10.5583 11.5499 10.0333C9.74157 9.33329 9.4499 6.76663 11.2582 5.83329C10.7332 5.13329 9.9749 4.78329 9.21657 4.78329C8.69157 4.78329 8.34157 4.89996 7.99157 5.01663C7.6999 5.13329 7.46657 5.19163 7.1749 5.19163C6.8249 5.19163 6.59157 5.07496 6.24157 4.95829C5.89157 4.84163 5.54157 4.72496 5.13324 4.72496C4.31657 4.72496 3.44157 5.19163 2.91657 6.06663C2.15824 7.23329 2.2749 9.50829 3.4999 11.375C4.0249 12.075 4.60824 12.8333 5.36657 12.8333C5.71657 12.8333 5.89157 12.7166 6.1249 12.6583C6.41657 12.5416 6.70824 12.425 7.1749 12.425C7.6999 12.425 7.93324 12.5416 8.2249 12.6583C8.45824 12.775 8.63324 12.8333 8.98324 12.8333C9.7999 12.8333 10.3832 11.9583 10.8499 11.3166Z"
                              stroke="#555555"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </IconButton>

                        <IconButton sx={{ borderRadius: "8px" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M7.00008 12.8333C10.2217 12.8333 12.8334 10.2216 12.8334 6.99996C12.8334 3.7783 10.2217 1.16663 7.00008 1.16663C3.77842 1.16663 1.16675 3.7783 1.16675 6.99996C1.16675 10.2216 3.77842 12.8333 7.00008 12.8333Z"
                              stroke="#555555"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M4.66676 1.75H5.2501C4.1126 5.15667 4.1126 8.84333 5.2501 12.25H4.66676"
                              stroke="#555555"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.75 1.75C9.8875 5.15667 9.8875 8.84333 8.75 12.25"
                              stroke="#555555"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M1.75 9.33333V8.75C5.15667 9.8875 8.84333 9.8875 12.25 8.75V9.33333"
                              stroke="#555555"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M1.75 5.24998C5.15667 4.11248 8.84333 4.11248 12.25 5.24998"
                              stroke="#555555"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box>
                    <Grid container alignItems="center" sx={{ mb: 1.125 }}>
                      {[1, 2, 3].map((item, i) => (
                        <Grid
                          key={i}
                          item
                          xs={4}
                          sx={{
                            p: 2.5,
                            pb: 0.5,
                          }}
                        >
                          <Grid container alignItems="center" sx={{ mb: 1.25 }}>
                            <Grid item size="auto">
                              {" "}
                              <img
                                src={
                                  i === 0
                                    ? "/US.svg"
                                    : i === 1
                                    ? "/BD.svg"
                                    : i === 2
                                    ? "/SA.svg"
                                    : "/SA.svg"
                                }
                                alt="USA flag"
                                style={{ position: "relative", top: 3 }}
                              />
                            </Grid>
                            <Grid item size="auto">
                              {" "}
                              <Typography
                                variant="medium"
                                color="text.light"
                                sx={{ fontWeight: 600 }}
                              >
                                &nbsp;&nbsp;&nbsp;English
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid
                            container
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{ mb: 1.25 }}
                          >
                            <Grid item size="auto">
                              {" "}
                              <Typography variant="small" color="text.light">
                                Done
                              </Typography>
                            </Grid>
                            <Grid item size="auto">
                              {" "}
                              <Typography
                                variant="small"
                                color="text.light"
                                sx={{ textAlign: "right" }}
                              >
                                99%
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid
                            container
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{ mb: 1.25 }}
                          >
                            <Grid item size="auto">
                              {" "}
                              <Typography variant="small" color="text.light">
                                Team
                              </Typography>
                            </Grid>
                            <Grid item size="auto">
                              {" "}
                              <Typography
                                variant="small"
                                color="text.light"
                                sx={{ textAlign: "right" }}
                              >
                                10
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid
                            container
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{ mb: 1.25 }}
                          >
                            <Grid item size="auto">
                              {" "}
                              <Typography variant="small" color="text.light">
                                Base Key
                              </Typography>
                            </Grid>
                            <Grid item size="auto">
                              {" "}
                              <Typography
                                variant="small"
                                color="text.light"
                                sx={{ textAlign: "right" }}
                              >
                                13354
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid
                            container
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{ mb: 1.25 }}
                          >
                            <Grid item size="auto">
                              {" "}
                              <Typography variant="small" color="text.light">
                                OTA Usage (GB)
                              </Typography>
                            </Grid>
                            <Grid item size="auto">
                              {" "}
                              <Typography
                                variant="small"
                                color="text.light"
                                sx={{ textAlign: "right" }}
                              >
                                18.41
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Paper>
        </Collapse>
        <Collapse in={gridView}>
          <Box sx={{ mb: 3.5, px: 4 }}>
            <Grid container spacing={2}>
              {[1, 2, 3, 4].map((item, i) => (
                <Grid
                  item
                  ket={i}
                  xs={3}

                  // sx={{ py: 2, px: 2.5, borderBottom: "1px solid #ECECEC" }}
                >
                  <Paper sx={{ px: 2, py: 2.5, boxShadow: "none" }}>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ mb: 0.5 }}
                    >
                      <Grid item size="auto">
                        {" "}
                        <Link
                          to="/project-details/1"
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            variant="medium"
                            color="primary.main"
                            sx={{
                              fontWeight: 500,

                              cursor: "pointer",
                            }}
                          >
                            VerifyMe Web
                          </Typography>
                        </Link>
                      </Grid>
                      <Grid item size="auto">
                        {" "}
                        <img
                          src="/SA.svg"
                          alt="USA flag"
                          style={{ position: "relative", top: 3 }}
                        />
                        &nbsp;
                        <img
                          src="/BD.svg"
                          alt="USA flag"
                          style={{ position: "relative", top: 3 }}
                        />
                        &nbsp;
                        <img
                          src="/US.svg"
                          alt="USA flag"
                          style={{ position: "relative", top: 3 }}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ mb: 1.25 }}
                    >
                      <Grid item size="auto">
                        {" "}
                        <Typography variant="small" color="text.light">
                          Done
                        </Typography>
                      </Grid>
                      <Grid item size="auto">
                        {" "}
                        <Typography
                          variant="small"
                          color="text.light"
                          sx={{ textAlign: "right" }}
                        >
                          99%
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ mb: 1.25 }}
                    >
                      <Grid item size="auto">
                        {" "}
                        <Typography variant="small" color="text.light">
                          Team
                        </Typography>
                      </Grid>
                      <Grid item size="auto">
                        {" "}
                        <Typography
                          variant="small"
                          color="text.light"
                          sx={{ textAlign: "right" }}
                        >
                          10
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ mb: 1.25 }}
                    >
                      <Grid item size="auto">
                        {" "}
                        <Typography variant="small" color="text.light">
                          Base Key
                        </Typography>
                      </Grid>
                      <Grid item size="auto">
                        {" "}
                        <Typography
                          variant="small"
                          color="text.light"
                          sx={{ textAlign: "right" }}
                        >
                          13354
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{ mb: 1.25 }}
                    >
                      <Grid item size="auto">
                        {" "}
                        <Typography variant="small" color="text.light">
                          OTA Usage (GB)
                        </Typography>
                      </Grid>
                      <Grid item size="auto">
                        {" "}
                        <Typography
                          variant="small"
                          color="text.light"
                          sx={{ textAlign: "right" }}
                        >
                          18.41
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container alignItems="center" sx={{ mb: 1.125 }}>
                      <Grid item size="auto">
                        <IconButton sx={{ borderRadius: "8px" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M7.21582 5.18005H10.2783"
                              stroke="#969696"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M3.72168 5.18005L4.15918 5.61755L5.47168 4.30505"
                              stroke="#969696"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M7.21582 9.26331H10.2783"
                              stroke="#969696"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M3.72168 9.26331L4.15918 9.7008L5.47168 8.38831"
                              stroke="#969696"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5.25002 12.8333H8.75002C11.6667 12.8333 12.8334 11.6666 12.8334 8.74996V5.24996C12.8334 2.33329 11.6667 1.16663 8.75002 1.16663H5.25002C2.33335 1.16663 1.16669 2.33329 1.16669 5.24996V8.74996C1.16669 11.6666 2.33335 12.8333 5.25002 12.8333Z"
                              stroke="#969696"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </IconButton>
                      </Grid>
                      <Grid item size="auto">
                        <IconButton sx={{ borderRadius: "8px" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M10.5817 12.6117C10.0683 12.7634 9.46167 12.8334 8.75 12.8334H5.25C4.53833 12.8334 3.93167 12.7634 3.41833 12.6117C3.54667 11.095 5.10417 9.89917 7 9.89917C8.89583 9.89917 10.4533 11.095 10.5817 12.6117Z"
                              stroke="#969696"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.75002 1.16663H5.25002C2.33335 1.16663 1.16669 2.33329 1.16669 5.24996V8.74996C1.16669 10.955 1.83169 12.1625 3.41835 12.6116C3.54669 11.095 5.10419 9.89911 7.00002 9.89911C8.89585 9.89911 10.4534 11.095 10.5817 12.6116C12.1684 12.1625 12.8334 10.955 12.8334 8.74996V5.24996C12.8334 2.33329 11.6667 1.16663 8.75002 1.16663ZM7.00002 8.26578C5.84502 8.26578 4.91169 7.32664 4.91169 6.17164C4.91169 5.01664 5.84502 4.08329 7.00002 4.08329C8.15502 4.08329 9.08835 5.01664 9.08835 6.17164C9.08835 7.32664 8.15502 8.26578 7.00002 8.26578Z"
                              stroke="#969696"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9.08835 6.17172C9.08835 7.32672 8.15502 8.26586 7.00002 8.26586C5.84502 8.26586 4.91168 7.32672 4.91168 6.17172C4.91168 5.01672 5.84502 4.08337 7.00002 4.08337C8.15502 4.08337 9.08835 5.01672 9.08835 6.17172Z"
                              stroke="#969696"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </IconButton>
                      </Grid>
                      <Grid item size="auto">
                        <IconButton sx={{ borderRadius: "8px" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M5.25 6.41663V9.91663L6.41667 8.74996"
                              stroke="#969696"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5.25004 9.91667L4.08337 8.75"
                              stroke="#969696"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.8333 5.83329V8.74996C12.8333 11.6666 11.6666 12.8333 8.74996 12.8333H5.24996C2.33329 12.8333 1.16663 11.6666 1.16663 8.74996V5.24996C1.16663 2.33329 2.33329 1.16663 5.24996 1.16663H8.16663"
                              stroke="#969696"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12.8333 5.83329H10.5C8.74996 5.83329 8.16663 5.24996 8.16663 3.49996V1.16663L12.8333 5.83329Z"
                              stroke="#969696"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </IconButton>
                      </Grid>
                      <Grid item size="auto">
                        <IconButton sx={{ borderRadius: "8px" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M2.43248 8.92497L5.07498 11.5675C6.15998 12.6525 7.92164 12.6525 9.01248 11.5675L11.5733 9.00663C12.6583 7.92163 12.6583 6.15997 11.5733 5.06913L8.92498 2.43247C8.37081 1.8783 7.60664 1.5808 6.82498 1.62163L3.90831 1.76163C2.74164 1.81413 1.81414 2.74163 1.75581 3.90247L1.61581 6.81913C1.58081 7.60663 1.87831 8.3708 2.43248 8.92497Z"
                              stroke="#969696"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M5.54159 7.00004C6.347 7.00004 6.99992 6.34712 6.99992 5.54171C6.99992 4.73629 6.347 4.08337 5.54159 4.08337C4.73617 4.08337 4.08325 4.73629 4.08325 5.54171C4.08325 6.34712 4.73617 7.00004 5.54159 7.00004Z"
                              stroke="#969696"
                              stroke-linecap="round"
                            />
                          </svg>
                        </IconButton>
                      </Grid>
                      <Grid item size="auto">
                        <IconButton sx={{ borderRadius: "8px" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M2.91667 5.83337C2.275 5.83337 1.75 6.35837 1.75 7.00004C1.75 7.64171 2.275 8.16671 2.91667 8.16671C3.55833 8.16671 4.08333 7.64171 4.08333 7.00004C4.08333 6.35837 3.55833 5.83337 2.91667 5.83337Z"
                              stroke="#969696"
                            />
                            <path
                              d="M11.0833 5.83337C10.4416 5.83337 9.91663 6.35837 9.91663 7.00004C9.91663 7.64171 10.4416 8.16671 11.0833 8.16671C11.725 8.16671 12.25 7.64171 12.25 7.00004C12.25 6.35837 11.725 5.83337 11.0833 5.83337Z"
                              stroke="#969696"
                            />
                            <path
                              d="M7.00004 5.83337C6.35837 5.83337 5.83337 6.35837 5.83337 7.00004C5.83337 7.64171 6.35837 8.16671 7.00004 8.16671C7.64171 8.16671 8.16671 7.64171 8.16671 7.00004C8.16671 6.35837 7.64171 5.83337 7.00004 5.83337Z"
                              stroke="#969696"
                            />
                          </svg>
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>{" "}
        </Collapse>
        <Paper sx={{ boxShadow: "none", border: "1px solid #E5E5E5" }}>
          <Box
            sx={{
              p: 1.125,
              borderBottom: "2px solid #E5E5E5",
            }}
          >
            <Grid container alignItems="center">
              <Grid item xs={3}>
                <Typography variant="medium" sx={{ fontWeight: 500 }}>
                  Task List
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
                    <IconButton sx={{ borderRadius: "8px" }}>
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
                    </IconButton>
                    &nbsp; &nbsp;
                  </Grid>
                  <Grid item xs="auto" sx={{ borderLeft: "1px solid #E5E5E5" }}>
                    &nbsp;
                    <IconButton sx={{ borderRadius: "8px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 6.5H16"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6 6.5H2"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M22 17.5H18"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 17.5H2"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </IconButton>
                    &nbsp;
                    <IconButton sx={{ borderRadius: "8px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M16.0697 9.93L9.99969 16L3.92969 9.93"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 1.00008V15.8301"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.58504 18.5L18.415 18.5"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </IconButton>
                    &nbsp;
                    <IconButton sx={{ borderRadius: "8px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 12C22 17.52 17.52 22 12 22C6.48 22 3.11 16.44 3.11 16.44M3.11 16.44H7.63M3.11 16.44V21.44M2 12C2 6.48 6.44 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56"
                          stroke="#555555"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </IconButton>
                    &nbsp;
                  </Grid>
                  <Grid item xs="auto" sx={{ borderLeft: "1px solid #E5E5E5" }}>
                    &nbsp;{" "}
                    <Button
                      size="small"
                      sx={{ textTransform: "none" }}
                      endIcon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.9999 9C13.7347 9 13.4803 8.89464 13.2928 8.70711C13.1053 8.51957 12.9999 8.26522 12.9999 8C12.9999 7.73478 13.1053 7.48043 13.2928 7.29289C13.4803 7.10536 13.7347 7 13.9999 7H18.9999C19.2651 7 19.5195 7.10536 19.707 7.29289C19.8946 7.48043 19.9999 7.73478 19.9999 8V13C19.9999 13.2652 19.8946 13.5196 19.707 13.7071C19.5195 13.8946 19.2651 14 18.9999 14C18.7347 14 18.4803 13.8946 18.2928 13.7071C18.1053 13.5196 17.9999 13.2652 17.9999 13V10.414L13.7069 14.707C13.5194 14.8945 13.2651 14.9998 12.9999 14.9998C12.7348 14.9998 12.4804 14.8945 12.2929 14.707L9.99992 12.414L5.70692 16.707C5.51832 16.8892 5.26571 16.99 5.00352 16.9877C4.74132 16.9854 4.49051 16.8802 4.3051 16.6948C4.11969 16.5094 4.01452 16.2586 4.01224 15.9964C4.00997 15.7342 4.11076 15.4816 4.29292 15.293L9.29292 10.293C9.48045 10.1055 9.73475 10.0002 9.99992 10.0002C10.2651 10.0002 10.5194 10.1055 10.7069 10.293L12.9999 12.586L16.5859 9H13.9999Z"
                            fill="#555555"
                          />
                        </svg>
                      }
                    >
                      Chart view
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
                  <TableCell colSpan={2} sx={{ pl: 2.5 }}>
                    <Grid
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
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Grid item xs="auto">
                        Rule set
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
                        Status
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
                        Type
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
                        Progress
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
                  <TableCell align="right">A</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                  <TableRow
                  // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell sx={{ width: "40px", py: 0, pr: 0, pl: 1.5 }}>
                      <Checkbox size="small" />
                    </TableCell>
                    <TableCell sx={{ width: "320px" }}>
                      <Box
                        sx={{
                          width: "320px",
                          whiteSpace: "nowrap",
                          overflow: "hidden ",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Understanding color theory: the color wheel and finding
                        complementary colors
                      </Box>
                    </TableCell>
                    <TableCell>Cell label</TableCell>
                    <TableCell>Cell label</TableCell>
                    <TableCell>Cell label</TableCell>
                    <TableCell>70%</TableCell>

                    <TableCell align="right">
                      <IconButton sx={{ background: "#FAFAFA" }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="6"
                          height="10"
                          viewBox="0 0 6 10"
                          fill="none"
                        >
                          <path
                            d="M1.7124 8.30001L4.42907 5.58335C4.7499 5.26251 4.7499 4.73751 4.42907 4.41668L1.7124 1.70001"
                            stroke="#969696"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </IconButton>
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
      </Box>
    </Box>
  );
};

export default Projects;
