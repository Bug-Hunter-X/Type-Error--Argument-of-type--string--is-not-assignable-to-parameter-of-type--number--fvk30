function add(a: number | string, b: number | string): number {
  if (typeof a === 'string' && typeof b === 'string'){
    return parseFloat(a) + parseFloat(b);
  } else if (typeof a === 'number' && typeof b === 'number'){
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'number') {
    return parseFloat(a) + b; 
  } else {
    return a + parseFloat(b);
  }
}

let result1 = add(1, 2); // Returns 3
let result2 = add("1", 2); // Returns 3
let result3 = add(1, "2"); // Returns 3
let result4 = add("1", "2"); // Returns 3