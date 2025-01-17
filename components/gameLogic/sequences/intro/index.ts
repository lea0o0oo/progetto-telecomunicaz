import type Engine from "../../Engine";
import { Observer, Scene, Vector3, type FreeCamera } from "babylonjs";
import funcs from "~/utils/generalFuncs";
import assistant from "~/utils/assistant";
import audioManager from "~/utils/audioManager";

import firstTask from "./firstTask";

export default async (game: Engine) => {
  const camera = game.getCamera() as FreeCamera;

  audioManager.playMusic("music1");

  const generalData = useGeneralStore();

  generalData.cameraFollow = false;
  // camera.rotation.x = funcs.degToRad(24);
  // camera.rotation.y = funcs.degToRad(168);
  camera.rotation = new Vector3(funcs.degToRad(19.73), funcs.degToRad(170), 0);

  camera.position = new Vector3(-57.18, 19, 98);

  const targetPosition = new Vector3(42.17, 27.46, 80.57);
  const targetRotation = new Vector3(
    funcs.degToRad(18.15),
    funcs.degToRad(237.13),
    0
  );

  await funcs.delay(2000);

  await funcs.moveCamera({
    camera,
    game,
    targetPosition,
    targetRotation,
    speed: 0.1,
  });

  assistant.say(
    "Benvenuto, Operatore. Io sono Telly, la tua assistente per questa esperienza.",
    {
      duration: 12000,
      icon: "greet",
    }
  );

  await funcs.delay(2500);

  assistant.say("Farai tante cose, ma per ora sarai un robot", {
    duration: 5000,
    icon: "normal",
  });

  camera.rotation.y = funcs.degToRad(180);
  generalData.cameraFollow = true;

  await funcs.delay(4000);

  assistant.say("Muoviti con WASD o con le freccette ↑ → ↓ ← sulla tastiera", {
    duration: 5000,
    icon: "normal",
  });

  await funcs.delay(7000);

  assistant.say("Per adesso sarai un robot tuttofare", {
    duration: 4000,
    icon: "normal",
  });

  await funcs.delay(2900);

  assistant.say("A breve ti verranno assegnate diverse task da completare...", {
    duration: 4000,
    icon: "normal",
  });

  await funcs.delay(3000);

  assistant.say("Non ti preoccupare, nulla di troppo complicato ;)", {
    duration: 4000,
    icon: "normal",
  });

  await funcs.delay(5000);
};
