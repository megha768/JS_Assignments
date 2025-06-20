// Q.1 - Find the Product

let asize = parseInt(prompt('enter no. of array elements'));
let a = [];
for (let i = 0; i < asize; i++) {
    let e = parseInt(prompt('enter element'));
    a.push(e);
}
console.log(a);
let p = 1;
for (let i=0; i < a.length; i++) {
    p = p * a[i];
}
console.log('product =', p);

// Q.2 - Find the Sum

let asize1 = parseInt(prompt('enter no. of array elements'));
let a1 = [];
for (let i = 0; i < asize1; i++) {
    a1[i] = parseInt(prompt('enter element'));
}
console.log(a1);
let s = 0;
for (let i = 0; i < a1.length; i++) {
    s = s + a1[i];
}
console.log('sum =', s);

// Q.3 - Count Occurance

let a2 = [4, 3, 3, 3, 1, 2];
let e = 3;
c = 0;
for (let i = 0; i < a2.length; i++) {
    if (e == a2[i]) {
        c++;
    }
}
console.log('occurance of', e, '=', c);

// Q.4 - Even Odd

let a3 = [7, 1, 2, 3, 4, 0, 5, 6, 7];
let es = 0;
let os = 0;
let r = [];
for (let i = 0; i < a3.length; i++) {
    if (a3[i] == 0) {
        continue;
    }
    else if (a3[i] % 2 == 0) {
        es = es + a3[i];
    }
    else {
        os=os+a3[i]
    }
}
r.push(es,os);
console.log(r);

// Q.5 - Find whether the number is present or not

let asize2 = parseInt(prompt('enter no. of array elements'));
let a4 = [];
for (let i = 0; i < asize2; i++) {
    a4[i] = parseInt(prompt('enter element'));
}
console.log(a4);
let n = parseInt(prompt('enter number'));
let str='';
for (let i = 0; i < a4.length; i++) {
    if (n == a4[i]) {
        str = 'yes';
        break;
    }
    else {
        str = 'no' ;
    }
}
console.log(n, 'is present in the array', str);

// Q.6 - Higer Age

let ages = [6, 11, 23, 3, 45, 72, 68];
let res = [];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
        res.push(ages[i]);
    }
}
console.log(res);

// Q.7 - Increment the Array Elements

let arr = [5, 1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    ++arr[i];
}
console.log(arr);

// Q.8 - Pass or Fail

let math = [66, 17, 33, 67, 89, 77];
let result = '';
for (let i = 0; i < math.length; i++) {
    if (math[i] >= 32) {
        result = 'yes';
    }
    else {
        result = 'no';
        break;
    }
}
console.log(result);

// Q.9 - Min and Max

let arr1 = [110,555,111,77,112,456,99,222];
let max =arr1[0] ;
let min =arr1[0] ;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= max) {
        max = arr1[i];
    }
    if (arr1[i] < min) {
        min = arr1[i];
    }
}
console.log('max =', max);
console.log('min =', min);

// Q.10 - Unique Color Shirt

let color = [6, 3, 2, 4, 1, 2, 3];
let unique = [];
for (let i = 0; i < color.length; i++) {
    if (color.indexOf(color[i]) == color.lastIndexOf(color[i])) {
        unique.push(color[i]);
    }
}
console.log('there is', unique.length, 'unique color shirts', unique);



