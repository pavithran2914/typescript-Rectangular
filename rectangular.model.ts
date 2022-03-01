import { Coordinate } from './coordinate.model';

export class Rectangular {
  coordinate: Coordinate;
  h: number;
  w: number;
  constructor(coordinate: Coordinate, h: number, w: number) {
    this.coordinate = coordinate;
    this.h = h;
    this.w = w;
    this.dot();
    this.line();
  }
  dot() {
    console.log(
      `Dot1 = ${this.coordinate.x}, ${this.coordinate.y} \n Dot2 = ${this.coordinate.x + this.w}, ${this.coordinate.y} \n Dot3 = ${this.coordinate.x}, ${this.coordinate.y + this.h} \n Dot4 = ${this.coordinate.x + this.w},                   ${this.coordinate.y + this.h}`
    );
  }
  line() {
    console.log(
      `Line1 = ${this.coordinate.x}, ${this.coordinate.y} to ${this.coordinate.x + this.w}, ${this.coordinate.y} \n Line2 = ${this.coordinate.x + this.w}, ${this.coordinate.y} to ${this.coordinate.x + this.w}, ${this.coordinate.y + this.h} \n Line3 = ${this.coordinate.x + this.w}, ${this.coordinate.y + this.h} to ${this.coordinate.x}, ${this.coordinate.y + this.h} \n Line4 = ${this.coordinate.x}, ${this.coordinate.y + this.h} to ${this.coordinate.x}, ${this.coordinate.y}`
    );
  }
}
