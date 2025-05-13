import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  const [showSearchOptions, setShowSearchOptions] = useState(false);

  const toggleSearchOptions = () => {
    setShowSearchOptions(!showSearchOptions);
  };

  return (
    <>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <h1>Movie-database</h1>
            </div>
            <ul
              className={Mobile ? "navMenu-list" : "flexSB"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Movies</a>
              </li>
              <li>
                <a href="#" onClick={toggleSearchOptions}>
                  Search
                </a>
                {showSearchOptions && (
                  <div className="search-options">
                    <ul>
                      <li>
                        <a href="/?search=release-date">Release Date</a>
                      </li>
                      <li>
                        <a href="/?search=actors">Actors</a>
                      </li>
                      <li>
                        <a href="/?search=rating">Rating</a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <a href="/">Pages</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Information</a>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
            </button>
          </nav>
          <div className="account flexSB">
            <i className="fa fa-search"></i>
            <i className="fas fa-bell"></i>
            <i className="fas fa-user"></i>
            <button>Subscribe Now</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
