import { useAtom } from "jotai";
import React from "react";
import { buttonState } from "..";

function ButtonsPreview() {
  const [buttons, setButtons] = useAtom(buttonState);

  return (
    <>
      {buttons
        .filter((item: string) => item !== "")
        .map((item: string, index: number) => (
          <div key={index} className="preview-button">
            <a href="#">{item}</a>
          </div>
        ))}
    </>
  );
}

export default ButtonsPreview;
