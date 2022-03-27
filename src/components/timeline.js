/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import React from "react";
import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";
import Post from "./post/index";

export default function Timeline() {
  // we need to get the logged in user's photos
  const { photos } = usePhotos();
  // on loading the photos, we needd t use react skeleton
  // if we have photos, render them(create a post component)
  // if the user has no photos, tell to create some photos
  return (
    // bg-white rounded-lg pt-2 pb-2
    <div className="container col-span-2">
      {!photos ? (
        <Skeleton count={4} width={640} height={600} className="mb-5" />
      ) : photos && photos.length > 0 ? (
        photos.map((content) => <Post key={content.docID} content={content} />)
      ) : (
        <p className="text-center text-2xl">Following people to see photos</p>
      )}
    </div>
  );
}
