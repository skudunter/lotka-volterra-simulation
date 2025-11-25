import { random, lerp } from "./utils";

class Agent {
  x: number;
  y: number;
  size: number;
  target: { x: number; y: number };

  constructor(x: number, y: number, size: number) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.target = {
      x: this.x + random(this.x),
      y: this.y + random(this.y),
    };
  }

  draw(ctx: CanvasRenderingContext2D, color: string) {
    ctx.fillStyle = color;

    // draw the circle
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
  update() {
    this.doVectorMotion();
  }
  doVectorMotion() {
    let radius: number = this.size / 5;

    if (
      Math.abs(this.x - this.target.x) < 5 &&
      Math.abs(this.y - this.target.y) < 5
    ) {
      // reached target
      this.target = {
        x: this.x + random(-radius, radius),
        y: this.y + random(-radius, radius),
      };
    }

    this.x = lerp(this.x, this.target.x, 0.02);
    this.y = lerp(this.y, this.target.y, 0.02);
  }
}

export class Prey extends Agent {
  constructor(x: number, y: number, size: number) {
    super(x, y, size);
  }
}

export class Predator extends Agent {
  constructor(x: number, y: number, size: number) {
    super(x, y, size);
  }
}
