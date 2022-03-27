/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import useAuthListener from "../hooks/use-auth-listener";

export default function IsUserLoggedIn() {
  const { user } = useAuthListener();
  return user ? <Navigate to={ROUTES.DASHBOARD} /> : <Outlet />;
}
