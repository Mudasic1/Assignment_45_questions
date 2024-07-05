// 24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to
// try more comparisons, write more tests. Have at least one True and one False result for each of the
// following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
console.log("apple" == "apple");
console.log("APPLE".toLocaleLowerCase() == "Apple");
// Numerical tests
console.log(5 < 2);
console.log(5 > 2);
console.log(10 <= 2);
console.log(10 >= 2);
// Test using "and" and "or" operators
console.log(5 > 10 && 5 == 5);
console.log(true || false);
// • Test whether an item is in a array
// • Test whether an item is not in a array
let item = ["apple", "grapes", "banana"];
console.log(item.includes("apple"));
console.log(item.includes("mango"));
export {};
