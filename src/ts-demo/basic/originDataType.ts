/* 原始数据类型 */

/**
 * @布尔值
 */

/**
 * @数值
 */
let createdByBoolean: boolean = Boolean(1);
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// console.log(
// 	createdByBoolean,
// 	decLiteral,
// 	hexLiteral,
// 	binaryLiteral,
// 	octalLiteral,
// 	notANumber,
// 	infinityNumber
// );

/**
 * @字符串
 */
let myName: string = "SEA9";
let myAge: number = 25;

let setence: string = `Hello, my name is ${myName}. I'll be ${
	myAge + 1
} years old next month.`;

/**
 * @空值
 */

function alertName(): void {
	alert("My name is Tom");
}

let unusable: void = undefined;

// Null 和 Undefined
let u: undefined = undefined;
let n: null = null;

let j: void;
let num: number = j;
