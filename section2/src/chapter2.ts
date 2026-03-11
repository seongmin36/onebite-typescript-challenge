// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "i'm", "krong"];

let boolArr: Array<boolean> = [true, false, true]; // '<>': 제네릭

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string | boolean)[] = [1, "hello", true];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3] (x)
// tup1 = ['1', '2'] (x)
let tup2: [number, string, boolean] = [1, "hello", true];
// tup2 = ["2", 1, true]; (x)
// tup2 = [1]; (x)

// 튜플은 배열 메서드 push()와 pop()을 사용할 수 있다.
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();

// 튜플을 사용하는 예시
const users: [string, number][] = [
  ["조성민", 1],
  ["김아무개", 2],
  ["이아무개", 3],
  ["박아무개", 4],
  // [5, "최아무개"],
];
