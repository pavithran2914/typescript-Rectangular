import { Dot } from './dot.model';
import { Line } from './line.model';
import { Coordinate } from './coordinate.model';


export class Rectangular {
  dot: Dot;
  rect: Coordinate;

  constructor(dot: Dot, rect: Coordinate) {
    this.dot = dot;
    this.rect = rect;
    this.rectang();
  }
  rectang(){
    console.log(`Top = ${this.rect.w} \n Left = ${this.rect.h} \n Right = ${this.rect.h} \n Bottom = ${this.rect.w}`);
  }
}
