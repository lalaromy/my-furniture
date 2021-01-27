import React from "react";
import {
  ColorModalContainer,
  ModalContainer,
  ColCarre,
  Color,
} from "../../styles/styles";

const ColorModal = ({ changeColor, part }) => {
  const colors = [
    {
      name: "white shiny",
      color: "#ffffff",
    },
    { name: "white shiny", color: "#ffffff" },
    { name: "light grey", color: "#d9d9d9" },
    { name: "dark grey", color: "#cccccc" },
    { name: "antracite", color: "#666666" },
    { name: "black", color: "#000000" },
  ];
  return (
    <ColorModalContainer>
      <ModalContainer>
        {colors.map((col) => (
          <ColCarre onClick={() => changeColor(col.color, part)}>
            <Color style={{ background: col.color }}></Color>
            <p>{col.name}</p>
          </ColCarre>
        ))}
      </ModalContainer>
    </ColorModalContainer>
  );
};

export default ColorModal;
