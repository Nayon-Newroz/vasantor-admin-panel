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
import language from "../../LanguageData";
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

const FileUploadCheck = ({ handleBack, handleNext }) => {
  const theme = useTheme();
  const [baseLanguage, setBaseLanguage] = useState("bn");

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
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      sx={{ height: "Calc(100vh - 450px)",mt: 12.5  }}
     
    >
      <Box sx={{ width: "100%" }}>
        {" "}
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Files
        </Typography>
        <Typography
          variant="medium"
          color="text.fade"
          sx={{ textAlign: "center" }}
        >
          Recheck the uploaded file and confirm the import by clicking
          <br /> the Import button
        </Typography>
        <Box sx={{ textAlign: "center", mt: 3.25, mb: 3 }}>
          <Link
            style={{
              textDecoration: "none",
              color: theme.palette.info.main,
              background: "#fff",
              borderRadius: "30px",
              padding: "12px 30px",
            }}
          >
            VerifyMe Web.xlsx
          </Link>
        </Box>
        <Box sx={{ width: "450px", margin: "auto" }}>
          <FormControl
            fullWidth
            sx={{
              ...customeTextFeild,
              "& label.Mui-focused": {
                color: "rgba(0,0,0,0)",
              },
              mb: 3.25,
            }}
          >
            {baseLanguage.length < 1 && (
              <InputLabel
                id="demo-simple-select-label"
                sx={{ color: "#b3b3b3" }}
              >
                Select A Language
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
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <span
            style={{
              background: "#D2D2D2",
              border: "1px solid #E5E5E5",
              borderRadius: "6px",
              padding: "4px 8px",
              fontSize: "14px",
              fontWeight: 500,
              color: "#222",
            }}
          >
            READY TO IMPORT
          </span>
          &nbsp;
          <span
            style={{
              border: "1px solid #E5E5E5",
              borderRadius: "6px",
              padding: "4px 8px",
              fontSize: "14px",
              fontWeight: 500,
              color: "#222",
            }}
          >
            XLSX
          </span>{" "}
          &nbsp;
          <span
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#969696",
            }}
          >
            15 Keys 50 Words
          </span>
        </Box>
      </Box>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        {" "}
        <Button variant="ounlined" disableElevation onClick={handleBack}>
          Cancel
        </Button>
        &nbsp;&nbsp;
        <Button variant="contained" disableElevation onClick={handleNext}>
          Apply
        </Button>
      </Box>
    </Grid>
  );
};

export default FileUploadCheck;
