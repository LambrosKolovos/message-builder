import { useAtomValue } from "jotai";
import React from "react";
import { textAtom } from "..";
import Title from "./Title";

function BodyPreview() {
  const text = useAtomValue(textAtom);

  return (
    <div
      style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif;",
        animation: "slide .5s  ease",
      }}
    >
      <div className="divider"></div>
      <Title title="Body message" />
      {text}
    </div>
  );
}

export default BodyPreview;
