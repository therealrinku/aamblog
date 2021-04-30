import { useEffect, useState } from "react";
import Head from "next/head";
import homeStyles from "../styles/home.module.css";
import db from "../firebase/db";
import Card from "../components/Card";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    db.collection("blogs").onSnapshot((snap) => {
      const data = [];
      snap.docs.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setBlogs(data);
      setLoading(false);
    });
  }, []);
  return (
    <div className={homeStyles.home}>
      <Head>
        <title>Home AAM</title>
      </Head>
      <h4>All Posts</h4>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={homeStyles.blogs}>
          {blogs.map((blog, i) => {
            return <Card blogTitle={blog.title} key={i} blogId={blog.id} blogDescription={blog.content} />;
          })}
        </div>
      )}
    </div>
  );
}
