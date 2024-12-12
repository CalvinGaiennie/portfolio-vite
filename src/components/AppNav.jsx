import { NavLink } from "react-router-dom";
import styles from "../components/AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="work">Work</NavLink>
        </li>
        <li>
          <NavLink to="school">School</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
