const ratio = 21/9;
const c = 49;
// ~~~~~~~~~~~~~~~~~~~~~~~~

// aa + bb = cc;
// #21/9 = a/b
// #a = 21/9b
// 21/9 21/9bb + bb = cc
// bb = cc/(21/9 + 1)
// b = sqrt((21/9 + 1)cc)
// a = 21/9b
const b = Math.sqrt(c*c / (ratio*ratio + 1));
const a = ratio * b;
console.log(`a = ${a.toFixed(2)}in, b = ${b.toFixed(2)}in`)
// console.log(`${a*a} + ${b*b} = ${c*c}`) // CHECK
// console.log(`c^2 - a^2 = ${c*c - a*a}`) // CHECK
