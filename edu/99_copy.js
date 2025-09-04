const user = {
  name: 'Hong',
  age: 20,
  friends: {
    id: 90
  }
};

// 얉은 복사 : 최상위 계층의 요소만 독립적으로 복사,
// 그 외 계층은 참조형태로 복사(원본까지 손상)



// const shallowCopy = {...user};
// shallowCopy.age = 200;
// shallowCopy.friends.id = 100;
// shallowCopy.friends = {test: 'ttt'} // 이 경우는 최상위 계층만 변화된 경우

// console.log(user, shallowCopy);



// 딥카피 : 모든 계층의 요소를 독립적으로 복사 (보통은 잘 안 쓴다고 함)
// JSON 방식은 함수, 심볼, undefined는 복사 불가
const jsonCopy = JSON.parse(JSON.stringify(user));
jsonCopy.friends.id = 200;


// Node.js 17 버전 이상에서만 가능
const cloneCopy = structuredClone(user);
cloneCopy.friends.id = 200;

console.log(user);


// ------------------------
// Destructuring 문법
// ------------------------
const arr = ['hong', 20];

// arr[0];
// arr[1];
// 디스트럭처링 문법 (배열일 경우)
// const [name, age] = arr;
// const [name2] = arr;
// const [age2] = arr;

// console.log(age);

const user2 = {
  name: 'Hong',
  age: 20,
  friends: {
    id: 90
  }
};

const {name, age, friends} = user2;

console.log(name, friends);