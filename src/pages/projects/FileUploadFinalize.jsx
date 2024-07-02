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
import Checkbox from "@mui/material/Checkbox";
import AvatarGroup from "@mui/material/AvatarGroup";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useDropzone } from "react-dropzone";
import language from "../../LanguageData";
import Allkey from "./Allkey";
import Replaceable from "./Replaceable";
import NewlyAdded from "./NewlyAdded";
console.log("language", language);

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

const FileUploadFinalize = ({ handleBack, handleNext }) => {
  const theme = useTheme();
  let navigate = useNavigate();
  const [activeMenuName, setActiveMenuName] = useState("All Key");

  const customeTextFeild = {
    background: "#ffffff",
    "& label.Mui-focused": {
      color: "#E5E5E5",
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-input": {
      padding: "10px 24px 10px 0px",
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
  const showChild = () => {
    switch (activeMenuName) {
      case "All Key":
        return <Allkey />;

      case "Replaceable":
        return <Replaceable />;
      case "Newly Added":
        return <NewlyAdded />;
     

      default:
        break;
    }
  };
  return (
    <Box sx={{ height: "Calc(100vh - 450px)", mt: 4 }}>
      <Box sx={{ width: "100%" }}>
        {" "}
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Uploaded Key list for <b>English Language</b>
        </Typography>
        <Typography
          variant="medium"
          color="text.fade"
          sx={{ textAlign: "center" }}
        >
          Make sure you take all necessary actions for every rows.
        </Typography>
        <Box
          sx={{
            borderBottom: "1px solid #E5E5E5",
            background: "#fff",
            borderRadius: "6px",
          }}
        >
          <Grid container>
            <Grid item xs={5}>
              <Button
                variant="text"
                // size="small"
                sx={{
                  textTransform: "none",
                  borderRadius: "0px",
                  padding: "10px 30px",
                  color:
                    activeMenuName === "All Key"
                      ? theme.palette.primary.main
                      : theme.palette.text.light,
                  borderBottom:
                    activeMenuName === "All Key" &&
                    `1px solid ${theme.palette.primary.main}`,
                }}
                onClick={() => setActiveMenuName("All Key")}
              >
                All Key
              </Button>
              <Button
                variant="text"
                // size="small"
                sx={{
                  textTransform: "none",
                  borderRadius: "0px",
                  padding: "10px 30px",
                  color:
                    activeMenuName === "Replaceable"
                      ? theme.palette.primary.main
                      : theme.palette.text.light,
                  borderBottom:
                    activeMenuName === "Replaceable" &&
                    `1px solid ${theme.palette.primary.main}`,
                }}
                onClick={() => setActiveMenuName("Replaceable")}
              >
                Replaceable
              </Button>
              <Button
                variant="text"
                // size="small"
                sx={{
                  textTransform: "none",
                  borderRadius: "0px",
                  padding: "10px 30px",
                  color:
                    activeMenuName === "Newly Added"
                      ? theme.palette.primary.main
                      : theme.palette.text.light,
                  borderBottom:
                    activeMenuName === "Newly Added" &&
                    `1px solid ${theme.palette.primary.main}`,
                }}
                onClick={() => setActiveMenuName("Newly Added")}
              >
                Newly Added
              </Button>
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

                    sx={{ ...customeTextFeild,background:"#EFF3FF" }}
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
            <Grid item xs={12}>
            {showChild()} 
            </Grid>
          </Grid>
        </Box>
       
        <Box sx={{ textAlign: "center",mt:2 }}>
          {" "}
          <Button variant="outlined" disableElevation onClick={handleBack}>
            Cancel
          </Button>
          &nbsp;&nbsp;
          <Button variant="contained" disableElevation onClick={handleNext}>
            Apply
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FileUploadFinalize;
