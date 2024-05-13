import React from "react";
import "../styles.css";
import { Link } from "@mui/material";

function Help({ title, text }: { title: string; text: string }) {
  return (
    <div className="help-container">
      <div className="help-header">
        <img src="./flashlight.png" />
        {title}
      </div>
      <div className="help-text">{text}</div>
      <Link href="#" fontSize={12}>
        Learn more
      </Link>
    </div>
  );
}

export default Help;
