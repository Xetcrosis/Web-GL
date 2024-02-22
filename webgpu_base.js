main();


function main() {
  const canvas = document.querySelector("#glcanvas");
  // initialize the canvas and the WebGL context
  const gl = canvas.getContext("webgl");


  if (gl === null){
    return;
  }
  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  gl.clear(gl.COLOR_BUFFER_BIT);
}
