// Import stylesheets
import './style.css';
import { Rectangular } from './rectangular.model';
import { Dot } from './dot.model';
import { Meser } from './meser.model';
import { Line } from './line.model';


// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let point1 = new Dot(5, 5);

let height1 = new Line(15);
let width1 = new Line(7);
let me = new Meser(height1, width1);

let rectangularObj = new Rectangular(point1, me);

console.log(rectangularObj);
