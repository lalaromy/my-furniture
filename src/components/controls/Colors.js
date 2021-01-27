import React, { useState } from "react";
import { ColorButton, ColCarre, Color } from "../../styles/styles";
import ColorModal from "./ColorModal";

const Colors = ({ Scene3D }) => {
  const [openTopColors, setOpenTopColors] = useState(false);
  const [openSideColors, setOpenSideColors] = useState(false);
  const [topColor, setTopColor] = useState("#996633");
  const [sideColor, setSideColor] = useState("#f0dea6");

  const changeColor = (color, part) => {
    console.log("color", color);
    setOpenTopColors(false);
    setOpenSideColors(false);
    console.log(Scene3D.scene.children);
    Scene3D.scene.children
      .filter((item) => item.name === part)
      .map((el) => {
        console.log("el", el);
        el.material.color.set(color);
        Scene3D.renderer.render(Scene3D.scene, Scene3D.camera);
      });
  };

  return (
    <div>
      <ColorButton onClick={() => setOpenTopColors(!openTopColors)}>
        {openTopColors ? "Close Colors" : "Change Top Color"}
      </ColorButton>
      <ColCarre>
        <Color style={{ background: topColor }}></Color>
      </ColCarre>
      {openTopColors ? (
        <ColorModal changeColor={changeColor} part={"top-plane"} />
      ) : null}

      <ColorButton onClick={() => setOpenSideColors(!openSideColors)}>
        {openSideColors ? "Close Colors" : "Change Side Color"}
      </ColorButton>
      <ColCarre>
        <Color style={{ background: sideColor }}></Color>
      </ColCarre>

      {openSideColors ? (
        <ColorModal changeColor={changeColor} part={"side-plane"} />
      ) : null}
    </div>
  );
};

export default Colors;
