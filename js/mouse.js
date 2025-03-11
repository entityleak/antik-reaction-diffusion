//==============================================================
//  MOUSE CONTROLS
//==============================================================

import { simulationUniforms } from './uniforms';
import parameterValues from './parameterValues';

export function setupMouse() {
  let mouseDown = false

  // Create a floating circle that follows the mouse cursor to indicate the current size of the brush
  let mouseFollower = document.createElement('div');
  mouseFollower.classList.add('mouse-follower');
  mouseFollower.style.content = '';
  const scaledRadius = simulationUniforms.brushRadius.value * parameterValues.canvas.scale;
  mouseFollower.style.width = (scaledRadius * 2) + 'px';
  mouseFollower.style.height = (scaledRadius * 2) + 'px';
  mouseFollower.style.position = 'absolute';
  mouseFollower.style.border = '1px solid white';
  mouseFollower.style.borderRadius = '1000px';
  mouseFollower.style.pointerEvents = 'none';
  // document.body.append(mouseFollower);

  // Begin drag, fill indicator circle white
  canvas.addEventListener('mousedown', (e) => {
    mouseDown = true;
    mouseFollower.style.backgroundColor = 'rgba(255,255,255,.2)';
  });

  // End drag, make indicator circle transparent
  canvas.addEventListener('mouseup', (e) => {
    mouseDown = false;
    mouseFollower.style.backgroundColor = 'rgba(255,255,255,0)';
  });

  // If dragging, pass the mouse coordinates into the shader.
  canvas.addEventListener('mousemove', (e) => {
    // if(mouseDown) {
      // Account for canvas scale when calculating normalized coordinates
      simulationUniforms.mousePosition.value.x = e.offsetX / (parameterValues.canvas.width / parameterValues.canvas.scale);
      simulationUniforms.mousePosition.value.y = 1 - e.offsetY / (parameterValues.canvas.height / parameterValues.canvas.scale);
    // } else {
      // simulationUniforms.mousePosition.value.x = -1;
      // simulationUniforms.mousePosition.value.y = -1;
    // }
  });

  // Adjust brush radius using the mouse wheel
  window.addEventListener('wheel', (e) => {
    const wheelStep = e.deltaY/100;

    // Only change the brush radius if it's within these hardcoded limits
    if(simulationUniforms.brushRadius.value + wheelStep > 5 && simulationUniforms.brushRadius.value + wheelStep < 100) {
      simulationUniforms.brushRadius.value += wheelStep;

      // Resize the brush indicator circle with scale
      const scaledRadius = simulationUniforms.brushRadius.value * parameterValues.canvas.scale;
      mouseFollower.style.width = (scaledRadius * 2) + 'px';
      mouseFollower.style.height = (scaledRadius * 2) + 'px';

      // Realign the brush indicator circle with the mouse cursor
      mouseFollower.style.top = (e.clientY - scaledRadius) + 'px';
      mouseFollower.style.left = (e.clientX - scaledRadius) + 'px';
    }
  });

  // Keep the indicator circle aligned with the mouse. Putting the listener on the canvas element caused flickering, but this method is nice and smooth.
  window.addEventListener('mousemove', (e) => {
    const newX = e.clientX,
          newY = e.clientY,
          leftSide = window.innerWidth/2 - canvas.width/2,
          rightSide = window.innerWidth/2 + canvas.width/2,
          topSide = window.innerHeight/2 - canvas.height/2,
          bottomSide = window.innerHeight/2 + canvas.height/2;

    // Only align the indicator circle with the mouse inside the <canvas> element
    if(newX > leftSide && newX < rightSide && newY > topSide && newY < bottomSide) {
      mouseFollower.style.display = 'block';
      // Scale the brush radius by the canvas scale
      const scaledRadius = simulationUniforms.brushRadius.value * parameterValues.canvas.scale;
      mouseFollower.style.top = (e.clientY - scaledRadius) + 'px';
      mouseFollower.style.left = (e.clientX - scaledRadius) + 'px';
      // Update the follower size to match the scaled radius
      mouseFollower.style.width = (scaledRadius * 2) + 'px';
      mouseFollower.style.height = (scaledRadius * 2) + 'px';
    } else {
      mouseFollower.style.display = 'none';
    }
  })
}