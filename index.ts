// Import stylesheets
import './style.css';
import { Rectangular } from './rectangular.model';
import { Dot } from './dot.model';
import { Line } from './line.model';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let point1 = new Dot(2, 2);
let point2 = new Dot(8, 2);
let point3 = new Dot(2, 4);
let point4 = new Dot(8, 4);

let line1 = new Line(point1, point2);
let line2 = new Line(point2, point4);
let line3 = new Line(point4, point3);
let line4 = new Line(point3, point1);

let rectangularObj = new Rectangular(line1, line2, line3, line4);

console.log(rectangularObj);
