// Callback Hell

setTimeout(() => {
  console.log('A');

  setTimeout(() => {
  console.log('B');

    setTimeout(() => {
    console.log('C');
    }, 1000);
  }, 2000);
}, 3000);

// Promise 객체
// 비동기 처리의 결과를 제공하겠다는 약속을 반환
// 단, 비동기 처리가 끝날 때 까지 결과를 기다리는 것은 아니다. (비동기가 동기가 되는 건 아님)
function pro1(str, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(str === 'A' || str === 'B' || str === 'C') {
        console.log(str);
        return resolve();
      } else {
        return reject();
      }
    }, ms);
  });
}
// 체이닝 기법
pro1('A', 3000)
.then(() => {
  console.log('Then');
}) // 작업이 성공했을 때, then() 실행
.catch(() => {
  console.log('Catch');
})  // 작업이 실패했을 때, catch() 실행
.finally(() => {
  console.log('Finally');
}); // 성공, 실패 여부 상관 없이 무조건 실행 (마지막에 작성)


pro1('A', 3000)
.then(() => {
  pro1('B', 2000)
  .then(() => {
    pro1('C', 1000)
    .then()
    .catch();
  })
  .catch();
}) 
.catch();

// 선생님께서 만드신 축약 식
// pro1('A', 3000)
// .then(() => {
//   return pro1('B', 2000);
// })
// .then(() => {
//   return pro1('C', 1000);
// })
// .catch();

