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

      <ul>
        <Link href="/create">
          <Tooltip title="Add new blog">
            <AddIcon />
          </Tooltip>
        </Link>

        <Tooltip title="Search">
          <button className={navStyles.button}>
            <SearchIcon />
          </button>
        </Tooltip>
      </ul>
    </nav>
  );
};

export default Navbar;
