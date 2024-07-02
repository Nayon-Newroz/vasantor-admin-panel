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
import IOSSDK from "./IOSSDK";

const Releases = () => {
  const theme = useTheme();
  let navigate = useNavigate();
  const [activeMenuName, setActiveMenuName] = useState("iOS SDK");

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

  const showChild = () => {
    switch (activeMenuName) {
      case "iOS SDK":
        return <IOSSDK />;

      // case "Upload":
      //   return <Upload />;
      // case "Download":
      //   return <Download />;
      // case "Tasks":
      //   return <Task />;
      // case "Contributors":
      //   return <Contributors />;
      // case "Releases":
      //   return <Releases />;

      default:
        break;
    }
  };
  return (
    <Box>
      <Box sx={{ borderBottom: "1px solid #ECECEC", my: 1.75 }}>
        <Grid container>
          <Grid item xs={9}>
            <Button
              variant="text"
              // size="small"
              sx={{
                textTransform: "none",
                borderRadius: "0px",
                color:
                  activeMenuName === "iOS SDK"
                    ? theme.palette.primary.main
                    : theme.palette.text.light,
                borderBottom:
                  activeMenuName === "iOS SDK" &&
                  `1px solid ${theme.palette.primary.main}`,
              }}
              onClick={() => setActiveMenuName("iOS SDK")}
            >
              iOS SDK
            </Button>
            <Button
              variant="text"
              // size="small"
              sx={{
                textTransform: "none",
                borderRadius: "0px",
                color:
                  activeMenuName === "Android SDK"
                    ? theme.palette.primary.main
                    : theme.palette.text.light,
                borderBottom:
                  activeMenuName === "Android SDK" &&
                  `1px solid ${theme.palette.primary.main}`,
              }}
              onClick={() => setActiveMenuName("Android SDK")}
            >
              Android SDK
            </Button>
            <Button
              variant="text"
              // size="small"
              sx={{
                textTransform: "none",
                borderRadius: "0px",
                color:
                  activeMenuName === "Flutter SDK"
                    ? theme.palette.primary.main
                    : theme.palette.text.light,
                borderBottom:
                  activeMenuName === "Flutter SDK" &&
                  `1px solid ${theme.palette.primary.main}`,
              }}
              onClick={() => setActiveMenuName("Flutter SDK")}
            >
              Flutter SDK
            </Button>
          </Grid>
          <Grid item xs={3} sx={{ textAlign: "right" }}>
            <Button
              variant="contained"
              disableElevation
              size="small"
              sx={{ textTransform: "none" }}
              //  component={Link}
              //  to="/create-project"
            >
              Generate new bundle
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box>{showChild()}</Box>
    </Box>
  );
};

export default Releases;
