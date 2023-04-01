import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand p-1 m-2" href={'../'}>
            Joel Hilton's Movie Collection
          </a>
          <div className="text-right">
            <ul className="navbar-nav">
              <li className="nav-item m-1">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item m-1">
                <Link className="nav-link" to="/Movies">
                  Movies
                </Link>
              </li>
              <li className="nav-item m-1">
                <Link className="nav-link" to="/Podcasts">
                  Podcasts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
