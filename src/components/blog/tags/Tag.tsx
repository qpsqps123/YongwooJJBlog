import React from "react";
import { navigate } from "gatsby";
import { ITagProps } from "@/types/components/blog/tags/tag";

export default function Tag({ tagName, ...rest }: ITagProps) {
  const handleTagClick = () => {
    navigate(`/blog/tags?tag=${encodeURIComponent(tagName)}`);
  };

  return (
    <button onClick={handleTagClick} {...rest}>
      {tagName}
    </button>
  );
}
