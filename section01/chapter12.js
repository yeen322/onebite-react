// 함수 선언식
function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA); // 함수 자체를 값으로 지정할 수 있음

let varB = function () {
  conosole.log("funB");
};
console.log(varB);

// 화살표 함수
let varC = () => {
  return 1;
};
console.log(varC());
