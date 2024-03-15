interface INode<T> {
    value:T,
    previous?:INode<T>,
}


class StackLL<T> {
    public length: number;
    private head?:INode<T>;

    constructor() {
        this.head = undefined
        this.length = 0
    }

    push(item: T): void {
        const newNode = {value: item} as INode<T>;
        this.length++
        
        // if head undefined add new node to head 
        if (!this.head) {
            this.head = newNode
            return
        }
        // link new node to current head 
        newNode.previous = this.head
        // change head to point to the new head 
        this.head = newNode
    }
    
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1)
        const head = this.head as INode<T>

        if (this.length === 0) {
            this.head = undefined
            return head?.value
        }
        
        // point head to previous element
        this.head = head.previous

        // free mem in other lang here 

        return head.value
    }

    peek(): T | undefined {
        // if head return head if not return undefined 
        return this.head?.value
    }

    wipe(): void {
        this.head = undefined
        this.length = 0
    }
}


type openBracket = "(" | "[" | "{"
type closedBracket = ")" | "]" | "}"

// overly verbose isBracket functions cause learning TS 
function isOpenBracket(char: string): char is openBracket {
    return ["(", "[", "{"].includes(char);
};

function isClosedBracket(char: string): char is closedBracket {
    return [")", "]", "}"].includes(char);
};

const bracketMap: {[key in openBracket]: closedBracket} = {
    '(': ')',
    '[': ']',
    '{': '}',
} 

function bracketChecker(sequence: string): boolean {
    const bracketStack = new StackLL<string>()
    // check if string empty
    if (sequence.length === 0) {
        return true
    } else {
        // loop over the string 
        for (let i = 0; i < sequence.length; i++) {
            const currentBracket = sequence[i]

            // if bracket open push to stack
            if (isOpenBracket(currentBracket)) {                
                bracketStack.push(currentBracket)
                continue
            }

            // if bracket closed compare to top of stack 
            if (isClosedBracket(currentBracket)) {
                // if closed bracket and stack empty return false
                console.log(`found closed bracket : ${currentBracket} \nbracket stack length is ${bracketStack.length}`)

                if (bracketStack.length === 0) {
                    return false
                }
                // get last open bracket 
                const lastOpenBracket = bracketStack.pop() as openBracket
                // if bracket not match false otherwise all is well continue
                if (bracketMap[lastOpenBracket] != currentBracket) {
                    return false
                }
            }
        }
        return true
    }
} 


const stringsToCheck: string[] = [
    "({[]})",       // Balanced and nested correctly
    "(}[)",         // Balanced but not nested correctly : FALSE
    "[][][][]",     // Single type of brackets, balanced
    "({[()]})",     // Mixed types, balanced
    "([{}])}",      // Unbalanced, missing a closing bracket : FALSE
    "]{[{}]}",      // Unbalanced, missing an opening bracket : FALSE
    "",             // Empty string (should be considered correct as there are no unbalanced brackets) 
    "[{({({[{}]}())})}]", // Long balanced string
    "[{({({[{}](()})})}]", // Long unbalanced string : FALSE
    "}{[()]}{"      // Starts and ends incorrectly : FALSE
]

// test func over arr of str
for (let i = 0; i < stringsToCheck.length; i++) {
    console.log(`sequence "${stringsToCheck[i]}" is balanced : ${bracketChecker(stringsToCheck[i])}\n`)
}


