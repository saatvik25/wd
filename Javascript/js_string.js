// string

let text = "saatvik";
let length = text.length;
console.log(length);

let str = "Apple,Banana,Kiwi";
let part = str.slice(7, 13);
console.log(part);

// If you omit the second parameter, the method will slice out the rest of the string:
let part1 = str.slice(7);
console.log(part1);


let str1 = "Please locate where 'locate' occurs!";
console.log(str1.indexOf("locate"));
