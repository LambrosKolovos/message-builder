import React from "react";
import {
  buttonAtom,
  footerAtom,
  footerTextAtom,
  headerAtom,
  imageAtom,
  textAtom,
} from "..";
import { useAtomValue } from "jotai";
import "./preview.css";
import HeaderPreview from "./HeaderPreview";
import BodyPreview from "./BodyPreview";
import FooterPreview from "./FooterPreview";
import ButtonsPreview from "./ButtonsPreview";

function MessagePreview() {
  const hasHeader = useAtomValue(headerAtom);
  const hasFooter = useAtomValue(footerAtom);
  const hasButtons = useAtomValue(buttonAtom);

  const headerImage = useAtomValue(imageAtom);
  const footerText = useAtomValue(footerTextAtom);
  const messageText = useAtomValue(textAtom);
  return (
    <div className="preview-wrapper">
      <div className="preview-container">
        <div className="preview-header">
          <img src="./message.png" className="message-icon" />
          Message Example
        </div>
        <div className="preview-body">
          <div className="preview-content">
            {hasHeader && headerImage !== "" && <HeaderPreview />}
            {messageText && <BodyPreview />}
            {footerText && <FooterPreview />}
          </div>
          {hasButtons && <ButtonsPreview />}
        </div>
      </div>
    </div>
  );
}

export default MessagePreview;
