/* eslint-disable no-shadow */
import { useState, useEffect, useContext } from "react";
import { getUserByUserId } from "../services/firebase";
import userContext from "../context/user";

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(userContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      const [response] = await getUserByUserId(user?.uid);
      setActiveUser(response);
    }

    if (user?.uid) {
      getUserObjByUserId();
    }
  }, [user]);

  return { user: activeUser, setActiveUser };
}
