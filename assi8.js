// Q.1 - Check whether the year is leap or not

let year = parseInt(prompt('enter the year'));
if (year % 4 == 0) {
    console.log(year, 'is a leap year');
}
else {
    console.log(year, 'is not a leap year');
}

// Q.2 - Reverse a number

let n =prompt('enter a number to reverse');
let n1 = '';
for (let i = n.length-1; i >= 0; i--) {
    n1 += n[i];
}
console.log('reverse of', n, '=', n1);

// Another way to do this

let n2 = parseInt(prompt('enter a number to reverse'));
let n5 = n2;
let n4 = 0;
while (parseInt(n2) > 0) {
    let digit = n2 % 10;
    n4 = n4 * 10 + parseInt(digit);
    n2 = n2 / 10;
}
console.log('reverse of', n5, '=', n4);

// Q.3 - Substring check

let str = 'hi this is prepbytes';
let substr = 'prepbytes';
if (str.includes(substr)) {
    console.log('yes');
}
else {
    console.log('no');
}

// Another way to do this

let str1 = 'hi this is prepbyte';
let substr1 = 'prepbytes';
if (str1.indexOf(substr1) != -1) {
    console.log('yes');
}
else {
    console.log('no');
}

// Q.4 - Perfect Number Check

let num = parseInt(prompt('enter a number to check if it is a perfect number'));
let sum = 0;
if (num == 0) {
    console.log('enter a valid integer');
}
for (let i = 1; i < num; i++) {
    if (num % i == 0) {
        sum += i;
    }
}
if (sum == num) {
    console.log(num, 'is a perfect number');
}
else {
    console.log(num, 'is not a perfect number');
}

// Q.5 - Find the smaller angle between hour and minute hand

let h = parseInt(prompt('enter hour in range 1 to 12'));
let m = parseInt(prompt('enter minute'));
if (h <= 0 && h > 12 && m < 0 && m > 60) {
    console.log('invalid input');
}

let angle = Math.min(Math.abs(((11 / 2) * m) - (30 * h)), 360 - Math.abs(((11 / 2) * m) - (30 * h)));
console.log('smaller angle between',h,'and',m,'=',angle);


