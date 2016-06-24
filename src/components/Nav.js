import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <nav className="Nav">
    <ul className="Nav-list">
      <li className="Nav-listItem">
        <Link to="/list" className="Nav-link Nav-link--list">
          <span className="Nav-linkSpan">Comment list</span>
        </Link>
      </li>
      <li className="Nav-listItem">
        <Link to="/form" className="Nav-link Nav-link--add">
          <span className="Nav-linkSpan">+Add a new comment</span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
