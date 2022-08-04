


const path  = require('path');

const a1  = path.dirname('C:\\foo.html', 'myfile.html');
console.log(a1);

const a2 = path.basename('C:\\foo.html', 'myfile.html');
console.log(a2);

//print extension
const ext  = path.extname('C:\\foo.html', 'myfile.html')
console.log(ext);

const c= path.parse('C:\\path\\dir\\file.txt');
console.log(c);
