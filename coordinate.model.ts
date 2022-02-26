export class Coordinate {
   h: number;
   w: number;
  constructor(h: number, w: number) {
    this.h = h;
    this.w = w;
    this.rect();
  }
  rect(){
    console.log(`Top = ${this.w} \n Left = ${this.h} \n Right = ${this.h} \n Bottom = ${this.w}`);
  }
}
