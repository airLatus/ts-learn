import sayHi, { name, sum } from "./myModule";

import * as fs from "fs";

console.log("name是：", name);

console.log("sum：", sum(3, 1));

sayHi();

fs.readFileSync("./");
