import { createContext , useReducer } from "react";

export const PostList = createContext({
  postList :[],
  createPost : ()=>{},
  deletePost : ()=>{},
});

const postListReducer = (currList, action)=>{
  let newPostList = currList;

  if(action.type === "DELETE_POST") {
    newPostList = currList.filter((post) => post.id !== action.payload.postId);
  }
  else if(action.type === "CREATE_POST"){
    
    newPostList = [action.payload, ...currList];
  }

  return newPostList;
}
const PostListProvider=({children})=>{

  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST );

  const createPost = (user_id, title, body, reactions, tags)=>{
    dispatchPostList({
      type:"CREATE_POST",
      payload:{
        id : Date.now(),
        user_id,
        title,
        body,
        reactions, 
        tags
      }
    });
  }

  const deletePost = (postId)=>{
    dispatchPostList({
      type:"DELETE_POST",
      payload : {
        postId
      }
    })
  };
  return <PostList.Provider value={{postList, createPost, deletePost}}>
    {children}
  </PostList.Provider>
}

const DEFAULT_POST_LIST=[{
  id:"1",
  title:'Going to mumbai',
  body : "Today I am going to mumbai to attend my first job, wish me my friends",
  reactions : 10,
  user_id : "chandu_8",
  tags : ["mumbai","job","wish"]
},
{
  id:"2",
  title:'Going to Goa',
  body : "Today I am going to Goa to celebrate my first salary",
  reactions : 20,
  user_id : "enjoy_8",
  tags : ["Goa","party"]
}
]

export default PostListProvider;