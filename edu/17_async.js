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

// async/await 문법 (여러개 처리할 때 가독성이 좋아짐) --> 에이싱크 / 어웨이트 (발음)
// 프로미스 지옥을 개선하기 위해 나온 문법
// 내부적으로 Promise 객체를 사용하여 비동기 처리를 실행

async function test() {
  await pro1('A', 1500);
  await pro1('D', 1000);
  await pro1('C', 500);
}

// test();