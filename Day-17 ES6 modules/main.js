// console.log(publicProps.value);

// import { publicVariable } from "./somefile.js";
// console.log(publicVariable);

// import defaultExport, { usefulFunction, anotherVariable } from "./somefile.js";
// import { anotherUsefulFunction } from "./anotherfile.js";
import { usefulFunction as usefullFromAnother } from "./anotherfile.js";
import * as everything from "./somefile.js";
console.log(everything);
// defaultExport();
everything.usefulFunction();
usefullFromAnother();
everything.default();
console.log({ another: everything.anotherVariable });
