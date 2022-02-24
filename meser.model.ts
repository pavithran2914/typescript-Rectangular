import { Line } from './line.model';

export class Meser {
  left: Line;
  top: Line;
  right: Line;
  bottom: Line;
  constructor(height: Line, width: Line) {
    this.left = height;
    this.top = width;
    this.right = height;
    this.bottom = width;
  }
}
