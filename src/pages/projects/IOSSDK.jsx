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

const IOSSDK = () => {
  const theme = useTheme();
  let navigate = useNavigate();
  const [activeMenuName, setActiveMenuName] = useState("");

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
    <Box>
      <Box sx={{ my: 2.5 }}>
        <Grid container alignItems="center">
          <Grid item xs={9}>
            <Typography
              variant="medium"
              color="text.light"
              sx={{ fontWeight: 600 }}
            >
              iOS Bundle (44)
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ textAlign: "right" }}>
            <Button
              variant="outlined"
              disableElevation
              size="small"
              sx={{ textTransform: "none" }}
              //  component={Link}
              //  to="/create-project"
            >
              Add bundle freeze
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Paper
        sx={{
          boxShadow: "none",
          border: "1px solid #E5E5E5",
          mt: 2,

          height: "Calc(100vh - 320px)",
          overflow: "auto",
          boxSizing: "border-box",
        }}
      >
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ pl: 2.5, py: 0.5 }}>
                  <Checkbox size="small" /> iOS Bundle
                </TableCell>
                <TableCell sx={{ py: 0.5 }}>Created</TableCell>
                <TableCell sx={{ py: 0.5 }}>ID</TableCell>
                <TableCell sx={{ py: 0.5 }}>Version</TableCell>
                <TableCell sx={{ py: 0.5 }}>Production</TableCell>
                <TableCell sx={{ py: 0.5 }}>Prerelease</TableCell>

                <TableCell align="right" sx={{ py: 0.5 }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                <TableRow
                // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ pl: 2.5, py: 0.5 }}>
                    <Checkbox size="small" /> v2.1.32
                  </TableCell>
                  <TableCell sx={{ width: "320px" }}>
                    <Typography
                      component="div"
                      variant="medium"
                      color="text.main"
                    >
                      13 days ago
                    </Typography>
                    <Typography
                      component="div"
                      color="text.fade"
                      variant="medium"
                    >
                      Pmo
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ color: "#426DF3" }}>737126</TableCell>
                  <TableCell>903540</TableCell>
                  <TableCell>
                    {" "}
                    <Checkbox size="small" />
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Checkbox size="small" />
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
      </Paper>
    </Box>
  );
};

export default IOSSDK;
