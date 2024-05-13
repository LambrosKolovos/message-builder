import React from "react";
import CloseButton from "../../CloseButton";

function SidebarHeader() {
  return (
    <div className="sidebar-header">
      <h5 className="sidebar-title">Edit message</h5>
      <CloseButton />
    </div>
  );
}

export default SidebarHeader;
