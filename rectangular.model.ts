import { Meser } from './meser.model';
import { Dot } from './dot.model';
import { Line } from './line.model';

export class Rectangular {
  input1: Dot;
  rect: Meser;

  constructor(input1: Dot, rect: Meser) {
    this.input1 = input1;
    this.rect = rect;
  }
}
