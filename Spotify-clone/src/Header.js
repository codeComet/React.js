import React from "react";
import Search from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import "./Header.css";
import { UseDataLayerValue } from "./DataLayer";

function Header() {
  const [{ user }, dispatch] = UseDataLayerValue();
  //console.log(user);
  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input
          type="text"
          placeholder="Search for Artists, Songs or Podcasts"
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
