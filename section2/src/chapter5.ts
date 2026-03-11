// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입 (ts에만 존재)
// enum 타입은 JS의 객체로 변환된다.
enum Role {
  ADMIN, // 관리자
  USER, // 일반 유저
  GUEST, // 게스트
}

enum Language {
  KOREAN = "ko",
  ENGLISH = "en",
}

const user1 = {
  name: "조성민",
  role: Role.ADMIN,
  lang: Language.KOREAN,
};

const user2 = {
  name: "홍길동",
  role: Role.USER,
  lang: Language.ENGLISH,
};

const user3 = {
  name: "아무개",
  role: Role.GUEST,
  lang: Language.KOREAN,
};

console.log(user1, user2, user3);
