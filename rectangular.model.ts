import { Meser } from './meser.model';
import { Dot } from './dot.model';

export class Rectangular {
  input1: Dot;
  input2: Meser;

  constructor(input1: Dot, input2: Meser) {
    this.input1 = input1;
    this.input2 = input2;
  }
}
