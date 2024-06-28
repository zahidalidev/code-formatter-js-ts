function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    if (typeof b !== 'number') {
        throw new Error('Invalid input: b must be a number');
    }
    return b;
}

function multiply_AndLog(a, b) {
    const result = a * b;
    console.log(
        `The result of multiplying ${a} and ${b} is ${result}, which is a really long log message to test the max-len rule of 80 characters.`
    );
    return result;
}

const num1 = 10;
const num2 = 5;

console.log(`Adding ${num1} and ${num2} gives:`, add(num1, num2));
console.log(`Subtracting ${num2} from ${num1} gives:`, subtract(num1, num2));
multiply_AndLog(num1, num2);
