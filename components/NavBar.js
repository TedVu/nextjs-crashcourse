import React from "react";
import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

export const NavBar = () => {
  return (
    <nav className={navStyles.navBar}>
      <ul>
        <li>
          <Link href="/">Home</Link>{" "}
        </li>
        <li>
          <Link href="/about">About</Link>{" "}
        </li>
      </ul>
    </nav>
  );
};
