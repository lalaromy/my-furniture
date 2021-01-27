import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Scene {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
  }

  init() {
    const container = document.getElementById("builder-scene");
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xfffffff);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    camera.position.set(0, 7, -35);
    scene.add(camera);

    const light = new THREE.AmbientLight(0xf3f3f3);
    light.position.set(1, 500, 800);
    scene.add(light);

    var spotLight = new THREE.SpotLight(0x404040);
    spotLight.position.set(0, 50, -30);
    spotLight.castShadow = true;
    scene.add(spotLight);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    renderer.render(scene, camera);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    requestAnimationFrame(animate);

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
  }
}
