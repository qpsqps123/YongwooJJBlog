import React from "react";
import { navigate } from "gatsby";

export default function Tag({ tagName, ...rest }) {
  const handleTagClick = () => {
    navigate(`/blog/tags?tag=${encodeURIComponent(tagName)}`);
  };

  return (
    <button onClick={handleTagClick} {...rest}>
      {tagName}
    </button>
  );
}
