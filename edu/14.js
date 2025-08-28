// 이벤트
function test() {
  alert('테스트');
}

// 프로퍼티 리스너(Property Listener)
// 레거시코드 등 제외하고 잘 안씀
// 동일한 이벤트를 여러 번 사용 불가
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => {
  alert('버튼22222')
}

// addEventListener
// 가장 많이 사용, 최신 버전, 동시에 여러 이벤트 적용 가능
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert('버튼33333');
});
btn3.addEventListener('click', btn3Alert);

// removeEventListener() : 이벤트 제거
// btn3.removeEventListener('click', btn3Alert);

function btn3Alert(event) {
  console.log(event); 
  alert('33333');
}

window.addEventListener('scroll', () => {
  console.log('scroll test');
});


// 스타벅스 할인화면 창 뜨게 하는 것
// window.addEventListener('load', () => {
//   window.open('https://www.google.com');
// });

// ----------------------
const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('keyup', (e) => {
  console.log(e.target.value);
});


// --------------- 비밀번호 보이고 안보이고 ----------
const chkPw = document.querySelector('#seePw');

// 체크박스에 체인지 이벤트 추가
chkPw.addEventListener('change', (e) => {
  // 인풋 패스워드 접근
  const pw = document.querySelector('#pw')
  // 체크여부 확인
  if(e.target.checked) {
    // 인풋 패스워드 type속성 text로 변경
    pw.setAttribute('type', 'text');
  } else {
    // 인풋 패스워드 type속성 password로 변경
    pw.setAttribute('type', 'password');
  }
});



