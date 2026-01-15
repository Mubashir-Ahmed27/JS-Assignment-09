// 1. Show Date
function showDate() {
    document.getElementById('out1').innerHTML = new Date();
}

// 2. Full Name Greeting
function greetUser() {
    const firstName = prompt("Enter First Name:");
    const lastName = prompt("Enter Last Name:");
    document.getElementById('out2').innerHTML = `Hello, ${firstName} ${lastName}!`;
}

// 3. Add Two Numbers
function addNumbers() {
    const num1 = +prompt("Enter first number:");
    const num2 = +prompt("Enter second number:");
    document.getElementById('out3').innerHTML = `Sum: ${num1 + num2}`;
}

// 4. Calculator
function calculator() {
    const n1 = +prompt("Num 1:");
    const n2 = +prompt("Num 2:");
    const op = prompt("Operator (+, -, *, /):");
    let res;
    if (op === '+') res = n1 + n2;
    else if (op === '-') res = n1 - n2;
    else if (op === '*') res = n1 * n2;
    else if (op === '/') res = n1 / n2;
    document.getElementById('out4').innerHTML = `Result: ${res}`;
}

// 5. Square Number
function squareNum() {
    const n = +prompt("Number to square:");
    document.getElementById('out5').innerHTML = `Square: ${n * n}`;
}

// 6. Factorial
function factorial() {
    let n = +prompt("Enter number:");
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    document.getElementById('out6').innerHTML = `Factorial: ${res}`;
}

// 7. Counting
function counting() {
    const start = +prompt("Start:");
    const end = +prompt("End:");
    let res = "";
    for (let i = start; i <= end; i++) res += i + " ";
    document.getElementById('out7').innerHTML = res;
}

// 8. Hypotenuse
function calculateHypotenuse() {
    const base = +prompt("Base:");
    const perp = +prompt("Perpendicular:");
    const hyp = Math.sqrt(Math.pow(base, 2) + Math.pow(perp, 2));
    document.getElementById('out8').innerHTML = `Hypotenuse: ${hyp.toFixed(2)}`;
}

// 9. Rectangle Area
function rectangleArea() {
    const w = +prompt("Width:");
    const h = +prompt("Height:");
    document.getElementById('out9').innerHTML = `Area: ${w * h}`;
}

// 10. Palindrome
function checkPalindrome() {
    const str = prompt("Enter word:").toLowerCase();
    const rev = str.split('').reverse().join('');
    const isPal = str === rev;
    document.getElementById('out10').innerHTML = isPal ? "It's a Palindrome!" : "Not a Palindrome";
}

// 11. Capitalize Words
function capitalizeWords() {
    const str = prompt("Enter a sentence:");
    const res = str.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
    document.getElementById('out11').innerHTML = res;
}

// 12. Longest Word
function longestWord() {
    const str = prompt("Enter a sentence:");
    const words = str.split(' ');
    let longest = words[0];
    for (let w of words) if (w.length > longest.length) longest = w;
    document.getElementById('out12').innerHTML = `Longest: ${longest}`;
}

// 13. Count Letter
function countLetter() {
    const str = prompt("Enter string:");
    const letter = prompt("Letter to count:");
    const count = str.split(letter).length - 1;
    document.getElementById('out13').innerHTML = `Occurrences: ${count}`;
}

// 14. Circle
function circle() {
    const r = +prompt("Enter Radius:");
    const circum = (2 * Math.PI * r).toFixed(2);
    const area = (Math.PI * r * r).toFixed(2);
    document.getElementById('out14').innerHTML = `Circum: ${circum}, Area: ${area}`;
}