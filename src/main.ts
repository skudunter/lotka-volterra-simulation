import "./style.css";
import { Predator, Prey } from "./agent";
import {random } from "./utils";
// data
let container = document.querySelector<HTMLDivElement>("#app")!;
let canvas = document.querySelector<HTMLCanvasElement>("#canvas")!;
let ctx = canvas.getContext("2d")!;
let prey: Prey[] = [];
let predators: Predator[] = [];
const numPrey = 100;
const numPredators = 10;
const preyColor = "lightgreen";
const predatorColor = "red";
const preySize = 5;
const predatorSize = 10;

//setup
resizeCanvas();
window.addEventListener("resize", resizeCanvas);
background();

// initialise prey and predator arrays
for (let i = 0; i < numPredators; i++) {
  predators.push(new Predator(random(canvas.width), random(canvas.height), predatorSize));
}

for (let i = 0; i < numPrey; i++) {
  prey.push(new Prey(random(canvas.width), random(canvas.height),preySize));
}

// main loop
gameLoop();

function gameLoop() {
  background();

  // update

  for (let i = 0; i < predators.length; i++) {
    predators[i].update();
    predators[i].draw(ctx, predatorColor);
  }

  for (let i = 0; i < prey.length; i++) {
    prey[i].update();
    prey[i].draw(ctx, preyColor);
  }
  requestAnimationFrame(gameLoop);
}

function resizeCanvas() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  background();
}

function background() {
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

