import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Skeleton from "@mui/material/Skeleton";

const Navbar = ({ getReposByOrganization, isIdle }) => {
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

  if (isIdle) {
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
      <h1>Repo Searcher</h1>
      <div className="navbar__search-container" style={{ fontSize: "24px" }}>
        <input
          className="navbar__search-container__input"
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getReposByOrganization(searchInput);
            }
          }}
          placeholder="Search Organization..."
          type="text"
        />
        <SearchIcon
          className="navbar__search-container__searchIcon"
          onClick={() => getReposByOrganization(searchInput)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
