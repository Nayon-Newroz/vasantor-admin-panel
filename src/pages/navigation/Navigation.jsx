import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import ForgotPassword from "../user-forms/ForgotPassword";
import Login from "../user-forms/Login";
// import ResetPassword from "../user-forms/ResetPassword";
import Verify from "../user-forms/Verify";
import { AuthContext } from "../../context/AuthContext";
import Dashboard from "../dashboard/Dashboard";
import Projects from "../projects/Projects";
// import NoMatch from "../NoMatch";
// import Dialog from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import PulseLoader from "react-spinners/PulseLoader";
// import Country from "../country/Country";

function PrivateRoute({ children }) {
  const { fibremit_admin_panel } = useContext(AuthContext);
  // console.log("fibremit_admin_panel?.data?.token", fibremit_admin_panel);
  return fibremit_admin_panel?.access_token ? children : <Navigate to="/" />;
}
function RedirectToHome({ children }) {
  const { fibremit_admin_panel } = useContext(AuthContext);

  return !fibremit_admin_panel?.access_token ? (
    children
  ) : (
    <Navigate to="/dashboard" />
  );
}
const Navigation = () => {
  const { fibremit_admin_panel } = useContext(AuthContext);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <RedirectToHome>
              <Projects />
            </RedirectToHome>
          }
        />
        {/* <Route
          path="/"
          element={
            <RedirectToHome>
              <Login />
            </RedirectToHome>
          }
        /> */}
        {/* <Route
          path="verify"
          element={
            <RedirectToHome>
              <Verify />
            </RedirectToHome>
          }
        /> */}
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
          element={!fibremit_admin_panel.token ? <Navigate to="/" /> : <NoMatch />}
        /> */}
      </Routes>
    </div>
  );
};

export default Navigation;
