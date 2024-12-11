import React, { useRef, useEffect } from 'react';

const Comments = () => {
  const commentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const utterances = document.createElement('script');

    const utterancesConfig = {
      src: 'https://utteranc.es/client.js',
      repo: 'qpsqps123/YongwooJJBlogUtterances',
      theme: 'preferred-color-scheme',
      'issue-term': 'pathname',
      async: true,
      crossorigin: 'anonymous',
    };

    Object.entries(utterancesConfig).forEach(([key, value]: any) => {
      utterances.setAttribute(key, value);
    });

    commentRef.current?.appendChild(utterances);
  }, []);

  return <div ref={commentRef} />;
};

export default Comments;