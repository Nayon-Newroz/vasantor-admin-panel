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
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({ accept: { "image/*": [] } });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={8.5}
          sx={{
            pr: 2,
            py: 2,
            height: "Calc(100vh - 177px)",
            boxSizing: "border-box",
          }}
        >
          <Alert
            icon={false}
            severity="warning"
            sx={{ color: "#7B5100", pa: 2, py: 1, mb: 2 }}
          >
            Your project contains 4 QA issues.
          </Alert>
          <Box sx={{ p: 2, background: "#fff" }}>
            <Box>
              <IconButton sx={{ borderRadius: "8px" }}>
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
              </IconButton>
              <Typography variant="medium" sx={{ display: "inline-flex" }}>
                File format
              </Typography>
            </Box>
            <TableContainer sx={{ py: 1.125 }}>
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell sx={{ width: "30px", p: 0 }}>
                      <Checkbox size="small" color="info" />
                    </TableCell>
                    <TableCell
                      sx={{
                        pl: 0,
                        py: 0,
                        fontWeight: 600,
                        color: theme.palette.text.light,
                      }}
                    >
                      All (2/2)
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
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
