import React, { useState, useCallback, useEffect } from "react";
export const postList = [
  {
    page: 1,
    contents: "안녕하세요 1번째 글",
  },

  {
    page: 1,
    contents: "안녕하세요 2번째 글",
  },

  {
    page: 1,
    contents: "안녕하세요 3번째 글",
  },
  {
    page: 1,
    contents: "안녕하세요 1번째 글",
  },

  {
    page: 1,
    contents: "안녕하세요 2번째 글",
  },

  {
    page: 1,
    contents: "안녕하세요 3번째 글",
  },
  {
    page: 2,
    contents: "안녕하세요 4번째 글",
  },

  {
    page: 2,
    contents: "안녕하세요 5번째 글",
  },

  {
    page: 2,
    contents: "안녕하세요 6번째 글",
  },

  {
    page: 3,
    contents: "안녕하세요 7번째 글",
  },

  {
    page: 3,
    contents: "안녕하세요 8번째 글",
  },

  {
    page: 3,
    contents: "안녕하세요 9번째 글",
  },

  {
    page: 4,
    contents: "안녕하세요 10번째 글",
  },
  {
    page: 4,
    contents: "안녕하세요 1번째 글",
  },

  {
    page: 4,
    contents: "안녕하세요 2번째 글",
  },

  {
    page: 5,
    contents: "안녕하세요 3번째 글",
  },

  {
    page: 5,
    contents: "안녕하세요 4번째 글",
  },

  {
    page: 5,
    contents: "안녕하세요 5번째 글",
  },

  {
    page: 6,
    contents: "안녕하세요 6번째 글",
  },

  {
    page: 6,
    contents: "안녕하세요 7번째 글",
  },

  {
    page: 6,
    contents: "안녕하세요 8번째 글",
  },

  {
    page: 7,
    contents: "안녕하세요 9번째 글",
  },

  {
    page: 7,
    contents: "안녕하세요 10번째 글",
  },
];
export const getPostList = (page) => {
  return postList.filter((post) => post.page === page);
};

export default function InfinityScroll() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState(getPostList(1));
  const handleScroll = useCallback(() => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const { scrollTop } = document.documentElement;

    if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
      setPosts(posts.concat(getPostList(page + 1)));
      setPage((prevPage) => prevPage + 1);
    }
  }, [page, posts]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [handleScroll]);
  return {page,posts,handleScroll}
}
