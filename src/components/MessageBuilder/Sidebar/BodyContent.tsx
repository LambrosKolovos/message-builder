import React from "react";
import "../styles.css";
import Help from "../utils/Help";
import { textAtom } from "..";
import { useAtom } from "jotai";
import { variablesTip } from "../utils/helpText";
import Required from "../utils/Required";

function BodyContent() {
  const [messageText, setMessageText] = useAtom(textAtom);
  return (
    <div className="content-block">
      <div className="content-top">
        <div className="content-top-text" style={{ paddingTop: "5px" }}>
          <img src="./text.png" height={15} width={19} />
          <div>Body Message</div>
          <img src="./info.png" height={12} width={12} />
          <Required />
        </div>
      </div>
      <textarea onChange={(e) => setMessageText(e.target.value)}></textarea>
      <Help title="What are variables" text={variablesTip} />
    </div>
  );
}

export default BodyContent;
