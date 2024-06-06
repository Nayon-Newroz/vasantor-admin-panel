import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import ForgotPassword from "../user-forms/ForgotPassword";
import Login from "../user-forms/Login";
// import ResetPassword from "../user-forms/ResetPassword";
import Verify from "../user-forms/Verify";
import { AuthContext } from "../../context/AuthContext";
import Dashboard from "../dashboard/Dashboard";
import Projects from "../projects/Projects";
import ProjectDetails from "../projects/ProjectDetails";
import { Box } from "@mui/material";
import Signup from "../user-forms/Signup";
// import NoMatch from "../NoMatch";
// import Dialog from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import PulseLoader from "react-spinners/PulseLoader";
// import Country from "../country/Country";

function PrivateRoute({ children }) {
  const { vasantor_admin_panel } = useContext(AuthContext);
  console.log("vasantor_admin_panel?.data?.token", vasantor_admin_panel);
  return vasantor_admin_panel?.access_token ? children : <Navigate to="/" />;
}
function RedirectToHome({ children }) {
  const { vasantor_admin_panel } = useContext(AuthContext);
  console.log("vasantor_admin_panel?.data?.token", vasantor_admin_panel);
  return !vasantor_admin_panel?.access_token ? (
    children
  ) : (
    <Navigate to="/projects" />
  );
}
const Navigation = () => {
  const { vasantor_admin_panel } = useContext(AuthContext);

  return (
    <Box>
      <Routes>
        <Route
          path="/"
          element={
            <RedirectToHome>
              <Login />
            </RedirectToHome>
          }
        />
        <Route
          path="sign-up"
          element={
            <RedirectToHome>
              <Signup />
            </RedirectToHome>
          }
        />
        {/* <Route
          path="verify"
          element={
            <RedirectToHome>
              <Verify />
            </RedirectToHome>
          }
        /> */}

        <Route
          path="projects"
          element={
            <PrivateRoute>
              <Projects />
            </PrivateRoute>
          }
        />
        <Route
          path="project-details/:id"
          element={
            <PrivateRoute>
              <ProjectDetails />
            </PrivateRoute>
          }
        />
        {/* <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> */}

        {/* <Route path="forgot-password" element={<ForgotPassword />} /> */}
        {/* <Route
          path="change-password"
          element={
            <PrivateRoute>
              <ResetPassword />
            </PrivateRoute>
          }
        /> */}

        {/* <Route
          path="*"
          element={!vasantor_admin_panel.token ? <Navigate to="/" /> : <NoMatch />}
        /> */}
      </Routes>
    </Box>
  );
};

export default Navigation;
