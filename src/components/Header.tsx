import React from "react";
import "../App.css";
import CloseButton from "./CloseButton";

function Header() {
  return (
    <div className="header">
      <div className="header-left">Create a campaign</div>
      <div className="header-right">
        <div className="header-tips">
          <img
            src="./tip.png"
            height={14}
            width={14}
            style={{ marginRight: "4px" }}
          />
          Tips
        </div>
        <CloseButton />
      </div>
    </div>
  );
}

export default Header;
