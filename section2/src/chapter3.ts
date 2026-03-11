// object 타입 : 객체긴 한데 그 이상은 몰라
// user.id; (x)

// 명목적 타입 시스템 : 타입 이름을 기반으로 타입을 구분하는 시스템. 예시: enum, class
// 객체 리터럴 타입 { id: nubmer, name: string } -> 구조적 타입 시스템 = Property Based Type System
let user: {
  id?: number; // ?: optional property
  name: string;
} = {
  id: 1,
  name: "조성민",
};

// let dog: {
//   name: string;
//   color: string;
// } = {
//   name: "돌돌이",
//   color: "brown",
// };

let config: {
  readonly apiKey: string; // readonly : 절대 값이 변하면 안되는 읽기 전용 프로퍼티
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked";
