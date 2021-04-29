import { useEffect, useState } from "react";
import Head from "next/head";
import homeStyles from "../styles/home.module.css";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setBlogs(data);
        });
    }, 3000);
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
        blogs.map((blog, i) => {
          return (
            <p className={homeStyles.post} key={i}>
              {blog.name}
            </p>
          );
        })
      )}
    </div>
  );
}
