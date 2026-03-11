// 타입 별칭 : Type Alias
type User = {
  id: number;
  name: string;
  nickname?: string;
  birth?: string;
  bio?: string;
  location?: string;
};

// 함수 내부에서 타입 별칭 사용 -> 외부 User와 func() 내부 User는 다른 타입 별칭
function func() {
  type User = {};
}

let user: User = {
  id: 1,
  name: "조성민",
  nickname: "크롱",
  birth: "2002-06-14",
  bio: "자기소개",
  location: "Seoul",
};

let user2: User = {
  id: 1,
  name: "조성민",
  nickname: "크롱",
  birth: "2002-06-14",
  bio: "자기소개",
  location: "Seoul",
};

// 인덱스 시그니처 : 키와 밸류의 타입이 어떤 규칙으로 이루어진 객체를 다룰 때 유용하게 사용
type CountryCode = {
  [key: string]: string;
};

let countryCodes: CountryCode = {
  Korea: "ko",
  USA: "en",
  Japan: "ja",
};

// [key: string]: "number"; 간의 Korea: "string"; 타입간의 호환성 유지해야함.
// type CountryNumberCode = {
//   [key: string]: number;
//   Korea: string;
// };

// // 인덱스 시그니처는 규칙을 위반하지 않으면 타입 에러가 생기지 않는다.
// let countryNumberCodes: CountryNumberCode = {
//   Korea: "ko", // Korea는 반드시 존재해야함.
// };
