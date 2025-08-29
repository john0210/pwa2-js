nowTimeIntoElement('#nowTime');

let intervalNowTime = setInterval(() => {
  const nowTime = document.querySelector('#nowTime');
  nowTime.textContent = generateNowTimeFormat();
}, 1000);

// 멈춰 버튼 처리
const btnStop = document.querySelector('#btnStop');
btnStop.addEventListener('click', () => {
  clearInterval(intervalNowTime);
  intervalNowTime = null;
});

// 재시작 버튼 처리
const btnRestart = document.querySelector('#btnRestart');
btnRestart.addEventListener('click', () => {
  nowTimeIntoElement('#nowTime');

  if(intervalNowTime === null) {
     intervalNowTime = setInterval(()=> {
    nowTimeIntoElement('#nowTime');
  }, 1000);
  } 
});

// 기록 버튼
const btnReport = document.querySelector('#btnReport');
btnReport.addEventListener('click', () => {
  const container = document.querySelector('.reportConteiner');
  const newP = document.createElement('p');
  newP.textContent = generateNowTimeFormatUntilMilliseconds();
  container.appendChild(newP); //appendChild(); 맨 마지막 요소라서 추가됨.
})

// 기록 초기화
const btnReportReset = document.querySelector('#btnReportReset');
btnReportReset.addEventListener('click', () => {
  document.querySelector('.reportConteiner').textContent = '';
})

// ----------------- 이하 함수 ----------------

/**
 * selector로 선택한 요소의 textContent에 현재시간 삽입(협업)
 * @param {string} selector 
 */
function nowTimeIntoElement(selector) {
  const element = document.querySelector(selector);
  element.textContent = generateNowTimeFormat();
}

/**
 * 현재시간을 `오전 hh:mm:SS` 형식으로 반환(협업 시 매우 중요) - 함수로 따로 뺐을 때
 * @returns {string}
 */
function generateNowTimeFormat() {
const now = new Date();
// return now.toLocaleTimeString(); ---> 간단한 메소드
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let ampm = '';
if(hours < 12) {
  ampm = '오전';
} else {
  ampm = '오후';
  hours -= 12;
}
  return `${ampm} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

}

/**
 * 현재시간을 `오전 hh:mm:SS.sss` 형식으로 반환(협업 시 매우 중요) - 함수로 따로 뺐을 때
 * @returns {string}
 */
function generateNowTimeFormatUntilMilliseconds() {
const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let milliseconds = now.getMilliseconds();
let ampm = '';
if(hours < 12) {
  ampm = '오전';
} else {
  ampm = '오후';
  hours -= 12;
}
  return `${ampm} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}