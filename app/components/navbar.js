import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
            <ul>
              <li>
                <Link href="/">
                  <h1>Home</h1>
                </Link>
              </li>
              <li>
                <Link href="/Projects">
                  <h1>Projects</h1>
                </Link>
              </li>
              <li>
                <Link href="/WorkExperience">
                  <p>Work Experience</p>
                </Link>
              </li>
              <li>
                <Link href="/Hobbies">
                  <p>Hobbies</p>
                </Link>
              </li>
              <li>
                <Link href="/ContactMe">
                  <p>ContactMe</p>
                </Link>
              </li>
            </ul>
    </>
  );
};

export default Navbar;