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
import LinearProgress from "@mui/material/LinearProgress";

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

const Task = () => {
  const theme = useTheme();
  const [age, setAge] = React.useState(10);
  const [fileFormateOpen, setFileFormateOpen] = useState(true);
  const [fileFormateOpen2, setFileFormateOpen2] = useState(true);
  const [fileStructureOpen, setFileStructureOpen] = useState(true);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <Grid container>
        <Grid item xs={8.5} sx={{ pr: 2 }}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{
              // mb: 3.5,
              height: "Calc(100vh - 177px)",
              overflow: "auto",
              // background: "#fff",
            }}
          >
            <Box>
              <Box
                sx={{
                  height: "184px",
                  width: "184px",
                  margin: "auto",
                  border: "1px solid #E5E5E5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100vw",
                  mb: 3,
                }}
              >
                <svg
                  width="121"
                  height="121"
                  viewBox="0 0 121 121"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M62.3496 44.9H88.5996"
                    stroke="#687535"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M32.4004 44.9L36.1504 48.65L47.4004 37.4"
                    stroke="#687535"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M62.3496 79.9H88.5996"
                    stroke="#687535"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M32.4004 79.9L36.1504 83.65L47.4004 72.4"
                    stroke="#687535"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M45.5 110.5H75.5C100.5 110.5 110.5 100.5 110.5 75.5V45.5C110.5 20.5 100.5 10.5 75.5 10.5H45.5C20.5 10.5 10.5 20.5 10.5 45.5V75.5C10.5 100.5 20.5 110.5 45.5 110.5Z"
                    stroke="#687535"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
              <Typography variant="h6" sx={{ textAlign: "center", mb: 1.125 }}>
                Create and assign tasks
              </Typography>
              <Typography
                variant="medium"
                color="text.fade"
                sx={{ textAlign: "center", mb: 3 }}
              >
                Organize your team’s workload by setting up translation
                <br />
                and review tasks.&nbsp;
                <Link
                  style={{
                    textDecoration: "none",
                    color: theme.palette.info.main,
                  }}
                >
                  Learn more.
                </Link>
              </Typography>
              <Box sx={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  disableElevation
                  sx={{ px: 2, py: 1.75 }}
                >
                  Create a task
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          xs={3.5}
          sx={{
            height: "Calc(100vh - 177px)",
            overflow: "auto",
            px: 2,
            pt: 1.125,
            background: "#fff",
            boxSizing: "border-box",
          }}
        >
          <Typography
            variant="base"
            color="text.light"
            sx={{ mb: 1, fontWeight: 600 }}
          >
            Tasks help you to organize your team’s workload.
          </Typography>
          <Typography variant="medium" color="text.light" sx={{ mb: 1 }}>
            Assign translation and review tasks, set due dates, and track
            progress.
          </Typography>

          <Link
            style={{
              textDecoration: "none",
              color: theme.palette.info.main,
            }}
          >
            Learn more
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Task;
