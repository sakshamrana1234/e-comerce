import Post from "./Post";
import { PostList as PostListData } from "../store/Post-List-Store";
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";


const PostsList = () => {
  const { postList, Fetching } = useContext(PostListData);

  return (
    <>
      {Fetching && <LoadingSpinner />}
      {!Fetching && postList.length === 0 && <WelcomeMessage />}
      {!Fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostsList;
