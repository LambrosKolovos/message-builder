import React from "react";
import Title from "./Title";
import { useAtomValue } from "jotai";
import { footerTextAtom } from "..";

function FooterPreview() {
  const text = useAtomValue(footerTextAtom);

  return (
    <div style={{ animation: "slide .5s  ease" }}>
      <div className="divider"></div>
      <Title title="Footer" />
      <div style={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "14px" }}>
        {text}
      </div>
    </div>
  );
}

export default FooterPreview;
