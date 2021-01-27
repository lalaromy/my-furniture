import React, { useEffect } from "react";
import Controls from "./Controls";
// import * as THREE from 'three'
import Scene from "./Scene";
import Table from "./Table";
import Ruler from "./Ruler";

const Scene3D = new Scene();
const topPlane = { x: 0.5, y: 15, z: 10 };
const sidePlane = { x: 0.5, y: 8, z: 8 };
const backPlane = { x: 0.5, y: 3, z: 10 };

const TableElement = new Table(topPlane, sidePlane, backPlane);
const RulerElement = new Ruler(topPlane, sidePlane, backPlane);

export default () => {
  useEffect(() => {
    Scene3D.init();
    TableElement.init({
      scene: Scene3D.scene,
      camera: Scene3D.camera,
      renderer: Scene3D.renderer,
    });
    // RulerElement.init({
    //   scene: Scene3D.scene,
    //   camera: Scene3D.camera,
    //   renderer: Scene3D.renderer,
    // });
  }, []);

  const animate = () => {
    requestAnimationFrame(animate);
    render();
  };

  const render = () => {
    Scene3D.renderer.render(Scene3D.scene, Scene3D.camera);
  };

  return (
    <div>
      <div id="builder-scene"></div>
      <Controls Scene3D={Scene3D} />
    </div>
  );
};
