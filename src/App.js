/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import UserContext from "./context/user";
import useAuthListener from "./hooks/use-auth-listener";
<<<<<<< HEAD
import Spinner from "./constants/spinner";
import ProtectedRoute from "./helpers/protected-route";
import IsUserLogged from "./helpers/is-user-logged";

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/sign-up"));
const NotFound = lazy(() => import("./pages/not-found"));
const Dashboard = lazy(() => import("./pages/dashboard"));
const Profile = lazy(() => import("./pages/profile"));

export default function App() {
=======

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/sign-up"));
const NotFound = lazy(() => import("./pages/not-found"));
const Dashboard = lazy(() => import("./pages/dashboard"));

function App() {
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
<<<<<<< HEAD
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
=======
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
