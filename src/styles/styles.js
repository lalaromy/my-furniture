import styled from "@emotion/styled";
import { jsx, css, keyframes } from "@emotion/react";

const appear = keyframes`
  from, 0% to {
    transform: translate3d(-100px, 0, 0);
    opacity: 0;
  }

  50% {
    transform: translate3d(-50px, 0, 0);
  }

  80%, 85%, 90% {
    transform: translate3d(10px, 0, 0);
    opacity: 0.2;
  }
`;

export const ControlsContainer = styled.div`
  position: fixed;
  right: 10px;
  top: 10px;
  bottom: 30px;
  background: black;
  opacity: 0.7;
  padding: 10px;
  border-radius: 20px;
  animation: ${appear} 1s ease;
`;

export const RadioButton = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  color: white;
  width: 250px;
`;

export const ColorModalContainer = styled.div`
  background: white;
  z-index: 1;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const ColCarre = styled.div`
  margin: 10px;
  cursor: pointer;
`;

export const Color = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

export const ColorButton = styled.div`
  padding: 10px 20px;
  width: max-content;
  border-radius: 30px;
  background: #2779dd;
  border: 2px solid black;
  cursor: pointer;
  margin-top: 20px;
  color: white;
  &:hover {
    background: #5991d9;
    border: 2px solid black;
    color: white;
  }
`;

export const Header = styled.header`
  background: white;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 5px;
  font-weight: bold;
`;

export const LogoImage = styled.img`
  width: 100px;
  margin-right: 10px;
`;

export const Total = styled.h1`
  color: white;
  font-weight: bold;
`;

export const AppContainer = styled.div`
  font-family: "Fjalla One", sans-serif;
`;

export const SettingsButton = styled.img`
  width: 40px;
  position: fixed;
  right: 10px;
  top: 5px;
  cursor: pointer;
`;

export const CloseButton = styled.img`
  width: 30px;
  position: fixed;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;
