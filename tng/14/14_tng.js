// 1. 글을 입력하는 란이 있음
// 2. 작성 버튼을 누르면 아래와 같이 동작
// 2-1. 글 입력란이 비워져 있다면 아무 동작 안함
// 2-2. 글 입력란이 작성되어 있다면 해당 글을 기반으로 목록 추가

const CONTAINER = document.querySelector('#container');
const DIVBOX = document.querySelector('#div-box1');
const BTNID = document.querySelector('#btnId');

BTNID.addEventListener('click', (e) => {
  
  const BTNVALUE = document.querySelector('#textBtn').value;

  if(BTNVALUE.length === 0) {
    preventDefault();
    
  } else if(BTNVALUE.length >= 1) {
   const CONTAINERDIVBOX2 = document.querySelector('#container'); // 부모 요소 접근
   const DIVDIV = document.createElement('div'); // 요소 생성
   DIVDIV.classList.add('div-box2');
    // DIVDIV.style.border = '1px solid #000';
    // DIVDIV.style.display = 'block';   
    // DIVDIV.style.position = 'relative';
    // DIVDIV.style.bottom = '10px';
  
    DIVDIV.innerHTML = BTNVALUE;
  
  //  const FORMBOX = document.getElementById('form-box');
   

   const DIVBOX = document.querySelector('.div-box1');
   
   const TARGET = document.querySelector('.div-box3'); // 타겟 요소
   CONTAINER.insertBefore(DIVDIV, TARGET);
  };
});
