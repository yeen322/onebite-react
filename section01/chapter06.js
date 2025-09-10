// 형 변환
// 1. 묵시적 형 변환 (js엔진이 알아서 형 변환)

let num = 10;
let str= "20";
const result = num + str;
console.log(result); //1020

// 2. 명시적 형 변환 (프로그래머 내장함수 등을 이용 -> 직접 형 변환)
// 문자열 -> 숫자
let str1="10";
let strToNum1 = Number(str1);
console.log(typeof strToNum1); // number

let str2="2개";
let strToNum2 = parseInt(str2);
console.log(typeof strToNum2); // number

// 숫자 -> 문자열
let num1 = 20;
let numToSttr1 = String(num1);
console.log(numToSttr1 + "입니다.");
