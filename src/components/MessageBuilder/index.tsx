import React, { useState } from "react";
import SiderBar from "./Sidebar/Sidebar";
import MessagePreview from "./MessagePreview/MessagePreview";
import "./styles.css";
import { atom, useAtom } from "jotai";

export const headerAtom = atom<boolean>(false);
export const footerAtom = atom<boolean>(false);
export const buttonAtom = atom<boolean>(false);

export const textAtom = atom<string>("");
export const footerTextAtom = atom<string>("");
export const imageAtom = atom<string>("");
export const buttonState = atom<string[]>([]);

function MessageBuilder() {
  return (
    <div className="edit-container">
      <SiderBar />
      <MessagePreview />
    </div>
  );
}

export default MessageBuilder;
