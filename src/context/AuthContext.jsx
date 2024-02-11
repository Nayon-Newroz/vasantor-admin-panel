import React, { createContext, useReducer, useEffect } from "react";

import authReducer from "./authReducer";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [fibremit_admin_panel, dispatch] = useReducer(authReducer, {}, () => {
    const localData = localStorage.getItem("fibremit_admin_panel");
    return localData ? JSON.parse(localData) : {};
  });

  const login = async (data) => {
    dispatch({
      type: "LOGIN",
      payload: data,
    });
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: {},
    });
  };

  useEffect(() => {
    localStorage.setItem(
      "fibremit_admin_panel",
      JSON.stringify(fibremit_admin_panel)
    );
  }, [login]);

  return (
    <AuthContext.Provider value={{ login, fibremit_admin_panel, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}
