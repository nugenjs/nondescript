let radius = 3800; // in mm
let screenWidthIn = 31.25;


let screenMM = screenWidthIn * 25.4; 

// Circumference
let circ = 2 * Math.PI * radius;

// Angle from screen width
// L/360 = screenMM/circ
// L = 360 * 
let angle = 360 * screenMM / circ;

console.log(`angle = ${angle}`)
console.log(11.968*circ/360)
console.log(screenMM)

// x=r∗sin(θ),y=r∗cos(θ)
let x0 = radius * Math.sin(0);
let y0 = radius * Math.cos(0);

let xH = radius * Math.sin(angle / 2);
let yH = radius * Math.cos(angle / 2);

let xL = radius * Math.sin(angle);
let yL = radius * Math.cos(angle);

console.log(`x0 = ${x0}`);
console.log(`y0 = ${y0}`);

console.log(`xH = ${xH}`);
console.log(`yH = ${yH}`);

console.log(`xL = ${xL}`);
console.log(`yL = ${yL}`);


let xMid = (x0 + xL) / 2
let yMid = (y0 + yL) / 2

let xDistToH = Math.abs(xH - xMid);
let yDistToH = Math.abs(yH - yMid);

console.log(`xMid = ${xMid}`)
console.log(`yMid = ${yMid}`)

console.log(`xDistToH = ${xDistToH}`)
console.log(`yDistToH = ${yDistToH}`)


let dist = Math.sqrt(xDistToH*xDistToH + yDistToH*yDistToH)


console.log(`dist = ${dist}`)
console.log(`dist = ${dist / 25.4}`)