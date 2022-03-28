<<<<<<< HEAD
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
=======
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from "react";
<<<<<<< HEAD
import { Outlet, Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import useAuthListener from "../hooks/use-auth-listener";

export default function ProtectedRoute(props) {
  const { user } = useAuthListener();
  return user ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
}
=======
import PropTypes from "prop-types";
import { Route, Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return React.cloneElement(children, { user });
        }

        if (!user) {
          return (
            <Navigate
              to={{
                pathname: ROUTES.LOGIN,
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.object.isRequired,
};
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0
