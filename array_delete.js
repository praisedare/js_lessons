// Array Deletion 

// Shift
let original = [1,2,3,4,5];

let arr = [...original]
delete arr[0]
console.log('array', arr, 'array.length', arr.length)

let arr2 = [...original];
arr2.shift();
console.log('array', arr2, 'array.length', arr2.length)

// Splice
let arr3 = [...original];
arr3.splice(2, 1, 10, 12, 14, 16)
console.log('array', arr3, 'array.length', arr3.length)

