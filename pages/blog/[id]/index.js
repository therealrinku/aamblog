import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import db from "../../../firebase/db";
import blogStyles from "../../../styles/blog.module.css";

const Blog = () => {
  const [details, setDetails] = useState({});

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {}, [
    db
      .collection("blogs")
      .doc(id)
      .get()
      .then((doc) => {
        setDetails(doc.data());
      }),
  ]);

  return (
    <div className={blogStyles.Blog}>
      <h2>{details.title}</h2>
      <p>{details.content}</p>
    </div>
  );
};

export default Blog;
