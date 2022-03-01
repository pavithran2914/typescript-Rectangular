// Import stylesheets
import './style.css';
import { Rectangular } from './rectangular.model';
import { Coordinate } from './coordinate.model';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let point = new Coordinate(5, 5);

let rectangularObj = new Rectangular(point, 10, 20);

console.log(rectangularObj);
