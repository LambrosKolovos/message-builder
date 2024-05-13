import { Button } from "@mui/material";
import React, { useId } from "react";
import "../styles.css";
import { useAtomValue } from "jotai";
import {
  buttonAtom,
  buttonState,
  footerAtom,
  footerTextAtom,
  headerAtom,
  imageAtom,
  textAtom,
} from "..";

function ActionButtons() {
  const messageId = useId();

  const hasHeader = useAtomValue(headerAtom);
  const headerImage = useAtomValue(imageAtom);
  const body = useAtomValue(textAtom);
  const hasFooter = useAtomValue(footerAtom);
  const footer = useAtomValue(footerTextAtom);
  const hasButtons = useAtomValue(buttonAtom);
  const buttons = useAtomValue(buttonState);

  const saveMessage = () => {
    let message = {
      hasHeader: hasHeader,
      headerImage: headerImage,
      body: body,
      hasFooter: hasFooter,
      footer: footer,
      hasButtons: hasButtons,
      buttons: buttons,
    };

    localStorage.setItem(messageId, JSON.stringify(message));
  };
  return (
    <div className="action-button-container">
      <Button variant="contained" onClick={saveMessage}>
        Save
      </Button>
      <Button variant="outlined">Delete</Button>
    </div>
  );
}

export default ActionButtons;
