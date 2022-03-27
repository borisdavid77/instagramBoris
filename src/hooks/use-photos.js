/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getUserByUserId, getPhotos } from "../services/firebase";

export default function usePhotos() {
  const [photos, setPhotos] = useState();
  const {
    user: { uid: userId = "" },
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimlinePhotos() {
      // example [2,3,4] 2 begin raphael
      const [{ following }] = await getUserByUserId(userId);
      let followedUserPhotos = [];
      // do we the user actually follow people ?
      if (following.length > 0) {
        followedUserPhotos = await getPhotos(userId, following);
      }
      // re-arrange array to be newest photos first by dateCreated
      // followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhotos);
    }
    getTimlinePhotos();
  }, [userId]);
  return { photos };
}
