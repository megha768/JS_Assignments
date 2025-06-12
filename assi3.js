// Q.1 - Count the vowels and consonants

let s = 'PrepBytes';
let v = 0;
let c = 0;
for (let i = 0; i < s.length; i++) {
    if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
        v++;
    }
    else {
        c++;
    }
}
console.log('total vowels =', v);
console.log('total consonants =', c);

// Q.2 - Split the string

let s1 = 'I am a Software Developer';
console.log(s1.split(' '));

// Q.3 - String Replace

let s3 = 'Hi, I am You';
console.log(s3.replace('You', 'Prepbytes'));

// Q.4 - Match the strings

let str1 = 'Prepbytes';
let str2 = 'Prepbytes';
if (str1 === str2) {
    console.log('Yes');
}
else {
    console.log('No');
}

// Q.5 - Reverse the string

let st = 'Prepbytes';
let st1='';
for (let i = st.length-1; i >= 0; i--) {
    st1 = st1 + st[i];
}
console.log(st1);

// Q.6 - Join Strings

let st2 = 'PrepBytes Technologies';
console.log(st2.replace(' ', ''));

// Q.7 - Find length

let st3 = 'PrepBytes';
let count = 0;
for (let i = 0; i < st3.length; i++) {
    count++;
}
console.log('length of ', st3, 'is', count);

// Q.8 - Concatenate the strings

let s4 = 'Prep';
let s5 = 'bytes';
let s6 = s4 + s5;
console.log(s6);

// Q.9 - Count Characters

let st4 = 'AbaDdAD';
let a = [];
let c1 = 0;
let c2 = 0;
for (let i = 0; i < st4.length; i++) {
    if (st4[i] == 'A') {
        c1++;
    }
    else if (st4[i] == 'D') {
        c2++
    }
}
a.push(c1);
a.push(c2);
console.log(a);

// Q.10 - Palindrome Check

let str3 = 'naman';
let st5 = '';
for (let i = str3.length - 1; i >= 0; i--) {
    st5 = st5 + str3[i];
}
if (str3 == st5) {
    console.log(str3, 'true');
}
else {
    console.log(str3, 'false');
}

// Q.11 - Count the heads

let str5 = 'ejhguhgngfyf';
let arr = [];
for (let i = 0; i < str5.length; i++) {
    let c = 0;
    let a = str5[i];
    if (a==arr.filter((b)=>b==a)) {
        continue;
    }
    for (let j = 0; j < str5.length; j++) {
        if (a == str5[j]) {
             c++;
        }
    }
    if (c > 1) {
        arr.push(a, c);
    }
}
console.log(arr.toString());

// Another Way to do this

let str8 = 'ejhguhgngfyf';
let str9 = '';
for (let i = 0; i < str8.length; i++) {
    let c = 0;
    let a = str8[i];
    if (str9.indexOf(a) == -1) {
        for (let j = 0; j < str8.length; j++) {
            if (a == str8[j]) {
                c++;
            }
        }
    }
    if (c > 1) {
        str9 = str9 + a + c
    }
}
console.log(str9);

// Q.12 - Find the winner

let str7 = 'ADDDDAAADA';
let ca = 0;
let cd = 0;
for (let i = 0; i < str7.length; i++) {
    if (str7[i] == 'A') {
        ca++
    }
    else {
        cd++;
    }
}
if (ca > cd) {
    console.log('Aditya is winner');
}
else if (ca == cd) {
    console.log('Draw');
}
else {
    console.log('Danish is winner');
}


