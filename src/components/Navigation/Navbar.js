import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Skeleton from "@mui/material/Skeleton";

const Navbar = ({ search, isLoading }) => {
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
  if (isLoading) {
    return (
      <Skeleton
        variant="rounded"
        width={"100vw"}
        height={"80px"}
        animation="wave"
      />
    );
  }
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
