/* eslint-disable no-shadow */
<<<<<<< HEAD
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
=======
import { useState, useEffect } from "react";
import { getUserByUserId } from "../services/firebase";

export default function useUser(userId) {
  const [activeUser, setActiveUser] = useState();

  useEffect(() => {
    async function getUserObjByUserId(userId) {
      const [user] = await getUserByUserId(userId);
      setActiveUser(user || {});
    }

    if (userId) {
      getUserObjByUserId(userId);
    }
  }, [userId]);
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0

  return { user: activeUser, setActiveUser };
}
