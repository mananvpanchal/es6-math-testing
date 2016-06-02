//var testModule = require('test-module');
//console.log(testModule);
//console.log(testModule.helloMsg());
//require('babel/register')({
//  "presets": ["es2015"]
//})
require('babel-register')({
	"presets": ["es2015"]
});
import { add, multiply, minus, divide } from 'es6-module';

console.log(add(3, 6));
console.log(minus(3, 6));
console.log(multiply(3, 6));
console.log(divide(3, 6));
