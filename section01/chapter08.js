//1. null 병합 연산자
// null,undefined 가 아닌 값을 찾아내는 연산자
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var3 ?? var2;

//2. typeof 연산자
let var7 = 1;
var7 = "hello";
var7 = true;

let t1 = typeof var7;
console.log(t1);

//3. 삼항 연산자
// 조건식을 이용해서 참,거짓일 때의 값을 다르게 반환
let var8=10;
let res = var8 % 2 === 0 ? "짝" : "홀";
console.log(res);