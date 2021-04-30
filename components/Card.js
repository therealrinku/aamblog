import Link from "next/link";

const Card = ({ blogTitle, blogId }) => {
  return <Link href={`/blog/${blogId}`}>{blogTitle}</Link>;
};

export default Card;
