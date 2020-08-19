import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            {/* <span>Menu</span> */}
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Project1">Project 1</Link>
              </li>
              <li>
                <Link to="/Project2">Project 2</Link>
              </li>
              <li>
                <Link to="/Project3">Project 3</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Elements">Elements</Link>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
