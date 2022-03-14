/* eslint-disable no-unused-vars */
import React from "react";
import useUser from "../hooks/use-user";

export default function Sidebar() {
  const { user } = useUser();
  return <div>sidebar</div>;
}
