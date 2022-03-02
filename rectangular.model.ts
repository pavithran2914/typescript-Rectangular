import { Coordinate } from './coordinate.model';
import { Dot } from './dot.model';
import { Line } from './line.model';

export class Rectangular {
  coordinate: Coordinate;
  h: number;
  w: number;
  constructor(coordinate: Coordinate, h: number, w: number) {
    this.coordinate = coordinate;
    this.h = h;
    this.w = w;
    this.rect();
  }
  rect() {
    let point1 = new Dot(this.coordinate.x, this.coordinate.y);
    let point2 = new Dot(this.coordinate.x + this.w, this.coordinate.y);
    let point3 = new Dot(this.coordinate.x, this.coordinate.y + this.h);
    let point4 = new Dot(this.coordinate.x + this.w, this.coordinate.y + this.h);
    console.log('Creates the 4 dots for rectangular.',point1, point2, point3, point4);
    let line1 = new Line(point1, point2);
    let line2 = new Line(point2, point4);
    let line3 = new Line(point4, point3);
    let line4 = new Line(point3, point1);
    console.log('It create 4 line for rectangular.', line1, line2, line3, line4);
  }
}
