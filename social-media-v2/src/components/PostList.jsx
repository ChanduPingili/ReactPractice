import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/PostList";
import WelcomeMessage from "./WelcomeMessage";
import Loading from "./loading";

const PostList = () => {
  const { postList, fetching} = useContext(PostListData);
  return (
    <>
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
