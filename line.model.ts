import { Dot } from './dot.model';
export class Line {
  start: Dot;
  end: Dot;
  constructor(start: Dot, end: Dot) {
    this.start = start;
    this.end = end;
  }
}
