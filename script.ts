// Задание 1
const sumEvenNumbers = (numbers: number[]): number => {
  return numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
};
console.log("sumEvenNumbers([1, 2, 3, 4, 5, 6]) =", sumEvenNumbers([1, 2, 3, 4, 5, 6])); 

// Задание 2
interface StringToBooleanFunction {
  (input: string): boolean;
}
const isEmptyString: StringToBooleanFunction = (str) => str.length === 0;
console.log("isEmptyString('') =", isEmptyString(""));   
console.log("isEmptyString('hello') =", isEmptyString("hello")); 

// Задание 3
type CompareStrings = (a: string, b: string) => boolean;
const areStringsEqual: CompareStrings = (a, b) => a === b;
console.log("areStringsEqual('abc', 'abc') =", areStringsEqual("abc", "abc"));
console.log("areStringsEqual('abc', 'xyz') =", areStringsEqual("abc", "xyz")); 

// Задание 4
function getLastElement<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}
console.log("getLastElement([1, 2, 3]) =", getLastElement([1, 2, 3]));       
console.log("getLastElement(['a', 'b', 'c']) =", getLastElement(['a', 'b', 'c'])); 

// Задание 5
function makeTriple<T>(a: T, b: T, c: T): T[] {
  return [a, b, c];
}
console.log("makeTriple(1, 2, 3) =", makeTriple(1, 2, 3));            
console.log("makeTriple('x', 'y', 'z') =", makeTriple("x", "y", "z"));
