// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입
function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
// a = 1;
// a = "hello";
// a = {};
a = undefined; // void 타입에는 undefined만 할당 가능

// never
// never -> 절대 발생하지 않는 타입
// 함수가 never를 반환하면 그 함수는 절대 반환하지 않는다. (불가능, 모순)
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
