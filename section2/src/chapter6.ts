// any
// 특정 변수의 타입을 확실히 모를 때
// 타입 검사를 다 통과하는 치트가 같은 타입인데, 런타임에서 에러가 발생한다
let anyVar: any = 10;
// anyVar = "hello";
// anyVar = () => {};
// anyVar.toUpperCase();
// anyVar.toFixed();

// let num: number = 10;
// num = anyVar;

// unknown
// any와 비슷하지만, 타입을 모를 때 사용하는 타입
let unknownVar: unknown = 10;
unknownVar = "hello";
unknownVar = () => {};

// 특정 타입의 메서드를 사용할 수 없음.
// 타입 정제를 통해 사용 가능
if (typeof unknownVar === "string") {
  unknownVar.toUpperCase();
}
if (typeof unknownVar === "number") {
  unknownVar.toFixed();
}
