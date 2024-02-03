/* eslint-disable react/prop-types */
import { useCallback } from "react";
import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  createPost: () => {},
  fetching: false,
  deletePost: () => {},
});

const postListReducer = (currList, action) => {
  let newPostList = currList;

  if (action.type === "DELETE_POST") {
    newPostList = currList.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "CREATE_POST") {
    newPostList = [action.payload, ...currList];
  } else if (action.type === "CREATE_INITIAL_POST") {
    newPostList = action.payload.posts;
  }

  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [fetching, setFetching] = useState(false);
  //useEffect is used to manage dependencies useEffect(function, dependencies)
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        createInitialPost(data.posts);
        setFetching(false);
      });
    // cleaning the pages
    return () => {
      controller.abort;
    };
  }, []);

  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const createPost = (post) => {
    dispatchPostList({
      type: "CREATE_POST",
      payload: post ,
    });
  };
  //useCallback is used to return the changed functions only when the dependencies changes
  //useMemo is used to return the changed values based on the change in dependencies
  const deletePost = useCallback((postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  },[dispatchPostList]);

  const createInitialPost = (posts) => {
    dispatchPostList({
      type: "CREATE_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };
  return (
    <PostList.Provider value={{ postList, createPost, fetching, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST=[{
//   id:"1",
//   title:'Going to mumbai',
//   body : "Today I am going to mumbai to attend my first job, wish me my friends",
//   reactions : 10,
//   user_id : "chandu_8",
//   tags : ["mumbai","job","wish"]
// },
// {
//   id:"2",
//   title:'Going to Goa',
//   body : "Today I am going to Goa to celebrate my first salary",
//   reactions : 20,
//   user_id : "enjoy_8",
//   tags : ["Goa","party"]
// }
// ]

export default PostListProvider;
