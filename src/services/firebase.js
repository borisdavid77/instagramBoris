<<<<<<< HEAD
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */

import { firebase, arrayUnion, arrayRemove } from "../lib/firebase";
=======
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { firebase } from "../lib/firebase";
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0
import "firebase/compat/firestore";

export async function doesUsernameExists(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.length > 0;
}
<<<<<<< HEAD
export async function getUserByUsername(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
}

export async function getUserPhotosByUsername(username) {
  const [user] = await getUserByUsername(username);
  const result = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "==", user.userId)
    .get();
  return result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
}
=======
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0
// get user from the firestore where userId === userId (passed from the auth)
export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user;
}
<<<<<<< HEAD

// check all conditions before limit results
export async function getSuggestedProfiles(userId, following) {
  let query = firebase.firestore().collection("users");

  if (following.length > 0) {
    query = query.where("userId", "not-in", [...following, userId]);
  } else {
    query = query.where("userId", "!=", userId);
  }
  const result = await query.limit(10).get();

  const profiles = result.docs.map((user) => ({
    ...user.data(),
    docId: user.id,
  }));

  return profiles;
}

export async function updateLoggedInUserFollowing(
  loggedInUserDocId, // currently logged in user document id (karl's profile)
  profileId, // the user that karl requests to follow
  isFollowingProfile // true/false (am i currently following this person?)
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(loggedInUserDocId)
    .update({
      following: isFollowingProfile
        ? arrayRemove(profileId)
        : arrayUnion(profileId),
    });
}

export async function isUserFollowingProfile(
  loggedInUserUsername,
  profileUserId
) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", loggedInUserUsername) // borisdavid779 (active logged in user)
    .where("following", "array-contains", profileUserId)
    .get();

  const [response = {}] = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
  return response.userId;
}

export async function updateFollowedUserFollowers(
  profileDocId, // currently logged in user document id (karl's profile)
  loggedInUserDocId, // the user that karl requests to follow
  isFollowingProfile // true/false (am i currently following this person?)
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(profileDocId)
    .update({
      followers: isFollowingProfile
        ? arrayRemove(loggedInUserDocId)
        : arrayUnion(loggedInUserDocId),
    });
}

export async function getPhotos(userId, following) {
  // [5,4,2] => following
  const result = await firebase
    .firestore()
    .collection("photos")
    .where("userId", "in", following)
    .get();

  const userFollowedPhotos = result.docs.map((photo) => ({
    ...photo.data(),
    docId: photo.id,
  }));

  const photosWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      let userLikedPhoto = false;
      if (photo.likes.includes(userId)) {
        userLikedPhoto = true;
      }
      // photo.userId = 2
      const user = await getUserByUserId(photo.userId);
      // raphael
      const { username } = user[0];
      return { username, ...photo, userLikedPhoto };
    })
  );

  return photosWithUserDetails;
}
export async function toggleFollow(
  isFollowingProfile,
  activeUserDocId,
  profileDocId,
  profileUserId,
  followingUserId
) {
  // 1st param: karl's doc id
  // 2nd param: raphael's user id
  // 3rd param: is the user following this profile? e.g. does karl follow raphael? (true/false)
  await updateLoggedInUserFollowing(
    activeUserDocId,
    profileUserId,
    isFollowingProfile
  );

  // 1st param: karl's user id
  // 2nd param: raphael's doc id
  // 3rd param: is the user following this profile? e.g. does karl follow raphael? (true/false)
  await updateFollowedUserFollowers(
    profileDocId,
    followingUserId,
    isFollowingProfile
  );
}
=======
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0
