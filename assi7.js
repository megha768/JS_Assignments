// Q.1 - Print the Table

let n = parseInt(prompt('enter a number to print the table'));
for (let i = 1; i <= 10; i++) {
    console.log(n,'*',i,'=',n*i);
}

// Q.2 - Print Numbers

let n1 = parseInt(prompt('enter a number to print the series of numbers from 1 to n'));
let string = '';
for (let i = 1; i <= n1; i++) {
    string += i;
    string += ' ';
}
console.log('all the numbers from 1 to', n1, string);

// Q.3 - Check whether a number is prime or not

let n2 = parseInt(prompt('enter a number to check if prime or not'));
let c = 0;
for (let i = 1; i <= n2; i++) {
    if (n2 % i == 0) {
        c++;
    }
}
if (c == 2) {
    console.log('Yes');
}
else {
    console.log('No');
}

// Q.4 - Print the Pattern

let n3 = parseInt(prompt('enter a number to print the pattern'));
for (let i = 1; i <= n3; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        str += '*';
    }
    console.log(str);
}

// Q.5 - Print the odds

let n5 = parseInt(prompt('enter a number to print all the odd numbers between 2 to n'));
let s = '2';
for (let i = 2; i < n5; i++) {
    if (i % 2 != 0) {
        s += ' ';
        s+= i;
    }
}
console.log('all the odd numbers between 2 and',n5,'are', s);

// Q.6 - Find the sum of the digits of the given number

let n6 =prompt('enter a number to print the sum of the digits');
let sum = 0;
for (let i = 0; i < n6.length; i++) {
    sum = sum + parseInt(n6[i]);
}
console.log('sum of the digits of the',n6,'=',sum);

// Q.7 - Find Sum

let n7 = parseInt(prompt('enter a number to print the sum of even numbers from 1 to n'));
let sum1 = 0;
for (let i = 1; i <= n7; i++) {
    if (i % 2 == 0) {
        sum1 += i;
    }
}
console.log('sum of even numbers from 1 to',n7,'=', sum1);

// Q.8 - Find the number of digits

let n8 = prompt('enter a number to print the number of digits');
let count = 0;
for (let i = 0; i < n8.length; i++) {
    count++;
}
console.log('number of digits in', n8, '=', count);

// Q.9 - Find the Fives

let n9 = '34565455';
let c2 = 0;
for (let i = 0; i <= n9.length; i++) {
    if (n9[i] == '5') {
        c2++;
    }
}
console.log('number of 5 in', n9, '=', c2);






