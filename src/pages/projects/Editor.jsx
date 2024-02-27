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
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Editor = () => {
  const theme = useTheme();
  const [activeMenuName, setActiveMenuName] = useState("Editor");
  const [language, setLanguage] = useState("");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <Box>
      <Grid container>
        <Grid item xs={9} sx={{ pr: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs={3} sx={{ borderRight: "1px solid #ECECEC" }}>
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                // sx={{ mb: 1.25 }}
              >
                <Grid item xs="auto">
                  {" "}
                  <Typography variant="medium" color="text.light">
                    Keys (340/356)
                  </Typography>
                </Grid>
                <Grid item xs="auto">
                  {" "}
                  <Button
                    variant="medium"
                    sx={{
                      textAlign: "right",
                      color: theme.palette.text.light,
                      fontWeight: 400,
                    }}
                  >
                    Filter
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={9}>
              <Grid container alignItems="center">
                <Grid item xs={6}>
                  <FormControl sx={{ minWidth: 140 }} xs="small">
                    <InputLabel id="demo-simple-select-label">
                      Language
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={language}
                      label="Language"
                      placeholder="Language"
                      onChange={handleChange}
                      sx={{
                        boxShadow: "none",
                        ".MuiOutlinedInput-notchedOutline": { border: 0 },
                        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                          {
                            border: 0,
                          },
                        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            border: 0,
                          },
                      }}
                    >
                      <MenuItem value={"English"}> English</MenuItem>
                      <MenuItem value={"Bangla"}>Bangla</MenuItem>
                      <MenuItem value={"Arabic"}>Arabic</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "right" }}>
                  <IconButton sx={{ borderRadius: "8px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M9.54655 12.7133C9.54655 13.12 9.27986 13.6533 8.93986 13.86L7.99988 14.4666C7.12654 15.0066 5.91321 14.4 5.91321 13.32V9.7533C5.91321 9.27996 5.64654 8.6733 5.37321 8.33997L2.81319 5.64663C2.47319 5.30663 2.20654 4.70663 2.20654 4.29997V2.7533C2.20654 1.94663 2.81322 1.33997 3.55322 1.33997H12.4465C13.1865 1.33997 13.7932 1.94663 13.7932 2.68663V4.16663C13.7932 4.70663 13.4532 5.37996 13.1199 5.7133"
                        stroke="#969696"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.7134 11.0134C11.8916 11.0134 12.8468 10.0583 12.8468 8.88005C12.8468 7.70184 11.8916 6.7467 10.7134 6.7467C9.53521 6.7467 8.58008 7.70184 8.58008 8.88005C8.58008 10.0583 9.53521 11.0134 10.7134 11.0134Z"
                        stroke="#969696"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.2467 11.4134L12.5801 10.7467"
                        stroke="#969696"
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
                        d="M12.4834 7.52497L9.85837 8.86663L7.9917 6.99997L9.85837 5.1333L12.4834 6.41663C12.95 6.64997 12.95 7.34997 12.4834 7.52497Z"
                        stroke="#969696"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.85817 5.13337L7.9915 7.00004L2.3915 12.6L2.0415 12.775C1.63317 13.0084 1.1665 12.6584 1.1665 12.1917V1.80837C1.1665 1.34171 1.63317 1.05004 2.0415 1.22504L9.85817 5.13337Z"
                        stroke="#969696"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.85827 8.86667L2.3916 12.6L7.9916 7L9.85827 8.86667Z"
                        stroke="#969696"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.9916 7.00003L2.3916 1.40002"
                        stroke="#969696"
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
                        d="M8.98348 1.16663C9.10015 1.80829 8.80848 2.44996 8.45848 2.91663C8.10848 3.38329 7.46681 3.79163 6.82515 3.73329C6.70848 3.09163 7.00015 2.50829 7.35015 2.04163C7.75848 1.57496 8.40015 1.22496 8.98348 1.16663ZM10.8501 11.3166C11.1418 10.85 11.3168 10.5583 11.5501 10.0333C9.74181 9.33329 9.45015 6.76663 11.2585 5.83329C10.7335 5.13329 9.97515 4.78329 9.21681 4.78329C8.69181 4.78329 8.34181 4.89996 7.99181 5.01663C7.70015 5.13329 7.46681 5.19163 7.17515 5.19163C6.82515 5.19163 6.59181 5.07496 6.24181 4.95829C5.89181 4.84163 5.54181 4.72496 5.13348 4.72496C4.31681 4.72496 3.44181 5.19163 2.91681 6.06663C2.15848 7.23329 2.27515 9.50829 3.50015 11.375C4.02515 12.075 4.60848 12.8333 5.36681 12.8333C5.71681 12.8333 5.89181 12.7166 6.12515 12.6583C6.41681 12.5416 6.70848 12.425 7.17515 12.425C7.70015 12.425 7.93348 12.5416 8.22515 12.6583C8.45848 12.775 8.63348 12.8333 8.98348 12.8333C9.80015 12.8333 10.3835 11.9583 10.8501 11.3166Z"
                        stroke="#969696"
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
                        d="M6.99984 12.8333C10.2215 12.8333 12.8332 10.2216 12.8332 6.99996C12.8332 3.7783 10.2215 1.16663 6.99984 1.16663C3.77818 1.16663 1.1665 3.7783 1.1665 6.99996C1.1665 10.2216 3.77818 12.8333 6.99984 12.8333Z"
                        stroke="#969696"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.66676 1.75H5.2501C4.1126 5.15667 4.1126 8.84333 5.2501 12.25H4.66676"
                        stroke="#969696"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.75 1.75C9.8875 5.15667 9.8875 8.84333 8.75 12.25"
                        stroke="#969696"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.75 9.33333V8.75C5.15667 9.8875 8.84333 9.8875 12.25 8.75V9.33333"
                        stroke="#969696"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.75 5.24998C5.15667 4.11248 8.84333 4.11248 12.25 5.24998"
                        stroke="#969696"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </IconButton>
                  <IconButton sx={{ borderRadius: "8px" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12.0934 14.4134C11.5067 14.5867 10.8134 14.6667 10.0001 14.6667H6.00007C5.18674 14.6667 4.49341 14.5867 3.90674 14.4134C4.0534 12.68 5.8334 11.3134 8.00007 11.3134C10.1667 11.3134 11.9467 12.68 12.0934 14.4134Z"
                        stroke="#969696"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0002 1.33337H6.00016C2.66683 1.33337 1.3335 2.66671 1.3335 6.00004V10C1.3335 12.52 2.0935 13.9 3.90683 14.4134C4.0535 12.68 5.8335 11.3134 8.00016 11.3134C10.1668 11.3134 11.9468 12.68 12.0935 14.4134C13.9068 13.9 14.6668 12.52 14.6668 10V6.00004C14.6668 2.66671 13.3335 1.33337 10.0002 1.33337ZM8.00016 9.4467C6.68016 9.4467 5.6135 8.37339 5.6135 7.05339C5.6135 5.73339 6.68016 4.66671 8.00016 4.66671C9.32016 4.66671 10.3868 5.73339 10.3868 7.05339C10.3868 8.37339 9.32016 9.4467 8.00016 9.4467Z"
                        stroke="#969696"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.3866 7.0533C10.3866 8.3733 9.31995 9.44661 7.99995 9.44661C6.67995 9.44661 5.61328 8.3733 5.61328 7.0533C5.61328 5.7333 6.67995 4.66663 7.99995 4.66663C9.31995 4.66663 10.3866 5.7333 10.3866 7.0533Z"
                        stroke="#969696"
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
                        d="M2.91667 5.83337C2.275 5.83337 1.75 6.35837 1.75 7.00004C1.75 7.64171 2.275 8.16671 2.91667 8.16671C3.55833 8.16671 4.08333 7.64171 4.08333 7.00004C4.08333 6.35837 3.55833 5.83337 2.91667 5.83337Z"
                        stroke="#969696"
                      />
                      <path
                        d="M11.0832 5.83337C10.4415 5.83337 9.9165 6.35837 9.9165 7.00004C9.9165 7.64171 10.4415 8.16671 11.0832 8.16671C11.7248 8.16671 12.2498 7.64171 12.2498 7.00004C12.2498 6.35837 11.7248 5.83337 11.0832 5.83337Z"
                        stroke="#969696"
                      />
                      <path
                        d="M7.00016 5.83337C6.3585 5.83337 5.8335 6.35837 5.8335 7.00004C5.8335 7.64171 6.3585 8.16671 7.00016 8.16671C7.64183 8.16671 8.16683 7.64171 8.16683 7.00004C8.16683 6.35837 7.64183 5.83337 7.00016 5.83337Z"
                        stroke="#969696"
                      />
                    </svg>
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box
            sx={{
              // mb: 3.5,
              height: "Calc(100vh - 233px)",
              overflow: "auto",
              background: "#fff",
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((item, i) => (
              <Grid container ket={i}>
                {" "}
                <Grid
                  item
                  xs={3}
                  sx={{
                    py: 2,
                    px: 2,
                    borderBottom: i < 5 && "1px solid #ECECEC",
                    borderRight: "1px solid #ECECEC",
                  }}
                >
                  <Typography
                    variant="medium"
                    color="primary.main"
                    sx={{
                      fontWeight: 500,
                      mb: 1.25,
                      //  cursor: "pointer"
                    }}
                  >
                    Brand tagline
                  </Typography>
                  <Box sx={{ mb: 1.25 }}>
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
                          stroke="#969696"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.85817 5.13337L7.9915 7.00004L2.3915 12.6L2.0415 12.775C1.63317 13.0084 1.1665 12.6584 1.1665 12.1917V1.80837C1.1665 1.34171 1.63317 1.05004 2.0415 1.22504L9.85817 5.13337Z"
                          stroke="#969696"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.85827 8.86667L2.3916 12.6L7.9916 7L9.85827 8.86667Z"
                          stroke="#969696"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.9916 7.00003L2.3916 1.40002"
                          stroke="#969696"
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
                          d="M8.98348 1.16663C9.10015 1.80829 8.80848 2.44996 8.45848 2.91663C8.10848 3.38329 7.46681 3.79163 6.82515 3.73329C6.70848 3.09163 7.00015 2.50829 7.35015 2.04163C7.75848 1.57496 8.40015 1.22496 8.98348 1.16663ZM10.8501 11.3166C11.1418 10.85 11.3168 10.5583 11.5501 10.0333C9.74181 9.33329 9.45015 6.76663 11.2585 5.83329C10.7335 5.13329 9.97515 4.78329 9.21681 4.78329C8.69181 4.78329 8.34181 4.89996 7.99181 5.01663C7.70015 5.13329 7.46681 5.19163 7.17515 5.19163C6.82515 5.19163 6.59181 5.07496 6.24181 4.95829C5.89181 4.84163 5.54181 4.72496 5.13348 4.72496C4.31681 4.72496 3.44181 5.19163 2.91681 6.06663C2.15848 7.23329 2.27515 9.50829 3.50015 11.375C4.02515 12.075 4.60848 12.8333 5.36681 12.8333C5.71681 12.8333 5.89181 12.7166 6.12515 12.6583C6.41681 12.5416 6.70848 12.425 7.17515 12.425C7.70015 12.425 7.93348 12.5416 8.22515 12.6583C8.45848 12.775 8.63348 12.8333 8.98348 12.8333C9.80015 12.8333 10.3835 11.9583 10.8501 11.3166Z"
                          stroke="#969696"
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
                          d="M6.99984 12.8333C10.2215 12.8333 12.8332 10.2216 12.8332 6.99996C12.8332 3.7783 10.2215 1.16663 6.99984 1.16663C3.77818 1.16663 1.1665 3.7783 1.1665 6.99996C1.1665 10.2216 3.77818 12.8333 6.99984 12.8333Z"
                          stroke="#969696"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.66676 1.75H5.2501C4.1126 5.15667 4.1126 8.84333 5.2501 12.25H4.66676"
                          stroke="#969696"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.75 1.75C9.8875 5.15667 9.8875 8.84333 8.75 12.25"
                          stroke="#969696"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.75 9.33333V8.75C5.15667 9.8875 8.84333 9.8875 12.25 8.75V9.33333"
                          stroke="#969696"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.75 5.24998C5.15667 4.11248 8.84333 4.11248 12.25 5.24998"
                          stroke="#969696"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </IconButton>
                  </Box>
                  <Box sx={{ mb: 1.25 }}>
                    <Stack direction="row" spacing={1}>
                      <Chip
                        label="Brand"
                        xs="small"
                        sx={{
                          "& .MuiChip-label": {
                            p: 0,
                          },
                          height: "24px",
                          px: 1,
                          // py: 0.125,
                          background: "#FAFAFA",
                          border: "1px solid #E5E5E5",
                          borderRadius: "6px",
                          fontSize: "10px",
                          color: theme.palette.text.light,
                        }}
                      />
                      <Chip
                        label="Verify"
                        xs="small"
                        sx={{
                          "& .MuiChip-label": {
                            p: 0,
                          },
                          height: "24px",
                          px: 1,
                          // py: 0.125,
                          background: "#FAFAFA",
                          border: "1px solid #E5E5E5",
                          borderRadius: "6px",
                          fontSize: "10px",
                          color: theme.palette.text.light,
                        }}
                      />
                      <Chip
                        label="Tagline"
                        xs="small"
                        sx={{
                          "& .MuiChip-label": {
                            p: 0,
                          },
                          height: "24px",
                          px: 1,
                          // py: 0.125,
                          background: "#FAFAFA",
                          border: "1px solid #E5E5E5",
                          borderRadius: "6px",
                          fontSize: "10px",
                          color: theme.palette.text.light,
                        }}
                      />
                    </Stack>
                  </Box>
                  <Box>
                    <IconButton sx={{ borderRadius: "8px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M5.66659 12.6666H5.33325C2.66659 12.6666 1.33325 12 1.33325 8.66665V5.33331C1.33325 2.66665 2.66659 1.33331 5.33325 1.33331H10.6666C13.3333 1.33331 14.6666 2.66665 14.6666 5.33331V8.66665C14.6666 11.3333 13.3333 12.6666 10.6666 12.6666H10.3333C10.1266 12.6666 9.92659 12.7666 9.79992 12.9333L8.79992 14.2666C8.35992 14.8533 7.63992 14.8533 7.19992 14.2666L6.19992 12.9333C6.09325 12.7866 5.84659 12.6666 5.66659 12.6666Z"
                          stroke="#969696"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.66675 5.33331H11.3334"
                          stroke="#969696"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.66675 8.66669H8.66675"
                          stroke="#969696"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </IconButton>

                    <IconButton sx={{ borderRadius: "8px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4.50662 14.6666H11.4933C13.3333 14.6666 14.0666 13.54 14.1533 12.1666L14.4999 6.65998C14.5933 5.21998 13.4466 3.99998 11.9999 3.99998C11.5933 3.99998 11.2199 3.76665 11.0333 3.40665L10.5533 2.43998C10.2466 1.83331 9.44662 1.33331 8.76662 1.33331H7.23995C6.55328 1.33331 5.75328 1.83331 5.44662 2.43998L4.96662 3.40665C4.77995 3.76665 4.40662 3.99998 3.99995 3.99998C2.55328 3.99998 1.40662 5.21998 1.49995 6.65998L1.84662 12.1666C1.92662 13.54 2.66662 14.6666 4.50662 14.6666Z"
                          stroke="#969696"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7 5.33331H9"
                          stroke="#969696"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.99992 12C9.19325 12 10.1666 11.0267 10.1666 9.83335C10.1666 8.64002 9.19325 7.66669 7.99992 7.66669C6.80659 7.66669 5.83325 8.64002 5.83325 9.83335C5.83325 11.0267 6.80659 12 7.99992 12Z"
                          stroke="#969696"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </IconButton>

                    <IconButton sx={{ borderRadius: "8px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M10.6666 8.59998V11.4C10.6666 13.7333 9.73325 14.6666 7.39992 14.6666H4.59992C2.26659 14.6666 1.33325 13.7333 1.33325 11.4V8.59998C1.33325 6.26665 2.26659 5.33331 4.59992 5.33331H7.39992C9.73325 5.33331 10.6666 6.26665 10.6666 8.59998Z"
                          stroke="#969696"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.6666 4.59998V7.39998C14.6666 9.73331 13.7333 10.6666 11.3999 10.6666H10.6666V8.59998C10.6666 6.26665 9.73325 5.33331 7.39992 5.33331H5.33325V4.59998C5.33325 2.26665 6.26659 1.33331 8.59992 1.33331H11.3999C13.7333 1.33331 14.6666 2.26665 14.6666 4.59998Z"
                          stroke="#969696"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </IconButton>
                    <IconButton sx={{ borderRadius: "8px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M14 3.98665C11.78 3.76665 9.54667 3.65332 7.32 3.65332C6 3.65332 4.68 3.71999 3.36 3.85332L2 3.98665"
                          stroke="#969696"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.66675 3.31331L5.81341 2.43998C5.92008 1.80665 6.00008 1.33331 7.12675 1.33331H8.87341C10.0001 1.33331 10.0867 1.83331 10.1867 2.44665L10.3334 3.31331"
                          stroke="#969696"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.5667 6.09332L12.1334 12.8067C12.06 13.8533 12 14.6667 10.14 14.6667H5.86002C4.00002 14.6667 3.94002 13.8533 3.86668 12.8067L3.43335 6.09332"
                          stroke="#969696"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.88672 11H9.10672"
                          stroke="#969696"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.33325 8.33331H9.66659"
                          stroke="#969696"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </IconButton>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={9}
                  sx={{
                    borderBottom: "1px solid #ECECEC",
                    px: 2,
                    py: 1.125,
                  }}
                >
                  <Grid
                    container
                    alignItems="center"
                    spacing={2.5}
                    sx={{ mb: 2.5 }}
                  >
                    <Grid item sx={{ width: "140px" }}>
                      <Grid container alignItems="center">
                        <Grid item xs="auto">
                          {" "}
                          <img
                            src="/US.svg"
                            alt="USA flag"
                            style={{ position: "relative", top: 3 }}
                          />
                        </Grid>
                        <Grid item xs="auto">
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
                    </Grid>
                    <Grid item sx={{ width: "calc(100% - 140px)" }}>
                      <Typography variant="small" color="text.mute">
                        Verify, Detect, Onboard and Enjoy
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    alignItems="center"
                    spacing={2.5}
                    sx={{ mb: 2.5 }}
                  >
                    <Grid item sx={{ width: "140px" }}>
                      <Grid container alignItems="center">
                        <Grid item xs="auto">
                          {" "}
                          <img
                            src="/BD.svg"
                            alt="BD flag"
                            style={{ position: "relative", top: 3 }}
                          />
                        </Grid>
                        <Grid item xs="auto">
                          {" "}
                          <Typography
                            variant="medium"
                            color="text.light"
                            sx={{ fontWeight: 600 }}
                          >
                            &nbsp;&nbsp;&nbsp;Bangla
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item sx={{ width: "calc(100% - 140px)" }}>
                      <Typography variant="small" color="text.mute">
                        দেশের শীর্ষ মোবাইল অপারেটর গ্রামীণফোন মুঠোফোন রিচার্জে
                        সর্বনিম্ন সীমা ৩০ টাকা করার সিদ্ধান্ত
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    alignItems="center"
                    spacing={2.5}
                    // sx={{ mb: 2.5 }}
                  >
                    <Grid item sx={{ width: "140px" }}>
                      <Grid container alignItems="center">
                        <Grid item xs="auto">
                          {" "}
                          <img
                            src="/SA.svg"
                            alt="USA flag"
                            style={{ position: "relative", top: 3 }}
                          />
                        </Grid>
                        <Grid item xs="auto">
                          {" "}
                          <Typography
                            variant="medium"
                            color="text.light"
                            sx={{ fontWeight: 600 }}
                          >
                            &nbsp;&nbsp;&nbsp;Arabic
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item sx={{ width: "calc(100% - 140px)" }}>
                      <Typography
                        variant="small"
                        color="text.mute"
                        sx={{ textAlign: "right" }}
                      >
                        تحقق واكتشف وانضم واستمتع
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Grid>
        <Grid item xs={3} sx={{ background: "#fff" }}>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={{
              borderBottom: "1px solid #ECECEC",
              p: 1.5,
              boxSizing: "border-box",
            }}
          >
            <Grid item xs="auto">
              {" "}
              <Typography variant="medium" color="text.light">
                Comments
              </Typography>
            </Grid>
            <Grid item xs="auto">
              {" "}
              <IconButton sx={{ borderRadius: "8px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M7.66683 14.5C11.1646 14.5 14.0002 11.6645 14.0002 8.16671C14.0002 4.6689 11.1646 1.83337 7.66683 1.83337C4.16903 1.83337 1.3335 4.6689 1.3335 8.16671C1.3335 11.6645 4.16903 14.5 7.66683 14.5Z"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.6668 15.1667L13.3335 13.8334"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </IconButton>
            </Grid>
          </Grid>
          <Box
            sx={{
              height: "Calc(100vh - 233px)",
              py: 3,
              background: "#fff",
              boxSizing: "border-box",
            }}
          >
            <Grid
              container
              justifyContent="space-between"
              flexDirection="column"
              sx={{ height: "100%", pl: 3 }}
            >
              <Grid
                item
                sx={{
                  // background: "green",
                  overflow: "auto",
                  height: "Calc(100vh - 380px)",
                  px: 3,
                }}
              >
                {" "}
                <Box
                  sx={{
                    pl: 3.5,
                    // borderLeft: "1px solid yellow",
                    borderLeft: "1px solid #F7F8F9",
                    position: "relative",
                  }}
                >
                  <Avatar
                    sx={{
                      width: 44,
                      height: 44,
                      bgcolor: `#fff`,
                      position: "absolute",
                      top: 0,
                      left: -22,
                    }}
                  >
                    <img src="/user.png" />
                  </Avatar>
                  <Box
                    sx={{ background: "#F7F8F9", p: 1, borderRadius: "10px" }}
                  >
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Grid item>
                        <Typography variant="medium" color="text.mute">
                          2 mins
                        </Typography>
                      </Grid>
                      <Grid item>
                        {" "}
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
                              d="M11.0832 5.83337C10.4415 5.83337 9.9165 6.35837 9.9165 7.00004C9.9165 7.64171 10.4415 8.16671 11.0832 8.16671C11.7248 8.16671 12.2498 7.64171 12.2498 7.00004C12.2498 6.35837 11.7248 5.83337 11.0832 5.83337Z"
                              stroke="#969696"
                            />
                            <path
                              d="M7.00016 5.83337C6.3585 5.83337 5.8335 6.35837 5.8335 7.00004C5.8335 7.64171 6.3585 8.16671 7.00016 8.16671C7.64183 8.16671 8.16683 7.64171 8.16683 7.00004C8.16683 6.35837 7.64183 5.83337 7.00016 5.83337Z"
                              stroke="#969696"
                            />
                          </svg>
                        </IconButton>
                      </Grid>
                    </Grid>
                    <Typography
                      variant="small"
                      color="text.main"
                      sx={{ my: 1.125 }}
                    >
                      Lorem ipsum dolor sit amet, coetur adipiscing elit ut
                      aliquam, purus sit amet luctus Lorem ipsum dolor sit amet
                      aliquam, purus sit amet luctus
                    </Typography>
                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Grid item>
                        <Typography
                          variant="medium"
                          color="text.mute"
                          sx={{ display: "inline-flex" }}
                        >
                          15
                        </Typography>
                        &nbsp;
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          style={{ position: "relative", top: 4 }}
                        >
                          <path
                            d="M11.6849 9C11.6849 10.485 10.4849 11.685 8.99994 11.685C7.51494 11.685 6.31494 10.485 6.31494 9C6.31494 7.515 7.51494 6.315 8.99994 6.315C10.4849 6.315 11.6849 7.515 11.6849 9Z"
                            stroke="#969696"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.99988 15.2025C11.6474 15.2025 14.1149 13.6425 15.8324 10.9425C16.5074 9.88498 16.5074 8.10748 15.8324 7.04998C14.1149 4.34998 11.6474 2.78998 8.99988 2.78998C6.35238 2.78998 3.88488 4.34998 2.16738 7.04998C1.49238 8.10748 1.49238 9.88498 2.16738 10.9425C3.88488 13.6425 6.35238 15.2025 8.99988 15.2025Z"
                            stroke="#969696"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </Grid>
                      <Grid item>
                        {" "}
                        <IconButton sx={{ borderRadius: "8px" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M1.125 15.75C1.755 8.03571 8.055 6.10714 11.205 6.75V2.25L16.875 9L11.205 15.75V11.25C8.055 10.6071 3.015 11.8929 1.125 15.75Z"
                              stroke="#969696"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Box>
                  <Grid container spacing={1} sx={{ mt: 2 }}>
                    <Grid item sx={{ width: "50px" }}>
                      <Avatar
                        sx={{
                          width: 44,
                          height: 44,
                          bgcolor: `#fff`,
                        }}
                      >
                        <img src="/user.png" />
                      </Avatar>
                    </Grid>
                    <Grid item sx={{ width: "Calc(100% - 50px)" }}>
                      <Box
                        sx={{
                          background: "#F7F8F9",
                          p: 1,
                          borderRadius: "10px",
                        }}
                      >
                        <Grid
                          container
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Grid item>
                            <Typography variant="medium" color="text.mute">
                              2 mins
                            </Typography>
                          </Grid>
                          <Grid item>
                            {" "}
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
                                  d="M11.0832 5.83337C10.4415 5.83337 9.9165 6.35837 9.9165 7.00004C9.9165 7.64171 10.4415 8.16671 11.0832 8.16671C11.7248 8.16671 12.2498 7.64171 12.2498 7.00004C12.2498 6.35837 11.7248 5.83337 11.0832 5.83337Z"
                                  stroke="#969696"
                                />
                                <path
                                  d="M7.00016 5.83337C6.3585 5.83337 5.8335 6.35837 5.8335 7.00004C5.8335 7.64171 6.3585 8.16671 7.00016 8.16671C7.64183 8.16671 8.16683 7.64171 8.16683 7.00004C8.16683 6.35837 7.64183 5.83337 7.00016 5.83337Z"
                                  stroke="#969696"
                                />
                              </svg>
                            </IconButton>
                          </Grid>
                        </Grid>
                        <Typography
                          variant="small"
                          color="text.main"
                          sx={{ my: 1.125 }}
                        >
                          Lorem ipsum dolor sit amet, coetur adipiscing elit ut
                          aliquam, purus sit amet luctus Lorem ipsum dolor sit
                          amet aliquam, purus sit amet luctus
                        </Typography>
                        <Grid
                          container
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Grid item>
                            <Typography
                              variant="medium"
                              color="text.mute"
                              sx={{ display: "inline-flex" }}
                            >
                              15
                            </Typography>
                            &nbsp;
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              style={{ position: "relative", top: 4 }}
                            >
                              <path
                                d="M11.6849 9C11.6849 10.485 10.4849 11.685 8.99994 11.685C7.51494 11.685 6.31494 10.485 6.31494 9C6.31494 7.515 7.51494 6.315 8.99994 6.315C10.4849 6.315 11.6849 7.515 11.6849 9Z"
                                stroke="#969696"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.99988 15.2025C11.6474 15.2025 14.1149 13.6425 15.8324 10.9425C16.5074 9.88498 16.5074 8.10748 15.8324 7.04998C14.1149 4.34998 11.6474 2.78998 8.99988 2.78998C6.35238 2.78998 3.88488 4.34998 2.16738 7.04998C1.49238 8.10748 1.49238 9.88498 2.16738 10.9425C3.88488 13.6425 6.35238 15.2025 8.99988 15.2025Z"
                                stroke="#969696"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </Grid>
                          <Grid item>
                            {" "}
                            <IconButton sx={{ borderRadius: "8px" }}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  d="M1.125 15.75C1.755 8.03571 8.055 6.10714 11.205 6.75V2.25L16.875 9L11.205 15.75V11.25C8.055 10.6071 3.015 11.8929 1.125 15.75Z"
                                  stroke="#969696"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} sx={{ mt: 2 }}>
                    <Grid item sx={{ width: "50px" }}>
                      <Avatar
                        sx={{
                          width: 44,
                          height: 44,
                          bgcolor: `#fff`,
                        }}
                      >
                        <img src="/user.png" />
                      </Avatar>
                    </Grid>
                    <Grid item sx={{ width: "Calc(100% - 50px)" }}>
                      <Box
                        sx={{
                          background: "#F7F8F9",
                          p: 1,
                          borderRadius: "10px",
                        }}
                      >
                        <Grid
                          container
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Grid item>
                            <Typography variant="medium" color="text.mute">
                              2 mins
                            </Typography>
                          </Grid>
                          <Grid item>
                            {" "}
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
                                  d="M11.0832 5.83337C10.4415 5.83337 9.9165 6.35837 9.9165 7.00004C9.9165 7.64171 10.4415 8.16671 11.0832 8.16671C11.7248 8.16671 12.2498 7.64171 12.2498 7.00004C12.2498 6.35837 11.7248 5.83337 11.0832 5.83337Z"
                                  stroke="#969696"
                                />
                                <path
                                  d="M7.00016 5.83337C6.3585 5.83337 5.8335 6.35837 5.8335 7.00004C5.8335 7.64171 6.3585 8.16671 7.00016 8.16671C7.64183 8.16671 8.16683 7.64171 8.16683 7.00004C8.16683 6.35837 7.64183 5.83337 7.00016 5.83337Z"
                                  stroke="#969696"
                                />
                              </svg>
                            </IconButton>
                          </Grid>
                        </Grid>
                        <Typography
                          variant="small"
                          color="text.main"
                          sx={{ my: 1.125 }}
                        >
                          Lorem ipsum dolor sit amet, coetur adipiscing elit ut
                          aliquam, purus sit amet luctus Lorem ipsum dolor sit
                          amet aliquam, purus sit amet luctus
                        </Typography>
                        <Grid
                          container
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Grid item>
                            <Typography
                              variant="medium"
                              color="text.mute"
                              sx={{ display: "inline-flex" }}
                            >
                              15
                            </Typography>
                            &nbsp;
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              style={{ position: "relative", top: 4 }}
                            >
                              <path
                                d="M11.6849 9C11.6849 10.485 10.4849 11.685 8.99994 11.685C7.51494 11.685 6.31494 10.485 6.31494 9C6.31494 7.515 7.51494 6.315 8.99994 6.315C10.4849 6.315 11.6849 7.515 11.6849 9Z"
                                stroke="#969696"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.99988 15.2025C11.6474 15.2025 14.1149 13.6425 15.8324 10.9425C16.5074 9.88498 16.5074 8.10748 15.8324 7.04998C14.1149 4.34998 11.6474 2.78998 8.99988 2.78998C6.35238 2.78998 3.88488 4.34998 2.16738 7.04998C1.49238 8.10748 1.49238 9.88498 2.16738 10.9425C3.88488 13.6425 6.35238 15.2025 8.99988 15.2025Z"
                                stroke="#969696"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </Grid>
                          <Grid item>
                            {" "}
                            <IconButton sx={{ borderRadius: "8px" }}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  d="M1.125 15.75C1.755 8.03571 8.055 6.10714 11.205 6.75V2.25L16.875 9L11.205 15.75V11.25C8.055 10.6071 3.015 11.8929 1.125 15.75Z"
                                  stroke="#969696"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </Grid>
              <Grid item sx={{ py: 2, pl: 3 }}>
                {" "}
                <TextField
                  sx={{ mr: 1 }}
                  size="small"
                  id="outlined-basic"
                  placeholder="Start typing..."
                  variant="outlined"
                />{" "}
                <Button
                  sx={{
                    borderRadius: "8px",
                    width: "40px",
                    height: "40px",
                    minWidth: 0,
                    p: 0.75,
                    // background: theme.palette.primary.main,
                    // "&::hover": {
                    //   background: theme.palette.primary.light,
                    // },
                  }}
                  variant="contained"
                  disableElevation
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7.40018 6.32L16.5002 3C20.3102 1.73 22.2602 3.19 21.0002 7L17.6802 16.6C15.7802 22.31 12.6602 22.31 10.7602 16.6L9.92018 14.08L7.40018 13.24C1.69018 11.34 1.69018 8.23 7.40018 6.32Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.1099 13.65L13.6899 10.06"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Editor;
