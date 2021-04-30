import { useRouter } from "next/router";

const Blog = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div style={{ width: "75%", margin: "auto", marginTop: "100px" }}>{id}</div>;
};

export default Blog;
