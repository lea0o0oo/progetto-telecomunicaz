import * as BABYLON from "babylonjs";
import HavokPhysics from "@babylonjs/havok";
import { type HavokPhysicsWithBindings } from "@babylonjs/havok";

class Engine {
  engine: BABYLON.Engine;
  scene: BABYLON.Scene;
  // If physics is enabled in the current engine
  usingPhysics: boolean = false;

  private cameras: BABYLON.Camera[] | BABYLON.FreeCamera[] = [];

  private renderScene() {
    this.scene.render();
  }

  private handleResize() {
    this.engine.resize();
  }

  constructor(private canvas: HTMLCanvasElement) {
    this.engine = new BABYLON.Engine(this.canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true,
    });
    this.scene = new BABYLON.Scene(this.engine);

    this.engine.runRenderLoop(() => {
      if (this.cameras.length > 0) this.renderScene();
    });
    window.addEventListener("resize", () => this.handleResize());
    canvas.focus();
    canvas.onblur = () => {
      console.log("Focus is lost");
      canvas.focus();
    };
  }

  async initPhysics() {
    this.scene.enablePhysics(
      null,
      new BABYLON.HavokPlugin(true, await HavokPhysics())
    );
    this.usingPhysics = true;
  }

  addCamera(camera: BABYLON.Camera | BABYLON.FreeCamera) {
    //@ts-ignore
    this.cameras.push(camera);
    //this.scene.activeCameras?.push(camera);
  }
}

export default Engine;