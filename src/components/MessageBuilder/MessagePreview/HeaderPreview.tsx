import { useAtomValue } from "jotai";
import React from "react";
import { imageAtom } from "..";
import "..";
import Title from "./Title";

function HeaderPreview() {
  const imgSrc = useAtomValue(imageAtom);
  return (
    <div>
      {" "}
      <div
        style={{ background: imgSrc ? `url(${imgSrc})` : "none" }}
        className="header-preview"
      >
        <Title title="Header" />
      </div>
    </div>
  );
}

export default HeaderPreview;
