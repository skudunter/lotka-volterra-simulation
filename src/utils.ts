export function random(max: number, min?: number): number {
  if (arguments.length == 1) {
    return Math.random() * max;
  } else {
    return min! + Math.random() * (max - min!);
  }
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}
