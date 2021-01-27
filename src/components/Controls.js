import React, { useEffect, useState } from "react";
import {
  ControlsContainer,
  RadioButton,
  Total,
  SettingsButton,
  CloseButton,
} from "../styles/styles";
import Colors from "./controls/Colors";

const Controls = ({ Scene3D }) => {
  const [topWidth, setTopWidth] = useState(20);
  const [topDepth, setTopDepth] = useState(20);
  const [sideHeight, setSideHeight] = useState(1);
  const [total, setTotal] = useState(300);
  const [realWidth, setRealWidth] = useState(6);
  const [controlsOpen, setControlsOpen] = useState(false);

  const changeTopSize = (part1, part2, position, width) => {
    const currentItems = Scene3D.scene.children.filter(
      (item) => item.name === part1 || item.name === part2
    );
    currentItems.map((item) => {
      item.scale[position] = width;
      Scene3D.renderer.render(Scene3D.scene, Scene3D.camera);
    });
  };

  const changeHeight = (part1, part2, position, height) => {
    const currentItems = Scene3D.scene.children.filter(
      (item) => item.name === part1 || item.name === part2
    );

    currentItems.map((item) => {
      item.scale[position] = height;
      const multi = item.geometry.parameters.height * height;
      const diff = multi - item.geometry.parameters.height;
      const sub = -diff / 2;
      item.position.set(item.position.x, sub, item.position.z);
      Scene3D.renderer.render(Scene3D.scene, Scene3D.camera);
    });
  };

  useEffect(() => {
    const width = topWidth / 20;
    setRealWidth(realWidth * width);
    if (Scene3D.scene) changeTopSize("top-plane", "top-ruler", "y", width);
  }, [topWidth]);

  useEffect(() => {
    const width = topDepth / 20;
    if (Scene3D.scene) changeTopSize("top-plane", "top-ruler", "z", width);
  }, [topDepth]);

  useEffect(() => {
    const height = parseFloat(sideHeight);
    if (Scene3D.scene) changeHeight("side-plane", "side-ruler", "y", height);
  }, [sideHeight]);

  const calculateTotal = () => {
    const widthTotal = (topWidth - 20) * 10;
    const topTotal = (topDepth - 20) * 10;
    const sideTotal = sideHeight * 15;
    const newTotal = 300 + widthTotal + topTotal + sideTotal;
    setTotal(newTotal);
  };

  useEffect(() => {
    calculateTotal();
  }, [topWidth, topDepth, sideHeight]);

  return controlsOpen ? (
    <ControlsContainer>
      <CloseButton
        onClick={() => setControlsOpen(!controlsOpen)}
        src="../../cancel.png"
        alt="Settings"
      />
      <RadioButton>
        <label>Top Plane Width</label>
        <input
          type="range"
          min="0"
          max="40"
          value={topWidth}
          step="0.01"
          onChange={(e) => setTopWidth(e.target.value)}
        />
      </RadioButton>

      <RadioButton>
        <label>Top Plane Depth</label>
        <input
          type="range"
          min="0"
          max="40"
          value={topDepth}
          step="0.01"
          onChange={(e) => setTopDepth(e.target.value)}
        />
      </RadioButton>

      <RadioButton>
        <label>Change height</label>
        <input
          type="range"
          min="1"
          max="2"
          value={sideHeight}
          step="0.01"
          onChange={(e) => setSideHeight(e.target.value)}
        />
      </RadioButton>
      <Colors Scene3D={Scene3D} />
      <Total>
        <p>Total: {Math.round(total)}</p>
      </Total>
    </ControlsContainer>
  ) : (
    <SettingsButton
      onClick={() => setControlsOpen(!controlsOpen)}
      src="../../setting.png"
      alt="Settings"
    />
  );
};

export default Controls;
