//Module import file
//Module : mathOperationsM.js


// default import
//import multiply from "./mathOperationsM";

// some times defalut import does n't work without .js extension
import multiply from "./mathOperationsM.js";

// Note : mostly follow name with .js extension

console.log(multiply(3, 4)); // 12

// named import
import { add, subtract } from "./mathOperationsM.js";

console.log(add(3, 4)); // 7
console.log(subtract(3, 4)); // -1

