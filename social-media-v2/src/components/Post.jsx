/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import {PostList} from "../store/PostList";

const Post= ({post})=>{

  const {deletePost} = useContext(PostList);

  return <div className="card post-card" style={{width: "30rem"}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>{deletePost(post.id)}}>
      <MdDelete />
    </span>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag) =>(
      <span key={tag} className="badge text-bg-primary hashtags">{tag}</span>
    ))}

    <div className="alert alert-success reactions" role="alert"> This post got {post.reactions} reactions from people
    </div>
  </div>
</div>
}

export default Post;