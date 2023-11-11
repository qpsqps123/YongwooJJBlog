import React, { useCallback } from "react";
import { Link } from "gatsby";
import { v4 as uuid } from "uuid";

const useRenderPageNavLinks = () => {
  const renderPageNavLinks = useCallback(
    (iterationCount: number, startPageNumber: number, pageType: string) =>
      Array.from({ length: iterationCount }).map((_, i) => {
        return (
          <li key={uuid()}>
            <Link to={`/blog/${pageType}/${i + startPageNumber}`}>
              {i + startPageNumber}
            </Link>
          </li>
        );
      }),
    []
  );
  return {
    renderPageNavLinks,
  };
};

export default useRenderPageNavLinks;
