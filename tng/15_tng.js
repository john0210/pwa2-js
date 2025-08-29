
function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').textContent = timeString;
}

// 매 초마다 시계 업데이트
setInterval(updateClock, 1000);

// 페이지 로드 시에도 시계 업데이트
const TIME = updateClock();

//-------------------------------
// const btn1 = document.querySelector('#btn1');
// btn1.onclick = () => {
  
// };

// const btn2 = document.querySelector('#btn2');
// btn2.onclick = () => {

// };

const target = document.querySelector('#btn1');
target.removeEventListener(click, updateClock);


// const btn1 = document.body.querySelector('#btn1');
// btn1.addEventListener('click', (event) => {
//   event.preventDefault();
// });

// const btn2 = document.body.querySelector('#btn2');
// btn2.addEventListener('click', () => {
  
// });







