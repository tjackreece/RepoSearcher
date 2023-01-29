import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = ({ search }) => {
  const [navClass, setNavClass] = useState("navbar");
  const [searchInput, setSearchInput] = useState("");

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavClass("navbar navbar__active");
    } else {
      setNavClass("navbar");
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={navClass}>
      <div className="navbar__search-container" style={{ fontSize: "24px" }}>
        <input
          className="navbar__search-container__input"
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
          className="navbar__search-container__searchIcon"
          onClick={() => search(searchInput)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
