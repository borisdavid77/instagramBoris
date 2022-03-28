<<<<<<< HEAD
/* eslint-disable react/require-default-props */
=======
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Header from "../components/header";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar";
import useUser from "../hooks/use-user";
import LoggedInUserContext from "../context/logged-in-user";

export default function Dashboard({ user: loggedInUser }) {
<<<<<<< HEAD
  const { user, setActiveUser } = useUser(loggedInUser?.uid);
  useEffect(() => {
    document.title = "Instagram";
  }, []);
=======
  const { user, setActiveUser } = useUser(loggedInUser);
  useEffect(() => {
    document.title = "Instagram";
  }, []);

>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0
  return (
    <LoggedInUserContext.Provider value={{ user, setActiveUser }}>
      <div className="bg-gray-background">
        <Header />
<<<<<<< HEAD
        <div className="sm:grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
=======
        <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0
          <Timeline />
          <Sidebar />
        </div>
      </div>
    </LoggedInUserContext.Provider>
  );
}
Dashboard.propTypes = {
<<<<<<< HEAD
  user: PropTypes.string,
=======
  user: PropTypes.object.isRequired,
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0
};
