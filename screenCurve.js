const radius = 3800; // in mm
const screenWidthIn = 31.25;
// ~~~~~~~~~~~~~~~~~~~~~~~~


const screenMM = screenWidthIn * 25.4; 

// Circumference
const circ = 2 * Math.PI * radius;

// Angle from screen width
// L/360 = screenMM/circ
// L = 360 * 
const angle = 360 * screenMM / circ;

console.log(`angle = ${angle}`)
console.log(11.968*circ/360)
console.log(screenMM)

// x=r∗sin(θ),y=r∗cos(θ)
const x0 = radius * Math.sin(0);
const y0 = radius * Math.cos(0);

const xH = radius * Math.sin(angle / 2);
const yH = radius * Math.cos(angle / 2);

const xL = radius * Math.sin(angle);
const yL = radius * Math.cos(angle);

console.log(`x0 = ${x0}`);
console.log(`y0 = ${y0}`);

console.log(`xH = ${xH}`);
console.log(`yH = ${yH}`);

console.log(`xL = ${xL}`);
console.log(`yL = ${yL}`);


const xMid = (x0 + xL) / 2
const yMid = (y0 + yL) / 2

const xDistToH = Math.abs(xH - xMid);
const yDistToH = Math.abs(yH - yMid);

console.log(`xMid = ${xMid}`)
console.log(`yMid = ${yMid}`)

console.log(`xDistToH = ${xDistToH}`)
console.log(`yDistToH = ${yDistToH}`)


const dist = Math.sqrt(xDistToH*xDistToH + yDistToH*yDistToH)


console.log(`dist = ${dist}`)
console.log(`dist = ${dist / 25.4}`)