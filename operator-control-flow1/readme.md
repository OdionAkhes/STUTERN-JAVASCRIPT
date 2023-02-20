1.

1QList the symbols that for each of the below Javascript operators

1A Arithmetic Opeators-
-Addition Opeators (+)
-Subtraction Operator (-)
-Multiplication Operator(*)
-Division Operator(/)
-Modulus Operator(%)
-Increment Operator(++)
-Decrement Operator(--)

1B Assignment Operators 
- Assign Operator(=)
-Add and Assign(+=)
-Subtract and Assign(-=)
-Multiply and assign(*=)
-Divide and assign(/=)
 - Modulus and Assign(%=)


1C Comparison operators
- is Equal to (==)
- Equal and of same type (===)
-Not Equal to (!==)
-Greater thna or equal to(>=)
-Less than (<)
-Greater than or Equal to (>=)

1D Logival Operators
AND Operator(&&)
OR Operator(||)
NOT Operator(!)


1E Bitwise operators
&=, ^=, !=



2. 
// B - For each JavaScript Operator, write 2 examples

// Arithmetic Operators

let sum = 100 + 100;
let subtration = 270 - 34;
console.log(sum,subtration)

// Assignment Operators

let age = 24;
age += 10
console.log(age)
age -= 4;


// comparison Operator
let equal =  '20' == 20
let greater = 30 > 45
console.log(equal,greater)


//Logical Operator 
let and1 = (10 < 20 && 20 < 40);
let orOperator = (10 < 20 || 20 > 30)
console.log(and1, orOperator)

//Bitwise Operator
let x = 5 & 1;
let y = 5 | 1;

console.log(x, y)


// C.  a function that takes two numbers and returns the maximum of the two;
function max(a, b) {
    if (a > b) {
        return `${a} is greater than ${b}`
    } else if (b > a) {
        return `${b} is greater than ${a}`;
    } else {
        return a
    }
}
 
console.log(max(4,3))
console.log(max(98,311))



4.

for (let i = 1; i < 20; i += 7) {
  console.log(i)
}
The loop runs starting with an initial value of 1 with increment of 7 and stops if its greater than 20
Result - 1 8 15
