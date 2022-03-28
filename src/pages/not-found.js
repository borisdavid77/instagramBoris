/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import Header from "../components/header";

export default function notFound() {
  return (
    <>
      <Header />
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="border border-gray-primary xl-8 rounded w-96 h-56 flex flex-col justify-center items-center">
          <h1 className="flex justify-center w-full">
            <img
              readOnly
              src="/images/logo.png"
              alt="Instagram"
              className="mt-2 w-6/12 mb-4"
            />
          </h1>
          <p className="text-center text-2xl font-bold my-5">
            404 Page not found
          </p>
          <Link
            to={ROUTES.DASHBOARD}
            className="bg-blue-medium	rounded-full px-8 py-2 text-white"
          >
            TO HOME
          </Link>
        </div>
      </div>
    </>
  );
}
