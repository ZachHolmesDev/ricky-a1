function bracketChecker(string: string): boolean {
    
    
    
    return true
} 


const stringsToCheck: string[] = [
    "({[]})",       // Balanced and nested correctly
    "(}[)",         // Balanced but not nested correctly
    "[][][][]",     // Single type of brackets, balanced
    "({[()]})",     // Mixed types, balanced
    "([{}])}",      // Unbalanced, missing a closing bracket
    "]{[{}]}",      // Unbalanced, missing an opening bracket
    "",             // Empty string (should be considered correct as there are no unbalanced brackets)
    "[{({({[{}]}())})}]", // Long balanced string
    "[{({({[{}](()})})}]", // Long unbalanced string
    "}{[()]}{"      // Starts and ends incorrectly
]
