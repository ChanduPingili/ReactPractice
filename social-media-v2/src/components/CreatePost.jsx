import { useContext, useRef } from "react";
import { PostList } from "../store/PostList";

const CreatePost = () => {
  const { createPost } = useContext(PostList);
  let userIdElement = useRef();
  let titleElement = useRef();
  let bodyElement = useRef();
  let tagsElement = useRef();
  let reactionsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault;
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    const reactions = reactionsElement.current.value;

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        title,
        body,
        tags,
        reactions,
      }),
    })
      .then((res) => res.json())
      .then((post) => createPost(post));

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    tagsElement.current.value = "";
    reactionsElement.current.value = "";
  };
  return (
    <form className=" create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Enter your Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="title"
          placeholder="Enter the post title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post content
        </label>
        <textarea
          type="text"
          ref={bodyElement}
          rows="5"
          className="form-control"
          id="body"
          placeholder="Share more about the topic"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="Number of Reactions for this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Hashtags
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Enter the post tags separated with space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
