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

let rect = new Meser(15, 7);

let rectangularObj = new Rectangular(point1, rect);

console.log(rectangularObj);
