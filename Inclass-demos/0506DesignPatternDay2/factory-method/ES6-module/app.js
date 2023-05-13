/** This app.js - think as another system */
import Factory from './factory-method-demo.js';

let fulltime = Factory.createEmployee('fulltime');
let parttime = Factory.createEmployee('parttime');
let temporary = Factory.createEmployee('temporary');
console.log(fulltime);
console.log(parttime);
console.log(temporary);