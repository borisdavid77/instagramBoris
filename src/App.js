/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import UserContext from "./context/user";
import useAuthListener from "./hooks/use-auth-listener";
import Spinner from "./constants/spinner";
import ProtectedRoute from "./helpers/protected-route";
import IsUserLogged from "./helpers/is-user-logged";

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/sign-up"));
const NotFound = lazy(() => import("./pages/not-found"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Profile = lazy(() => import("./pages/profile"));

export default function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            </Route>
            <Route element={<IsUserLogged />}>
              <Route path={ROUTES.LOGIN} element={<Login />} />
            </Route>
            <Route element={<IsUserLogged />}>
              <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            </Route>
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
