import * as React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header>
      <h1>JJBlog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/info">INFO</Link>
          </li>
          {/* <li>
              <Link to="/projects">PROJECTS</Link>
            </li> */}
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
