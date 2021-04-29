import createPageStyles from "../styles/create.module.css";
import Head from "next/head";
import db from "../firebase/db";
import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const AddBlog = (e) => {
    e.preventDefault();
    db.collection("blogs")
      .add({ title, content })
      .then((res) => {
        setContent("");
        setTitle("");
      });
  };

  return (
    <div className={createPageStyles.createPage}>
      <Head>
        <title>Create new blog</title>
      </Head>
      <h4>New Blog</h4>
      <form>
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Type blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label for="content">Content</label>
        <textarea
          type="text"
          id="title"
          placeholder="Type blog content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={AddBlog}>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
