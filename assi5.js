// Q.1 - Using a for loop output the elements in reverse order

let a = [43, 'what', 9, 'true', 'can not', 'false', 'be', 3, 'true'];
for (let i = a.length-1; i >= 0; i--) {
    console.log(a[i]);
}

// Q.2 - Get the sum of two arrays

let a1 = [1,2,3,4,5,6,7];
let a2 = [7, 8, 9, 9, 6];
sum_a1 = 0;
sum_a2 = 0;
for (let i = 0; i < a1.length; i++) {
    sum_a1 += a1[i];
}
for (let i = 0; i < a2.length; i++) {
    sum_a2 += a2[i];
}
console.log('sum of arrays =', sum_a1 + sum_a2);

// Q.3 - Iterate through all numbers from 1 to 45. Print following:
// For multiple of 3 print 'Fizz'
// For multiple of 5 print 'Buzz'
// For multiple of 3 and 5 print 'FizzBuzz'

for (let i = 1; i <= 45; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    }
    else if (i % 3 == 0) {
        console.log('Fizz');
    }
    else if (i % 5 == 0) {
        console.log('Buzz');
    }
}

// Q.4 - print the pyramid of *

for (let i = 0; i < 5; i++) {
    let str = '';
    for (let j = 0; j <= i; j++) {
        str += '*';
    }
    console.log(str);
}