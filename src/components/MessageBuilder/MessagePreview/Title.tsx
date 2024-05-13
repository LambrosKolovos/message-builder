import React from "react";
import "../styles.css";
function Title({ title }: { title: string }) {
  return <div className="preview-section-title">{title}</div>;
}

export default Title;
