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
import Alert from "@mui/material/Alert";
import LinearProgress from "@mui/material/LinearProgress";

import OutlinedInput from "@mui/material/OutlinedInput";
import language from "../../LanguageData";
console.log("language", language);

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

const AddProject = () => {
  const theme = useTheme();
  let navigate = useNavigate();
  const [age, setAge] = React.useState(10);
  const [fileFormateOpen, setFileFormateOpen] = useState(true);
  const [fileFormateOpen2, setFileFormateOpen2] = useState(true);
  const [fileStructureOpen, setFileStructureOpen] = useState(true);
  const [baseLanguage, setBaseLanguage] = useState("");

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
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
        borderColor: "#E5E5E5",
      },

      "&:hover fieldset": {
        borderColor: "#E5E5E5",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#E5E5E5",
      },
    },
  };
  return (
    <Box>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          // mb: 3.5,
          height: "Calc(100vh - 25px)",
          overflow: "auto",
        }}
      >
        <Box sx={{ width: "666px" }}>
          <Box
            sx={{
              height: "120px",
              width: "120px",
              margin: "auto",
              // border: "1px solid #E5E5E5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "100vw",
              mb: 3,
              background: "#F0F0F0",
            }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 32H48"
                stroke="#A4A4A4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M32 48V16"
                stroke="#A4A4A4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Box>
          <Typography variant="h6" sx={{ textAlign: "center", mb: 1.125 }}>
            Create your new project
          </Typography>
          <Typography
            variant="medium"
            color="text.fade"
            sx={{ textAlign: "center", mb: 3 }}
          >
            Start translating by creating a new project
          </Typography>

          <Grid container spacing={1.5}>
            <Grid item xs={6}>
              {" "}
              <Typography
                component="div"
                variant="medium"
                color="text.main"
                sx={{ fontWeight: 500, mb: 0.75 }}
              >
                Project Name
              </Typography>
              <TextField
                sx={{ ...customeTextFeild }}
                placeholder="Unique project name"
                fullWidth
                // size="small"

                variant="outlined"
                id="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />{" "}
              {/* {errors?.email && (
                <Typography
                  variant="small"
                  color="error.main"
                  sx={{ textAlign: "left" }}
                >
                  {errors.email.toString()}
                </Typography>
              )} */}
            </Grid>
            <Grid item xs={6}>
              {" "}
              <Typography
                component="div"
                variant="medium"
                color="text.main"
                sx={{ fontWeight: 500, mb: 0.75 }}
              >
                Base Language
              </Typography>
              <FormControl
                fullWidth
                sx={{
                  ...customeTextFeild,
                  "& label.Mui-focused": {
                    color: "rgba(0,0,0,0)",
                  },
                }}
              >
                {baseLanguage.length < 1 && (
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ color: "#b3b3b3" }}
                  >
                    Select Base Language
                  </InputLabel>
                )}
                <Select
                  labelId="demo-simple-select-label"
                  id="baseLanguage"
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        maxHeight: 250, // Set the max height here
                      },
                    },
                  }}
                  // value={age}
                  // label="Age"
                  // onChange={handleChange}

                  value={baseLanguage}
                  onChange={(e) => setBaseLanguage(e.target.value)}
                >
                  {/* {baseLanguage === "" &&
                  <MenuItem value="" disabled style={{ color: "#e5e5e5" }}>
                    Select Base Language
                  </MenuItem>
                  } */}
                  {language.map((item, i) => (
                    <MenuItem value={item?.code}>
                      {item?.name} ({item?.code})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* {errors?.email && (
                <Typography
                  variant="small"
                  color="error.main"
                  sx={{ textAlign: "left" }}
                >
                  {errors.email.toString()}
                </Typography>
              )} */}
            </Grid>
            <Grid item xs={12}>
              {" "}
              <Typography
                component="div"
                variant="medium"
                color="text.main"
                sx={{ fontWeight: 500, mb: 0.75 }}
              >
                Target Languages&nbsp;
                <span style={{ color: theme.palette.primary.main }}>
                  (select at least 1)
                </span>
              </Typography>
              <FormControl
                fullWidth
                sx={{
                  ...customeTextFeild,
                  "& label.Mui-focused": {
                    color: "rgba(0,0,0,0)",
                  },
                }}
              >
                {personName.length < 1 && (
                  <InputLabel
                    id="demo-multiple-name-label"
                    sx={{ color: "#b3b3b3" }}
                  >
                    Select target languages...
                  </InputLabel>
                )}
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  MenuProps={MenuProps}
                  sx={{
                    background: "#ffffff",
                    "& label.Mui-focused": {
                      color: "#E5E5E5",
                    },

                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#B2BAC2",
                    },

                    "& .MuiOutlinedInput-root": {
                      // paddingLeft: "24px",
                      "& fieldset": {
                        borderColor: "#E5E5E5",
                      },

                      "&:hover fieldset": {
                        borderColor: "#E5E5E5",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#E5E5E5",
                      },
                    },
                  }}
                >
                  {language
                    .map((lang) => lang.name)
                    .map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              {/* {errors?.email && (
                <Typography
                  variant="small"
                  color="error.main"
                  sx={{ textAlign: "left" }}
                >
                  {errors.email.toString()}
                </Typography>
              )} */}
            </Grid>
          </Grid>

          <Box sx={{ textAlign: "center", mt: 1.5 }}>
            <Button
              variant="contained"
              disableElevation
              sx={{ px: 2, py: 1.75 }}
              onClick={() => navigate("/projects")}
            >
              Create Project
            </Button>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default AddProject;
