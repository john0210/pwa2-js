// Math 객체 (자바스크립트 내장 객체)

// 올림 / 반올림 / 버림
// ceil(arg), round(arg), floor(arg)
// 포인트 고객 입장에서 보통 ceil, 반대로 고객이 돈을 내야하면 floor

let double = 0.9;
Math.ceil(double);
Math.round(double);
Math.floor(double);

// random() : 0초과 1미만의 램덤한 수를 반환
let randomDouble = Math.random();
// 1~10 난수
console.log(Math.ceil(randomDouble * 10));


// 0. 저장용 배열 만들기(length: 11 // , 각 요소의 값은 0)
const arrSaveCnt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//1. 루프 100만번 돌리기
for(let i = 0; i < 1_000_000; i++) {
// 1-1. 랜덤수 획득 `Math.ceil(randomDouble * 10)`
  const randomNum = Math.ceil(Math.random() * 10);
  // 1-2. 저장용 배열에 나온 숫자를 카운트해서 저장
  arrSaveCnt[randomNum]++;
}


// 2. 저장용 배열 확인
console.log(arrSaveCnt);


// abs(arg) : 절대값을 반환하는 메소드 (은행 등에서 자주 사용됨)
Math.abs(1);
Math.abs(-1);

