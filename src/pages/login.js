/* eslint-disable no-shadow */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { firebase, FieldValue } from "../lib/firebase";

export default function Login() {
  const history = useNavigate();
  // const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddres] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      history(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddres(emailAddress);
      setPassword("");
      setError("Password or email address is incorrect");
    }
  };

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img
          src="/images/iphone-with-profile.jpg"
          alt="iPhone with Instagram app"
        />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4  border border-gray-primary rounded mb-2">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="Instagram"
              className="mt-2 w-6/12 mb-4"
            />
          </h1>
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleLogin} method="POST">
            <input
              aria-label="Enter email Address"
              type="email"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmailAddres(target.value)}
              value={emailAddress}
            />
            <input
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              aria-label="Password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-medium text-white w-full rounded h-8 font-bold
            ${isInvalid && "opacity-50"}`}
            >
              Login
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary">
          <p className="text-sm">
            ¿Don't have account?{" "}
            <Link
              to={ROUTES.SIGN_UP}
              className="text-bold text-blue-medium font-bold"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
