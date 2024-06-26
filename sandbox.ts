/*
// arrays
let names = ['luigi',  'mario', 'yoshi'];

names.push('toad');
// names.push(3);
//names[0] = 3;


let numbers = [10, 20, 30, 40];

numbers.push(25);
//numbers.push('shaun');
//numbers[1] = 'shaun'

let mixed = ['ken', 4, 'chun-li', 8, 9];

mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;

// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};

ninja.age = 40;
ninja.name = 'ryu';
//ninja.age= '30'
//ninja.skills = ['fighting', 'sneaking']

ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
}
*/

//explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

//age = 'luigi'
age = 30;

//isLoggedIn = 25;
isLoggedIn = true;


// arrays
let ninjas: string[] = [];

ninjas.push('shaun');

// union types
let mixed: (string|number)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);


// objects