import { mat4 } from "gl-matrix";
export function setupCanvas(element: HTMLCanvasElement) {
  const ctx = element.getContext("webgl");
  if (!ctx) {
    return;
  }
  const _crt = mat4.create();
  ctx.clearColor(0.0, 0.0, 0.0, 1.0);
  ctx.clear(ctx.COLOR_BUFFER_BIT);
}
