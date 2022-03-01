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
    let dot1 = `${this.coordinate.x}, ${this.coordinate.y}`;
    let dot2 = `${this.coordinate.x + this.w}, ${this.coordinate.y}`;
    let dot3 = `${this.coordinate.x }, ${this.coordinate.y + this.h}`;
    let dot4 = `${this.coordinate.x + this.w}, ${this.coordinate.y + this.h}`;
    console.log(
      `Dot1 = ${dot1} \n Dot2 = ${dot2} \n Dot3 = ${dot3} \n Dot4 = ${dot4}`
    );
  }
  line() {
    let dot1 = `${this.coordinate.x}, ${this.coordinate.y}`;
    let dot2 = `${this.coordinate.x + this.w}, ${this.coordinate.y}`;
    let dot3 = `${this.coordinate.x }, ${this.coordinate.y + this.h}`;
    let dot4 = `${this.coordinate.x + this.w}, ${this.coordinate.y + this.h}`;
    console.log(
      `Line1 = ${dot1} to ${dot2} \n Line2 = ${dot2} to ${dot4} \n Line3 = ${dot4} to ${dot3} \n Line4 = ${dot3} to ${dot1}`
    );
  }
}
