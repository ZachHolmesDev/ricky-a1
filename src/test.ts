// interface Point {
//     x : number
//     y : number
// }

// function logPoint(p: Point) { 
//     console.log(`${p.x}, ${p.y}`)
// }

// const point : Point = {x : 12, y : 34}

// logPoint(point)



// const point3 = { x: 12, y: 26, z: 89 };
// logPoint(point3); // logs "12, 26"
 
// const rect = { x: 33, y: 3, width: 30, height: 80 };
// logPoint(rect); // logs "33, 3"
 
// const color = { hex: "#187ABF" };
// // logPoint(color);


// class VirtualPoint {
//     x: number;
//     y: number;
   
//     constructor(x: number, y: number) {
//       this.x = x;
//       this.y = y;
//     }
//   }
   
//   const newVPoint = new VirtualPoint(13, 56);
//   logPoint(newVPoint); // logs "13, 56"

//   interface Backpack<Type> {
//     add: (obj: Type) => void;
//     get: () => Type;
//   }

// // This line is a shortcut to tell TypeScript there is a
// // constant called `backpack`, and to not worry about where it came from.
// declare const backpack: Backpack<string>;

// // object is a string, because we declared it above as the variable part of Backpack.
// const object = backpack.get();

// // Since the backpack variable is a string, you can't pass a number to the add function.
// // backpack.add(23);


// type openBracket = "(" | "[" | "{"
// type closedBracket = ")" | "]" | "}"


// const a = "o"

// if (typeof a === openBracket)