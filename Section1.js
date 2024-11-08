function doubleNumbersIfEven(arr){
		return arr.map(num => (num%2===0 ? num*2 : num));

	let input =prompt(“Enter the number for array”);
let array=input.split(“,).map(obj => obj.trim());
const output=doubleNumbersIfEven(array);
console.log(output);
