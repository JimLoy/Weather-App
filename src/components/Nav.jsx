import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Nav.module.css";

const active = {
  fontWeight: 700,
};

function Nav() {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.navLink} activeStyle={active} to="/" exact>
        Home
      </NavLink>
    </nav>
  );
}

export default Nav;
