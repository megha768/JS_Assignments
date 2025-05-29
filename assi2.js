// Q.1 - Find Grades

let m = 45;
switch (true) {
    case m >= 0 && m <= 10:
        console.log("grade E");
        break;
    case m <= 20:
        console.log("grade D");
        break;
    case m <= 30:
        console.log("grade C");
        break;
    case m <= 40:
        console.log("grade B");
        break;
    case m <= 50:
        console.log("grade A");
        break;
    default:
        console.log("invalid marks");
}

// Q.2 - Get Value

let c = 'e';
switch (true) {
    case c == 'p' || c == 'P':
        console.log('PrepBytes');
        break;
    case c == 'z' || c == 'Z':
        console.log('Zenith');
        break;
    case c == 'e' || c == 'E':
        console.log('Expert Coder');
        break;
    case c == 'd' || c == 'D':
        console.log('Data Structure');
        break;
}

// Q.3 - Maximum out of three numbers

a = 4;
b = 10;
c = 8;
if (a > b && a > c && b!=c) {
        console.log(a, 'is greater than', b, 'and', c);
}
else if (b > a && b > c && a!=c) {
    console.log(b, 'is greater than', a, 'and', c);
}
else if (c > a && c > b && a!=b) {
    console.log(c, 'is greater than', a, 'and', b);
}
else if (a == b && a == c) {
    console.log(a, b, c, 'are equal');
}
else {
    console.log(a, b, c, 'two numbers are equal');
}

// Q.4 - Second smallest number

x = 4;
y = 10;
z = 8;
if (x != y && x != z && y != z) {
    if (x > y && x < z) {
        console.log(x, 'is the second smallest number among', x, y, z);
    }
    else if (y > x && y < z) {
        console.log(y, 'is the second smallest number among', x, y, z);
    }
    else {
        console.log(z, 'is the second smallest number among', x, y, z);
    }
}
else if (x == y && x == z) {
    console.log(x, y, z, 'are equal');
}
else {
    console.log('any two are equal among', x, y, z);
}

// Q.5 - Triangle is acute or obtuse

p =40;
q =75;
r =65;
if (p < 90 && q < 90 && r < 90 && p + q + r == 180) {
    console.log('this is an acute triangle with angles', p, q, r);
}
else if (((p > 90 && q < 90 && r < 90) || (p < 90 && q > 90 && r < 90) || (p < 90 && q < 90 && r > 90)) && p + q + r == 180 ) {
    console.log('this is an obtuse triangle with angles', p, q, r);
}
