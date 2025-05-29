// Q.1 - Add two numbers

let a = 100;
let b=44;
console.log(a, '+', b, '=', a + b);

// Q.2 - Find if the conditions are obeyed or not?

console.log(a, '<', 10, 'and', a, '>', b, '=', a < 10 && a > b);

// Q.3 - Check the conditions

console.log(a,'and',b,'both divisible by 10?',a%10==0 && b%10==0);
console.log(a, 'and', b, 'any one of these divisible by 10?', a % 10 == 0 || b % 10 == 0);

// Q.4 - First digit of a four digit number

console.log('first digit of 3456 is',parseInt(3456/1000));
console.log('first digit of 3456 is', Math.floor(3456 / 1000));

// Q.5 - Last digit of a four digit number

console.log('last digit of 3456 is', 3456 % 10);

// Q.6 - Find the remainder

let c=450;
let d=8;
console.log(c, '%', d, '=', c % d);

// Q.7 - Multiply two numbers

console.log(c, '*', d, '=', c * d);

// Q.8 - Marks calculator

m=85;
p=80;
c=82;
console.log('maths ',85);
console.log('physics ',80);
console.log('chemistry ',82);
console.log('total marks =',m+p+c);
console.log('average =',(m+p+c)/3);


