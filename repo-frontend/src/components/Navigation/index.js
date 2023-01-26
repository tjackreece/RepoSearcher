import React, { useState } from "react";
import "../../styles/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = ({ search }) => {
  const [navbar, setNavbar] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="navbar-container">
        <div className="search-box" style={{ fontSize: "24px" }}>
          <input
            className="search-box input"
            placeholder="Search Organization..."
            type="text"
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                search(searchInput);
              }
            }}
          />
          <SearchIcon
            className="searchIcon"
            onClick={() => search(searchInput)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
