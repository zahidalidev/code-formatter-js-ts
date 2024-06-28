function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    if (typeof b !== 'number') {
        throw new Error('Invalid input: b must be a number');
    }

    return b;
}

function multiplyAndLog(a: number, b: number): number {
    // This should trigger an error
    const result = a * b;
    console.log(
        `The result of multiplying ${a} and ${b} is ${result}, which is a really long log message to test the max-len rule of 80 characters.`
    );

    return result;
}

class Apple {
    // This should not trigger an error
    type: string;

    constructor() {
        this.type = 'fruit';
    }

    getType(): string {
        return this.type;
    }
}

const fruitCorrect = new Apple();

const num1 = 10;
const num2 = 5;
const num3 = 5;

console.log(`Adding ${num1} and ${num2} gives:`, add(num1, num2));
console.log(`Subtracting ${num2} from ${num1} gives:`, subtract(num1, num2));
console.log('Fruit Correct', fruitCorrect.type);
multiplyAndLog(num1, num2); // This should also trigger an error
