import { Switch } from "@mui/material";
import React from "react";
import "../styles.css";
import { useAtom } from "jotai";
import { footerAtom, footerTextAtom } from "..";

function FooterContent() {
  const [enableFooter, setEnableFooter] = useAtom(footerAtom);
  const [footerText, setFooterText] = useAtom(footerTextAtom);

  return (
    <div className="content-block">
      <div className="content-top">
        <div className="content-top-text">
          <img src="./text.png" height={15} width={19} />
          <div>Footer</div>
          <img src="./info.png" height={12} width={12} />
        </div>
        <Switch
          value={enableFooter}
          onClick={() => setEnableFooter(!enableFooter)}
        ></Switch>
      </div>
      {enableFooter && (
        <div>
          <textarea
            value={footerText}
            onChange={(e) => setFooterText(e.target.value)}
          ></textarea>
        </div>
      )}
    </div>
  );
}

export default FooterContent;
