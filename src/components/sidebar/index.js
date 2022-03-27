/* eslint-disable no-unused-vars */
import React, { useContext, memo } from "react";
import User from "./user";
import Suggestions from "./suggestions";
import LoggedInUserContext from "../../context/logged-in-user";

export default function Sidebar() {
  const { user: { docId = "", fullName, username, userId, following } = {} } =
    useContext(LoggedInUserContext);
  // const [test, setTest] = React.useState(0);
  // <button type="button" onClick={() => {console.log(test);setTest(Math.random());}}>Click me</button>

  return (
    <div className="p-4 ml-5 mr-5 sm:ml-0 sm:mr-1">
      <User username={username} fullName={fullName} />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    </div>
  );
}
