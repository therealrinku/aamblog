import Link from "next/link";
import cardStyles from "../styles/card.module.css";

const Card = ({ blogTitle, blogId, blogDescription }) => {
  return (
    <div className={cardStyles.Card}>
      <h3>{blogTitle}</h3>
      <p>{blogDescription}</p>
      <Link href={`blog/${blogId}`}>Read More</Link>
    </div>
  );
};

export default Card;
