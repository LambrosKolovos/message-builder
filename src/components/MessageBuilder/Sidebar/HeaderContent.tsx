import React, { useState } from "react";
import "../styles.css";
import {
  Button,
  FormHelperText,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";
import Help from "../utils/Help";
import { headerAtom, imageAtom } from "..";
import { useAtom } from "jotai";
import { styled } from "@mui/material/styles";
import { imageHeaderTip } from "../utils/helpText";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function HeaderContent() {
  const [headerType, setHeaderType] = useState("none");
  const [enableHeader, setEnableHeader] = useAtom(headerAtom);
  const [headerImage, setHeaderImage] = useAtom(imageAtom);

  const loadImage = (event: any) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;
        setHeaderImage(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="content-block">
      <div className="content-top">
        <div className="content-top-text">
          <img src="./imageicon.png" height={18} width={18} />
          <div>Header</div>
          <img src="./info.png" height={12} width={12} />
        </div>
        <Switch
          value={enableHeader}
          onChange={() => setEnableHeader(!enableHeader)}
        ></Switch>
      </div>
      {enableHeader && (
        <div className="content-body">
          <Select
            value={headerType}
            inputProps={{ "aria-label": "Without label" }}
            style={{ width: "100%", padding: "12px", height: "40px" }}
            onChange={(e) => setHeaderType(e.target.value)}
          >
            <MenuItem value="none">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"image"}>Image</MenuItem>
          </Select>
          <FormHelperText>
            Image size recommendation: 800 x 418 pixel.
          </FormHelperText>
          {headerType === "image" && (
            <Button variant="outlined" component="label">
              Upload File
              <input type="file" hidden onChange={(e) => loadImage(e)} />
            </Button>
          )}
          <Help title="Image header tips" text={imageHeaderTip} />
        </div>
      )}
    </div>
  );
}

export default HeaderContent;
