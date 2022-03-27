import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Footer({ caption, username }) {
  return (
    <div className="p-4 pt-0 pb-1 text-sm">
      <Link to={`/p/${username}`}>
        <span className="mr-1 font-semibold">{username}</span>
      </Link>
      <span className="font-normal">{caption}</span>
    </div>
  );
}

Footer.propTypes = {
  caption: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
