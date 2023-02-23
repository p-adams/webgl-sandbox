import "./style.css";
import { setupCanvas } from "./canvas";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <canvas id="gl-canvas" width="640" height="480"></canvas>
  </div>
`;
setupCanvas(document.querySelector<HTMLCanvasElement>("#gl-canvas")!);
