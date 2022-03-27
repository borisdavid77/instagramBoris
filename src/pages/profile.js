/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getUserByUsername } from "../services/firebase";
import * as ROUTES from "../constants/routes";
import Header from "../components/header";
import { DEFAULT_IMAGE_PATH } from "../constants/paths";
import UserProfile from "../components/profile/index";

export default function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [userExists, setUserExists] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    async function checkUserExists() {
      const profile = await getUserByUsername(username);
      if (profile.length > 0) {
        setUser(profile[0]);
        setUserExists(true);
      } else {
        history(ROUTES.NOT_FOUND);
      }
    }
    checkUserExists();
  }, [username, history]);
  return user?.username ? (
    <div className="bg-gray-background">
      <Header />
      <div className="flex items-center justify-center">
        <div className="rounded-lg col-span-4 shadow-xl bg-white ml-1 mr-1 pt-1 pb-2">
          <div className="m-3 max-w-screen-lg">
            <UserProfile user={user} />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
