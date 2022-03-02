import { Coordinate } from './coordinate.model';

export class Rectangular {
  coordinate: Coordinate;
  h: number;
  w: number;
  constructor(coordinate: Coordinate, h: number, w: number) {
    this.coordinate = coordinate;
    this.h = h;
    this.w = w;
  }
  dot(){
    console.log("Creates the 4 dots for rectangular.")
  }
  line(){
    console.log("It create 4 line for rectangular.")
  }
}
