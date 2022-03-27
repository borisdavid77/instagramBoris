/* eslint-disable no-shadow */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import useUser from "../../hooks/use-user";
import { isUserFollowingProfile, toggleFollow } from "../../services/firebase";

export default function Header({
  photosCount,
  followerCount,
  setFollowerCount,
  profile: {
    docId: profileDocId,
    userId: profileUserId,
    fullName,
    following = [],
    followers = [],
    username: profileUsername,
  },
}) {
  const { user } = useUser();
  const [isFollowingProfile, setIsFollowingProfile] = useState(null);
  const activeBtnFollow = user?.username && user?.username !== profileUsername;

  const handleToggleFollow = async () => {
    setIsFollowingProfile((isFollowingProfile) => !isFollowingProfile);
    console.log("isFollowingProfile", isFollowingProfile);
    setFollowerCount({
      followerCount: isFollowingProfile ? followerCount - 1 : followerCount + 1,
    });
    await toggleFollow(
      isFollowingProfile,
      user.docId,
      profileDocId,
      profileUserId,
      user.userId
    );
  };

  useEffect(() => {
    const isLoggedInUserFollowingProfile = async () => {
      const isFollowing = await isUserFollowingProfile(
        user.username,
        profileUserId
      );
      setIsFollowingProfile(isFollowing);
    };
    if (user.username && profileUserId) {
      isLoggedInUserFollowingProfile();
    }
  }, [user.username, profileUserId]);

  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
        <div className="container flex justify-center md:pr-16">
          {user.username && (
            <img
              className="flex rounded-full h-24 w-24 md:h-40 md:w-40 border-4 border-red-primary p-1"
              alt={`${profileUsername} profile picture`}
              src={`/images/avatars/${profileUsername}.jpg`}
              onError={(e) => {
                e.target.src = `/images/avatars/default.png`;
              }}
            />
          )}
        </div>
        <div className="flex items-center justify-center flex-col col-span-2">
          <div className="container flex items-center">
            <p className="text-xl mr-4">{profileUsername}</p>
            {activeBtnFollow && isFollowingProfile === null ? (
              <Skeleton count={1} width={80} height={32} />
            ) : (
              activeBtnFollow && (
                <button
                  className="bg-blue-medium font-semibold text-sm rounded text-white w-20 h-8 ml-6"
                  type="button"
                  onClick={handleToggleFollow}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleToggleFollow();
                    }
                  }}
                >
                  {isFollowingProfile ? "Unfollow" : "Follow"}
                </button>
              )
            )}
          </div>
          <div className="container flex items-center mt-2">
            <p className="text-lg font-semibold mr-4">{fullName}</p>
          </div>
          <div className="container flex items-center mt-3 mb-4">
            {!followers || !following ? (
              <Skeleton count={1} width={677} height={24} />
            ) : (
              <>
                <p className="mr-10">
                  <span className="font-semibold">{photosCount}</span> posts
                </p>
                <p className="mr-10">
                  <span className="font-semibold">{followerCount}</span>
                  {followerCount === 1 ? ` follower` : ` followers`}
                </p>
                <p className="mr-10">
                  <span className="font-semibold">{following.length}</span>{" "}
                  following
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
Header.propTypes = {
  photosCount: PropTypes.number.isRequired,
  followerCount: PropTypes.number.isRequired,
  setFollowerCount: PropTypes.number.isRequired,
  profile: PropTypes.shape({
    docId: PropTypes.string,
    userId: PropTypes.string,
    following: PropTypes.array,
    followers: PropTypes.array,
    fullName: PropTypes.string,
    username: PropTypes.array,
  }).isRequired,
};
