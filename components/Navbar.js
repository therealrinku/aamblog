import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import navStyles from "../styles/navbar.module.css";
import Link from "next/link";
import { Tooltip } from "@material-ui/core";

const Navbar = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <Link href="/">An Attractive Mindset</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
