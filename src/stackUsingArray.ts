// interface
interface IStack<Type> {
    push(item: Type): void 
    pop(): Type | undefined 
    peek(): Type | undefined
    max(): Type | undefined
}


// class 
class Stack<Type> implements IStack<Type> {
    // private 
    stack : Type[]
    // private 
    maxStack : Type[]

    constructor() {
        this.stack = []
        this.maxStack = []
    }

    push(item: Type): void {
        let max: Type
        this.stack.push(item)
        
        if (this.stack.length === 1) {
            this.maxStack.push(item)
        } else {
            const currentMax = this.maxStack[this.maxStack.length - 1]
            
            if (item > currentMax) {
                // item is new max 
                max = item
            } else {
                max = currentMax
            }
            this.maxStack.push(max)
        }

    }

    pop(): Type | undefined{
        this.maxStack.pop()
        return this.stack.pop()
    }

    peek(): Type | undefined {
        return this.stack[this.stack.length - 1]
    }

    max(): Type | undefined {
        return this.maxStack[this.maxStack.length - 1]
    }
}


// new stack 
// const fooStack = new Stack

// test stack 

// Test the Stack implementation
console.log("Starting tests...");

// Create a new stack instance for numbers
const numberStack = new Stack<number>();

// Push elements onto the stack and test max
console.log("Pushing 5 onto the stack.");
numberStack.push(5);
console.log(`Expected max: 5, Actual max: ${numberStack.max()}`);

console.log("Pushing 1 onto the stack.");
numberStack.push(1);
console.log(`Expected max: 5, Actual max: ${numberStack.max()}`);

console.log("Pushing 10 onto the stack.");
numberStack.push(10);
console.log(`Expected max: 10, Actual max: ${numberStack.max()}`);

console.log("Pushing 7 onto the stack.");
numberStack.push(7);
console.log(`Expected max: 10, Actual max: ${numberStack.max()}\n`);

console.log(`stack:    ${numberStack.stack}`);
console.log(`maxStack: ${numberStack.maxStack} \n`);

// Peek at the top element
console.log(`Expected peek: 7, Actual peek: ${numberStack.peek()}`);

// Pop elements and test max after each pop
console.log("Popping from the stack.");
numberStack.pop();
console.log(`Expected max: 10, Actual max: ${numberStack.max()}`);

console.log("Popping from the stack.");
numberStack.pop();
console.log(`Expected max: 5, Actual max: ${numberStack.max()}`);

console.log("Popping from the stack.");
numberStack.pop();
console.log(`Expected max: 5, Actual max: ${numberStack.max()}`);

// Pop the last element and test max
console.log("Popping the last element from the stack.");
numberStack.pop();
console.log(`Expected max: undefined, Actual max: ${numberStack.max()}`);

console.log("Tests completed.");



