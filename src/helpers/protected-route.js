/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import useAuthListener from "../hooks/use-auth-listener";

export default function ProtectedRoute(props) {
  const { user } = useAuthListener();
  return user ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
}
