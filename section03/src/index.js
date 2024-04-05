/**
const { add, sub } = require("./math");

console.log(add(1,2));
console.log(sub(1,2));
 */

//import multiply from "./math.js";
//import { add, sub } from "./math.js" // ES모듈 시스템을 사용할 경우 확장자까지 같이 적어줘야 한다.
import multiply, { add, sub} from "./math.js"; 
//같은 모듈에서 가져온다면 한번에 합쳐서 사용도 가능

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

/**
console.log(add(1,2));
console.log(sub(1,2));
console.log(multiply(1,2));
 */