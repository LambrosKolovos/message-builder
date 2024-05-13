import { Button, Input, Switch } from "@mui/material";
import React from "react";
import "../styles.css";
import { buttonAtom, buttonState } from "..";
import { useAtom, useAtomValue } from "jotai";

const MessageButton = ({
  text,
  index,
  onChange,
  onDelete,
}: {
  text: string;
  index: number;
  onChange: (index: number, text: string) => void;
  onDelete: (item: number) => void;
}) => {
  return (
    <div className="message-button-container">
      <div className="message-button-header">
        <div>Button {index + 1}</div>
        <img
          src="./delete.png"
          height={18}
          width={14}
          onClick={() => onDelete(index)}
          style={{ padding: "5px" }}
        />
      </div>
      <input
        className="message-button-input"
        placeholder="Enter text"
        value={text}
        onChange={(e) => onChange(index, e.target.value)}
      ></input>
    </div>
  );
};
function ExtraButtons() {
  const [enableButtons, setEnableButtons] = useAtom(buttonAtom);
  const [buttons, setButtons] = useAtom(buttonState);

  const addNewButton = () => {
    setButtons([...buttons, ""]);
  };

  const deleteButton = (index: number) => {
    const newButtons = [...buttons];
    newButtons.splice(index, 1);
    setButtons(newButtons);
  };
  const buttonTextChange = (index: number, newText: string) => {
    const newState = [...buttons];
    newState[index] = newText;
    setButtons(newState);
  };
  return (
    <div className="content-block">
      <div className="content-top">
        <div className="content-top-text">
          <img src="./button.png" height={10} width={18} />
          <div>Buttons</div>
          <img src="./info.png" height={12} width={12} />
        </div>
        <Switch
          value={enableButtons}
          onClick={() => setEnableButtons(!enableButtons)}
        ></Switch>
      </div>
      {enableButtons && (
        <div className="buttons-container">
          {buttons.map((item: string, index: number) => {
            return (
              <MessageButton
                key={index}
                text={item}
                index={index}
                onChange={buttonTextChange}
                onDelete={() => deleteButton(index)}
              />
            );
          })}
          <Button
            variant="outlined"
            onClick={addNewButton}
            disabled={buttons.length >= 3}
          >
            New button
          </Button>
        </div>
      )}
    </div>
  );
}

export default ExtraButtons;
