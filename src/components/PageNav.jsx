import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/essays">Essays</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>{/* <NavLink to="/Current">Current Work</NavLink> */}</li>
      </ul>
    </nav>
  );
}

export default PageNav;
