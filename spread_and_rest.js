// Spread and rest
//
null, undefined, true, false

// Gather the "rest" of the arguments
const mul = (...nums) => 
    nums.reduce((total, current) => total * current, 1);


console.log(mul(5, 20))
//
console.log(mul(2,4,6,10,34.5));
//
// // Spread
// const primary_colors = ['red', 'green', 'blue'];
// const more_colors = ['yellow', 'orange', ...primary_colors];
// console.log('more_colors', more_colors);

// Spread on objects
// const baby_matthew = {age: 1, teeth: 2, father: 'Dad', mother: 'Mum'};
// const adult_matthew = {...baby_matthew, biceps: true, age: 22, teeth: 32, };
// console.log('adult_matthew', adult_matthew)


