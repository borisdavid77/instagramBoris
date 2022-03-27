/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Image from "./image";
import Actions from "./actions";
import Comments from "./comments";
import Footer from "./footer";

export default function Post({ content }) {
  // components
  // => header, image, actions(like & comments icons), footer,comments
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.focus();

  return (
    <div className="rounded-lg col-span-4 shadow-xl bg-white mb-7 ml-2 mr-2">
      <Header username={content.username} />
      <Image src={content.imageSrc} caption={content.caption} />
      <Actions
        docId={content.docId}
        totalLikes={content.likes.length}
        likedPhoto={content.userLikedPhoto}
        handleFocus={handleFocus}
      />
      <Footer caption={content.caption} username={content.username} />
      <Comments
        docId={content.docId}
        comments={content.comments}
        posted={content.dateCreated}
        commentInput={commentInput}
      />
    </div>
  );
}
Post.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    dateCreated: PropTypes.number.isRequired,
    likes: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    userLikedPhoto: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
  }),
};
