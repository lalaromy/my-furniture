import * as THREE from "three";

export default class Ruler {
  constructor(topPlane, sidePlane, backPlane) {
    this.topPlane = topPlane;
    this.sidePlane = sidePlane;
    this.backPlane = backPlane;
  }

  init({ scene, camera, renderer }) {
    const materialA = new THREE.MeshLambertMaterial({
      color: 0x663399,
      side: THREE.DoubleSide,
    });
    const materialB = new THREE.MeshLambertMaterial({
      color: 0x0000cc,
      side: THREE.DoubleSide,
    });
    const materialC = new THREE.MeshLambertMaterial({
      color: 0x0066ff,
      side: THREE.DoubleSide,
    });

    const topGeometry = new THREE.BoxGeometry(0.1, this.topPlane.y, 0.1);
    const topRuler = new THREE.Mesh(topGeometry, materialA);
    const top = scene.children.find((item) => item.name === "top-plane")
      .position;
    topRuler.position.x = top.x;
    topRuler.position.y = top.y + 0.5;
    topRuler.position.z = top.z - 5;
    topRuler.rotateZ(-Math.PI / 2);
    topRuler.name = "top-ruler";
    scene.add(topRuler);

    const sideGeometry = new THREE.BoxGeometry(0.1, this.sidePlane.y, 0.1);
    const sideRuler = new THREE.Mesh(sideGeometry, materialB);
    const side = scene.children.find((item) => item.name === "side-plane")
      .position;
    sideRuler.position.x = side.x - 5;
    sideRuler.position.y = side.y;
    sideRuler.position.z = side.z - 4;
    sideRuler.name = "side-ruler";
    scene.add(sideRuler);

    const backGeometry = new THREE.BoxGeometry(0.1, 0.1, this.topPlane.z);
    const backRuler = new THREE.Mesh(backGeometry, materialC);
    backRuler.position.x = top.x + 8;
    backRuler.position.y = top.y + 0.5;
    backRuler.position.z = top.z;
    // backRuler.rotateX(-Math.PI / 2);
    backRuler.name = "top-ruler";
    scene.add(backRuler);

    renderer.render(scene, camera);
  }
}
